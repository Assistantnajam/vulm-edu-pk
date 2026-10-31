"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { useNavigationLoader } from "./NavigationLoader";

export function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname();
  const { start } = useNavigationLoader();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-[255px] bg-sidebar font-poppins transition-transform duration-300",
        collapsed && "-translate-x-full"
      )}
    >
      <div className="relative flex h-[72px] items-center bg-[#262838] pl-[30px]">
        <Image
          src="/images/vu-logo.png"
          alt="Virtual University of Pakistan"
          width={156}
          height={62}
          priority
          className="h-[58px] w-auto"
        />
        <button
          type="button"
          onClick={onToggle}
          aria-label="Toggle sidebar"
          className="absolute right-[22px] top-1/2 flex -translate-y-1/2 flex-col items-end gap-[5px] opacity-40 transition-opacity hover:opacity-80"
        >
          <span className="h-[2px] w-[26px] bg-white" />
          <span className="h-[2px] w-[20px] bg-white" />
          <span className="h-[2px] w-[26px] bg-white" />
        </button>
      </div>

      <nav className="mt-[21px]">
        <ul>
          {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  prefetch
                  onClick={() => {
                    if (!active) start();
                  }}
                  className={cn(
                    "flex h-[45px] items-center pl-[30px] text-[15px] text-white transition-colors duration-200",
                    active ? "bg-sidebarActive" : "hover:bg-white/10"
                  )}
                >
                  <Icon size={20} strokeWidth={1.9} className="shrink-0" />
                  <span className="ml-[19px]">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-[10px] left-[30px] leading-tight">
        <p className="text-[13px] font-semibold text-white">Virtual University Of Pakistan</p>
        <p className="text-[12px] text-[#25d366]">Federal Government University</p>
      </div>
    </aside>
  );
}
