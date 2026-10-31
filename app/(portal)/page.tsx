import { CourseCard } from "@/components/home/CourseCard";
import { HOME_COURSES } from "@/data/courses";
import { STUDENT } from "@/data/student";

export default function HomePage() {
  return (
    <>
      <h2 className="pb-[30px] pt-[26px] font-roboto text-[22px] font-medium text-[#1e1e1e]">
        My Courses <span className="mx-1">(</span>
        <span className="text-[19px] text-brandDark">{STUDENT.semester}</span>
        <span className="mx-1">)</span>
      </h2>
      <div className="grid grid-cols-1 gap-x-[32px] gap-y-[32px] xl:grid-cols-2">
        {HOME_COURSES.map((c) => (
          <CourseCard key={c.code} course={c} />
        ))}
      </div>
    </>
  );
}
