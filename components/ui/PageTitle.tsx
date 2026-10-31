import { cn } from "@/lib/cn";

export function PageTitle({
  children,
  sub,
  className,
}: {
  children: React.ReactNode;
  sub?: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("pb-[30px] pt-[26px] font-roboto text-[22px] font-medium text-[#1e1e1e]", className)}>
      {children}
      {sub && <span className="ml-3 font-poppins text-[12px] font-normal text-[#8a8a8a]">{sub}</span>}
    </h2>
  );
}
