/**
 * Technical Skills Configuration for Yash Thakre
 * Note: Per project requirements:
 * - NO skill percentages or rating numbers
 * - NO progress bars or circular meters
 * - Clean badges, tags, and category cards only
 */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, modern, and interactive user interfaces.",
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderColor: "group-hover:border-cyan-500/40",
    glowColor: "rgba(6, 182, 212, 0.15)",
    skills: [
      { name: "HTML", tag: "Markup", highlight: false },
      { name: "CSS", tag: "Styling", highlight: false },
      { name: "JavaScript", tag: "Core", highlight: true },
      { name: "React.js", tag: "Library", highlight: true },
      { name: "Tailwind CSS", tag: "Styling", highlight: true },
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    description: "Developing robust server-side logic, secure auth, and RESTful architectures.",
    color: "from-violet-500/20 via-indigo-500/10 to-transparent",
    borderColor: "group-hover:border-violet-500/40",
    glowColor: "rgba(139, 92, 246, 0.15)",
    skills: [
      { name: "Node.js", tag: "Runtime", highlight: true },
      { name: "Express.js", tag: "Framework", highlight: true },
      { name: "REST APIs", tag: "Architecture", highlight: true },
      { name: "JWT Authentication", tag: "Security", highlight: false },
      { name: "MVC Architecture", tag: "Pattern", highlight: false },
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    icon: "Database",
    description: "Designing schemas, querying structured and NoSQL databases.",
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "group-hover:border-emerald-500/40",
    glowColor: "rgba(16, 185, 129, 0.15)",
    skills: [
      { name: "MongoDB", tag: "NoSQL", highlight: true },
      { name: "MySQL", tag: "Relational", highlight: true },
      { name: "SQL", tag: "Querying", highlight: false },
    ]
  },
  {
    id: "programming",
    title: "Programming & Foundations",
    icon: "Code2",
    description: "Strong foundation in object-oriented programming and algorithmic thinking.",
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderColor: "group-hover:border-amber-500/40",
    glowColor: "rgba(245, 158, 11, 0.15)",
    skills: [
      { name: "Java", tag: "Core Language", highlight: true },
      { name: "Data Structures & Algorithms", tag: "CS Fundamentals", highlight: true },
    ]
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: "Wrench",
    description: "Daily engineering tools for version control, testing, and debugging.",
    color: "from-sky-500/20 via-blue-500/10 to-transparent",
    borderColor: "group-hover:border-blue-500/40",
    glowColor: "rgba(59, 130, 246, 0.15)",
    skills: [
      { name: "Git", tag: "VCS", highlight: true },
      { name: "GitHub", tag: "Collaboration", highlight: true },
      { name: "Postman", tag: "API Testing", highlight: false },
      { name: "VS Code", tag: "IDE", highlight: false },
      { name: "npm", tag: "Package Manager", highlight: false },
    ]
  },
  {
    id: "learning",
    title: "Currently Learning",
    icon: "Sparkles",
    description: "Actively expanding my backend engineering toolkit and enterprise Java ecosystem.",
    color: "from-pink-500/20 via-purple-500/10 to-transparent",
    borderColor: "group-hover:border-pink-500/40",
    glowColor: "rgba(236, 72, 153, 0.15)",
    badge: "In Progress",
    skills: [
      { name: "Spring Boot", tag: "Java Framework", highlight: true },
      { name: "Java Backend Development", tag: "Enterprise", highlight: true },
    ]
  }
];
