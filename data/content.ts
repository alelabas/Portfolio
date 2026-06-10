export const site = {
  name: "Alejandro Labastie",
  fullName: "Alejandro Damian Labastie",
  role: "Software Engineer",
  location: "Buenos Aires, Argentina",
  email: "labastiealejandro@gmail.com",
  github: "https://github.com/alelabas",
  linkedin: "https://www.linkedin.com/in/alejandro-labastie/",
  instagram: "https://www.instagram.com/ale_labastie/",
  cv: "/Alejandro-Labastie-Resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alelabas.vercel.app",
};

export const heroRoles = [
  "Full Stack Engineer",
  "AI Engineering",
  "React & React Native",
  ".NET & C#",
  "Google Cloud",
  "Product Ownership",
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  /** Brand logo shown while a screenshot is pending. */
  logo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "renauticos",
    title: "ReNauticos",
    year: "2025",
    description:
      "A 0→1 nautical services marketplace, designed, built and shipped solo to the Apple App Store and Google Play in five months. React Native frontend, .NET REST API running on Google Cloud.",
    technologies: ["React Native", "TypeScript", ".NET", "ASP.NET Core", "Google Cloud"],
    demo: "https://renauticos.com",
    logo: "/projects/renauticos-logo.png",
    featured: true,
    // image pending — drop a screenshot at public/projects/renauticos.png and set it here
  },
  {
    slug: "moviegram",
    title: "Moviegram",
    year: "2024",
    description:
      "An IMDb-style platform for movie enthusiasts to explore, rate and keep track of films.",
    technologies: ["React", "TypeScript", "Tailwind CSS", ".NET"],
    github: "https://github.com/alelabas/Public-Moviegram",
    image: "/projects/moviegram.png",
  },
  {
    slug: "overspeed-rentals",
    title: "Overspeed Rentals",
    year: "2024",
    description:
      "Landing page for a Miami-based exotic car rental company — fast, responsive and conversion-focused.",
    technologies: ["React", "TypeScript", "CSS"],
    github: "https://github.com/alelabas/overspeed-rentals",
    demo: "https://overspeedrentals.com/",
    image: "/projects/overspeedrentals.png",
  },
  {
    slug: "work-tracker",
    title: "Work Tracker",
    year: "2024",
    description:
      "A task management app to plan work and keep track of hours across projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/alelabas/work-tracker",
    demo: "https://work-tracker-pied.vercel.app/",
    image: "/projects/worktracker.png",
  },
  {
    slug: "servinow",
    title: "ServiNow",
    year: "2023",
    description:
      "A car service booking platform developed as the final project of my degree.",
    technologies: ["React", "JavaScript", "PHP", "CSS"],
    github: "https://github.com/alelabas/Proyecto-Final",
    image: "/projects/servinow.png",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    year: "2026",
    description:
      "This very site — rebuilt with Next.js, Tailwind CSS, Framer Motion and Lenis for buttery-smooth scrolling.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lenis"],
    github: "https://github.com/alelabas/Portfolio",
    image: "/projects/portfolio.png",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Accenture",
    role: "Packaged App Developer Associate",
    period: "Jan 2026 — Present",
    location: "Buenos Aires, Argentina",
    bullets: [
      "Build and ship enterprise applications for clients across multiple industries, delivering on the full SDLC: solution design, implementation and production handoff.",
      "Develop backend services in C# / .NET 8 and ASP.NET Core Web API, integrated with React + TypeScript frontends.",
      "Operate in cross-functional Scrum teams, collaborating in English with international stakeholders.",
    ],
  },
  {
    company: "ReNauticos",
    role: "Founding Developer",
    period: "Aug 2025 — Dec 2025",
    location: "Buenos Aires, Argentina",
    bullets: [
      "Owned the full product pipeline of a 0→1 marketplace mobile app — from technical design to live release on the App Store and Google Play in five months, as the sole engineer.",
      "Built a cross-platform React Native app covering authentication, navigation, service listings and user-to-user contact flows.",
      "Designed and deployed a .NET / ASP.NET Core REST API on Google Cloud Platform (Cloud Run, Cloud SQL, Cloud Storage).",
      "Managed the complete release lifecycle on the Apple Developer Program and Google Play Console.",
    ],
  },
];

export const education = {
  school: "Universidad Tecnológica Nacional (UTN)",
  degree: "University Technical Degree in Programming",
  period: "2023 — 2024",
};

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    skills: ["C#", ".NET 8", "ASP.NET Core", "TypeScript", "JavaScript", "React", "React Native", "Next.js", "SQL"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["Google Cloud Platform", "Cloud Run", "Cloud SQL", "Cloud Storage", "REST APIs", "CI/CD"],
  },
  {
    label: "AI & Tooling",
    skills: ["LLM Integration", "Claude API", "Prompt Engineering", "AI-assisted Workflows"],
  },
  {
    label: "Methodologies",
    skills: ["Agile / Scrum", "End-to-end Product Ownership", "Mobile Release Management"],
  },
];
