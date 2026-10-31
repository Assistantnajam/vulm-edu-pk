import type { TodoEvent } from "@/data/events";

export const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const fromIso = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

/** Six weeks (Sun-first) covering the month of `anchor`. */
export function monthWeeks(anchor: Date): Date[][] {
  const first = new Date(anchor.getFullYear(), anchor.getMonth(), 1);
  const gridStart = addDays(first, -first.getDay());
  return Array.from({ length: 6 }, (_, w) => Array.from({ length: 7 }, (_, d) => addDays(gridStart, w * 7 + d)));
}

export interface PlacedEvent {
  event: TodoEvent;
  lane: number;
  /** 0-6 column indices, inclusive */
  from: number;
  to: number;
  continuesBefore: boolean;
  continuesAfter: boolean;
}

/** Lay events into non-overlapping lanes for one week row. */
export function placeEvents(week: Date[], events: TodoEvent[]): PlacedEvent[] {
  const wStart = iso(week[0]);
  const wEnd = iso(week[6]);
  const inWeek = events
    .filter((e) => e.start <= wEnd && e.end >= wStart)
    .sort((a, b) => (a.start === b.start ? a.end.localeCompare(b.end) : a.start.localeCompare(b.start)));

  const laneEnds: number[] = [];
  return inWeek.map((event) => {
    const from = event.start < wStart ? 0 : week.findIndex((d) => iso(d) === event.start);
    const to = event.end > wEnd ? 6 : week.findIndex((d) => iso(d) === event.end);
    let lane = laneEnds.findIndex((end) => end < from);
    if (lane === -1) {
      lane = laneEnds.length;
      laneEnds.push(to);
    } else {
      laneEnds[lane] = to;
    }
    return { event, lane, from, to, continuesBefore: event.start < wStart, continuesAfter: event.end > wEnd };
  });
}

export const MONTHS = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];
export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
