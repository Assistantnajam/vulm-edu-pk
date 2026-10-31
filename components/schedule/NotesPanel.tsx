"use client";

import { useState } from "react";
import { Check, Search, X } from "lucide-react";

interface Note { id: number; title: string; body: string; date: string }

const TODAY_LABEL = "October 31, 2026";

export function NotesPanel() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [query, setQuery] = useState("");

  const save = () => {
    if (!title.trim() && !body.trim()) return;
    setNotes((n) => [{ id: Date.now(), title: title.trim(), body: body.trim(), date: TODAY_LABEL }, ...n]);
    setTitle("");
    setBody("");
  };
  const clear = () => { setTitle(""); setBody(""); };

  const visible = notes.filter((n) => (n.title + n.body).toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-[560px] bg-white px-[20px] py-[24px] shadow-panel">
      <div className="mb-[20px] flex justify-end">
        <div className="flex">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for..."
            className="h-[30px] w-[205px] border border-[#cfd3dc] px-[8px] text-[11px] outline-none focus:border-brandDark"
          />
          <button type="button" aria-label="Search" className="flex h-[30px] w-[32px] items-center justify-center bg-[#4e45d6] text-white hover:bg-[#4339c2]">
            <Search size={14} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-[20px] pl-[20px]">
        <div className="w-[150px] bg-white p-[10px] shadow-[0_1px_5px_rgba(0,0,0,0.18)]">
          <textarea value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" className="h-[52px] w-full resize-none border border-[#ccc] p-[6px] text-[9px] outline-none" />
          <p className="my-[6px] border-b border-[#ddd] pb-[6px] text-[8px] text-[#999]">{TODAY_LABEL}</p>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Enter Note" className="h-[52px] w-full resize-none border border-[#ccc] p-[6px] text-[9px] outline-none" />
          <div className="mt-[10px] flex justify-center gap-[14px] text-[#777]">
            <button type="button" aria-label="Save note" onClick={save} className="hover:text-ok"><Check size={13} /></button>
            <button type="button" aria-label="Discard note" onClick={clear} className="hover:text-danger"><X size={13} /></button>
          </div>
        </div>

        {visible.map((n) => (
          <div key={n.id} className="w-[150px] animate-fadeIn bg-white p-[10px] shadow-[0_1px_5px_rgba(0,0,0,0.18)]">
            <p className="break-words text-[10px] font-semibold">{n.title || "Untitled"}</p>
            <p className="my-[6px] border-b border-[#ddd] pb-[6px] text-[8px] text-[#999]">{n.date}</p>
            <p className="break-words text-[9px] text-[#444]">{n.body}</p>
            <button type="button" aria-label="Delete note" onClick={() => setNotes((x) => x.filter((y) => y.id !== n.id))} className="mt-[8px] block text-[#999] hover:text-danger">
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
