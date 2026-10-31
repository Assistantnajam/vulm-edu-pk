import { StudiedCourseCard } from "@/components/home/StudiedCourseCard";
import { PageTitle } from "@/components/ui/PageTitle";
import { STUDIED_COURSES } from "@/data/courses";

export default function StudiedCoursesPage() {
  return (
    <>
      <PageTitle>My Studied Courses</PageTitle>
      <div className="grid grid-cols-1 gap-x-[32px] gap-y-[32px] xl:grid-cols-2">
        {STUDIED_COURSES.map((c, i) => (
          <StudiedCourseCard key={`${c.code}-${i}`} course={c} />
        ))}
      </div>
    </>
  );
}
