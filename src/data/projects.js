// Add new projects by copying an object below.
// - Set "featured: true" on at most one project to show it in the large
//   featured layout at the top of the Projects section.
// - "images" is an array that can hold one or several screenshots. With more
//   than one, the project card shows arrows and dots to browse them.
//   Screenshots are loaded automatically from one folder per project in
//   src/assets/images/projects/ (jpg, jpeg or png, sorted by filename) —
//   just drop new files into the folder. A project with no screenshots yet
//   falls back to "/placeholder-project.svg".
// - Leave "github" or "demo" as null if a link isn't ready yet; the
//   button will show as disabled instead of linking to a fake URL.

// Sorts the modules returned by import.meta.glob by file path, so the
// screenshot order is always alphabetical by filename.
const sortByPath = (modules) =>
  Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);

const circuitMonitoringImages = sortByPath(
  import.meta.glob("../assets/images/projects/circuit-monitoring/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const fireExtinguisherImages = sortByPath(
  import.meta.glob("../assets/images/projects/fire-extinguisher/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const hospitalQueueImages = sortByPath(
  import.meta.glob("../assets/images/projects/hospital-queue/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const projectManagementImages = sortByPath(
  import.meta.glob("../assets/images/projects/project-management/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

const smartWasteBinImages = sortByPath(
  import.meta.glob("../assets/images/projects/smart-waste-bin/*.{jpg,jpeg,png}", {
    eager: true,
    import: "default",
  })
);

export const projects = [
  {
    id: "hospital-queue",
    featured: false,
    name: "Dynamic Hospital Queue Management System",
    description:
      "A dynamic hospital queue management system designed to manage patient queues and improve the flow of patients through different hospital departments.",
    // No screenshots added yet — falls back to the placeholder until files
    // are added to src/assets/images/projects/hospital-queue/.
    images: hospitalQueueImages.length
      ? hospitalQueueImages
      : ["/placeholder-project.svg"],
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
    github: "https://github.com/cleopatra-samwel/DYNAMIC-HOSPITAL-QUEUE-MANAGEMENT-SYSTEM",
    demo: null,
  },
  {
    id: "project-management-system",
    featured: true,
    name: "Project Management System",
    description:
      "A project management system designed to manage project registration, planning, review, approval, implementation, and project-related documentation.",
    images: projectManagementImages,
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
    github: "https://github.com/edortie03/Project-Management-System",
    demo: null,
  },
  {
    id: "smart-waste-bin",
    featured: false,
    name: "Smart Solid Waste Bin Fill-Level Monitoring System",
    category: "IoT Project",
    description:
      "An IoT system designed to monitor the fill level of solid waste bins in urban market areas and provide information that can help with waste collection management.",
    images: smartWasteBinImages,
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
    images: fireExtinguisherImages,
    technologies: ["IoT", "Sensors", "Embedded Systems"],
    features: [
      "Automatic fire condition detection",
      "Automated extinguishing activation",
    ],
    github: null,
    demo: null,
  },
  {
    id: "smart-energy-monitoring",
    featured: false,
    name: "Smart Energy Monitoring and Load Management System",
    category: "IoT Project",
    description:
      "A university team project (Computer Systems and Networks, Ardhi University) building an embedded system that monitors voltage, current and power consumption in real time and automatically manages a connected electrical load. Built around an Arduino Uno with voltage and current sensors, an LDR for ambient light sensing, a relay module and a buzzer, it detects overvoltage, undervoltage and overcurrent conditions, disconnects the load automatically to protect equipment, and controls lighting based on day/night conditions.",
    images: circuitMonitoringImages,
    technologies: [
      "Arduino Uno",
      "ACS712 Current Sensor",
      "Voltage Sensor Module",
      "LDR (Light Sensor)",
      "Relay Module",
      "Buzzer",
      "Arduino IDE (C/C++)",
    ],
    features: [
      "Real-time voltage, current and power monitoring",
      "Automatic overvoltage, undervoltage and overcurrent fault detection",
      "Automatic load disconnection via relay during fault conditions",
      "Buzzer alarm on abnormal electrical conditions",
      "Automatic day/night lamp control using an LDR sensor",
      "Live sensor data output via serial communication",
      "Calibrated sensors (voltage error below 1%, current error below 3%)",
    ],
    github: "https://github.com/cleopatra-samwel/SMART_ENERGY_MONITORING",
    demo: null,
  },
];
