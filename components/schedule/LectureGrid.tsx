import { SCHEDULE_DAYS, SCHEDULE_ROWS } from "@/data/schedule";
import { cn } from "@/lib/cn";

export function LectureGrid() {
  return (
    <div className="overflow-x-auto bg-white px-[16px] py-[22px] shadow-panel">
      <table className="w-full table-fixed border-collapse font-poppins">
        <thead>
          <tr className="bg-brand text-[12px] text-white">
            <th className="w-[90px] py-[9px] font-semibold">Time</th>
            {SCHEDULE_DAYS.map((d) => (
              <th key={d} className="py-[9px] font-semibold">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SCHEDULE_ROWS.map((row, i) => {
            const busy = row.slots.some(Boolean);
            return (
              <tr key={row.time} className={cn(i % 2 === 0 ? "bg-[#f0f0f4]" : "bg-white", "border-b border-[#e3e3e3]")} style={{ height: busy ? 58 : 29 }}>
                <td className="px-[8px] text-[10.5px] font-semibold text-[#666]">{row.time}</td>
                {row.slots.map((s, di) => (
                  <td key={di} className="border-l border-[#e3e3e3] px-[10px] text-center align-middle">
                    {s && (
                      <div className="mx-auto w-[88%] max-w-[120px] cursor-pointer rounded-[3px] bg-[#f0bf45] px-[6px] py-[5px] text-[10px] leading-[1.35] text-[#222] shadow-[1px_2px_4px_rgba(0,0,0,0.25)] transition-transform duration-150 hover:-translate-y-[1px]">
                        <p className="font-bold underline">{s.title}</p>
                        <p>{s.room}</p>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
