import { EVENT_COLORS, type TodoEvent } from "@/data/events";

export function EventBar({
  event,
  left,
  width,
  top,
  roundLeft = true,
  roundRight = true,
}: {
  event: TodoEvent;
  left?: string;
  width?: string;
  top?: number;
  roundLeft?: boolean;
  roundRight?: boolean;
}) {
  return (
    <div
      title={event.title}
      className="absolute flex h-[19px] cursor-pointer items-center truncate px-[7px] text-[11px] text-white transition-[filter] duration-150 hover:brightness-110"
      style={{
        left,
        width,
        top,
        background: EVENT_COLORS[event.type],
        borderRadius: `${roundLeft ? 3 : 0}px ${roundRight ? 3 : 0}px ${roundRight ? 3 : 0}px ${roundLeft ? 3 : 0}px`,
      }}
    >
      {event.type === "fee" && <span className="mr-[6px] inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-white/70" />}
      <span className="truncate">{event.title}</span>
    </div>
  );
}
