import { NotesPanel } from "@/components/schedule/NotesPanel";
import { PageTitle } from "@/components/ui/PageTitle";

export default function NotesPage() {
  return (
    <>
      <PageTitle className="!text-[16px]">Notes</PageTitle>
      <NotesPanel />
    </>
  );
}
