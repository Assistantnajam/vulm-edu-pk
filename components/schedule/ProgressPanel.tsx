"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const COURSES = [
  "ECO402-Microeconomics",
  "ECO403-Macroeconomics",
  "IT430-E-Commerce",
  "MGT402-Cost & Management Accounting",
  "PSC201-International Relations",
  "SOC101-Introduction to Sociology",
];

function NoRecord() {
  return <p className="text-[11px] font-semibold text-danger">No Record Found</p>;
}

export function ProgressPanel() {
  const [active, setActive] = useState(COURSES[0]);
  return (
    <div className="bg-white px-[16px] pb-[60px] pt-[20px] shadow-panel">
      <div className="flex flex-wrap border-b border-[#e3e3e3] font-poppins text-[11.5px]">
        {COURSES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={cn("px-[10px] py-[8px] transition-colors", active === c ? "bg-brandDark text-white" : "text-[#555] hover:text-brandDark")}
          >
            {c}
          </button>
        ))}
      </div>
      <h3 className="mb-[14px] mt-[20px] font-roboto text-[16px] font-bold text-[#222]">Graded Activities</h3>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-[20px] font-poppins">
        <div className="min-h-[150px] border-r border-[#e6e6e6] pr-[16px] pt-[10px]">
          <h4 className="mb-[10px] text-[12px] font-semibold">Assignments</h4>
          <NoRecord />
        </div>
        <div className="min-h-[150px] border-r border-[#e6e6e6] pr-[16px] pt-[10px]">
          <h4 className="mb-[10px] text-[12px] font-semibold">GDB</h4>
          <NoRecord />
        </div>
        <div className="pt-[10px]">
          <h4 className="mb-[10px] text-[12px] font-semibold">Quizzes</h4>
          <div className="flex justify-center gap-[18px] text-[8px] text-[#555]">
            <span className="flex items-center gap-[4px]"><i className="h-[7px] w-[20px] bg-[#8a4bdb]" />Attempted</span>
            <span className="flex items-center gap-[4px]"><i className="h-[7px] w-[20px] bg-[#f08ae6]" />Not Attempted</span>
          </div>
        </div>
      </div>
    </div>
  );
}
