"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { Header } from "./Header";
import { NavigationLoaderProvider } from "./NavigationLoader";
import { Sidebar } from "./Sidebar";

export function PortalShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <NavigationLoaderProvider>
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <Header collapsed={collapsed} />
      <main
        className={cn(
          "min-h-screen bg-page pb-12 pl-[30px] pr-[30px] pt-[72px] transition-[margin] duration-300",
          collapsed ? "ml-0" : "ml-[255px]"
        )}
      >
        <div key="content" className="animate-fadeIn">
          {children}
        </div>
      </main>
    </NavigationLoaderProvider>
  );
}
