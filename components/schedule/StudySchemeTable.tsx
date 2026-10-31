import { STUDY_SCHEME, type SchemeStatus } from "@/data/studyScheme";
import { cn } from "@/lib/cn";

const STATUS_COLOR: Record<SchemeStatus, string> = {
  Exempted: "text-[#1f9d3a]",
  Pending: "text-danger",
  Studied: "text-[#1f9d3a]",
};

export function StudySchemeTable() {
  return (
    <div className="bg-white px-[16px] pb-[30px] pt-[22px] shadow-panel">
      <div className="border border-[#e3e3e3] px-[14px] py-[16px]">
        <div className="mb-[26px] grid grid-cols-[1fr_2.2fr_1.4fr] items-start px-[14px] font-poppins">
          <p className="text-[12px] font-medium">Degree <span className="ml-[90px] text-[#2cc29a]">BS</span></p>
          <p className="text-[12px] font-medium">
            Program
            <span className="ml-[40px] align-top text-[11px] font-medium text-info">
              Bachelor of Business &amp; Information Technology (BBIT)
            </span>
          </p>
          <p className="text-[12px] font-medium">Version <span className="ml-[40px] text-danger">Spring 2025(2502)</span></p>
        </div>

        <table className="w-full border-collapse font-poppins text-[10px]">
          <thead>
            <tr className="bg-brand text-white">
              {["Code", "Title", "Category", "Sub Category", "Type", "Course Type", "Cr.Hrs.", "Group", "Specialization", "Status"].map((h) => (
                <th key={h} className="px-[6px] py-[8px] text-left font-medium first:pl-[12px]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {STUDY_SCHEME.map((sem) => (
              <SemesterRows key={sem.semester} sem={sem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SemesterRows({ sem }: { sem: (typeof STUDY_SCHEME)[number] }) {
  return (
    <>
      <tr className="h-[34px]">
        <td colSpan={10} className="px-[12px] font-semibold text-[#222]">{sem.semester}</td>
      </tr>
      {sem.courses.map((co, i) => (
        <tr key={co.code} className={cn("h-[32px] transition-colors hover:bg-[#e9e7f7]", i % 2 === 0 ? "bg-[#f0f0f4]" : "bg-white")}>
          <td className="pl-[12px] pr-[6px]">{co.code}</td>
          <td className="max-w-[90px] px-[6px] leading-[1.35]">{co.title}</td>
          <td /><td />
          <td className="px-[6px]">{co.type}</td>
          <td className="px-[6px]">{co.courseType}</td>
          <td className="px-[6px]">{co.credits}</td>
          <td /><td />
          <td className={cn("px-[6px] font-semibold", STATUS_COLOR[co.status])}>{co.status}</td>
        </tr>
      ))}
    </>
  );
}
