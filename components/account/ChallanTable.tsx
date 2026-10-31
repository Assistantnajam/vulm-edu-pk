"use client";

import { useState } from "react";
import { ChartColumn, Eye, Printer, Share } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { CHALLANS, TOTAL_PAYABLE, type Challan } from "@/data/challans";
import { cn } from "@/lib/cn";

const HEADERS = ["Challan No.", "Challan Type", "Payable", "Paid", "Balance", "Date", "Payment Mode", "Cancelled", "Action"];

function PaidBadge() {
  return (
    <span className="inline-block rounded-[3px] border-[1.5px] border-[#1b3b1b] bg-[#c9e9c4] px-[4px] text-[8px] font-bold leading-[13px] tracking-[0.5px] text-[#1b6b1b]">
      PAID
    </span>
  );
}

function Actions({ ch, onView }: { ch: Challan; onView: (c: Challan) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[6px]">
      <button type="button" aria-label="Print challan" onClick={() => window.print()} className="hover:opacity-70">
        <Printer size={18} />
      </button>
      <button type="button" className="rounded-[3px] border-[1.5px] border-black px-[3px] text-[9px] font-bold leading-[14px] hover:bg-black hover:text-white">
        PAY
      </button>
      <button type="button" aria-label="View challan" onClick={() => onView(ch)} className="text-[#d9a400] hover:opacity-70">
        <Eye size={19} />
      </button>
      <button type="button" aria-label="Share" className="hover:opacity-70">
        <Share size={18} />
      </button>
      {ch.extraAction && <ChartColumn size={18} className="text-[#999]" />}
    </div>
  );
}

export function ChallanTable() {
  const [open, setOpen] = useState<Challan | null>(null);
  return (
    <div className="bg-white px-[16px] py-[20px] shadow-panel">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[11px] text-[#222]">
          <thead>
            <tr className="bg-brand text-white">
              {HEADERS.map((h) => (
                <th key={h} className="px-[8px] py-[8px] text-center font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CHALLANS.map((ch, i) => {
              const unpaid = !ch.paidDate;
              return (
                <tr key={ch.no} className={cn("border-b border-[#e6e6e6] align-middle", i % 2 ? "bg-[#f0f0f4]" : "bg-white")}>
                  <td className="px-[8px] py-[14px]">{ch.no}</td>
                  <td className="w-[90px] px-[8px] text-[8px] leading-tight text-[#333]">{ch.type}</td>
                  <td className="px-[8px] text-center">{ch.payable}</td>
                  <td className={cn("px-[8px] text-center font-bold", unpaid ? "text-danger" : "text-ok")}>{ch.paid}</td>
                  <td className="px-[8px] text-center">{ch.balance}</td>
                  <td className="px-[8px] leading-[1.35]">
                    Due Date: {ch.due}
                    <br />
                    Paid Date:{" "}
                    <span className={cn("font-medium", unpaid ? "text-danger" : "text-ok")}>{ch.paidDate ?? "UnPaid"}</span>
                  </td>
                  <td className="px-[8px]">{ch.mode}</td>
                  <td />
                  <td className="px-[8px] text-center">
                    {unpaid ? <Actions ch={ch} onView={setOpen} /> : <PaidBadge />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-[22px] text-[12px] font-semibold text-[#222]">
        Total Payable Amount: <span className="text-[#5a5ac8]">{TOTAL_PAYABLE}</span>
      </p>

      <Modal open={!!open} title={`Challan ${open?.no ?? ""}`} onClose={() => setOpen(null)}>
        {open && (
          <dl className="grid grid-cols-[150px_1fr] gap-y-[8px]">
            <dt className="text-[#777]">Challan Type</dt><dd>{open.type}</dd>
            <dt className="text-[#777]">Payable</dt><dd>Rs {open.payable}</dd>
            <dt className="text-[#777]">Paid</dt><dd>Rs {open.paid}</dd>
            <dt className="text-[#777]">Balance</dt><dd>Rs {open.balance}</dd>
            <dt className="text-[#777]">Due Date</dt><dd>{open.due}</dd>
            <dt className="text-[#777]">Status</dt><dd className={open.paidDate ? "text-ok" : "text-danger"}>{open.paidDate ? `Paid on ${open.paidDate}` : "UnPaid"}</dd>
          </dl>
        )}
      </Modal>
    </div>
  );
}
