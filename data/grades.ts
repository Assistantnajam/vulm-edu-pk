export interface GradeRow {
  semester: string;
  course: string;
  title: string;
  gradePoint?: string;
  grade?: string;
  percentage?: string;
  percentile?: string;
  exempted?: boolean;
}

const r = (
  semester: string,
  course: string,
  title: string,
  gradePoint: string,
  grade: string,
  percentage: string,
  percentile: string
): GradeRow => ({
  semester,
  course,
  title,
  gradePoint,
  grade,
  percentage,
  percentile,
});

export const GRADES: GradeRow[] = [
  r("Spring 2026", "PSC201", "International Relations", "3.00", "B", "75.00", "88.00"),
  r("Spring 2026", "ENG301", "Business Communication", "2.70", "B-", "69.00", "75.00"),
  r("Spring 2026", "MGT301", "Principles of Marketing", "3.00", "B", "74.00", "80.00"),
  r("Spring 2026", "SOC101", "Introduction to Sociology", "3.00", "B", "73.50", "82.00"),
  { semester: "Spring 2026", course: "VU001", title: "Introduction to e-Learning", grade: "P" },
  r("Spring 2026", "ACC501", "Business Finance", "2.70", "B-", "68.50", "72.00"),
  r("Spring 2026", "ECO403", "Macroeconomics", "3.00", "B", "75.00", "85.00"),
  r("Spring 2026", "ISL202", "Islamic Studies", "3.00", "B", "76.00", "86.00"),
];