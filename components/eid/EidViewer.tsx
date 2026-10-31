"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, EllipsisVertical, Menu, Minus, Plus, Printer, RotateCw, Type } from "lucide-react";
import { STUDENT } from "@/data/student";

const ZOOMS = [50, 75, 100, 125, 150];

/** Browser-PDF-viewer look-alike showing the student e-ID card. */
export function EidViewer() {
  const [zoom, setZoom] = useState(100);
  const [thumbs, setThumbs] = useState(true);
  const step = (dir: 1 | -1) => {
    const i = ZOOMS.indexOf(zoom);
    setZoom(ZOOMS[Math.min(ZOOMS.length - 1, Math.max(0, i + dir))]);
  };

  return (
    <div className="border-2 border-[#222] bg-[#282828] font-roboto text-[#e8eaed]">
      <div className="flex h-[56px] items-center justify-between bg-[#323639] px-[20px] text-[13px] shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-[30px]">
          <button type="button" aria-label="Toggle thumbnails" onClick={() => setThumbs((t) => !t)}><Menu size={17} /></button>
          <span className="font-medium">{STUDENT.id}_StudentECard.pdf</span>
        </div>
        <div className="flex items-center gap-[14px]">
          <span className="flex items-center gap-[6px]">
            <span className="bg-[#202124] px-[8px] py-[3px]">1</span> / 1
          </span>
          <span className="h-[22px] w-px bg-white/20" />
          <button type="button" aria-label="Zoom out" onClick={() => step(-1)}><Minus size={16} /></button>
          <span className="bg-[#202124] px-[8px] py-[3px]">{zoom}%</span>
          <button type="button" aria-label="Zoom in" onClick={() => step(1)}><Plus size={16} /></button>
          <RotateCw size={16} className="ml-[10px] opacity-80" />
          <Type size={16} className="ml-[10px] opacity-80" />
        </div>
        <div className="flex items-center gap-[22px]">
          <a href="/images/eid-front.png" download="StudentECard.png" aria-label="Download"><Download size={17} /></a>
          <button type="button" aria-label="Print" onClick={() => window.print()}><Printer size={17} /></button>
          <EllipsisVertical size={17} />
        </div>
      </div>

      <div className="flex h-[640px]">
        {thumbs && (
          <div className="w-[210px] shrink-0 border-r border-black/50 pt-[16px] text-center text-[11px]">
            <div className="mx-auto h-[148px] w-[110px] border-[3px] border-[#8ab4f8] bg-white p-[4px]">
              <Image src="/images/eid-front.png" alt="" width={40} height={60} className="mx-auto mt-[8px] h-[60px] w-auto" />
            </div>
            <p className="mt-[8px]">1</p>
          </div>
        )}
        <div className="flex-1 overflow-auto bg-[#525659] p-[16px]">
          <div
            className="mx-auto flex origin-top justify-center gap-[96px] bg-white pt-[64px] transition-transform duration-200"
            style={{ width: 833, height: 1000, transform: `scale(${zoom / 100})` }}
          >
            <Image src="/images/eid-front.png" alt="Student card (front)" width={265} height={410} className="h-[410px] w-auto" />
            <Image src="/images/eid-back.png" alt="Student card (back)" width={262} height={406} className="h-[406px] w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
