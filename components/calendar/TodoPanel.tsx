"use client";

import { useState } from "react";
import { Banner } from "@/components/ui/Banner";
import { Tabs } from "@/components/ui/Tabs";
import { ClassicTodo } from "./ClassicTodo";
import { TodoCalendar } from "./TodoCalendar";

const TABS = [
  { id: "calendar", label: "To Do Calendar" },
  { id: "classic", label: "Classic To Do" },
];

export function TodoPanel() {
  const [tab, setTab] = useState("calendar");
  return (
    <>
      <Banner title="To Do Calendar" />
      <div className="bg-white px-[26px] pb-[26px] pt-[26px] shadow-panel">
        <Tabs tabs={TABS} active={tab} onChange={setTab} />
        <div className="border border-[#ddd] bg-white">
          {tab === "calendar" ? <TodoCalendar /> : <ClassicTodo />}
        </div>
      </div>
    </>
  );
}
