/**
 * Projects Configuration for Yash Thakre
 * Note:
 * - Real GitHub links are only used where provided (Solar Service Management System).
 * - Other projects have configurable `githubUrl: null` or repo state, cleanly showing "Repository Private / In Progress" badge instead of broken links.
 */

export const projectCategories = ["All", "Full Stack", "Backend"];

export const projects = [
  {
    id: "solar-service",
    title: "Solar Service Management System",
    category: "Backend",
    description: "A web application designed to manage solar service operations, customer information, and administrative workflows. The project focuses on structured backend development, database integration, and maintainable application architecture.",
    tags: ["Node.js", "Express.js", "MySQL", "REST APIs", "MVC Architecture"],
    githubUrl: "https://github.com/yashthakre2415/Solar_backend",
    liveUrl: null,
    featured: true,
    status: "Active Repository",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#F59E0B",
    highlights: [
      "Modular MVC architecture separating controllers, models, and routes",
      "Relational MySQL database schemas with structured relations",
      "RESTful API endpoints for client services and administrative handling",
      "Robust request validation and structured error handling middleware"
    ],
    visualTheme: "solar"
  },
  {
    id: "ats-resume-checker",
    title: "ATS Resume Checker & Resume Builder",
    category: "Full Stack",
    description: "A resume-focused web application designed to help users create professional, ATS-friendly resumes and analyze their resumes against job requirements. The intended features include resume creation, resume analysis, and improvement suggestions.",
    tags: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    githubUrl: null, // Configure when repository is published
    liveUrl: null,
    featured: true,
    status: "In Development",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#3B82F6",
    highlights: [
      "Interactive resume builder interface",
      "Resume analysis workflow",
      "Job description matching logic",
      "ATS-oriented improvement suggestions",
      "Responsive user interface"
    ],
    visualTheme: "resume"
  },
  {
    id: "creator-application",
    title: "Creator Application",
    category: "Full Stack",
    description: "A web application project focused on providing a platform for content creators, with a responsive interface and features organized around the creator workflow.",
    tags: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    githubUrl: null, // Configure when repository is published
    liveUrl: null,
    featured: false,
    status: "Project Showcase",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "#8B5CF6",
    highlights: [
      "Responsive user dashboard designed around creator workflows",
      "Full-stack MERN foundation with scalable API structure",
      "Organized state management and component reusability"
    ],
    visualTheme: "creator"
  },
  {
    id: "voting-application",
    title: "Voting Application",
    category: "Full Stack",
    description: "A web application project designed around a digital voting workflow, with an emphasis on user interaction, structured application logic, and database-backed functionality where implemented.",
    tags: ["React.js", "Node.js", "Express.js", "Database Integration"],
    githubUrl: null, // Configure when repository is published
    liveUrl: null,
    featured: false,
    status: "Project Showcase",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    accentColor: "#06B6D4",
    highlights: [
      "Structured digital ballot and candidate selection workflow",
      "Backend verification for valid vote handling",
      "Clean UI feedback states for voting actions"
    ],
    visualTheme: "voting"
  }
];
