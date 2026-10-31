import Image from "next/image";
import type { HomeCourse } from "@/data/courses";
import { cn } from "@/lib/cn";
import { CourseHeader } from "./CourseHeader";

const ACTIONS = [
  { key: "assignments", label: "Assignments", icon: "ic-assignments" },
  { key: "gdb", label: "GDB", icon: "ic-gdb" },
  { key: "quiz", label: "Quiz", icon: "ic-quiz" },
  { key: "activity", label: "Activity", icon: "ic-activity" },
  { key: "announcements", label: "Announcements", icon: "ic-announce" },
] as const;

export function CourseCard({ course }: { course: HomeCourse }) {
  const { instructor: ins } = course;
  return (
    <article className="bg-white shadow-card">
      <CourseHeader
        code={course.code}
        title={course.title}
        category={course.category}
        credits={course.credits}
        creditsLabel="Credit Hour(s)"
      />
      <div className="relative px-[16px] pb-[16px] pt-[20px]">
        <span className="absolute right-[10px] top-[12px] flex h-[34px] w-[44px] items-center justify-center rounded-full border border-[#58b1f0] font-roboto text-[19px] italic text-info shadow-[0_1px_3px_rgba(88,177,240,0.35)]">
          {course.lecture}
        </span>

        <div className="flex">
          <div className="h-[121px] w-[97px] shrink-0 rounded-[8px] border border-[#ddd] bg-white p-[3px]">
            <Image src={ins.photo} alt={ins.name} width={90} height={115} className="h-full w-full rounded-[6px] object-cover" />
          </div>
          <div className="ml-[56px] pt-[6px] font-poppins text-[11px] leading-[1.9] text-[#222]">
            <p className="font-semibold">{ins.name}</p>
            <p>{ins.qualification}</p>
            <p>{ins.university}</p>
          </div>
        </div>

        <hr className="mb-[12px] mt-[16px] border-[#ddd]" />

        <ul className="flex justify-between px-[22px] font-poppins">
          {ACTIONS.map(({ key, label, icon }) => {
            const disabled = key === "activity" && !course.activityEnabled;
            const count =
              key === "assignments" ? course.badges.assignments
              : key === "quiz" ? course.badges.quiz
              : key === "announcements" ? course.badges.announcements
              : undefined;
            return (
              <li key={key}>
                <button
                  type="button"
                  disabled={disabled}
                  className={cn(
                    "group relative flex w-[92px] flex-col items-center gap-[7px] transition-transform duration-200",
                    disabled ? "cursor-default opacity-90" : "hover:-translate-y-[2px]"
                  )}
                >
                  <Image src={`/images/${icon}.png`} alt="" width={46} height={46} className="h-[46px] w-auto" />
                  {count ? (
                    <span className="absolute right-[18px] top-[-2px] flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-[#e8335d] px-[3px] text-[9px] font-medium text-white">
                      {count}
                    </span>
                  ) : null}
                  <span className={cn("text-[10.5px] font-semibold", disabled ? "text-[#aaa]" : "text-black")}>
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
