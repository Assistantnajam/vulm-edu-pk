import { LectureGrid } from "@/components/schedule/LectureGrid";
import { PageTitle } from "@/components/ui/PageTitle";

export default function LectureSchedulePage() {
  return (
    <>
      <PageTitle className="!text-[16px]">Weekly Lecture Schedule</PageTitle>
      <LectureGrid />
    </>
  );
}
