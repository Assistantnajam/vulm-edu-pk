"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Spinner } from "@/components/ui/Spinner";
import { cn } from "@/lib/cn";

const MIN_VISIBLE_MS = 700;

interface LoaderValue {
  start: () => void;
}
const LoaderContext = createContext<LoaderValue>({ start: () => {} });
export const useNavigationLoader = () => useContext(LoaderContext);

/** Dimmed full-screen overlay with spinner, shown on first load and on every page change. */
export function NavigationLoaderProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const startedAt = useRef<number>(0);

  const start = useCallback(() => {
    startedAt.current = Date.now();
    setLoading(true);
  }, []);

  useEffect(() => {
    if (startedAt.current === 0) startedAt.current = Date.now();
    const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt.current));
    const t = setTimeout(() => setLoading(false), remaining);
    return () => clearTimeout(t);
  }, [pathname]);

  const value = useMemo(() => ({ start }), [start]);

  return (
    <LoaderContext.Provider value={value}>
      {children}
      <div
        aria-hidden={!loading}
        className={cn(
          "fixed inset-0 z-[100] flex items-center justify-center bg-[#5a5a5a]/60 transition-opacity duration-300",
          loading ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <Spinner />
      </div>
    </LoaderContext.Provider>
  );
}
