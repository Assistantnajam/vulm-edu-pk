export const SCHEDULE_DAYS = ["Mon 10/26", "Tue 10/27", "Wed 10/28", "Thu 10/29", "Fri 10/30", "Sat 10/31"];

export interface Lecture { title: string; room: string }

/** rows[time][dayIndex] */
export const SCHEDULE_ROWS: { time: string; slots: (Lecture | null)[] }[] = [
  { time: "09:00 AM", slots: [null, null, null, null, null, null] },
  { time: "10:00 AM", slots: [null, null, null, null, null, null] },
  {
    time: "11:00 AM",
    slots: [
      { title: "SOC101 - Lec 7", room: "VUTV-1" }, null,
      { title: "SOC101 - Lec 8", room: "VUTV-1" }, null,
      { title: "SOC101 - Lec 9", room: "VUTV-1" }, null,
    ],
  },
  { time: "12:00 PM", slots: [null, null, null, null, null, null] },
  {
    time: "01:00 PM",
    slots: [
      null, { title: "MGT402 - Lec 7", room: "CDROOM-10" },
      null, { title: "MGT402 - Lec 8", room: "CDROOM-10" },
      null, { title: "MGT402 - Lec 9", room: "CDROOM-10" },
    ],
  },
  {
    time: "02:00 PM",
    slots: [
      { title: "PSC201 - Lec 7", room: "CDROOM-2" }, { title: "ECO402 - Lec 7", room: "CDROOM-8" },
      { title: "PSC201 - Lec 8", room: "CDROOM-2" }, { title: "ECO402 - Lec 8", room: "CDROOM-8" },
      { title: "PSC201 - Lec 9", room: "CDROOM-2" }, { title: "ECO402 - Lec 9", room: "CDROOM-8" },
    ],
  },
  {
    time: "03:00 PM",
    slots: [
      null, { title: "ECO403 - Lec 7", room: "CDROOM-11" },
      null, { title: "ECO403 - Lec 8", room: "CDROOM-11" },
      null, { title: "ECO403 - Lec 9", room: "CDROOM-11" },
    ],
  },
];
