import Link from "next/link";
import { ChevronLeft } from "lucide-react";

/** Purple wave banner with a "Back" link, used above tabbed panels. */
export function Banner({ title, backHref = "/" }: { title: string; backHref?: string }) {
  return (
    <div
      className="flex h-[59px] items-center justify-between px-[26px] font-roboto text-white"
      style={{
        background:
          "radial-gradient(120% 220% at 15% 120%, rgba(255,255,255,0.10) 0 22%, transparent 23%), linear-gradient(90deg,#6e3fc9,#7d4ed4 45%,#6f40c8)",
      }}
    >
      <span className="text-[17px] font-medium">{title}</span>
      <Link href={backHref} className="flex items-center text-[13px] font-light opacity-90 hover:opacity-100">
        <ChevronLeft size={13} /> Back
      </Link>
    </div>
  );
}
