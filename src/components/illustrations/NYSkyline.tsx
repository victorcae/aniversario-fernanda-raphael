type Props = {
  className?: string;
};

export function NYSkyline({ className }: Props) {
  return (
    <svg
      viewBox="0 0 1200 400"
      className={className}
      preserveAspectRatio="xMidYEnd slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEF4F7" stopOpacity="0" />
          <stop offset="100%" stopColor="#B8C8D8" stopOpacity="0.4" />
        </linearGradient>

        <linearGradient id="building-blue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#94ADC2" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#5B7A94" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="building-warm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9C7A8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#A88C68" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="building-muted" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C5B8A8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B7B65" stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id="building-empire" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8B8C8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#5B7080" stopOpacity="0.9" />
        </linearGradient>

        <filter id="sky-watercolor">
          <feTurbulence baseFrequency="0.02" numOctaves="3" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>
      </defs>

      {/* Sky wash */}
      <rect width="1200" height="400" fill="url(#sky-bg)" />

      {/* Background buildings - distant, muted */}
      <g opacity="0.55" filter="url(#sky-watercolor)">
        <rect x="20" y="220" width="60" height="180" fill="url(#building-muted)" />
        <rect x="85" y="250" width="45" height="150" fill="url(#building-muted)" />
        <rect x="135" y="200" width="70" height="200" fill="url(#building-muted)" />
        <rect x="210" y="240" width="55" height="160" fill="url(#building-muted)" />
        <rect x="1020" y="230" width="55" height="170" fill="url(#building-muted)" />
        <rect x="1080" y="250" width="45" height="150" fill="url(#building-muted)" />
        <rect x="1130" y="210" width="60" height="190" fill="url(#building-muted)" />
      </g>

      {/* Mid buildings */}
      <g opacity="0.75" filter="url(#sky-watercolor)">
        <rect x="270" y="180" width="50" height="220" fill="url(#building-warm)" />
        <rect x="325" y="210" width="55" height="190" fill="url(#building-blue)" />
        <rect x="385" y="170" width="48" height="230" fill="url(#building-warm)" />
        <rect x="438" y="220" width="42" height="180" fill="url(#building-muted)" />

        <rect x="760" y="185" width="55" height="215" fill="url(#building-warm)" />
        <rect x="820" y="205" width="48" height="195" fill="url(#building-blue)" />
        <rect x="873" y="175" width="52" height="225" fill="url(#building-warm)" />
        <rect x="930" y="215" width="45" height="185" fill="url(#building-muted)" />
        <rect x="980" y="195" width="40" height="205" fill="url(#building-blue)" />
      </g>

      {/* Foreground iconic buildings */}
      <g filter="url(#sky-watercolor)">
        {/* Chrysler Building-esque */}
        <polygon
          points="500,180 515,180 517,160 520,140 522,120 520,100 517,90 515,85 513,90 510,100 508,120 506,140 504,160 502,180"
          fill="url(#building-blue)"
          opacity="0.9"
        />
        <rect x="488" y="180" width="40" height="220" fill="url(#building-blue)" opacity="0.9" />

        {/* Small spire building */}
        <polygon
          points="540,190 558,190 549,150"
          fill="url(#building-warm)"
          opacity="0.88"
        />
        <rect x="535" y="190" width="30" height="210" fill="url(#building-warm)" opacity="0.88" />

        {/* Empire State Building - centerpiece */}
        <g opacity="0.95">
          {/* Antenna */}
          <line
            x1="600"
            y1="80"
            x2="600"
            y2="40"
            stroke="#3A4A2E"
            strokeWidth="2"
            opacity="0.8"
          />
          {/* Top spire tiers */}
          <polygon
            points="594,90 606,90 608,80 592,80"
            fill="url(#building-empire)"
          />
          <polygon
            points="590,100 610,100 612,90 588,90"
            fill="url(#building-empire)"
          />
          <rect x="585" y="100" width="30" height="25" fill="url(#building-empire)" />
          <polygon
            points="580,135 620,135 618,125 582,125"
            fill="url(#building-empire)"
          />
          <rect x="578" y="135" width="44" height="35" fill="url(#building-empire)" />
          {/* Main body */}
          <polygon
            points="568,180 632,180 628,170 572,170"
            fill="url(#building-empire)"
          />
          <rect x="565" y="180" width="70" height="220" fill="url(#building-empire)" />
        </g>

        {/* Next to empire state */}
        <rect x="645" y="200" width="45" height="200" fill="url(#building-warm)" opacity="0.9" />
        <rect x="695" y="175" width="40" height="225" fill="url(#building-blue)" opacity="0.92" />
        <polygon points="715,175 715,140 735,140 735,175" fill="url(#building-blue)" opacity="0.92" />

        {/* Shorter mixed */}
        <rect x="740" y="215" width="35" height="185" fill="url(#building-muted)" opacity="0.85" />
      </g>

      {/* Window suggestions - subtle dots */}
      <g opacity="0.4" fill="#3A4A2E">
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={`w1-${i}`} cx={575 + (i % 5) * 12} cy={220 + Math.floor(i / 5) * 30} r="1" />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <circle key={`w2-${i}`} cx={497 + (i % 4) * 10} cy={230 + Math.floor(i / 4) * 30} r="1" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <circle key={`w3-${i}`} cx={702 + (i % 4) * 10} cy={220 + Math.floor(i / 4) * 35} r="1" />
        ))}
      </g>

      {/* Watercolor bleeds */}
      <g opacity="0.25">
        <ellipse cx="600" cy="400" rx="300" ry="20" fill="#94ADC2" filter="url(#sky-watercolor)" />
        <ellipse cx="200" cy="400" rx="200" ry="15" fill="#A88C68" filter="url(#sky-watercolor)" />
        <ellipse cx="1000" cy="400" rx="200" ry="15" fill="#94ADC2" filter="url(#sky-watercolor)" />
      </g>
    </svg>
  );
}
