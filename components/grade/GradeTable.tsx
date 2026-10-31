import { GRADES } from "@/data/grades";
import { cn } from "@/lib/cn";

const gradeColor = (g?: string) => (g === "F" ? "text-[#d6245b]" : g === "B-" ? "text-[#6f4fd0]" : "text-[#a02fc9]");

export function GradeTable() {
  return (
    <div className="mt-[34px] overflow-x-auto">
      <table className="w-full border-collapse text-[11px]">
        <thead>
          <tr className="bg-brand text-white">
            {["Semester", "Course", "Title", "Grade Point", "Grade", "Equivalent Percentage", "Percentile"].map((h, i) => (
              <th key={h} className={cn("px-[8px] py-[8px] font-medium", i === 2 || i === 0 || i === 1 ? "text-left" : "text-right", i === 2 && "text-center")}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {GRADES.map((g, i) => (
            <tr key={`${g.semester}-${g.course}-${i}`} className={cn("h-[27px] transition-colors hover:bg-[#e9e7f7]", i % 2 ? "bg-[#f0f0f4]" : "bg-white")}>
              <td className="px-[8px] text-[#333]">{g.semester}</td>
              <td className="px-[8px] text-[#333]">{g.course}</td>
              <td className="px-[8px] text-[#333]">{g.title}</td>
              {g.exempted ? (
                <>
                  <td />
                  <td className="px-[8px] text-right font-medium text-[#f08a24]">Exempted</td>
                  <td />
                  <td />
                </>
              ) : (
                <>
                  <td className="px-[8px] text-right text-[#2cc29a]">{g.gradePoint}</td>
                  <td className={cn("px-[8px] text-right font-medium", gradeColor(g.grade))}>{g.grade}</td>
                  <td className="px-[8px] text-right text-info">{g.percentage}</td>
                  <td className="px-[8px] text-right text-[#f0a020]">{g.percentile}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
