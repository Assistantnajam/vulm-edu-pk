import { EVENT_COLORS, EVENT_LABELS, TODO_EVENTS } from "@/data/events";
import { fromIso } from "./calendar-utils";

const fmt = (s: string) =>
  fromIso(s).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

export function ClassicTodo() {
  return (
    <div className="p-[24px]">
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="bg-brand text-left text-white">
            <th className="px-[12px] py-[9px] font-medium">Type</th>
            <th className="px-[12px] py-[9px] font-medium">Title</th>
            <th className="px-[12px] py-[9px] font-medium">Starts</th>
            <th className="px-[12px] py-[9px] font-medium">Due</th>
          </tr>
        </thead>
        <tbody>
          {TODO_EVENTS.map((e, i) => (
            <tr key={e.id} className={i % 2 ? "bg-[#f0f0f4]" : "bg-white"}>
              <td className="px-[12px] py-[9px]">
                <span className="mr-2 inline-block h-[10px] w-[10px] rounded-[2px]" style={{ background: EVENT_COLORS[e.type] }} />
                {EVENT_LABELS[e.type]}
              </td>
              <td className="px-[12px] py-[9px]">{e.title}</td>
              <td className="px-[12px] py-[9px]">{fmt(e.start)}</td>
              <td className="px-[12px] py-[9px]">{fmt(e.end)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
