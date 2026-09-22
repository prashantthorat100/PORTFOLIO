/**
 * Prashant Thorat - Developer Portfolio Data Store
 * Centralized, modular data layer for easy updating and maintenance.
 * Third-Year Computer Engineering Student at VIT Pune (CS / AI)
 */

export const personalInfo = {
  name: "Prashant Thorat",
  role: "Computer Engineering Student",
  specialization: "Full-Stack Developer | AI Enthusiast | Java & Problem Solving",
  tagline: "Third-year engineering student at VIT Pune passionate about building scalable web applications, AI-powered systems, and solving real-world problems through technology.",
  institution: "Vishwakarma Institute of Technology (VIT Pune)",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science / Artificial Intelligence",
  year: "Third Year",
  location: "Pune, Maharashtra, India",
  phone: "8591092251",
  displayPhone: "+91 85910 92251",
  email: "prashant.workemail0@gmail.com",
  github: "https://github.com/prashantthorat100",
  linkedin: "https://linkedin.com/in/prashant-thorat-6b1165401",
  resumeUrl: "#resume",
  avatarUrl: "IMAGES/PassportSize Image.png",
  status: "Open to Software Engineering & AI Opportunities",
  graduationYear: "2028"
};

export const aboutData = {
  summary: [
    "I am a third-year Computer Engineering student at Vishwakarma Institute of Technology (VIT Pune), specializing in Computer Science and Artificial Intelligence. My primary engineering focus revolves around Full-Stack Web Development, practical Artificial Intelligence, and rigorous algorithmic problem solving with Java.",
    "Rather than just learning syntax, I focus on building practical, real-world software—from patent-backed computer vision detection systems and MERN stack platforms to dedicated productivity tools for engineering students. I am actively developing production-grade projects to deepen my understanding of distributed systems, scalable architectures, and clean software engineering principles.",
    "Currently, I am actively preparing for software engineering and product-company internship and full-time opportunities, continually strengthening my foundation in Data Structures, Algorithms, system design fundamentals, and full-stack engineering."
  ],
  quickStats: [
    { label: "Academic Standing", value: "3rd Year B.Tech", note: "VIT Pune (CS / AI)" },
    { label: "Core Technologies", value: "Java & MERN", note: "Full-Stack & Algorithms" },
    { label: "AI Specialization", value: "Computer Vision", note: "Applied Detection Pipelines" },
    { label: "Current Location", value: "Pune, MH", note: "Maharashtra, India" }
  ]
};

export const skillsData = [
  {
    category: "Programming",
    icon: "code",
    description: "Core languages for systems, logic, and web foundations",
    skills: [
      { name: "Java", level: "Primary", highlight: true, note: "OOP, Core & Algorithms" },
      { name: "JavaScript", level: "Advanced", highlight: true, note: "ES6+, Async, DOM" },
      { name: "HTML5", level: "Proficient", highlight: false, note: "Semantic & Accessible" },
      { name: "CSS3", level: "Proficient", highlight: false, note: "Flexbox, Grid, Animations" }
    ]
  },
  {
    category: "Full Stack Development",
    icon: "layers",
    description: "End-to-end modern web application architecture",
    skills: [
      { name: "MERN Stack", level: "Proficient", highlight: true, note: "Full-Stack Development" },
      { name: "React.js", level: "Proficient", highlight: true, note: "Hooks, State, Components" },
      { name: "Node.js", level: "Proficient", highlight: true, note: "Backend Runtime" },
      { name: "Express.js", level: "Proficient", highlight: false, note: "RESTful Routing & Middleware" },
      { name: "MongoDB", level: "Proficient", highlight: false, note: "NoSQL Schemas & Mongoose" },
      { name: "REST APIs", level: "Proficient", highlight: false, note: "API Design & Integration" }
    ]
  },
  {
    category: "AI / Machine Learning",
    icon: "cpu",
    description: "Applied machine intelligence and visual computing",
    skills: [
      { name: "Artificial Intelligence", level: "Focused", highlight: true, note: "Foundational & Applied AI" },
      { name: "Deep Learning", level: "Applied", highlight: true, note: "Neural Networks" },
      { name: "Computer Vision", level: "Applied", highlight: true, note: "OpenCV & Visual Processing" },
      { name: "AI-based Detection", level: "Applied", highlight: true, note: "Real-time Detection Pipelines" }
    ]
  },
  {
    category: "Problem Solving",
    icon: "terminal",
    description: "Algorithmic thinking and computational efficiency",
    skills: [
      { name: "Data Structures & Algorithms", level: "Core", highlight: true, note: "Trees, Graphs, DP, Arrays" },
      { name: "Java-based Problem Solving", level: "Primary", highlight: true, note: "Clean, Optimized Logic" },
      { name: "Algorithmic Thinking", level: "Core", highlight: false, note: "Time/Space Complexity" },
      { name: "LeetCode Problem Solving", level: "Active", highlight: false, note: "Consistent Practice" }
    ]
  },
  {
    category: "Tools & Technologies",
    icon: "tool",
    description: "Engineering workflow, tooling, and infrastructure",
    skills: [
      { name: "Git", level: "Proficient", highlight: false, note: "Version Control" },
      { name: "GitHub", level: "Proficient", highlight: true, note: "Collaboration & Repositories" },
      { name: "Docker", level: "Familiar", highlight: false, note: "Containerization Basics" },
      { name: "APIs & Postman", level: "Proficient", highlight: false, note: "Testing & Documentation" },
      { name: "Database Management", level: "Proficient", highlight: false, note: "CRUD, Indexing & Schemas" }
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "cv", label: "Computer Vision" },
  { id: "platforms", label: "Platforms" }
];

export const projectsData = [
  {
    id: "wildtrack-ai",
    title: "WildTrack AI",
    subtitle: "Animal Detection & Mobile Notification System",
    category: ["ai-ml", "cv"],
    description: "An AI-powered animal detection system designed to identify animals from visual input and trigger mobile notifications when a relevant animal is detected.",
    longDescription: "WildTrack AI was architected to address real-world human-wildlife conflict and wildlife surveillance challenges. By processing visual feeds using computer vision models, the system classifies animals in near-real-time and automatically triggers targeted mobile alerts, enabling immediate awareness and prompt intervention for forest authorities, agriculturalists, and communities.",
    keyFeatures: [
      "AI-based animal detection from live or recorded visual inputs",
      "Computer Vision pipeline optimized for near-real-time inference",
      "Mobile notification system delivering instant automated alerts",
      "Designed for practical wildlife monitoring and boundary protection",
      "Modular camera feed ingestion layer allowing scalable hardware integration"
    ],
    technologies: ["Python", "Computer Vision", "Deep Learning", "Mobile Alerts", "REST API", "OpenCV"],
    patentBadge: "Patent / Innovation Work",
    patentStatus: "Patent Filed / Proof Available",
    patentNote: "Documented patent-related innovation on animal detection workflow and automated mobile notification architecture. Official documentation and architectural verification available upon request.",
    status: "Patent-Related Project Work",
    isFeatured: true,
    githubUrl: "https://github.com/prashantthorat100/WILD-TRACK.git",
    demoUrl: null, // Coming soon
    hasPatentDoc: true
  },
  {
    id: "wanderlust",
    title: "WanderLust",
    subtitle: "Travel & Hotel Booking Platform",
    category: ["fullstack"],
    description: "A full-stack travel and hotel booking platform designed to allow users to explore destinations, discover accommodations, and manage travel bookings through a modern web interface.",
    longDescription: "WanderLust is an end-to-end full-stack web application inspired by global hospitality and vacation rental platforms. Built with the MERN stack, it features intuitive destination browsing, rich accommodation cards with photo galleries and reviews, user authentication, reservation state management, and a responsive booking experience.",
    keyFeatures: [
      "Travel destination discovery and dynamic search filtering",
      "Comprehensive hotel and homestay listings with amenities & reviews",
      "End-to-end booking workflow with reservation state tracking",
      "Secure user authentication and account dashboard",
      "Robust database modeling with MongoDB & Mongoose",
      "Fully responsive, mobile-first design for cross-device usability"
    ],
    technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    patentBadge: null,
    patentStatus: null,
    patentNote: null,
    status: "Full-Stack Project",
    isFeatured: true,
    githubUrl: "https://github.com/prashantthorat100/WanderLust.git",
    demoUrl: null, // Coming soon
    hasPatentDoc: false
  },
  {
    id: "stock-trading-platform",
    title: "Stock Trading Platform",
    subtitle: "Zerodha-Inspired Financial Trading Interface",
    category: ["fullstack", "platforms"],
    description: "A stock trading platform inspired by modern investment platforms such as Zerodha, created to explore financial application interfaces, portfolio management, and trading workflows.",
    disclaimer: "Educational / Project implementation inspired by existing trading platforms, not an official Zerodha product.",
    longDescription: "This educational project explores the UI architecture, data flows, and state management required for financial platforms. It models market indices, live-style stock watchlist cards, interactive portfolio allocations, and simulated buy/sell order placement workflows with a clean, high-density financial interface.",
    keyFeatures: [
      "Interactive stock dashboard with live market indicator layouts",
      "Comprehensive market information and interactive charts",
      "Portfolio interface tracking asset distribution and simulated P&L",
      "Trading workflow with order placement and transaction logs",
      "User dashboard with account metrics and customizable watchlists",
      "Fast, responsive interface styled for clarity and financial data readability"
    ],
    technologies: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Data Visualization"],
    patentBadge: null,
    patentStatus: null,
    patentNote: null,
    status: "Educational Financial Project",
    isFeatured: true,
    githubUrl: "https://github.com/prashantthorat100/stock-trading-platform",
    demoUrl: null, // Coming soon
    hasPatentDoc: false
  },
  {
    id: "deepfake-detection",
    title: "DeepFake Detection System",
    subtitle: "Facial Analysis & Gaze Metrics Detection Pipeline",
    category: ["ai-ml", "cv"],
    description: "An AI-based system focused on detecting manipulated or synthetic media using visual analysis and facial gaze-related metrics.",
    longDescription: "DeepFake media generation has evolved rapidly, making subtle biometric cues essential for detection. This project explores facial analysis and gaze consistency—examining eye alignment, blink rhythm, and facial boundary inconsistencies across sequential video frames—to identify synthetic manipulations through a structured computer vision pipeline.",
    keyFeatures: [
      "Deepfake detection pipeline using biometric and visual cues",
      "Facial landmark tracking and gaze metrics analysis",
      "Frame-by-frame temporal consistency verification",
      "Computer Vision & Deep Learning feature extraction",
      "Anomaly scoring mechanism without inflated or unrealistic accuracy claims",
      "Modular architecture enabling evaluation of multiple model weights"
    ],
    technologies: ["Python", "Computer Vision", "Deep Learning", "Facial Analysis", "Gaze Metrics", "OpenCV"],
    patentBadge: null,
    patentStatus: null,
    patentNote: null,
    status: "AI Research & Development",
    isFeatured: true,
    githubUrl: "https://github.com/prashantthorat100/DeepfakeDetector.git",
    demoUrl: null, // Coming soon
    hasPatentDoc: false
  },
  {
    id: "placement-prep-platform",
    title: "Placement Preparation Platform",
    subtitle: "Dedicated Tracker & Roadmap for Engineering Students",
    category: ["fullstack", "platforms"],
    description: "A dedicated platform designed to help engineering students organize and track their placement preparation, including Data Structures & Algorithms, projects, academic progress, and preparation activities.",
    longDescription: "Developed from firsthand student experience to streamline the engineering placement journey. The platform brings fragmented preparation tasks into a centralized workspace: structured DSA roadmaps, daily coding problem logs, streak trackers, technical project tracking, and academic milestones, with an AI-powered preparation assistant planned for future releases.",
    keyFeatures: [
      "Personalized student dashboard for comprehensive prep tracking",
      "Structured DSA roadmap categorized by topic, pattern, and difficulty",
      "Problem-solving tracker with streak counting and revision markers",
      "Coding progress metrics and self-assessment evaluations",
      "Project readiness tracking and resume checklist",
      "Academic progress and semester milestone organizer",
      "Planned integration: LeetCode/GitHub sync & AI interview assistant"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Student Tools"],
    patentBadge: null,
    patentStatus: null,
    patentNote: null,
    status: "Currently in Development",
    isFeatured: true,
    isOngoingProduct: true,
    githubUrl: "https://github.com/prashantthorat100/PLACEMENT_PREPARATION_PLATFORM.git",
    demoUrl: null, // Coming soon
    hasPatentDoc: false
  }
];

export const learningJourneyData = [
  {
    title: "Full-Stack Web Development",
    focus: "MERN Stack Architecture",
    description: "Building responsive, modern web applications from frontend interfaces in React to server-side APIs in Node.js/Express with MongoDB database persistence.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    title: "Data Structures & Algorithms",
    focus: "Algorithmic Problem Solving",
    description: "Deep dive into fundamental computational structures (arrays, linked lists, trees, graphs, heaps, dynamic programming) with continuous practice on LeetCode.",
    tags: ["Java", "Time/Space Complexity", "LeetCode", "Data Structures"]
  },
  {
    title: "Artificial Intelligence",
    focus: "Intelligent Systems & Methods",
    description: "Studying foundational AI concepts, search strategies, knowledge representation, heuristics, and intelligent agent designs applied to practical domains.",
    tags: ["Heuristics", "Search Algorithms", "Agent Systems", "Applied AI"]
  },
  {
    title: "Deep Learning",
    focus: "Neural Architectures",
    description: "Exploring artificial neural networks, convolutional networks for visual data, backpropagation dynamics, and loss function optimization.",
    tags: ["Neural Networks", "CNNs", "Model Optimization", "Deep Learning"]
  },
  {
    title: "Computer Vision",
    focus: "Visual Perception & Processing",
    description: "Hands-on implementation of image processing pipelines with OpenCV, feature detection, facial landmark extraction, and real-time inference.",
    tags: ["OpenCV", "Object Detection", "Facial Landmarks", "Image Processing"]
  },
  {
    title: "Software Engineering",
    focus: "System Design & Modularity",
    description: "Applying clean code principles, modular software architecture, Git collaboration workflows, and building software that is maintainable and testable.",
    tags: ["Clean Code", "Git Workflows", "System Design", "Modularity"]
  },
  {
    title: "Backend Development",
    focus: "APIs & Business Logic",
    description: "Designing structured REST APIs, handling asynchronous operations, middleware verification, authentication flows, and server-side validation.",
    tags: ["Node.js", "Express", "Middleware", "Authentication", "CRUD"]
  },
  {
    title: "Database Management",
    focus: "Data Modeling & Storage",
    description: "Structuring schemas for scalable storage, understanding relationships, indexing for query speed, and managing data integrity across applications.",
    tags: ["MongoDB", "Mongoose", "Data Modeling", "CRUD Operations"]
  }
];

export const educationData = {
  institution: "Vishwakarma Institute of Technology (VIT Pune)",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science / Artificial Intelligence",
  status: "Third Year (Current Student)",
  period: "2023 - 2026",
  location: "Pune, Maharashtra, India",
  description: "Pursuing rigorous undergraduate education in Computer Engineering with specialized coursework in Artificial Intelligence, Data Structures, Operating Systems, Database Management Systems, and Software Engineering. Actively applying theoretical foundations to real-world software and AI projects.",
  coursework: [
    "Data Structures & Algorithms",
    "Artificial Intelligence & Machine Learning",
    "Object-Oriented Programming (Java)",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Software Engineering Methodologies"
  ]
};

export const highlightsData = [
  {
    icon: "eye",
    title: "AI & Computer Vision Projects",
    description: "Engineered practical visual computing systems including real-time animal detection and gaze-based deepfake media analysis."
  },
  {
    icon: "award",
    title: "Patent-Related Project Work",
    description: "Conducted innovation and prepared technical documentation for an AI-powered animal detection and mobile alerting system."
  },
  {
    icon: "code",
    title: "Full-Stack Development Projects",
    description: "Architected end-to-end web applications using the MERN stack with authentication, database integration, and modern UI."
  },
  {
    icon: "terminal",
    title: "Data Structures & Algorithms",
    description: "Strong foundation in Java-based problem solving, algorithmic complexity analysis, and active LeetCode practice."
  },
  {
    icon: "layers",
    title: "Multiple End-to-End Software Projects",
    description: "Built working software systems covering user interfaces, server logic, database design, and applied machine learning models."
  },
  {
    icon: "book-open",
    title: "Engineering Student at VIT Pune",
    description: "Active third-year student at one of Maharashtra's premier engineering institutions, continuously preparing for product-company roles."
  }
];

export const hobbiesData = [
  {
    icon: "🏸",
    name: "Badminton",
    description: "Active sports enthusiast; promotes agility, quick reflexes, and mental endurance."
  },
  {
    icon: "🎬",
    name: "Video Editing",
    description: "Creative visual storytelling, pacing, and digital media production."
  },
  {
    icon: "💻",
    name: "Building Software Projects",
    description: "Prototyping practical developer tools, experimenting with APIs, and learning by coding."
  },
  {
    icon: "🤖",
    name: "Exploring AI Technologies",
    description: "Following modern AI developments, model architectures, and emerging computer vision techniques."
  }
];
