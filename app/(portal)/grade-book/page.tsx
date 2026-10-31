import { GradePanel } from "@/components/grade/GradePanel";
import { PageTitle } from "@/components/ui/PageTitle";

export default function GradeBookPage() {
  return (
    <>
      <PageTitle sub="(FALL 2026 - Regular)" className="!pb-[18px]">Grade Book</PageTitle>
      <GradePanel />
    </>
  );
}
