"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { EVENT_COLORS, EVENT_LABELS, TODO_EVENTS, type EventType } from "@/data/events";
import { EventBar } from "./EventBar";
import { MONTHS, WEEKDAYS, addDays, fromIso, iso, monthWeeks, placeEvents } from "./calendar-utils";

type View = "month" | "week" | "day";
const TODAY = new Date(2026, 9, 31);
const LANE_H = 21;

export function TodoCalendar() {
  const [anchor, setAnchor] = useState<Date>(TODAY);
  const [view, setView] = useState<View>("month");

  const isToday = iso(anchor) === iso(TODAY);
  const title = `${MONTHS[anchor.getMonth()]} ${anchor.getFullYear()}`;

  const step = (dir: 1 | -1) => {
    if (view === "month") setAnchor(new Date(anchor.getFullYear(), anchor.getMonth() + dir, 1));
    else setAnchor(addDays(anchor, dir * (view === "week" ? 7 : 1)));
  };

  return (
    <div>
      <ul className="mb-[18px] flex gap-[14px] pl-[24px] pt-[20px] text-[13px] text-[#444]">
        {(Object.keys(EVENT_LABELS) as EventType[]).map((t) => (
          <li key={t} className="flex items-center gap-[6px]">
            <span className="h-[15px] w-[15px] rounded-[3px]" style={{ background: EVENT_COLORS[t] }} />
            {EVENT_LABELS[t]}
          </li>
        ))}
      </ul>

      <div className="mb-[14px] flex items-center justify-between px-[24px]">
        <div className="flex items-center gap-[8px]">
          <div className="flex overflow-hidden rounded-[3px] bg-[#eceef4]">
            <button type="button" aria-label="Previous" onClick={() => step(-1)} className="h-[34px] w-[44px] text-[#666] hover:bg-[#e0e3ec]">
              <ChevronLeft size={15} className="mx-auto" />
            </button>
            <button type="button" aria-label="Next" onClick={() => step(1)} className="h-[34px] w-[44px] text-[#666] hover:bg-[#e0e3ec]">
              <ChevronRight size={15} className="mx-auto" />
            </button>
          </div>
          <button
            type="button"
            disabled={isToday && view !== "month"}
            onClick={() => setAnchor(TODAY)}
            className="h-[34px] rounded-[3px] bg-[#eceef4] px-[16px] text-[13px] text-[#999] enabled:hover:bg-[#e0e3ec] disabled:opacity-60"
          >
            today
          </button>
        </div>

        <h3 className="font-poppins text-[15px] font-medium text-[#222]">{title}</h3>

        <div className="flex overflow-hidden rounded-[3px] bg-[#eceef4] text-[13.5px]">
          {(["month", "week", "day"] as View[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setView(v)}
              className={cn("h-[34px] px-[16px] transition-colors", view === v ? "bg-brandDark text-white" : "text-[#444] hover:bg-[#e0e3ec]")}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="px-[24px] pb-[24px]">
        {view === "month" && <MonthGrid anchor={anchor} />}
        {view === "week" && <WeekGrid anchor={anchor} />}
        {view === "day" && <DayList anchor={anchor} />}
      </div>
    </div>
  );
}

function MonthGrid({ anchor }: { anchor: Date }) {
  const weeks = useMemo(() => monthWeeks(anchor), [anchor]);
  return (
    <div className="border border-[#ddd]">
      <div className="grid grid-cols-7 border-b border-[#ddd] bg-white">
        {WEEKDAYS.map((d) => (
          <div key={d} className="h-[36px] border-r border-[#ddd] text-center text-[13px] font-medium leading-[36px] text-[#222] last:border-r-0">
            {d}
          </div>
        ))}
      </div>
      {weeks.map((week, wi) => {
        const placed = placeEvents(week, TODO_EVENTS);
        const lanes = placed.reduce((m, p) => Math.max(m, p.lane + 1), 0);
        const minH = Math.max(102, 30 + lanes * LANE_H + 6);
        return (
          <div key={wi} className="relative grid grid-cols-7 border-b border-[#ddd] last:border-b-0" style={{ height: minH }}>
            {week.map((d) => {
              const other = d.getMonth() !== anchor.getMonth();
              const today = iso(d) === iso(TODAY);
              return (
                <div key={iso(d)} className={cn("border-r border-[#ddd] pr-[8px] pt-[6px] text-right text-[13px] last:border-r-0", today && "bg-[#eceef4]", other ? "text-[#c3c3c3]" : "text-[#444]")}>
                  {d.getDate()}
                </div>
              );
            })}
            {placed.map((p) => (
              <EventBar
                key={`${p.event.id}-${wi}`}
                event={p.event}
                left={`calc(${(p.from / 7) * 100}% + 2px)`}
                width={`calc(${((p.to - p.from + 1) / 7) * 100}% - 4px)`}
                top={30 + p.lane * LANE_H}
                roundLeft={!p.continuesBefore}
                roundRight={!p.continuesAfter}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function eventsOn(day: Date) {
  const s = iso(day);
  return TODO_EVENTS.filter((e) => e.start <= s && e.end >= s);
}

function WeekGrid({ anchor }: { anchor: Date }) {
  const start = addDays(anchor, -anchor.getDay());
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));
  return (
    <div className="grid grid-cols-7 border border-[#ddd]">
      {days.map((d) => (
        <div key={iso(d)} className={cn("min-h-[260px] border-r border-[#ddd] last:border-r-0", iso(d) === iso(TODAY) && "bg-[#eceef4]")}>
          <div className="border-b border-[#ddd] bg-white py-[8px] text-center text-[13px] font-medium">
            {WEEKDAYS[d.getDay()]} {d.getMonth() + 1}/{d.getDate()}
          </div>
          <div className="space-y-[4px] p-[4px]">
            {eventsOn(d).map((e) => (
              <div key={e.id} className="truncate rounded-[3px] px-[6px] py-[2px] text-[11px] text-white" style={{ background: EVENT_COLORS[e.type] }}>
                {e.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function DayList({ anchor }: { anchor: Date }) {
  const list = eventsOn(anchor);
  return (
    <div className="border border-[#ddd]">
      <div className="border-b border-[#ddd] bg-white py-[10px] text-center text-[13px] font-medium">
        {WEEKDAYS[anchor.getDay()]}, {MONTHS[anchor.getMonth()]} {anchor.getDate()}
      </div>
      <div className="min-h-[220px] space-y-[6px] p-[10px]">
        {list.length === 0 && <p className="text-[13px] text-[#999]">Nothing due on this day.</p>}
        {list.map((e) => (
          <div key={e.id} className="rounded-[3px] px-[10px] py-[5px] text-[12px] text-white" style={{ background: EVENT_COLORS[e.type] }}>
            {e.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export { fromIso };
