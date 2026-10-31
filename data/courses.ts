export interface Instructor {
  name: string;
  qualification: string;
  university: string;
  photo: string;
}

export interface HomeCourse {
  code: string;
  title: string;
  category: string;
  credits: number;
  lecture: number;
  instructor: Instructor;
  badges: { assignments?: number; quiz?: number; announcements?: number; activity?: number };
  activityEnabled: boolean;
}

const img = (n: string) => `/images/${n}.png`;

export const HOME_COURSES: HomeCourse[] = [
  {
    code: "ECO402", title: "Microeconomics", category: "Economics", credits: 3, lecture: 8,
    instructor: { name: "Talat Afza", qualification: "PHD", university: "Wayne State University, USA", photo: img("talat") },
    badges: { announcements: 2 }, activityEnabled: false,
  },
  {
    code: "ECO403", title: "Macroeconomics", category: "Economics", credits: 3, lecture: 9,
    instructor: { name: "Dr. Talat Afza", qualification: "Ph. D.", university: "Wayne State University –USA", photo: img("talat") },
    badges: { announcements: 2 }, activityEnabled: false,
  },
  {
    code: "IT430", title: "E-Commerce", category: "Computer Science/Information Technology", credits: 3, lecture: 9,
    instructor: { name: "Mr. Saadat Nisar", qualification: "", university: "", photo: img("saadat") },
    badges: { assignments: 1 }, activityEnabled: true,
  },
  {
    code: "MGT402", title: "Cost & Management Accounting", category: "Accounting, Banking & Finance", credits: 3, lecture: 9,
    instructor: { name: "Mian Ahmed Farhan", qualification: "Chartered Accountant", university: "The Institute of Chartered Accountants of Pakistan", photo: img("farhan") },
    badges: { announcements: 3 }, activityEnabled: false,
  },
  {
    code: "PSC201", title: "International Relations", category: "Mass Communication", credits: 3, lecture: 9,
    instructor: { name: "Syed Muhammad Ali", qualification: "Masters Degree (Development Studies)", university: "Melbourne University, Melbourne", photo: img("syed") },
    badges: { quiz: 1, announcements: 1 }, activityEnabled: true,
  },
  {
    code: "SOC101", title: "Introduction to Sociology", category: "Sociology", credits: 3, lecture: 9,
    instructor: { name: "Dr. Imran Sabir", qualification: "Ph. D.Sociology", university: "France", photo: img("imran") },
    badges: {}, activityEnabled: true,
  },
];

export interface StudiedCourse {
  code: string;
  title: string;
  category: string;
  credits: number;
  instructor: Instructor;
}

const I = (name: string, qualification: string, university: string, photo: string): Instructor => ({
  name, qualification, university, photo: img(photo),
});

export const STUDIED_COURSES: StudiedCourse[] = [
  { code: "ACC501", title: "Business Finance", category: "Accounting, Banking & Finance", credits: 3, instructor: I("Dr. Talat Afza", "Ph. D.", "Wayne State University ...", "talat") },
  { code: "CS507", title: "Information Systems", category: "Computer Science/Information Technology", credits: 3, instructor: I("Mr. Mujahid Eshai", "Chartered Accountant", "England & Wales", "mujahid") },
  { code: "ECO402", title: "Microeconomics", category: "Economics", credits: 3, instructor: I("Talat Afza", "PHD", "Wayne State University, ...", "talat") },
  { code: "IT430", title: "E-Commerce", category: "Computer Science/Information Technology", credits: 3, instructor: I("Mr. Saadat Nisar", "", "", "saadat") },
  { code: "SOC101", title: "Introduction to Sociology", category: "Sociology", credits: 3, instructor: I("Dr. Imran Sabir", "Ph. D.Sociology", "France", "imran") },
  { code: "ACC501", title: "Business Finance", category: "Accounting, Banking & Finance", credits: 3, instructor: I("Dr. Talat Afza", "Ph. D.", "Wayne State University ...", "talat") },
  { code: "CS101", title: "Introduction to Computing", category: "Computer Science/Information Technology", credits: 3, instructor: I("Dr. M. Tanvir Afzal", "PhD", "Graz University of Tech, ...", "tanvir") },
  { code: "CS201", title: "Introduction to Programming", category: "Computer Science/Information Technology", credits: 3, instructor: I("Dr. Naveed A. Malik", "ScD Electrical ...", "Massachusetts Institute ...", "naveed") },
  { code: "CS302", title: "Digital Logic Design", category: "Computer Science/Information Technology", credits: 3, instructor: I("Dr. Waseem Ikram", "PhD (Electrical ...", "University of Manchester", "waseem") },
  { code: "CS304", title: "Object Oriented Programming", category: "Computer Science/Information Technology", credits: 3, instructor: I("Mr. Shafiq-ur-Rehman", "M.Sc.(Electrical ...", "George Washington ...", "shafiq") },
  { code: "CS403", title: "Database Management Systems", category: "Computer Science/Information Technology", credits: 3, instructor: I("Dr. Nayyer Masood", "Ph.D Computer Science", "Bradford University, UK", "nayyer") },
  { code: "CS601", title: "Data Communication", category: "Computer Science/Information Technology", credits: 3, instructor: I("Mr. Hammad Khalid Khan", "M.S Electrical ...", "Oklahoma State ...", "hammad") },
  { code: "CS610", title: "Computer Networks", category: "Computer Science/Information Technology", credits: 3, instructor: I("Mr. Hammad Khalid Khan", "M.S Electrical ...", "Oklahoma State ...", "hammad") },
  { code: "ENG201", title: "Business and Technical ...", category: "English", credits: 3, instructor: I("Saima Asghar", "MA ELT", "University of Warwick", "saima") },
  { code: "ISL202", title: "Islamic Studies", category: "Humanities Distribution", credits: 2, instructor: I("Abdul Quddoos Durrani", "M.Phill", "Minhaj University Lahore", "quddoos") },
  { code: "MGT101", title: "Financial Accounting", category: "Accounting, Banking & Finance", credits: 3, instructor: I("Mian Ahmad Farhan (ACA)", "Chartered Accountant", "The Institute of ...", "farhan") },
  { code: "MGT211", title: "Introduction To Business", category: "Management", credits: 3, instructor: I("Dr. Rizwan Saleem", "PhD Management", "University of Management ...", "rizwan") },
  { code: "MGT301", title: "Principles of Marketing", category: "Marketing", credits: 3, instructor: I("Dr. Muhammad Rizwan Saleem Sandhu", "PhD Management (SME ...", "University of Management ...", "rizwan") },
  { code: "PSC201", title: "International Relations", category: "Mass Communication", credits: 3, instructor: I("Syed Muhammad Ali", "Masters Degree ...", "Melbourne University, ...", "syed") },
  { code: "SOC101", title: "Introduction to Sociology", category: "Sociology", credits: 3, instructor: I("Dr. Imran Sabir", "Ph. D.Sociology", "France", "imran") },
  { code: "VU001", title: "Introduction to e-Learning", category: "Virtual University", credits: 1, instructor: I("Virtual University of Pakistan", "", "", "vu-logo") },
];
