"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/50 pt-[90px] animate-fadeIn"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className="w-[560px] max-w-[92vw] rounded-[4px] bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between rounded-t-[4px] bg-brand px-[18px] py-[12px] font-roboto text-white">
          <span className="text-[16px] font-medium">{title}</span>
          <button type="button" aria-label="Close" onClick={onClose}>
            <X size={18} />
          </button>
        </div>
        <div className="p-[20px] font-poppins text-[13px] text-[#333]">{children}</div>
      </div>
    </div>
  );
}
