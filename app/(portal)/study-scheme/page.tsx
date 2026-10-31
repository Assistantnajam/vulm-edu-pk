import { StudySchemeTable } from "@/components/schedule/StudySchemeTable";
import { PageTitle } from "@/components/ui/PageTitle";

export default function StudySchemePage() {
  return (
    <>
      <PageTitle className="!text-[16px]">My Study Scheme</PageTitle>
      <StudySchemeTable />
    </>
  );
}
