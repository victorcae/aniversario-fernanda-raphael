type Props = { className?: string };

export function LeafSprig({ className }: Props) {
  return (
    <svg viewBox="0 0 100 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="leaf-bleed">
          <feTurbulence baseFrequency="0.04" numOctaves="2" seed="5" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
        <linearGradient id="leaf-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8A9A5F" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4A5832" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <g filter="url(#leaf-bleed)">
        <path
          d="M 50 10 Q 52 60 50 120 Q 48 170 50 195"
          stroke="#5A6B3E"
          strokeWidth="1.2"
          fill="none"
          opacity="0.7"
        />
        {[20, 40, 60, 80, 100, 120, 140, 160].map((y, i) => {
          const side = i % 2 === 0 ? 1 : -1;
          return (
            <g key={y}>
              <path
                d={`M 50 ${y} Q ${50 + side * 15} ${y - 5} ${50 + side * 28} ${y - 2}`}
                stroke="#5A6B3E"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
              <ellipse
                cx={50 + side * 20}
                cy={y - 2}
                rx="12"
                ry="5"
                fill="url(#leaf-grad)"
                transform={`rotate(${side * -20} ${50 + side * 20} ${y - 2})`}
                opacity="0.85"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function OliveBranch({ className }: Props) {
  return (
    <svg viewBox="0 0 300 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="olive-bleed">
          <feTurbulence baseFrequency="0.04" numOctaves="2" seed="9" />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>
      <g filter="url(#olive-bleed)" opacity="0.85">
        <path
          d="M 10 50 Q 100 45 200 50 Q 250 52 290 50"
          stroke="#5A6B3E"
          strokeWidth="1.2"
          fill="none"
        />
        {[40, 70, 100, 130, 160, 190, 220, 250].map((x, i) => {
          const side = i % 2 === 0 ? -1 : 1;
          return (
            <ellipse
              key={x}
              cx={x}
              cy={50 + side * 12}
              rx="14"
              ry="5"
              fill="#8A9A5F"
              opacity="0.7"
              transform={`rotate(${side * 15} ${x} ${50 + side * 12})`}
            />
          );
        })}
      </g>
    </svg>
  );
}
