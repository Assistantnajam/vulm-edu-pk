import Image from "next/image";
import type { StudiedCourse } from "@/data/courses";
import { CourseHeader } from "./CourseHeader";

export function StudiedCourseCard({ course }: { course: StudiedCourse }) {
  const { instructor: ins } = course;
  return (
    <article className="bg-white shadow-panel transition-shadow duration-200 hover:shadow-[0_4px_14px_rgba(60,40,120,0.18)]">
      <CourseHeader
        code={course.code}
        title={course.title}
        category={course.category}
        credits={course.credits}
        creditsLabel="Credit Hours"
      />
      <div className="flex h-[190px] px-[16px] pt-[20px]">
        <div className="h-[141px] w-[85px] shrink-0 rounded-[8px] border border-[#ddd] bg-white p-[3px]">
          <Image src={ins.photo} alt={ins.name} width={80} height={135} className="h-full w-full rounded-[6px] object-cover" />
        </div>
        <div className="ml-[70px] pt-[6px] font-poppins text-[10px] leading-[1.7] text-[#222]">
          <p className="text-[11px] font-semibold">{ins.name}</p>
          <p>{ins.qualification}</p>
          <p>{ins.university}</p>
        </div>
      </div>
    </article>
  );
}
