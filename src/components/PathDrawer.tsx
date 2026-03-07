import { useState, useRef, useEffect, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

function catmullRomToBezier(points: Point[]): string {
  if (points.length < 2) return '';
  if (points.length === 2) {
    return `M${points[0].x},${points[0].y} L${points[1].x},${points[1].y}`;
  }

  let d = `M${points[0].x},${points[0].y}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(i - 1, 0)];
    const p1 = points[i];
    const p2 = points[Math.min(i + 1, points.length - 1)];
    const p3 = points[Math.min(i + 2, points.length - 1)];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }

  return d;
}

export default function PathDrawer() {
  const [points, setPoints] = useState<Point[]>([]);
  const [docHeight, setDocHeight] = useState(1);
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(true);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      setDocHeight(document.documentElement.scrollHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener('resize', updateHeight);
      observer.disconnect();
    };
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!active) return;
      if ((e.target as HTMLElement).closest('.path-toolbar')) return;

      const x = (e.clientX / window.innerWidth) * 100;
      const y = ((e.clientY + window.scrollY) / docHeight) * 100;
      setPoints((prev) => [...prev, { x, y }]);
      setCopied(false);
    },
    [active, docHeight]
  );

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setPoints((prev) => prev.slice(0, -1));
  }, []);

  const undo = () => {
    setPoints((prev) => prev.slice(0, -1));
    setCopied(false);
  };

  const clear = () => {
    setPoints([]);
    setCopied(false);
  };

  const copyPath = () => {
    const output = points.map((p) => ({
      x: Math.round(p.x * 10) / 10,
      y: Math.round(p.y * 100) / 100,
    }));
    const json = JSON.stringify(output, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      setCopied(true);
      console.log('Path coordinates copied:', json);
    });
  };

  const done = () => {
    copyPath();
    setActive(false);
  };

  if (!active) return null;

  const viewBoxHeight = (docHeight / window.innerWidth) * 100;
  const svgPoints = points.map((p) => ({
    x: p.x,
    y: (p.y / 100) * viewBoxHeight,
  }));
  const pathD = catmullRomToBezier(svgPoints);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: docHeight,
        zIndex: 9999,
        cursor: 'crosshair',
      }}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <svg
        ref={svgRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        viewBox={`0 0 100 ${viewBoxHeight}`}
        preserveAspectRatio="none"
      >
        {pathD && (
          <path
            d={pathD}
            fill="none"
            stroke="rgba(46, 233, 168, 0.8)"
            strokeWidth="0.3"
            strokeDasharray="1 0.5"
          />
        )}
        {svgPoints.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="0.6" fill="rgba(46, 233, 168, 0.9)" stroke="white" strokeWidth="0.15" />
            <text x={p.x + 1} y={p.y + 0.4} fill="white" fontSize="1" fontFamily="monospace">{i + 1}</text>
          </g>
        ))}
      </svg>

      <div
        className="path-toolbar"
        style={{
          position: 'fixed',
          top: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10000,
          display: 'flex',
          gap: 8,
          padding: '12px 20px',
          borderRadius: 12,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(46, 233, 168, 0.3)',
          alignItems: 'center',
          pointerEvents: 'auto',
        }}
      >
        <span style={{ color: '#2ee9a8', fontSize: 13, fontFamily: 'monospace', marginRight: 8 }}>
          Path Drawer ({points.length} points)
        </span>
        <button onClick={undo} disabled={points.length === 0}
          style={{ padding: '6px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', cursor: points.length === 0 ? 'not-allowed' : 'pointer', fontSize: 12, opacity: points.length === 0 ? 0.4 : 1 }}>
          Undo
        </button>
        <button onClick={clear} disabled={points.length === 0}
          style={{ padding: '6px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', cursor: points.length === 0 ? 'not-allowed' : 'pointer', fontSize: 12, opacity: points.length === 0 ? 0.4 : 1 }}>
          Clear
        </button>
        <button onClick={copyPath} disabled={points.length < 2}
          style={{ padding: '6px 14px', borderRadius: 8, background: copied ? 'rgba(46, 233, 168, 0.3)' : 'rgba(46, 233, 168, 0.15)', color: '#2ee9a8', border: '1px solid rgba(46, 233, 168, 0.4)', cursor: points.length < 2 ? 'not-allowed' : 'pointer', fontSize: 12, opacity: points.length < 2 ? 0.4 : 1 }}>
          {copied ? 'Copied!' : 'Copy Path'}
        </button>
        <button onClick={done} disabled={points.length < 2}
          style={{ padding: '6px 14px', borderRadius: 8, background: '#2ee9a8', color: '#050B14', border: 'none', cursor: points.length < 2 ? 'not-allowed' : 'pointer', fontSize: 12, fontWeight: 600, opacity: points.length < 2 ? 0.4 : 1 }}>
          Done
        </button>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginLeft: 8 }}>
          Click to add · Right-click to undo
        </span>
      </div>
    </div>
  );
}
