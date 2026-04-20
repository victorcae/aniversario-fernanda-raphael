export function WatercolorFilters() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <filter id="watercolor-filter" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02"
            numOctaves="3"
            seed="5"
          />
          <feDisplacementMap in="SourceGraphic" scale="8" />
        </filter>

        <filter id="paper-bleed" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="2"
            seed="3"
          />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>

        <filter id="soft-blur">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>
    </svg>
  );
}
