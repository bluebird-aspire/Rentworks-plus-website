import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../ThemeContext';
import carDark from '../assets/car-dark.gif';
import carLight from '../assets/car-light.gif';

// User-drawn path: x = vw%, y = % of total document height
const PATH_POINTS = [
  { x: 61.8, y: 2.67 }, { x: 75.2, y: 3.18 }, { x: 82.4, y: 4.12 },
  { x: 84.6, y: 5.86 }, { x: 84.8, y: 7.33 }, { x: 94.5, y: 8.02 },
  { x: 96.9, y: 9.18 }, { x: 89.9, y: 11.22 }, { x: 97.1, y: 16.05 },
  { x: 77.6, y: 21.21 }, { x: 98, y: 24.6 }, { x: 82.7, y: 30.87 },
  { x: 97.6, y: 35.57 }, { x: 95.5, y: 39.75 }, { x: 79.7, y: 43.57 },
  { x: 96, y: 49.25 }, { x: 93.1, y: 54.76 }, { x: 90.6, y: 58.43 },
  { x: 96.6, y: 62.33 }, { x: 89.9, y: 68.94 }, { x: 98.8, y: 74.98 },
  { x: 87.8, y: 82.79 }, { x: 98.4, y: 88.77 }, { x: 94.3, y: 94.02 },
  { x: 74.9, y: 97.18 },
];

// Normalize y range for progress mapping
const Y_MIN = PATH_POINTS[0].y;
const Y_MAX = PATH_POINTS[PATH_POINTS.length - 1].y;
const Y_RANGE = Y_MAX - Y_MIN;

function interpolatePath(progress: number) {
  const targetY = Y_MIN + progress * Y_RANGE;

  let idx = 0;
  for (let i = 0; i < PATH_POINTS.length - 1; i++) {
    if (PATH_POINTS[i + 1].y >= targetY) {
      idx = i;
      break;
    }
    idx = i;
  }

  const p1 = PATH_POINTS[idx];
  const p2 = PATH_POINTS[Math.min(idx + 1, PATH_POINTS.length - 1)];
  const segmentRange = p2.y - p1.y;
  const t = segmentRange > 0 ? (targetY - p1.y) / segmentRange : 0;

  const p0 = PATH_POINTS[Math.max(idx - 1, 0)];
  const p3 = PATH_POINTS[Math.min(idx + 2, PATH_POINTS.length - 1)];

  const t2 = t * t;
  const t3 = t2 * t;

  const x = 0.5 * (2 * p1.x + (-p0.x + p2.x) * t +
    (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
    (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);

  const y = 0.5 * (2 * p1.y + (-p0.y + p2.y) * t +
    (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
    (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);

  return { x, y };
}

// Create a frozen (static) frame from a GIF by drawing it to a canvas
function freezeGif(src: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.width;
      c.height = img.height;
      c.getContext('2d')!.drawImage(img, 0, 0);
      resolve(c.toDataURL());
    };
    img.src = src;
  });
}

export default function ScrollCar() {
  const { theme } = useTheme();
  const carRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const prevX = useRef(PATH_POINTS[0].x);
  const facingRight = useRef(true);
  const frozenDark = useRef('');
  const frozenLight = useRef('');
  const scrollTimer = useRef(0);
  const themeRef = useRef(theme);

  // Keep theme ref in sync
  themeRef.current = theme;

  // Create frozen frames on mount
  useEffect(() => {
    freezeGif(carDark).then(d => { frozenDark.current = d; });
    freezeGif(carLight).then(d => {
      frozenLight.current = d;
      // Start with frozen frame (car is stationary at page load)
      if (imgRef.current && frozenLight.current) {
        imgRef.current.src = themeRef.current === 'dark' ? frozenDark.current : frozenLight.current;
      }
    });
  }, []);

  // When theme changes, update the displayed image
  useEffect(() => {
    if (!imgRef.current) return;
    // If currently showing a frozen frame, update to correct theme's frozen frame
    if (imgRef.current.src.startsWith('data:')) {
      const frozen = theme === 'dark' ? frozenDark.current : frozenLight.current;
      if (frozen) imgRef.current.src = frozen;
    } else {
      imgRef.current.src = theme === 'dark' ? carDark : carLight;
    }
  }, [theme]);

  useEffect(() => {
    const car = carRef.current;
    if (!car) return;

    // Cache document height — only update on resize to avoid per-frame reflow
    let cachedDocHeight = document.documentElement.scrollHeight;
    const onResize = () => { cachedDocHeight = document.documentElement.scrollHeight; };
    window.addEventListener('resize', onResize);

    // Set correct initial position now that page is laid out
    const vwInit = window.innerWidth / 100;
    const xInit = PATH_POINTS[0].x * vwInit;
    const yInit = (PATH_POINTS[0].y / 100) * cachedDocHeight - window.scrollY;
    car.style.transform = `translate(${xInit - 28}px, ${yInit - 28}px)`;

    const showGif = () => {
      if (imgRef.current && imgRef.current.src.startsWith('data:')) {
        imgRef.current.src = themeRef.current === 'dark' ? carDark : carLight;
      }
    };

    const showFrozen = () => {
      if (!imgRef.current) return;
      const frozen = themeRef.current === 'dark' ? frozenDark.current : frozenLight.current;
      if (frozen) imgRef.current.src = frozen;
    };

    const trigger = gsap.to({}, {
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        onUpdate: (self) => {
          const { x, y } = interpolatePath(self.progress);

          // Determine flip direction (car faces right by default)
          const dx = x - prevX.current;
          if (dx < -0.5) facingRight.current = false;
          else if (dx > 0.5) facingRight.current = true;
          prevX.current = x;

          // Convert y from page% to pixel offset from viewport top
          const pageYPx = (y / 100) * cachedDocHeight;
          const viewportYPx = pageYPx - window.scrollY;

          // Use transform only (GPU-accelerated, no layout thrashing)
          const vwToPx = window.innerWidth / 100;
          const xPx = x * vwToPx;
          const flipScale = facingRight.current ? 1 : -1;
          car.style.transform = `translate(${xPx - 28}px, ${viewportYPx - 28}px) scaleX(${flipScale})`;

          // GIF freeze/unfreeze: show animated GIF while scrolling, freeze when stopped
          if (self.progress <= 0.001 || self.progress >= 0.999) {
            // At start/end — always frozen
            showFrozen();
          } else {
            // Actively scrolling — show GIF
            showGif();
            // Debounce: freeze after 150ms of no scroll updates
            clearTimeout(scrollTimer.current);
            scrollTimer.current = window.setTimeout(showFrozen, 150);
          }
        },
      },
    });

    return () => {
      clearTimeout(scrollTimer.current);
      window.removeEventListener('resize', onResize);
      trigger.scrollTrigger?.kill();
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={carRef}
      className="fixed pointer-events-none hidden lg:block"
      style={{
        zIndex: 40,
        top: 0,
        left: 0,
        willChange: 'transform',
        transform: 'translate(-100px, -100px)',
      }}
    >
      <img
        ref={imgRef}
        src={theme === 'dark' ? carDark : carLight}
        alt=""
        width={56}
        height={56}
        style={{ opacity: 1 }}
      />
    </div>
  );
}
