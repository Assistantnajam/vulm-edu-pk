import Image from "next/image";
import { cn } from "@/lib/cn";
import { STUDENT } from "@/data/student";

export function Header({ collapsed }: { collapsed: boolean }) {
  return (
    <header
      className={cn(
        "fixed right-0 top-0 z-20 flex h-[72px] items-center justify-between bg-white pr-[30px] shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-[left] duration-300",
        collapsed ? "left-0" : "left-[255px]"
      )}
    >
      <div className="flex items-center pl-[30px]">
        <Image src="/images/lms-logo.png" alt="LMS" width={72} height={48} className="h-[38px] w-auto" priority />
        <h1 className="ml-[24px] font-poppins text-[26px] font-normal text-[#2b2b2b]">
          Learning Management System
        </h1>
      </div>
      <div className="flex items-center">
        <button type="button" aria-label="Notifications" className="mr-[45px] transition-transform hover:scale-110">
          <Image src="/images/bell.png" alt="" width={30} height={44} className="h-[34px] w-auto" />
        </button>
        <div className="mr-[28px] font-poppins text-[13.5px] font-light leading-[1.45] text-[#444]">
          <div>{STUDENT.name.toUpperCase()}</div>
          <div>({STUDENT.id})</div>
        </div>
        <Image
          src="/images/student.png"
          alt={STUDENT.name}
          width={44}
          height={50}
          className="h-[44px] w-[44px] rounded-full object-cover"
        />
      </div>
    </header>
  );
}
