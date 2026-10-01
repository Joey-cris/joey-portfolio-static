const ME = {
  name: "Joey C. Galolo", initials: "JG",
  email: "joeygalolo07@gmail.com", phone: "09934813088", location: "Philippines",
  github: "https://github.com/", linkedin: "https://www.linkedin.com/",
  cv: "cv/Joey-Galolo-CV.pdf",
};

const TECH = ["HTML", "CSS", "JavaScript", "PHP", "React.js", "Java", "Spring Boot", "REST API", "MySQL", "Git", "QGIS", "Android Studio"];
const CREATIVE = ["Photography", "Photojournalism", "Photo Editing", "Visual Storytelling", "Multimedia Documentation", "Logo Design", "Digital Marketing"];
const SOFT = ["Critical Thinking", "Team Collaboration", "Flexibility", "Time Management", "Fast Learner", "Problem-solving", "Attention to Detail"];

// img = filename (no extension) inside src/assets/projects/
const PROJECTS = [
  { img: "attendance", title: "Attendance Management System", cat: "Web Application", desc: "Web-based attendance management system developed as an IT project.", tech: ["PHP", "MySQL", "JavaScript"], link: "", gh: "" },
  { img: "van", title: "Van Management System", cat: "Web Application", desc: "Management system designed to organize and manage van-related information and operations.", tech: ["PHP", "MySQL", "CSS"], link: "", gh: "" },
  { img: "payroll", title: "Payroll & Compensation System", cat: "Full Stack", desc: "A full-stack payroll and compensation management system.", tech: ["React.js", "Java", "Spring Boot", "MySQL"], link: "", gh: "" },
  // Dugang pa: { img: "filename", title, cat, desc, tech: [], link, gh }
];

// Optional captions for src/assets/photos/<file>
const PHOTO_INFO = {
  // "photo-1.jpg": { event: "Intramurals 2025", date: "Feb 2025", place: "SLSU", desc: "Opening parade." },
};

const CERTS = [
  { file: "ojt-armada", title: "On-the-Job Training – Certificate of Completion", org: "Armada Logics", date: "Jan 19 – Apr 10, 2026 · 600 hours" },
  { file: "java-armada", title: "Java Programming Course (Java Fundamentals to Spring MVC)", org: "Armada Logics", date: "Feb 24 – Mar 18, 2026 · 240 hours" },
  { file: "logo-design", title: "Developing Designs for a Logo", org: "TESDA Online Program", date: "September 14, 2026" },
  { file: "digital-marketing", title: "Introduction to Digital Marketing", org: "TESDA Online Program", date: "August 24, 2026" },
  { file: "ai-scam-awareness", title: "AI Ready ASEAN – Digital Literacy & Scam Awareness", org: "ASEAN Foundation · SmartCT", date: "September 22, 2026" },
  { file: "qgis", title: "QGIS Training Program", org: "SLSU TO, San Isidro, Southern Leyte", date: "October 21, 2025" },
];

const WORK_CATS = { photography: "Photography", it: "IT", web: "Web Development", internship: "Internship" };
