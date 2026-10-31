/** 12-tick radial spinner shown while the portal loads a page. */
export function Spinner({ size = 72 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" role="status" aria-label="Loading">
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="0"
          y1="-30"
          x2="0"
          y2="-46"
          stroke="#bfe5f7"
          strokeWidth="8"
          strokeLinecap="round"
          transform={`rotate(${i * 30})`}
          style={{
            animation: "tick 1s linear infinite",
            animationDelay: `${-1 + i / 12}s`,
          }}
        />
      ))}
    </svg>
  );
}
