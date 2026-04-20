type Props = {
  className?: string;
  color?: string;
};

export function WatercolorFrame({ className, color = "#5A6B3E" }: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="frame-bleed">
          <feTurbulence baseFrequency="0.03" numOctaves="3" seed="9" />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
        <radialGradient id="frame-wash" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="70%" stopColor={color} stopOpacity="0.05" />
          <stop offset="100%" stopColor={color} stopOpacity="0.18" />
        </radialGradient>
      </defs>
      <rect
        x="8"
        y="8"
        width="384"
        height="384"
        fill="url(#frame-wash)"
        filter="url(#frame-bleed)"
      />
      <rect
        x="16"
        y="16"
        width="368"
        height="368"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.35"
        filter="url(#frame-bleed)"
      />
    </svg>
  );
}

export function WatercolorBlob({
  className,
  color = "#B8C8D8"
}: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id="blob-bleed">
          <feTurbulence baseFrequency="0.015" numOctaves="4" seed="13" />
          <feDisplacementMap in="SourceGraphic" scale="40" />
        </filter>
        <radialGradient id="blob-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.45" />
          <stop offset="60%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#blob-grad)" filter="url(#blob-bleed)" />
    </svg>
  );
}
