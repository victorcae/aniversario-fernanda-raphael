type Props = { className?: string };

/**
 * Hand-drawn brush-stroke frame matching the reference:
 * double rectangle + tick marks on all four sides.
 * viewBox is portrait (700 × 900) so the frame never looks stretched
 * when rendered inside a portrait card.
 */
export function InkFrame({ className }: Props) {
  const W = 700;
  const H = 900;
  const outer = { x: 28, y: 28, w: W - 56, h: H - 56 };
  const inner = { x: 50, y: 50, w: W - 100, h: H - 100 };
  const ink = "#2E3A8A";
  const tickLen = 20;
  const tickGap = 30;

  // top/bottom tick x positions
  const topX: number[] = [];
  for (let x = outer.x + 20; x < outer.x + outer.w - 20; x += tickGap) topX.push(x);

  // left/right tick y positions
  const sideY: number[] = [];
  for (let y = outer.y + 20; y < outer.y + outer.h - 20; y += tickGap) sideY.push(y);

  const jitter = (v: number, seed: number) => v + Math.sin(seed * 1.7) * 2.2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer rectangle — slightly wobbly */}
      <rect
        x={outer.x} y={outer.y}
        width={outer.w} height={outer.h}
        fill="none"
        stroke={ink}
        strokeWidth="2.2"
        strokeLinejoin="round"
        opacity="0.9"
        rx="2"
      />
      {/* Inner rectangle */}
      <rect
        x={inner.x} y={inner.y}
        width={inner.w} height={inner.h}
        fill="none"
        stroke={ink}
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.7"
        rx="1"
      />

      {/* Top ticks */}
      {topX.map((x, i) => (
        <line
          key={`t${i}`}
          x1={jitter(x, i)} y1={outer.y - 4 + (i % 3)}
          x2={jitter(x + 0.5, i + 2)} y2={outer.y - 4 - tickLen + (i % 4)}
          stroke={ink} strokeWidth="2.6" strokeLinecap="round" opacity="0.88"
        />
      ))}
      {/* Bottom ticks */}
      {topX.map((x, i) => (
        <line
          key={`b${i}`}
          x1={jitter(x, i + 5)} y1={outer.y + outer.h + 4 - (i % 3)}
          x2={jitter(x + 0.5, i + 7)} y2={outer.y + outer.h + 4 + tickLen - (i % 4)}
          stroke={ink} strokeWidth="2.6" strokeLinecap="round" opacity="0.88"
        />
      ))}
      {/* Left ticks */}
      {sideY.map((y, i) => (
        <line
          key={`l${i}`}
          x1={outer.x - 4 + (i % 3)} y1={jitter(y, i + 9)}
          x2={outer.x - 4 - tickLen + (i % 4)} y2={jitter(y + 0.5, i + 11)}
          stroke={ink} strokeWidth="2.6" strokeLinecap="round" opacity="0.88"
        />
      ))}
      {/* Right ticks */}
      {sideY.map((y, i) => (
        <line
          key={`r${i}`}
          x1={outer.x + outer.w + 4 - (i % 3)} y1={jitter(y, i + 13)}
          x2={outer.x + outer.w + 4 + tickLen - (i % 4)} y2={jitter(y + 0.5, i + 15)}
          stroke={ink} strokeWidth="2.6" strokeLinecap="round" opacity="0.88"
        />
      ))}
    </svg>
  );
}
