"use client";

import { useState } from "react";
import { BookOpenCheck, Calculator, FileBadge, GraduationCap, IdCard, User } from "lucide-react";
import { Tabs } from "@/components/ui/Tabs";
import { STUDENT } from "@/data/student";
import { GradeTable } from "./GradeTable";

const TABS = [
  { id: "grade", label: "Student Grade Book", icon: <User size={13} /> },
  { id: "mid", label: "Midterm Result (FALL 2026)", icon: <FileBadge size={13} className="text-brandDark" /> },
  { id: "scheme", label: "Grading Scheme", icon: <GraduationCap size={13} className="text-ok" /> },
  { id: "cgpa", label: "Projected CGPA Calculator", icon: <Calculator size={13} className="text-[#c0454f]" /> },
  { id: "coum", label: "COUM/DAC", icon: <IdCard size={13} className="text-[#c0268f]" /> },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] font-medium text-[#222]">{children}</p>;
}

function Summary() {
  return (
    <div className="grid grid-cols-[1.05fr_1.1fr_0.85fr] border border-[#e6e6ee] pb-[26px] pt-[22px] font-poppins">
      <div className="space-y-[22px] border-r border-[#eee] px-[26px]">
        <div className="flex justify-between gap-3">
          <div>
            <Label>Name</Label>
            <p className="text-[10px] text-[#999]">{STUDENT.fatherName}</p>
          </div>
          <p className="max-w-[110px] text-right text-[13px] font-medium text-[#2cc29a]">{STUDENT.name.toUpperCase()}</p>
        </div>
        <div className="flex justify-between gap-3">
          <div>
            <Label>Student ID</Label>
            <p className="text-[10px] text-[#999]">{STUDENT.registrationNo}</p>
          </div>
          <p className="text-[14px] font-medium text-danger">{STUDENT.id}</p>
        </div>
        <div className="flex justify-between gap-3">
          <div className="max-w-[170px]">
            <Label>Study Program</Label>
            <p className="text-[10px] leading-[1.4] text-[#999]">{STUDENT.programLong}</p>
          </div>
          <p className="max-w-[100px] text-right text-[12px] font-medium leading-[1.35] text-info">{STUDENT.program}</p>
        </div>
      </div>

      <div className="space-y-[20px] border-r border-[#eee] px-[26px]">
        <div className="flex items-center justify-between border-b border-dotted border-[#ddd] pb-[14px]">
          <Label>Total Credits Required</Label>
          <p className="text-[15px] font-medium text-[#2cc29a]">{STUDENT.creditsRequired}</p>
        </div>
        <div className="flex items-start justify-between border-b border-dotted border-[#ddd] pb-[14px]">
          <div>
            <Label>Total Credits Earned</Label>
            <p className="mt-[2px] max-w-[190px] text-[10px] leading-[1.4] text-[#999]">
              {STUDENT.studiedSummary}
              <br />
              {STUDENT.exemptedSummary}
            </p>
          </div>
          <p className="text-[15px] font-medium text-info">{STUDENT.creditsEarned}</p>
        </div>
        <div className="flex items-center justify-between">
          <Label>Remaining Credits</Label>
          <p className="text-[15px] font-medium text-danger">{STUDENT.creditsRemaining}</p>
        </div>
      </div>

      <div className="flex items-start justify-between px-[26px] pt-[40px]">
        <Label>CGPA</Label>
        <p className="text-[16px] font-medium text-[#2cc29a]">{STUDENT.cgpa}</p>
      </div>
    </div>
  );
}

export function GradePanel() {
  const [tab, setTab] = useState("grade");
  return (
    <div className="bg-white px-[16px] pb-[24px] pt-[12px] shadow-panel">
      <Tabs tabs={TABS} active={tab} onChange={setTab} className="mb-[14px]" variant="flat" />
      {tab === "grade" ? (
        <div className="animate-fadeIn">
          <Summary />
          <GradeTable />
        </div>
      ) : (
        <div className="flex h-[220px] animate-fadeIn items-center justify-center gap-2 text-[13px] text-[#888]">
          <BookOpenCheck size={16} /> No record found for this section.
        </div>
      )}
    </div>
  );
}
