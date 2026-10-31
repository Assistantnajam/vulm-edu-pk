import type { LucideProps } from "lucide-react";

/** 3x3 ring grid used by the "My Studied Courses" menu entry. */
export function DotsGridIcon({ size = 24, className }: LucideProps) {
  const pts = [4, 12, 20];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden
    >
      {pts.flatMap((y) => pts.map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r={2} />))}
    </svg>
  );
}
