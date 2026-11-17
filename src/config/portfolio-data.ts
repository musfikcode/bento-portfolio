import type { BentoPortfolioTemplateProps } from "../components/bento-portfolio-template"

/**
 * Portfolio configuration data for Abdul Muspik.
 * Edit any values below to customize your portfolio website!
 * Empty lists or undefined properties will automatically hide their cards.
 */
export const portfolioData: BentoPortfolioTemplateProps = {
  // --- Hero & Bio ---
  name: "Abdul Muspik",
  role: "Software Engineer",
  company: "Full-Stack & AI Systems",
  previously: "Eco Restaura • Cosme Futures",
  handle: "musfikcode",
  email: "muspikabdulofficial@gmail.com",
  bookingHref: "mailto:muspikabdulofficial@gmail.com?subject=Portfolio%20Inquiry%20-%20Let's%20Work%20Together",
  accent: "#f0782a",
  defaultTheme: "system",
  bio: "Full-stack software engineer focused on building reliable web products, developer tools, and AI-enabled systems. Engineering type-safe web applications, multi-LLM workflows, and developer platforms.",

  // --- Voice Note ---
  voiceNote: {
    transcript:
      "Hi, I'm Abdul. I'm a full-stack software engineer specializing in modern web platforms, developer tooling, and AI systems. Welcome to my portfolio — feel free to explore my work and get in touch!",
    speak: true,
  },

  // --- Availability status ---
  availability: {
    label: "Available for new projects",
    status: "available",
    note: "Open for full-stack and AI engineering opportunities",
  },

  // --- Career Timeline ---
  experience: [
    {
      company: "Cosme Futures",
      year: "2025",
      role: "Software Developer (Lisbon / Remote)",
      href: "https://www.linkedin.com/in/muspik/",
    },
    {
      company: "InAmigos Foundation",
      year: "2026",
      role: "Web Development Intern",
      href: "https://www.linkedin.com/in/muspik/",
    },
    {
      company: "Eco Restaura Ambiental",
      year: "2026",
      role: "Senior Software Developer",
      href: "https://www.linkedin.com/in/muspik/",
    },
    {
      company: "Independent & Open Source",
      year: "2025 – Present",
      role: "Full-Stack & AI Systems Engineer",
      href: "https://github.com/musfikcode",
    },
  ],

  // --- Featured Projects ---
  projects: [
    {
      title: "CreatorFlow",
      client: "Distributed AI Automation",
      year: "2026",
      kind: "web",
      hue: 220,
      tags: ["Next.js 16", "React 19", "xyflow", "Inngest", "Multi-LLM"],
      description:
        "Distributed, event-driven AI workflow automation & content repurposing engine orchestrating multi-LLM pipelines (OpenAI, Anthropic Claude, Gemini, DeepSeek) with real-time WebSocket telemetry.",
      href: "https://github.com/musfikcode",
    },
    {
      title: "NightCode",
      client: "Terminal AI Coding Agent",
      year: "2026",
      kind: "app",
      hue: 275,
      tags: ["TypeScript", "CLI", "Dynamic Tool Calling", "Streaming"],
      description:
        "High-performance open-source AI CLI coding assistant with real-time chat streaming and dynamic tool execution for bash, file I/O, and grep.",
      href: "https://github.com/musfikcode",
    },
    {
      title: "Evo2 Pathogenicity Predictor",
      client: "Genomics AI Platform",
      year: "2025",
      kind: "web",
      hue: 165,
      tags: ["Python", "Evo2 Model", "Modal H100", "ClinVar"],
      description:
        "Genomic analysis application running Evo2 on Modal H100 GPUs for real-time DNA SNV clinical variant pathogenicity prediction.",
      href: "https://github.com/musfikcode",
    },
  ],

  // --- Location ---
  location: {
    city: "Dibrugarh, India",
    timeZone: "Asia/Kolkata",
    labels: [
      { text: "Brahmaputra", x: 40, y: 70 },
      { text: "Dibrugarh", x: 150, y: 150 },
      { text: "Assam", x: 210, y: 220 },
    ],
  },

  // --- How I Work / Steps ---
  steps: [
    {
      title: "Architecture & Systems Design",
      description:
        "Designing modular, type-safe architectures with clean API contracts, resilient schemas, and structured error boundaries.",
    },
    {
      title: "Implementation & DX",
      description:
        "Building fast, accessible user interfaces and high-throughput backends with TypeScript, modern frameworks, and AI workflows.",
    },
    {
      title: "Observability & Cloud Scale",
      description:
        "Deploying CI/CD pipelines, containerized microservices, and edge functions with end-to-end monitoring and telemetry.",
    },
  ],

  // --- Tech Stack / Tools ---
  tools: [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "Tailwind CSS",
    "shadcn/ui",
    "PostgreSQL",
    "Docker",
    "Hono",
    "Cloudflare",
    "Vercel",
  ],

  // --- Numbers & Stats ---
  stats: [
    { value: 15, suffix: "+", label: "Shipped Projects" },
    { value: 100, suffix: "%", label: "Type-Safe Code" },
    { value: 99, suffix: ".9%", label: "Uptime on Services" },
  ],

  // --- Moments / Photos Carousel ---
  moments: [
    { caption: "Engineering AI tools & autonomous agents", emoji: "⚡", scene: "coffee" },
    { caption: "Exploring systems design & research papers", emoji: "📖", scene: "mountains" },
    { caption: "Building open source products for developers", emoji: "🚀", scene: "football" },
  ],

  // --- Books / Reading List ---
  books: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      progress: 0.85,
      color: "#1e3a5f",
    },
    {
      title: "A Pattern Language",
      author: "Christopher Alexander",
      progress: 0.6,
      color: "#2d4a3e",
    },
    {
      title: "Clean Architecture",
      author: "Robert C. Martin",
      progress: 0.9,
      color: "#4a2d3e",
    },
  ],

  // --- Listening / Ambient Tracks ---
  tracks: [
    { title: "Midnight City", artist: "M83", duration: 243, color: "#1a2238" },
    { title: "Resonance", artist: "HOME", duration: 212, color: "#2d1b4e" },
    { title: "Solaris", artist: "Kiasmos", duration: 278, color: "#1f3b34" },
  ],

  // --- Social Links ---
  socials: [
    { label: "GitHub", href: "https://github.com/musfikcode", handle: "musfikcode" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muspik/", handle: "in/muspik" },
    { label: "Email", href: "mailto:muspikabdulofficial@gmail.com", handle: "muspikabdulofficial" },
  ],
}
