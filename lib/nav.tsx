import type { ComponentType } from "react";
import {
  CalendarDays,
  ChartLine,
  House,
  IdCard,
  Layers,
  List,
  ListChecks,
  Settings,
  SlidersHorizontal,
  type LucideProps,
} from "lucide-react";
import { DotsGridIcon } from "@/components/ui/DotsGridIcon";

export interface NavItem {
  label: string;
  href: string;
  icon: ComponentType<LucideProps>;
}

/**
 * Sidebar navigation. The list intentionally ends at "e-ID Card":
 * there is no Mail entry and nothing after e-ID Card.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: House },
  { label: "To Do Calendar", href: "/todo-calendar", icon: List },
  { label: "Grade Book", href: "/grade-book", icon: Layers },
  { label: "Account Book", href: "/account-book", icon: SlidersHorizontal },
  { label: "Progress", href: "/progress", icon: ChartLine },
  { label: "Lecture Schedule", href: "/lecture-schedule", icon: CalendarDays },
  { label: "Notes", href: "/notes", icon: ListChecks },
  { label: "My Study Scheme", href: "/study-scheme", icon: Settings },
  { label: "My Studied Courses", href: "/studied-courses", icon: DotsGridIcon },
  { label: "e-ID Card", href: "/e-id-card", icon: IdCard },
];
