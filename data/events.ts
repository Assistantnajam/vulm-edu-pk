export type EventType = "assignment" | "quiz" | "fee";

export interface TodoEvent {
  id: string;
  type: EventType;
  title: string;
  /** inclusive ISO dates (yyyy-mm-dd) */
  start: string;
  end: string;
}

export const TODO_EVENTS: TodoEvent[] = [
  { id: "e1", type: "assignment", title: "IT430: Assignment# 1", start: "2026-10-28", end: "2026-11-04" },
  { id: "e2", type: "quiz", title: "PSC201: Quiz 01", start: "2026-10-30", end: "2026-11-01" },
  { id: "e3", type: "quiz", title: "MGT402: Quiz 1", start: "2026-11-03", end: "2026-11-05" },
  { id: "e4", type: "fee", title: "ChallanID: 27754135", start: "2026-11-05", end: "2026-11-05" },
  { id: "e5", type: "quiz", title: "SOC101: Quiz 1", start: "2026-11-04", end: "2026-11-06" },
];

export const EVENT_COLORS: Record<EventType, string> = {
  assignment: "#ea5d5d",
  quiz: "#10bd5e",
  fee: "#a31fd6",
};

export const EVENT_LABELS: Record<EventType, string> = {
  assignment: "Assignment",
  quiz: "Quiz",
  fee: "Pending Fee",
};
