export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'Frontend' | 'Python / Backend' | 'Systems';
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
  date: string;
  highlights: string[];
  architecture: string;
}

export interface EducationItem {
  degree: string;
  fullDegreeName: string;
  institution: string;
  location: string;
  period: string;
  status: 'In Progress / Final Year' | 'Completed';
  grade: string;
  description: string;
  courses: string[];
  highlights: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  type: 'Internship' | 'Practical Training' | 'Academic Lab' | 'Community';
  period: string;
  location: string;
  description: string;
  points: string[];
  skillsUsed: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  category: string;
  skills: string[];
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Intermediate' | 'Familiar';
    iconName?: string;
    highlight?: boolean;
  }[];
}

export const portfolioData = {
  personal: {
    name: "Ananya Gupta",
    role: "MCA Student | Aspiring Software Developer | Tech Enthusiast",
    shortBio: "Computer applications graduate (BCA completed, MCA in progress) passionate about building robust web applications, exploring backend architectures, and solving challenging algorithmic problems.",
    fullBio: [
      "Hello! I'm Ananya Gupta, a software development enthusiast and computer applications scholar currently pursuing my Master of Computer Applications (MCA) after having successfully earned my Bachelor of Computer Applications (BCA).",
      "My academic journey has built a strong theoretical foundation in data structures, algorithms, object-oriented systems, and relational databases. Concurrently, my hands-on project work has driven me to build modern, responsive web applications using React.js, Node.js, Python, and SQL/NoSQL databases.",
      "I thrive at the intersection of logical problem-solving and intuitive user interface engineering. I am constantly learning new paradigms, exploring modern frameworks, and preparing to make an impactful contribution as a full-time software engineer or graduate intern."
    ],
    avatarPlaceholder: "AG",
    emailPlaceholder: "ananya.gupta.placeholder@example.com",
    phonePlaceholder: "+91 [Contact Number Placeholder]",
    location: "India (Open to Remote & On-site Opportunities)",
    githubPlaceholder: "https://github.com/ananya-gupta-placeholder",
    linkedinPlaceholder: "https://linkedin.com/in/ananya-gupta-placeholder",
    resumeFileName: "Ananya_Gupta_Resume.pdf",
    stats: [
      { label: "Completed Degrees", value: "BCA · MCA Ongoing" },
      { label: "Core Tech Stacks", value: "React · Node · Python · SQL" },
      { label: "Key Projects", value: "4+ Full-Stack Builds" },
      { label: "Availability", value: "Open for Opportunities" }
    ]
  },

  education: [
    {
      degree: "MCA",
      fullDegreeName: "Master of Computer Applications",
      institution: "[University / Institute Name Placeholder]",
      location: "[City, State, India]",
      period: "2024 – Present (Pursuing / Final Year)",
      status: "In Progress / Final Year",
      grade: "[Current CGPA / Grade Placeholder]",
      description: "Advanced post-graduate coursework focusing on scalable software engineering, distributed database management, object-oriented design patterns, enterprise application development, and cloud computing.",
      courses: [
        "Advanced Data Structures & Algorithms",
        "Full-Stack Web Technologies",
        "Database Management Systems & Optimization",
        "Software Engineering & Agile Methodologies",
        "Operating Systems & Network Security"
      ],
      highlights: [
        "Specializing in modern full-stack application development and systems engineering",
        "Active participant in technical symposia, coding labs, and department workshops",
        "Collaborated on academic team projects following agile sprint models"
      ]
    },
    {
      degree: "BCA",
      fullDegreeName: "Bachelor of Computer Applications",
      institution: "[College / University Name Placeholder]",
      location: "[City, State, India]",
      period: "2021 – 2024",
      status: "Completed",
      grade: "[Graduation CGPA / Percentage Placeholder, e.g., 8.6/10 or First Class with Distinction]",
      description: "Undergraduate curriculum establishing strong computing fundamentals across programming languages, database architectures, operating systems, mathematics, and front-end development.",
      courses: [
        "Programming in C++ & Java",
        "Relational Database Management (MySQL)",
        "Data Structures in C/C++",
        "Web Development (HTML, CSS, JavaScript)",
        "Computer Organization & Architecture"
      ],
      highlights: [
        "Graduated with top-tier academic standing in computer applications",
        "Built capstone project demonstrating database-backed web development",
        "Awarded academic distinction and participated in inter-college tech fests"
      ]
    }
  ] as EducationItem[],

  skills: [
    {
      categoryName: "Programming Languages",
      description: "Core languages used for algorithmic problem solving and application development.",
      skills: [
        { name: "Python", level: "Advanced", highlight: true },
        { name: "Java", level: "Intermediate", highlight: true },
        { name: "C++", level: "Intermediate" },
        { name: "JavaScript", level: "Advanced", highlight: true }
      ]
    },
    {
      categoryName: "Frontend Development",
      description: "Modern client-side libraries, responsive frameworks, and interface styling.",
      skills: [
        { name: "React.js", level: "Advanced", highlight: true },
        { name: "JavaScript (ES6+)", level: "Advanced", highlight: true },
        { name: "HTML5 & Semantic Markup", level: "Advanced" },
        { name: "CSS3 & Responsive Design", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate", highlight: true },
        { name: "Bootstrap", level: "Intermediate" }
      ]
    },
    {
      categoryName: "Backend Development",
      description: "Server runtimes, RESTful API design, and web backend frameworks.",
      skills: [
        { name: "Node.js", level: "Intermediate", highlight: true },
        { name: "Express.js", level: "Intermediate", highlight: true },
        { name: "Django / Flask", level: "Intermediate" },
        { name: "RESTful API Design", level: "Intermediate" }
      ]
    },
    {
      categoryName: "Databases & Storage",
      description: "Relational modeling, SQL querying, and NoSQL document storage.",
      skills: [
        { name: "MySQL", level: "Advanced", highlight: true },
        { name: "MongoDB", level: "Intermediate", highlight: true },
        { name: "PostgreSQL", level: "Familiar" },
        { name: "Database Normalization & Query Optimization", level: "Intermediate" }
      ]
    },
    {
      categoryName: "Development Tools & Workflow",
      description: "Version control, debugging utilities, API testing, and build environments.",
      skills: [
        { name: "Git", level: "Advanced", highlight: true },
        { name: "GitHub", level: "Advanced", highlight: true },
        { name: "VS Code", level: "Advanced" },
        { name: "Postman", level: "Intermediate", highlight: true },
        { name: "npm / Yarn", level: "Intermediate" },
        { name: "Linux / CLI", level: "Familiar" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "campus-pulse",
      title: "CampusPulse — Academic & Student Operations Portal",
      tagline: "Comprehensive university management dashboard with role-based access for students and faculty.",
      category: "Full-Stack",
      description: "A centralized academic portal designed to streamline university workflows including student attendance tracking, course registration, exam scorecards, and departmental announcements.",
      longDescription: "Built to replace fragmented campus communication, CampusPulse delivers distinct interfaces for faculty and enrolled students. Faculty members can record attendance, post assignments, and upload grades, while students can track attendance thresholds, download course syllabi, and receive real-time schedule updates.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/ananya-gupta-placeholder/campus-pulse-portal",
      demoUrl: "https://campus-pulse-demo.placeholder.app",
      featured: true,
      date: "MCA Capstone Project",
      highlights: [
        "Architected JWT-secured role-based authorization for students, professors, and admin coordinators",
        "Engineered automated calculation for minimum attendance criteria with alert thresholds",
        "Designed responsive mobile-first UI with dark/light visual modes and printable transcript generation"
      ],
      architecture: "MERN Stack (MongoDB, Express, React, Node.js) with modular REST controllers and stateful React hooks."
    },
    {
      id: "task-forge",
      title: "TaskForge — Agile Team Workflow & Sprint Board",
      tagline: "Fluid drag-and-drop project tracker with Kanban columns, priority tagging, and sprint metrics.",
      category: "Frontend",
      description: "An intuitive collaborative task management web application crafted for developer teams to organize sprint backlogs, track active tasks, and visualize workflow progression.",
      longDescription: "TaskForge provides high-performance project organization with visual Kanban lanes (Backlog, In Progress, Review, Completed). Designed with keyboard shortcuts, quick tag filtering, search querying, and persistent local storage synchronization.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "LocalStorage API"],
      githubUrl: "https://github.com/ananya-gupta-placeholder/task-forge-kanban",
      demoUrl: "https://task-forge-demo.placeholder.app",
      featured: true,
      date: "Practical Project",
      highlights: [
        "Implemented smooth card drag-and-drop reordering across swimlanes with zero third-party bloat",
        "Multi-criteria filtering supporting priority levels (Critical, High, Medium, Low) and assignee tags",
        "Export and import functionality enabling JSON backup and cross-browser state sharing"
      ],
      architecture: "React functional architecture with custom hooks for state management and local persistence."
    },
    {
      id: "algo-vista",
      title: "AlgoVista — Interactive Algorithm Visualizer",
      tagline: "Educational interactive tool demonstrating sorting and pathfinding algorithms in real-time.",
      category: "Python / Backend",
      description: "An educational visualizer designed to help computer science students comprehend complex sorting algorithms (QuickSort, MergeSort, BubbleSort) and graph pathfinding visually.",
      longDescription: "Algorithm comprehension often struggles with abstract code. AlgoVista transforms data sorting and graph traversal into clear, step-by-step animations with controllable speed sliders, color-coded swap highlights, and live execution comparison metrics.",
      technologies: ["JavaScript (ES6+)", "Python", "HTML5 Canvas", "CSS3", "Algorithms"],
      githubUrl: "https://github.com/ananya-gupta-placeholder/algo-vista-visualizer",
      demoUrl: "https://algo-vista-demo.placeholder.app",
      featured: true,
      date: "BCA Final Project & Enhanced in MCA",
      highlights: [
        "Visualizes 6 sorting algorithms and Dijkstra's shortest path with real-time bar height transitions",
        "Displays time complexity, auxiliary space complexity, and step-by-step comparator operations",
        "Configurable custom array inputs, randomized generators, and execution pause/resume control"
      ],
      architecture: "Client-side animation engine utilizing async generator functions and Canvas 2D rendering."
    },
    {
      id: "novamart-store",
      title: "NovaMart — Full-Stack E-Commerce System",
      tagline: "Scalable web store prototype featuring product cataloging, category filters, and checkout simulation.",
      category: "Full-Stack",
      description: "A complete online shopping solution engineered with product catalog search, relational MySQL product schema, interactive cart drawer, and order processing flow.",
      longDescription: "NovaMart showcases end-to-end database-backed web engineering. It includes relational database design for products, customer accounts, order history, and category hierarchies, complete with REST endpoints and clean user checkout simulation.",
      technologies: ["Python (Flask / Django)", "MySQL", "JavaScript", "Bootstrap", "REST API"],
      githubUrl: "https://github.com/ananya-gupta-placeholder/novamart-ecommerce",
      demoUrl: "https://novamart-store-demo.placeholder.app",
      featured: false,
      date: "Full-Stack Project",
      highlights: [
        "Normalized 3NF relational MySQL database schema handling products, inventory stock, and orders",
        "Dynamic client filtering by price range, brand category, rating, and in-stock status",
        "Form validation and simulated secure checkout workflow with order summary generation"
      ],
      architecture: "Python backend with MySQL relational database and RESTful JSON service endpoints."
    }
  ] as Project[],

  experience: [
    {
      title: "Software Development Intern [Placeholder]",
      organization: "[Tech Company / Internship Organization Placeholder]",
      type: "Internship",
      period: "[Jun 2024 – Aug 2024 / Summer Training]",
      location: "[City / Remote Placeholder]",
      description: "Engaged in hands-on web application development, building user-facing interface components and testing backend service integrations.",
      points: [
        "Developed modular, reusable UI components using React.js and modern CSS practices",
        "Collaborated with senior engineers to construct and validate RESTful API endpoints using Postman",
        "Participated in daily standups, code reviews, and Git-based collaborative feature branching"
      ],
      skillsUsed: ["React.js", "Node.js", "Postman", "Git", "REST APIs"]
    },
    {
      title: "Graduate Lab & Full-Stack Capstone Lead",
      organization: "MCA Department, [University / Institute Name Placeholder]",
      type: "Academic Lab",
      period: "2024 – Present",
      location: "[Campus Location]",
      description: "Leading peer academic lab sessions, building practical full-stack projects, and exploring modern application architectures.",
      points: [
        "Architected database schemas and full-stack prototypes for departmental academic submissions",
        "Assisted peers in debugging Java, Python, and SQL database coursework assignments",
        "Conducted technical presentations on modern web development frameworks and API integration"
      ],
      skillsUsed: ["Python", "Java", "MySQL", "Web Technologies", "Technical Writing"]
    },
    {
      title: "Practical Projects & Open Source Learning",
      organization: "Self-Directed Technical Development",
      type: "Practical Training",
      period: "2021 – Present",
      location: "Independent Learning",
      description: "Consistent commitment to practical programming, competitive problem solving, and building open-source developer tools.",
      points: [
        "Solved 200+ algorithmic and data structure challenges across online platforms",
        "Authored well-documented codebases on GitHub demonstrating clean commit history and modular structure",
        "Regularly explored new frameworks, developer tooling, and database optimization techniques"
      ],
      skillsUsed: ["Data Structures", "Algorithms", "GitHub", "Problem Solving"]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Full-Stack Web Development Foundation [Placeholder]",
      issuer: "[Recognized Platform / Institute Placeholder, e.g., Coursera / Udemy]",
      date: "2024",
      category: "Web Engineering",
      skills: ["React.js", "Node.js", "JavaScript", "Express"]
    },
    {
      title: "Data Structures and Algorithms Mastery [Placeholder]",
      issuer: "[Educational Certification Body Placeholder, e.g., NPTEL / HackerRank]",
      date: "2023",
      category: "Computer Science",
      skills: ["Java", "Python", "Algorithms", "Time Complexity"]
    },
    {
      title: "Relational Database Design & SQL Specialization [Placeholder]",
      issuer: "[Online University / Platform Placeholder]",
      date: "2023",
      category: "Databases",
      skills: ["MySQL", "SQL Queries", "Database Normalization"]
    },
    {
      title: "Inter-College Technical Symposium & Hackathon [Placeholder]",
      issuer: "[College / University Event Placeholder]",
      date: "2023",
      category: "Achievement",
      skills: ["Teamwork", "Rapid Prototyping", "Project Presentation"]
    }
  ] as CertificationItem[]
};
