"use client";

import { cn } from "@/lib/cn";

export interface TabDef {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

/** Tab strip; the active tab is a filled brand-colour pill with white text. */
export function Tabs({
  tabs,
  active,
  onChange,
  className,
  variant = "pill",
}: {
  tabs: TabDef[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
  variant?: "pill" | "flat";
}) {
  return (
    <div role="tablist" className={cn("flex flex-wrap font-poppins", className)}>
      {tabs.map((t) => {
        const on = t.id === active;
        return (
          <button
            key={t.id}
            role="tab"
            aria-selected={on}
            type="button"
            onClick={() => onChange(t.id)}
            className={cn(
              "flex items-center gap-[7px] whitespace-nowrap px-[12px] py-[9px] text-[13px] transition-colors duration-200",
              variant === "pill" ? "rounded-[3px]" : "",
              on ? "bg-brandDark text-white" : "text-[#555] hover:text-brandDark"
            )}
          >
            {t.icon}
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
