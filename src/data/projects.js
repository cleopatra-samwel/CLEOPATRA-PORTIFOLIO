// Add new projects by copying an object below.
// - Set "featured: true" on at most one project to show it in the large
//   featured layout at the top of the Projects section.
// - "image" is a placeholder path — drop real screenshots into
//   src/assets/images/projects/ and update the path here.
// - Leave "github" or "demo" as null if a link isn't ready yet; the
//   button will show as disabled instead of linking to a fake URL.

export const projects = [
  {
    id: "hospital-queue",
    featured: true,
    name: "Dynamic Hospital Queue Management System",
    description:
      "A dynamic hospital queue management system designed to manage patient queues and improve the flow of patients through different hospital departments.",
    image: "/placeholder-project.svg",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Ant Design",
      "Laravel",
      "PostgreSQL",
      "Laravel Sanctum",
      "Laravel Reverb / WebSockets",
      "Howler.js",
    ],
    features: [
      "Patient registration",
      "Normal and emergency queues",
      "Doctor, laboratory and pharmacy queues",
      "Billing and queue ticket management",
      "Priority management",
      "Real-time queue updates",
      "Voice queue announcements",
      "Role-based dashboards",
      "Reporting and analytics",
    ],
    github: null,
    demo: null,
  },
  {
    id: "project-management-system",
    featured: false,
    name: "Project Management System",
    description:
      "A project management system designed to manage project registration, planning, review, approval, implementation, and project-related documentation.",
    image: "/placeholder-project.svg",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Ant Design",
      "Redux Toolkit",
      "Laravel",
      "PostgreSQL",
      "Laravel Sanctum",
    ],
    features: [
      "Project registration and planning",
      "Project review and approval",
      "Requirements management",
      "Implementation planning",
      "Project documentation",
      "Role-based workflows",
    ],
    github: null,
    demo: null,
  },
  {
    id: "smart-waste-bin",
    featured: false,
    name: "Smart Solid Waste Bin Fill-Level Monitoring System",
    category: "IoT Project",
    description:
      "An IoT system designed to monitor the fill level of solid waste bins in urban market areas and provide information that can help with waste collection management.",
    image: "/placeholder-project.svg",
    technologies: [
      "ESP32",
      "LoRa",
      "Ultrasonic Sensors",
      "Node.js",
      "MySQL",
      "Socket.IO",
    ],
    features: [
      "Real-time bin fill-level monitoring",
      "Web dashboard for collection status",
      "Long-range communication via LoRa",
    ],
    github: null,
    demo: null,
  },
  {
    id: "fire-extinguishing-system",
    featured: false,
    name: "IoT Automatic Fire Extinguishing System",
    category: "IoT Project",
    description:
      "An IoT project designed to detect fire conditions and automatically activate a fire-extinguishing mechanism.",
    image: "/placeholder-project.svg",
    technologies: ["IoT", "Sensors", "Embedded Systems"],
    features: [
      "Automatic fire condition detection",
      "Automated extinguishing activation",
    ],
    github: null,
    demo: null,
  },
];
