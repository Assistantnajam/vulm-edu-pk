export interface Challan {
  no: string;
  type: string;
  payable: number;
  paid: number;
  balance: number;
  due: string;
  paidDate?: string;
  /** green when paid on/before due or overdue-but-paid, red when unpaid */
  mode?: string;
  extraAction?: boolean;
}

const c = (no: string, type: string, payable: number, paid: number, balance: number, due: string, paidDate?: string, extraAction = false): Challan => ({
  no, type, payable, paid, balance, due, paidDate, mode: paidDate ? "TMFBLOnline" : undefined, extraAction,
});

export const CHALLANS: Challan[] = [
  c("21955743", "NewAdmission", 11405, 11405, 0, "Mar 20, 2025", "Mar 20, 2025"),
  c("21882893", "NewAdmission_ProcessFee", 1500, 1500, 0, "Mar 01, 2025", "Feb 22, 2025"),
  c("22421794", "Installments_FS", 4863, 5263, 0, "May 05, 2025", "May 15, 2025"),
  c("23271598", "SocietiesAndSportsFund", 500, 500, 0, "Aug 20, 2025", "Jul 20, 2025"),
  c("22421795", "Installments_FS", 2182, 2182, 0, "May 20, 2025", "May 20, 2025"),
  c("22421796", "Installments_FS", 2182, 2382, 0, "Jun 11, 2025", "Jun 23, 2025"),
  c("23284042", "EndowmentFund", 1000, 1000, 0, "Jul 21, 2025", "Oct 10, 2025"),
  c("22421797", "Installments_FS", 2182, 2382, 0, "Jul 10, 2025", "Jul 21, 2025"),
  c("22421798", "Installments_FS", 2182, 2382, 0, "Aug 11, 2025", "Oct 10, 2025"),
  c("24625413", "Installments_FS", 8145, 8545, 0, "Nov 07, 2025", "Jan 07, 2026"),
  c("24104235", "SocietiesAndSportsFund", 500, 0, -500, "Dec 15, 2025"),
  c("24625414", "Installments_FS", 3273, 3473, -500, "Dec 05, 2025", "Jan 07, 2026"),
  c("24625415", "Installments_FS", 3273, 3473, -500, "Jan 12, 2026", "Mar 18, 2026"),
  c("24625416", "Installments_FS", 3273, 3473, -500, "Jan 26, 2026", "Mar 18, 2026"),
  c("25428566", "Misc", 2000, 2000, -500, "Feb 17, 2026", "Feb 12, 2026"),
  c("24625417", "Installments_FS", 3273, 3473, -500, "Feb 10, 2026", "Mar 18, 2026"),
  c("25728904", "Full Semester", 21600, 22800, -500, "May 05, 2026", "Jun 23, 2026"),
  c("26123636", "SocietiesAndSportsFund", 500, 0, -1000, "Jun 15, 2026"),
  c("27441073", "Full Semester", 7600, 0, -8600, "Sep 04, 2026"),
  c("27754135", "Full Semester", 20750, 0, -29350, "Nov 05, 2026", undefined, true),
  c("28028725", "SocietiesAndSportsFund", 500, 0, -29850, "Dec 15, 2026"),
];

export const TOTAL_PAYABLE = "Rs 30450 / $ 0";
