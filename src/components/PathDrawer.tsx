import { useState, useRef, useEffect, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

interface PathDrawerProps {
  initialPoints?: Point[];
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

export default function PathDrawer({ initialPoints }: PathDrawerProps) {
  const [points, setPoints] = useState<Point[]>(initialPoints ?? []);
  const [docHeight, setDocHeight] = useState(1);
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(true);
  const [dragging, setDragging] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
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

  // Convert page coordinates to point format
  const toPoint = useCallback(
    (clientX: number, clientY: number): Point => ({
      x: (clientX / window.innerWidth) * 100,
      y: ((clientY + window.scrollY) / docHeight) * 100,
    }),
    [docHeight]
  );

  // Convert point to pixel position on page
  const toPixel = useCallback(
    (p: Point) => ({
      px: (p.x / 100) * window.innerWidth,
      py: (p.y / 100) * docHeight,
    }),
    [docHeight]
  );

  // Find if click is near an existing point (within 20px)
  const findNearPoint = useCallback(
    (clientX: number, clientY: number): number | null => {
      const pageY = clientY + window.scrollY;
      for (let i = 0; i < points.length; i++) {
        const { px, py } = toPixel(points[i]);
        const dist = Math.sqrt((clientX - px) ** 2 + (pageY - py) ** 2);
        if (dist < 20) return i;
      }
      return null;
    },
    [points, toPixel]
  );

  // Find nearest segment to insert a new point between existing ones
  const findInsertIndex = useCallback(
    (p: Point): number => {
      if (points.length < 2) return points.length;
      // Insert based on y position (path goes top to bottom)
      for (let i = 0; i < points.length; i++) {
        if (p.y < points[i].y) return i;
      }
      return points.length;
    },
    [points]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!active) return;
      if ((e.target as HTMLElement).closest('.path-toolbar')) return;

      const nearIdx = findNearPoint(e.clientX, e.clientY);

      if (nearIdx !== null) {
        // Start dragging existing point
        e.preventDefault();
        setDragging(nearIdx);
        setSelected(nearIdx);
        setCopied(false);
      }
    },
    [active, findNearPoint]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging === null) return;
      e.preventDefault();
      const p = toPoint(e.clientX, e.clientY);
      setPoints((prev) => {
        const next = [...prev];
        next[dragging] = p;
        return next;
      });
      setCopied(false);
    },
    [dragging, toPoint]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(null);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (!active) return;
      if ((e.target as HTMLElement).closest('.path-toolbar')) return;

      // Don't add point if we were dragging
      if (dragging !== null) return;

      const nearIdx = findNearPoint(e.clientX, e.clientY);
      if (nearIdx !== null) {
        // Clicking on existing point — just select it
        setSelected(nearIdx);
        return;
      }

      // Click on empty space — insert new point at correct y position
      const p = toPoint(e.clientX, e.clientY);
      const insertIdx = findInsertIndex(p);
      setPoints((prev) => {
        const next = [...prev];
        next.splice(insertIdx, 0, p);
        return next;
      });
      setSelected(insertIdx);
      setCopied(false);
    },
    [active, dragging, findNearPoint, toPoint, findInsertIndex]
  );

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const nearIdx = findNearPoint(e.clientX, e.clientY);
      if (nearIdx !== null) {
        // Right-click on point = delete it
        setPoints((prev) => prev.filter((_, i) => i !== nearIdx));
        setSelected(null);
        setCopied(false);
      }
    },
    [findNearPoint]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selected === null) return;
      if (e.key === 'Delete' || e.key === 'Backspace') {
        setPoints((prev) => prev.filter((_, i) => i !== selected));
        setSelected(null);
        setCopied(false);
      }
    },
    [selected]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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
        cursor: dragging !== null ? 'grabbing' : 'crosshair',
      }}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
            <circle
              cx={p.x}
              cy={p.y}
              r={selected === i ? 0.9 : 0.6}
              fill={selected === i ? '#ff6b6b' : 'rgba(46, 233, 168, 0.9)'}
              stroke="white"
              strokeWidth="0.15"
              style={{ cursor: 'grab' }}
            />
            <text x={p.x + 1} y={p.y + 0.4} fill="white" fontSize="1" fontFamily="monospace">
              {i + 1}
            </text>
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
          flexWrap: 'wrap',
          maxWidth: '90vw',
        }}
      >
        <span
          style={{
            color: '#2ee9a8',
            fontSize: 13,
            fontFamily: 'monospace',
            marginRight: 8,
          }}
        >
          Path Editor ({points.length} pts)
        </span>
        {selected !== null && (
          <button
            onClick={() => {
              setPoints((prev) => prev.filter((_, i) => i !== selected));
              setSelected(null);
              setCopied(false);
            }}
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              background: 'rgba(255, 100, 100, 0.2)',
              color: '#ff6b6b',
              border: '1px solid rgba(255, 100, 100, 0.4)',
              cursor: 'pointer',
              fontSize: 12,
            }}
          >
            Delete #{selected + 1}
          </button>
        )}
        <button
          onClick={copyPath}
          disabled={points.length < 2}
          style={{
            padding: '6px 14px',
            borderRadius: 8,
            background: copied ? 'rgba(46, 233, 168, 0.3)' : 'rgba(46, 233, 168, 0.15)',
            color: '#2ee9a8',
            border: '1px solid rgba(46, 233, 168, 0.4)',
            cursor: points.length < 2 ? 'not-allowed' : 'pointer',
            fontSize: 12,
            opacity: points.length < 2 ? 0.4 : 1,
          }}
        >
          {copied ? 'Copied!' : 'Copy Path'}
        </button>
        <button
          onClick={done}
          disabled={points.length < 2}
          style={{
            padding: '6px 14px',
            borderRadius: 8,
            background: '#2ee9a8',
            color: '#050B14',
            border: 'none',
            cursor: points.length < 2 ? 'not-allowed' : 'pointer',
            fontSize: 12,
            fontWeight: 600,
            opacity: points.length < 2 ? 0.4 : 1,
          }}
        >
          Done
        </button>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, marginLeft: 8 }}>
          Drag to move · Click empty to add · Right-click to delete
        </span>
      </div>
    </div>
  );
}
