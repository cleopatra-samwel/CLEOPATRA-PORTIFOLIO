// Add or remove items freely — each category renders as its own card.
// No proficiency percentages are used on purpose (they're rarely honest).

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Code2",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    skills: ["Node.js", "Laravel", "PHP", "REST APIs"],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    id: "networking",
    title: "Networking",
    icon: "Network",
    skills: [
      "Cisco Packet Tracer",
      "IP Addressing",
      "VLANs",
      "Routing",
      "Network Topologies",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    id: "iot",
    title: "IoT & Real-time Systems",
    icon: "Cpu",
    skills: ["ESP32", "LoRa", "Sensors", "WebSockets", "IoT Dashboards"],
  },
];
