import { TodoPanel } from "@/components/calendar/TodoPanel";
import { PageTitle } from "@/components/ui/PageTitle";

export default function TodoCalendarPage() {
  return (
    <>
      <PageTitle className="!pb-[28px]">To Do Calendar</PageTitle>
      <TodoPanel />
    </>
  );
}
