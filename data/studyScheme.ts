export type SchemeStatus = "Exempted" | "Pending" | "Studied";

export interface SchemeCourse {
  code: string;
  title: string;
  type: string;
  courseType: string;
  credits: number;
  status: SchemeStatus;
}

const c = (code: string, title: string, credits: number, status: SchemeStatus, courseType = "Regular"): SchemeCourse => ({
  code, title, type: "Required", courseType, credits, status,
});

export const STUDY_SCHEME: { semester: string; courses: SchemeCourse[] }[] = [
  {
    semester: "Semester No 1",
    courses: [
      c("CS101", "Introduction to Computing", 3, "Exempted"),
      c("ENG101", "English Comprehension", 3, "Exempted"),
      c("MTH302", "Business Mathematics & Statistics", 3, "Pending"),
      c("PAK301", "Pakistan Studies", 2, "Exempted"),
      c("SOC101", "Introduction to Sociology", 3, "Studied"),
    ],
  },
  {
    semester: "Semester No 7",
    courses: [
      c("MGMT627", "Project Management", 3, "Pending"),
      c("CS408", "Human Computer Interaction", 3, "Pending"),
      c("MGIT661", "Final Project - I", 3, "Pending", "Project"),
    ],
  },
  {
    semester: "Semester No 8",
    courses: [
      c("MGIT662", "Final Project - II", 3, "Pending", "Project"),
      c("CS614", "Data Warehousing", 3, "Pending"),
      c("MGT610", "Business Ethics", 3, "Pending"),
      c("MGT611", "Business & Labor Law", 3, "Pending"),
      c("MGT613", "Production/ Operations Management", 3, "Pending"),
    ],
  },
];
