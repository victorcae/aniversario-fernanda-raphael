type Props = { className?: string };

const commonDefs = (
  <defs>
    <filter id="lm-bleed">
      <feTurbulence baseFrequency="0.02" numOctaves="3" seed="5" />
      <feDisplacementMap in="SourceGraphic" scale="6" />
    </filter>
    <linearGradient id="lm-blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#94ADC2" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#5B7A94" stopOpacity="0.9" />
    </linearGradient>
    <linearGradient id="lm-warm" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#D9C7A8" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#A88C68" stopOpacity="0.9" />
    </linearGradient>
    <linearGradient id="lm-green" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#B4C18A" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#6B7B45" stopOpacity="0.9" />
    </linearGradient>
    <linearGradient id="lm-yellow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#E8C878" stopOpacity="0.8" />
      <stop offset="100%" stopColor="#C29A3E" stopOpacity="0.95" />
    </linearGradient>
  </defs>
);

export function EmpireStateCard({ className }: Props) {
  return (
    <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg">
      {commonDefs}
      <g filter="url(#lm-bleed)">
        <line x1="150" y1="80" x2="150" y2="20" stroke="#3A4A2E" strokeWidth="1.5" opacity="0.7" />
        <polygon points="142,90 158,90 160,78 140,78" fill="url(#lm-blue)" />
        <polygon points="138,105 162,105 164,90 136,90" fill="url(#lm-blue)" />
        <rect x="132" y="105" width="36" height="30" fill="url(#lm-blue)" />
        <polygon points="125,145 175,145 172,135 128,135" fill="url(#lm-blue)" />
        <rect x="122" y="145" width="56" height="45" fill="url(#lm-blue)" />
        <polygon points="108,205 192,205 188,190 112,190" fill="url(#lm-blue)" />
        <rect x="105" y="205" width="90" height="185" fill="url(#lm-blue)" />

        <g opacity="0.4" fill="#3A4A2E">
          {Array.from({ length: 40 }).map((_, i) => (
            <circle
              key={i}
              cx={120 + (i % 5) * 15}
              cy={230 + Math.floor(i / 5) * 22}
              r="1.2"
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

export function BrooklynBridgeCard({ className }: Props) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {commonDefs}
      <g filter="url(#lm-bleed)" opacity="0.9">
        {/* Towers */}
        <rect x="90" y="80" width="35" height="180" fill="url(#lm-warm)" />
        <polygon points="90,80 125,80 117,60 98,60" fill="url(#lm-warm)" />
        <rect x="275" y="80" width="35" height="180" fill="url(#lm-warm)" />
        <polygon points="275,80 310,80 302,60 283,60" fill="url(#lm-warm)" />

        {/* Arches */}
        <path
          d="M 95 130 Q 107 110 120 130"
          stroke="#8B7B65"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 95 170 Q 107 150 120 170"
          stroke="#8B7B65"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 280 130 Q 292 110 305 130"
          stroke="#8B7B65"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 280 170 Q 292 150 305 170"
          stroke="#8B7B65"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />

        {/* Cables */}
        <path
          d="M 108 80 Q 200 180 292 80"
          stroke="#5A6B3E"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 108 85 Q 200 195 292 85"
          stroke="#5A6B3E"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />

        {/* Vertical cables */}
        {Array.from({ length: 12 }).map((_, i) => {
          const x = 115 + i * 15;
          const t = i / 11;
          const y = 80 + Math.sin(t * Math.PI) * 90;
          return <line key={i} x1={x} y1={y} x2={x} y2="220" stroke="#5A6B3E" strokeWidth="0.5" opacity="0.4" />;
        })}

        {/* Road deck */}
        <rect x="40" y="220" width="320" height="8" fill="#8B7B65" opacity="0.7" />
      </g>
      {/* Water */}
      <rect x="0" y="240" width="400" height="60" fill="#94ADC2" opacity="0.35" filter="url(#lm-bleed)" />
    </svg>
  );
}

export function CentralParkCard({ className }: Props) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {commonDefs}
      <g filter="url(#lm-bleed)" opacity="0.9">
        {/* Distant skyline */}
        <rect x="30" y="80" width="35" height="120" fill="#94ADC2" opacity="0.5" />
        <rect x="70" y="60" width="40" height="140" fill="#94ADC2" opacity="0.55" />
        <rect x="115" y="90" width="30" height="110" fill="#94ADC2" opacity="0.5" />
        <rect x="260" y="75" width="40" height="125" fill="#94ADC2" opacity="0.55" />
        <rect x="305" y="55" width="35" height="145" fill="#94ADC2" opacity="0.5" />
        <rect x="345" y="85" width="30" height="115" fill="#94ADC2" opacity="0.5" />

        {/* Trees */}
        <circle cx="80" cy="220" r="35" fill="url(#lm-green)" />
        <circle cx="140" cy="230" r="40" fill="url(#lm-green)" />
        <circle cx="210" cy="215" r="45" fill="url(#lm-green)" />
        <circle cx="280" cy="225" r="38" fill="url(#lm-green)" />
        <circle cx="340" cy="220" r="32" fill="url(#lm-green)" />

        {/* Lake */}
        <ellipse cx="200" cy="260" rx="180" ry="20" fill="#94ADC2" opacity="0.45" />
      </g>
    </svg>
  );
}

export function TaxiCard({ className }: Props) {
  return (
    <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {commonDefs}
      <g filter="url(#lm-bleed)">
        {/* Street wash */}
        <rect x="0" y="220" width="400" height="80" fill="#8B7B65" opacity="0.3" />

        {/* Taxi body */}
        <path
          d="M 80 200 L 100 150 L 300 150 L 320 200 Z"
          fill="url(#lm-yellow)"
        />
        <rect x="80" y="200" width="240" height="40" fill="url(#lm-yellow)" />

        {/* Windows */}
        <path
          d="M 115 155 L 125 180 L 195 180 L 195 155 Z"
          fill="#D8E4EC"
          opacity="0.7"
        />
        <path
          d="M 205 155 L 205 180 L 275 180 L 285 155 Z"
          fill="#D8E4EC"
          opacity="0.7"
        />

        {/* TAXI text band */}
        <rect x="80" y="205" width="240" height="15" fill="#3A4A2E" opacity="0.3" />

        {/* Wheels */}
        <circle cx="130" cy="245" r="20" fill="#3A4A2E" />
        <circle cx="130" cy="245" r="10" fill="#8B7B65" />
        <circle cx="270" cy="245" r="20" fill="#3A4A2E" />
        <circle cx="270" cy="245" r="10" fill="#8B7B65" />

        {/* Headlight */}
        <circle cx="315" cy="195" r="5" fill="#FBF9F4" opacity="0.8" />
      </g>
    </svg>
  );
}

export function StatueOfLibertyCard({ className }: Props) {
  return (
    <svg viewBox="0 0 300 400" className={className} xmlns="http://www.w3.org/2000/svg">
      {commonDefs}
      <g filter="url(#lm-bleed)" opacity="0.9">
        {/* Pedestal */}
        <rect x="110" y="280" width="80" height="100" fill="url(#lm-warm)" />
        <rect x="120" y="260" width="60" height="25" fill="url(#lm-warm)" opacity="0.9" />

        {/* Body robe */}
        <path
          d="M 130 260 L 125 180 Q 150 175 175 180 L 170 260 Z"
          fill="url(#lm-green)"
        />

        {/* Head */}
        <circle cx="150" cy="155" r="15" fill="url(#lm-green)" />

        {/* Crown */}
        <g fill="url(#lm-green)">
          <polygon points="138,142 142,128 146,142" />
          <polygon points="146,142 150,125 154,142" />
          <polygon points="154,142 158,128 162,142" />
        </g>

        {/* Torch arm */}
        <path d="M 165 180 L 185 140 L 190 115" stroke="url(#lm-green)" strokeWidth="6" fill="none" />
        <circle cx="191" cy="110" r="6" fill="#E8C878" opacity="0.9" />
        <circle cx="191" cy="108" r="8" fill="#E8C878" opacity="0.5" />

        {/* Tablet arm */}
        <rect x="110" y="190" width="15" height="25" fill="url(#lm-green)" transform="rotate(-15 117 200)" />

        {/* Water */}
        <rect x="0" y="380" width="300" height="20" fill="#94ADC2" opacity="0.45" />
      </g>
    </svg>
  );
}
