export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Business System" | "Full-Stack Web" | "FinTech / Payments" | "Healthcare" | "Infrastructure / Linux" | "Educational System" | "E-Commerce";
  tagline: string;
  description: string;
  clientContext: string;
  problem: string;
  solution: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
    security: string[];
  };
  metrics: { label: string; value: string; detail: string }[];
  tags: string[];
  features: string[];
  schemaSnippet?: string;
  apiSnippet?: string;
  demoUrl?: string;
  githubUrl?: string;
  stars?: number;
  featured: boolean;
  status: "Production" | "Active Enterprise" | "Open Source Core";
}

export interface ServiceItem {
  id: string;
  title: string;
  divisionCode: string;
  layer: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  technologies: string[];
  timeline: string;
  categoryTag?: string;
  icon: string;
  accentColor: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: "Architecture" | "Database" | "DevOps & CI/CD" | "Education & Career" | "Web Performance" | "Hardware Procurement";
  tags: string[];
  featured: boolean;
  content: string;
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
}

export interface LabExperiment {
  id: string;
  title: string;
  subtitle: string;
  type: "sql-engine" | "api-latency" | "jwt-debugger" | "arch-simulator";
  description: string;
}

export interface EvolutionMilestone {
  step: string;
  era: string;
  title: string;
  description: string;
  badgeColor: string;
}

export interface StackLayer {
  layerNumber: string;
  title: string;
  subtitle: string;
  borderColor: string;
  accentColor: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Paul Wanjiru",
    companyName: "InfraBit Systems",
    companyWebsite: "https://www.infrabitsystems.co.ke",
    companyDomain: "infrabitsystems.co.ke",
    companyTagline: "Architecting African Digital Infrastructure.",
    companyVision: "Building resilient, high-performance web platforms and digital systems across Africa.",
    title: "Full-Stack Software Engineer & Systems Developer | Enterprise Architect | IT Instructor",
    tagline: "I don't just write code. I design, build, deploy and maintain real-world software systems.",
    availability: "OPERATIONAL & ACCEPTING SELECTED ENGAGEMENTS",
    availableForHire: true,
    location: "Nakuru City, Kenya · Global / Remote",
    experienceYears: "7+ Years Practical Engineering & Instruction",
    avatar: "/paul-wanjiru.jpg",
    bio: [
      "I am Paul Wanjiru, a Full-Stack Software Engineer, Systems Architect, and Technical Lead based in Nakuru City, Kenya.",
      "I engineer and architect real-world production platforms across Africa, having developed mission-critical client systems including college academic ERPs, e-commerce storefronts with automated M-PESA Daraja checkouts, NGO platforms, executive web applications, and high-concurrency payment gateways.",
      "As an active IT Instructor and technical mentor, I have trained over 650+ developers and students. I specialize in building scalable, secure, and resilient web infrastructure with deep attention to clean code, database optimization, and sub-second performance."
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      email: "mailto:infrabitsystems@gmail.com",
      phone: "+254 114 988 331",
      whatsapp: "https://wa.me/254114988331",
      hqNode: "Nakuru HQ Core Node, Kenya",
      website: "https://www.infrabitsystems.co.ke"
    },
    metrics: [
      { label: "Uptime SLA Guaranteed", value: "99.99%", context: "Monitored across production server fleets and client systems" },
      { label: "Daily African Node Requests", value: "30M+", context: "High-speed regional edge caching & transactions" },
      { label: "Students & Users Hosted", value: "1M+", context: "Continuous uptime across institutional educational portals" },
      { label: "Average Client Sales Lift", value: "300%", context: "Measured on high-conversion e-commerce & MPESA checkouts" },
    ],
    technicalIndicators: [
      "PHP 8.2+ (OOP / DDD)",
      "TypeScript / JavaScript",
      "Next.js 16 & React 19",
      "MySQL / MariaDB Optimization",
      "Cloud VPS & Edge Infrastructure",
      "MPESA STK & Payment APIs",
      "Linux SysAdmin & CI/CD",
      "Hardware & Server Procurement"
    ]
  },

  evolutionMilestones: [
    {
      step: "01",
      era: "Web Design Era",
      title: "Stunning Digital Fronts",
      description: "InfraBit began by crafting highly interactive, stunning web experiences. We set a new standard for modern design and sub-second page performance in the African digital space.",
      badgeColor: "#00F0FF"
    },
    {
      step: "02",
      era: "Custom Software Era",
      title: "Bespoke System Tailoring",
      description: "We scaled into bespoke systems engineering, translating complex business processes into robust, custom-tailored software applications that power everyday workflows.",
      badgeColor: "#3b82f6"
    },
    {
      step: "03",
      era: "Cloud Hosting Era",
      title: "Elite Hosting Solutions",
      description: "To ensure our custom builds stayed lightning fast and 100% online, we launched our own secure hosting infrastructure with guaranteed 99.99% uptime.",
      badgeColor: "#FFD166"
    },
    {
      step: "04",
      era: "Hardware Supply Era",
      title: "Premium Enterprise Hardware",
      description: "We established high-performance hardware supply pipelines, procurement, and deployment of top-tier developer workstations, enterprise servers, and networking gear.",
      badgeColor: "#00F0FF"
    }
  ] as EvolutionMilestone[],

  infrastructureLayers: [
    {
      layerNumber: "LAYER 04",
      title: "Design Layer",
      subtitle: "Stunning Web Design & Modern Frontend Development (Sub-Second UI/UX, Next.js, SEO & Edge CDN)",
      borderColor: "rgba(0,240,255,0.3)",
      accentColor: "#00F0FF"
    },
    {
      layerNumber: "LAYER 03",
      title: "Software Layer",
      subtitle: "Bespoke Custom Software & Automated Microservices (MPESA APIs, Invoicing, RBAC & Core Logic)",
      borderColor: "rgba(59,130,246,0.3)",
      accentColor: "#3b82f6"
    },
    {
      layerNumber: "LAYER 02",
      title: "Hosting Layer",
      subtitle: "Secure High-Availability Web Hosting & DDoS Shielding (99.99% SLA, Anycast CDN, Automated Backups)",
      borderColor: "rgba(255,209,102,0.3)",
      accentColor: "#FFD166"
    },
    {
      layerNumber: "LAYER 01",
      title: "Hardware Layer",
      subtitle: "Developer Workstations, Enterprise Rack Servers & Networking (Intel Xeon/EPYC, Managed Switches)",
      borderColor: "rgba(0,240,255,0.3)",
      accentColor: "#00F0FF"
    }
  ] as StackLayer[],

  skills: [
    {
      category: "Core Languages & Systems",
      items: [
        { name: "PHP 8.2+", level: 95, context: "Modern OOP, DDD, custom frameworks, Laravel, raw PDO performance" },
        { name: "TypeScript / JavaScript", level: 94, context: "Strict typing, ESNext, React 19, Next.js 16, Node.js concurrency" },
        { name: "Python 3.11", level: 88, context: "Automation daemons, data analysis, FastAPI, scraping, ETL pipelines" },
        { name: "SQL (MySQL / Postgres)", level: 96, context: "Schema normalization, indexing strategies, CTEs, ACID transactions" },
        { name: "Bash & Shell Scripting", level: 88, context: "Linux sysadmin, backup automation, cron orchestrators, deployment hooks" },
      ]
    },
    {
      category: "Full-Stack & Frameworks",
      items: [
        { name: "Next.js 16 & React 19", level: 93, context: "App router, Server Actions, streaming SSR, Turbopack, Tailwind CSS" },
        { name: "Node.js & Express / Fastify", level: 90, context: "High-throughput APIs, background worker queues, microservice gateways" },
        { name: "REST & Webhooks Architecture", level: 98, context: "Idempotency keys, HMAC-SHA256 signature verification, MPESA STK Push" },
        { name: "Mobile (Android / PWA)", level: 85, context: "Offline-first sync, background workers, responsive mobile portals" },
      ]
    },
    {
      category: "Databases & Storage",
      items: [
        { name: "MySQL / MariaDB", level: 96, context: "InnoDB tuning, compound indexes, replication, EXPLAIN query optimization" },
        { name: "PostgreSQL", level: 88, context: "JSONB queries, full-text search, row-level security, connection pooling" },
        { name: "Redis & In-Memory", level: 88, context: "Caching strategies, rate limiting counters, pub/sub event broadcasting" },
      ]
    },
    {
      category: "Infrastructure, Hosting & Hardware",
      items: [
        { name: "Linux System Administration", level: 92, context: "Ubuntu / Debian / AlmaLinux, systemd services, UFW, SSH hardening" },
        { name: "Web Hosting & Cloud VPS", level: 94, context: "InfraBit cloud servers, 99.99% uptime, automated backups, Anycast CDN" },
        { name: "Nginx & Reverse Proxies", level: 92, context: "SSL termination, load balancing, Gzip/Brotli, DDoS rate-limiting" },
        { name: "Enterprise Hardware Procurement", level: 86, context: "Custom workstations, Intel Xeon/EPYC rack servers, managed switching" },
      ]
    }
  ],

  projects: [
    {
      id: "maximilian-college",
      slug: "maximilian-college-portal",
      title: "Maximilian College Academic Portal & SIS",
      category: "Educational System",
      tagline: "Scalable e-learning portal, student management systems, and engaging online course platforms hosted by InfraBit Systems.",
      description: "Deployed for Maximilian College to deliver digital academic records, student portals, online lecture notes, and automated fee reconciliation. Hosted on InfraBit's high-availability VPS infrastructure with guaranteed continuous uptime.",
      clientContext: "Production deployment for Maximilian College, Kenya. Part of InfraBit's institutional education tier hosting over 1M+ student interactions.",
      problem: "Paper registration and manual transcript generation caused administrative bottlenecks and payment record discrepancies during semester starts.",
      solution: "Engineered an integrated educational portal with student login, course registration, attendance tracking, and MPESA fee integration with automated instant receipts.",
      architecture: {
        frontend: "Modern Responsive Web UI + Mobile Student Portal + Clean Typography",
        backend: "PHP 8.2 + Node.js Microservices + Automated Email/SMS Notification Queues",
        database: "MySQL 8.0 InnoDB with partitioned academic semester logs",
        infrastructure: "InfraBit Cloud VPS + Nginx + Cloudflare Edge CDN + Daily Offsite Backups",
        security: ["Role-Based Access Control (Admin, Lecturer, Student)", "Signed Transcript Checksums", "SSL A+ Grade Encryption"]
      },
      metrics: [
        { label: "Students Hosted", value: "1M+", detail: "Institutional tier peak traffic handled without latency" },
        { label: "Uptime SLA", value: "99.99%", detail: "Zero dropped exam submission windows" },
        { label: "Admin Time Saved", value: "85%", detail: "Automated student onboarding & fee verification" }
      ],
      tags: ["Education", "PHP 8", "MySQL", "InfraBit Cloud", "Student Portal", "MPESA"],
      features: [
        "Student self-service portal with course registration and mark sheets",
        "Lecturer grading dashboard with automated grade point calculation",
        "Direct MPESA paybill reconciliation with instantaneous fee clearance",
        "Cloud-based document archive for syllabus, assignments, and announcements",
        "Automated PDF transcripts and clearance certificates"
      ],
      demoUrl: "https://maximiliancollege.co.ke",
      featured: true,
      status: "Production"
    },
    {
      id: "bevs-foods",
      slug: "bevs-foods-ecommerce",
      title: "Bevs Foods High-Conversion Online Store",
      category: "E-Commerce",
      tagline: "Custom e-commerce platform featuring automated checkout, MPESA integration, real-time inventory management, and 300% sales lift.",
      description: "An enterprise online shopping portal engineered for Bevs Foods. Tailored from the ground up for African consumers with seamless MPESA STK Push checkout, real-time stock deductions, and sub-second page performance.",
      clientContext: "Live commercial production for Bevs Foods Kenya, processing daily food retail and wholesale delivery orders.",
      problem: "Slow legacy website led to cart abandonment on mobile networks and tedious manual confirmation of MPESA reference codes.",
      solution: "Built a high-performance modern web store with instant 1-click MPESA payment prompt, automated order dispatch notification, and real-time stock synchronization.",
      architecture: {
        frontend: "Responsive Modern Storefront + Sub-Second Asset Delivery + Mobile Ergonomics",
        backend: "Node.js & PHP 8.2 Transaction Engine + MPESA Daraja STK Push API",
        database: "MySQL 8.0 with ACID transactional inventory reservation tables",
        infrastructure: "InfraBit Cloud Server + Redis Cache + Edge CDN",
        security: ["Idempotent Webhook Verification", "Encrypted Customer Data", "DDoS Protected Payment Endpoints"]
      },
      metrics: [
        { label: "Sales Lift", value: "+300%", detail: "Attributed to sub-second mobile checkout speed" },
        { label: "Checkout Completion", value: "94.8%", detail: "Frictionless MPESA STK push prompt integration" },
        { label: "Page Load Time", value: "< 600ms", detail: "Optimized for East African mobile carriers" }
      ],
      tags: ["E-Commerce", "MPESA", "Node.js", "MySQL", "InfraBit Cloud", "Retail"],
      features: [
        "Automated MPESA STK Push checkout with instant callback receipt",
        "Real-time stock deduction preventing overselling of perishable goods",
        "WhatsApp and SMS automated order dispatch notifications to delivery couriers",
        "Interactive customer order tracking with live status updates",
        "Merchant sales analytics dashboard with daily revenue reports"
      ],
      demoUrl: "https://bevsfoods.co.ke",
      featured: true,
      status: "Production"
    },
    {
      id: "sammymoindi-portfolio",
      slug: "sammy-moindi-executive-showcase",
      title: "Sammy Moindi Executive Brand Showcase",
      category: "Full-Stack Web",
      tagline: "High-end executive portfolio, interactive biography, and digital identity built for maximum impression and speed.",
      description: "A bespoke executive showcase engineered for Sammy Moindi. Combines high-craft visual aesthetics, sub-second load times, dynamic micro-interactions, and comprehensive career documentation.",
      clientContext: "Live executive showcase deployed at sammymoindi.com, crafted by InfraBit Systems.",
      problem: "Standard template portfolio builders lacked technical finesse, loaded slowly on mobile networks, and felt generic.",
      solution: "Designed and engineered a pixel-perfect, custom-tailored executive portfolio with dark mode glassmorphism, bespoke typography, and SEO indexing.",
      architecture: {
        frontend: "Modern HTML5/CSS3/JavaScript + Custom Glassmorphism + Responsive Grid",
        backend: "Lightweight Serverless Contact Relay + Anti-Spam Security Token",
        database: "Static Generation with Edge Caching",
        infrastructure: "InfraBit Edge Infrastructure + 99.99% High-Availability CDN",
        security: ["Content Security Policy (CSP)", "SSL A+ Rating", "Bot-proof Contact Terminal"]
      },
      metrics: [
        { label: "Google Lighthouse", value: "99/100", detail: "Performance, Accessibility & SEO" },
        { label: "First Contentful Paint", value: "0.3s", detail: "Instantaneous visual render across devices" },
        { label: "Client Inquiries", value: "5x Growth", detail: "Professional executive conversion" }
      ],
      tags: ["Executive Portfolio", "UI/UX", "Glassmorphism", "InfraBit Systems", "Web Performance"],
      features: [
        "Sleek futuristic design language with tailored color harmonies",
        "Interactive career milestones and professional timeline",
        "Sub-second page load speeds optimized for all screen sizes",
        "Integrated encrypted executive contact terminal",
        "Structured Schema.org metadata for rich search engine indexing"
      ],
      demoUrl: "https://sammymoindi.com",
      featured: true,
      status: "Production"
    },
    {
      id: "rocksan-foundation",
      slug: "rocksan-foundation-portal",
      title: "Rocksan Foundation Community & Donation Portal",
      category: "Full-Stack Web",
      tagline: "Tailored high-security website, automated donation pipeline, and community outreach portal for non-profit organizations.",
      description: "Engineered for Rocksan Foundation to mobilize international and local community support. Includes transparent project tracking, automated donation processing, and high-reliability outreach channels.",
      clientContext: "Production platform for Rocksan Foundation (rocksanfoundation.or.ke), empowering grassroots community initiatives.",
      problem: "The foundation had fragmented donation channels, manual donor bookkeeping, and difficulty providing transparent campaign progress.",
      solution: "Created an all-in-one outreach and donation portal featuring automated multi-currency donation processing, donor recognition walls, and interactive impact dashboards.",
      architecture: {
        frontend: "Accessible Modern UI + Campaign Gallery + Storytelling Layouts",
        backend: "Secure Payment Dispatcher + Automated Tax Receipt Generator",
        database: "PostgreSQL with encrypted donor registry & transparent project ledger",
        infrastructure: "InfraBit High-Availability Web Hosting with DDoS Shielding",
        security: ["PCI-DSS Compliant Gateway Integration", "SSL A+ Grade", "Automated Daily Backups"]
      },
      metrics: [
        { label: "Donation Growth", value: "240%", detail: "Direct increase in online donor conversions" },
        { label: "Donation Latency", value: "Instant", detail: "Real-time payment receipting & campaign allocation" },
        { label: "Global Reach", value: "14 Countries", detail: "Supporters contributing across Africa and abroad" }
      ],
      tags: ["NGO Portal", "Donations", "Community", "InfraBit Cloud", "FinTech", "Social Impact"],
      features: [
        "Multi-tier donation processing with instant digital receipt dispatch",
        "Live campaign progress meters and transparency impact stories",
        "Community volunteer onboarding and event registration portal",
        "Mobile-responsive design optimized for low-bandwidth networks",
        "Comprehensive donor management system for foundation trustees"
      ],
      demoUrl: "https://rocksanfoundation.or.ke",
      featured: true,
      status: "Production"
    },
    {
      id: "euntech-college",
      slug: "euntech-college-portal",
      title: "Euntech College Campus Management System",
      category: "Educational System",
      tagline: "Unified technical college portal managing admissions, curriculum modules, and technical certification tracking.",
      description: "A purpose-built technical institution portal engineered for Euntech College. Empowers engineering and technical students with course materials, fee tracking, and online enrollment.",
      clientContext: "Live institutional platform serving technical students across Nakuru and Kenya.",
      problem: "Manual admission tracking and paper syllabi caused student delays and lost certification records.",
      solution: "Architected a unified college management system hosted on InfraBit Systems infrastructure with zero downtime during peak registration weeks.",
      architecture: {
        frontend: "Responsive Student & Staff Portal + Fast Table Pagination",
        backend: "PHP 8.2 Modular Core + REST APIs + Student ID Generation Engine",
        database: "MySQL 8.0 InnoDB with strict foreign key referential integrity",
        infrastructure: "InfraBit VPS + Nginx + Automated Snapshot Backups",
        security: ["Role-Based Access Control", "Encrypted Credentials", "Audit Log Trail"]
      },
      metrics: [
        { label: "Enrollment Speed", value: "4x Faster", detail: "Digital self-enrollment vs in-person queues" },
        { label: "System Availability", value: "99.99%", detail: "Continuous uptime across exam and intake seasons" },
        { label: "Student Satisfaction", value: "98%", detail: "Streamlined online mark and fee verification" }
      ],
      tags: ["Education", "PHP 8", "MySQL", "Campus Portal", "InfraBit Cloud"],
      features: [
        "Online student application and document upload pipeline",
        "Modular course management with syllabus download repository",
        "Automated fee statement generator with payment status tracking",
        "Staff grading interface with bulk score uploads",
        "Digital student ID card and clearance certificate generator"
      ],
      demoUrl: "https://euntechcollege.com",
      featured: false,
      status: "Production"
    },
    {
      id: "din-foods",
      slug: "din-foods-ordering-platform",
      title: "Din Foods Digital Store & Supply Logistics",
      category: "E-Commerce",
      tagline: "B2B and retail food distribution ordering pipeline with automated dispatch tracking and inventory sync.",
      description: "Engineered for Din Foods to digitize wholesale and retail orders. Features dynamic pricing tiers for distributors, bulk cart calculations, and payment tracking.",
      clientContext: "Production commercial ordering portal deployed at din-foods.com.",
      problem: "Wholesale phone orders created order packing mistakes, delayed delivery scheduling, and delayed reconciliations.",
      solution: "Implemented an automated digital storefront with tiered merchant accounts, real-time dispatch manifests, and digital payment confirmations.",
      architecture: {
        frontend: "High-Performance Product Catalog + Bulk Order Grid",
        backend: "Node.js Order Processing Service + Automated Dispatch Manifest Generator",
        database: "MySQL 8.0 Transactional Order Ledger",
        infrastructure: "InfraBit Cloud Hosting + Edge Caching",
        security: ["Secure Merchant Authentication", "SSL Encryption", "CSRF Protection"]
      },
      metrics: [
        { label: "Order Accuracy", value: "99.4%", detail: "Virtually eliminated manual phone packing errors" },
        { label: "Order Processing Time", value: "< 5 mins", detail: "Reduced from 2 hours of manual coordinator work" },
        { label: "Active Retailers", value: "180+", detail: "Ordering stock digitally every morning" }
      ],
      tags: ["E-Commerce", "Supply Chain", "B2B", "InfraBit Cloud", "Logistics"],
      features: [
        "B2B wholesale pricing tiers and minimum order quantity enforcement",
        "Automated delivery dispatch sheets generated for delivery vans",
        "Instant MPESA and bank transfer invoice matching",
        "Mobile-friendly interface for store managers ordering on the go",
        "Historical reorder shortcuts for frequent product baskets"
      ],
      demoUrl: "https://din-foods.com",
      featured: false,
      status: "Production"
    }
  ] as Project[],

  services: [
    {
      id: "web-dev",
      title: "Web Development & Design",
      divisionCode: "DIV-01",
      layer: "Layer 04 · Design Layer",
      shortDesc: "Stunning, pixel-perfect digital interfaces built with sub-second response times, Next.js/React, and SEO optimization.",
      fullDesc: "Creating stunning, high-performance websites tailored to your brand with sub-second page load times and interactive modern UI/UX. Engineered to impress African and global audiences across mobile and desktop.",
      deliverables: [
        "Responsive HTML5 / CSS3 / Next.js 16 Engineering",
        "Custom UI/UX & Figma Mockups with Modern Glassmorphism",
        "Sub-Second Asset Delivery & Edge CDN Deployment",
        "Structured SEO Optimization & Search Console Indexing",
        "Mobile-First Responsive Testing Across All Carrier Speeds"
      ],
      idealFor: "Modern enterprises, expanding startups, educational colleges, executive showcases",
      technologies: ["Next.js 16", "React 19", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"],
      timeline: "2 to 4 weeks",
      categoryTag: "Modern Web & UI",
      icon: "Globe",
      accentColor: "#00F0FF"
    },
    {
      id: "custom-software",
      title: "Custom Software Tailoring",
      divisionCode: "DIV-02",
      layer: "Layer 03 · Software Layer",
      shortDesc: "Bespoke software systems engineered specifically for your business processes, internal workflow automation, and custom APIs.",
      fullDesc: "Bespoke system design engineering tailored precisely to your unique internal business logic. We translate complicated operational processes into intuitive, reliable software modules with zero data loss.",
      deliverables: [
        "Scalable Microservice & Relational Database Architecture (MySQL / Postgres)",
        "Automated MPESA STK Push & Payment Gateway Integrations",
        "Automated Workflow Queues, Email/SMS Dispatches & Admin Dashboards",
        "Role-Based Access Control (RBAC) & Tamper-Evident Audit Trails",
        "Comprehensive User Manuals & Staff Training Hand-off"
      ],
      idealFor: "Wholesalers, distributors, academic institutions, logistics firms, clinics",
      technologies: ["PHP 8.2+", "Node.js", "Python", "MySQL", "Postgres", "Redis", "MPESA API"],
      timeline: "4 to 8 weeks",
      categoryTag: "Systems & Portals",
      icon: "Code2",
      accentColor: "#3b82f6"
    },
    {
      id: "web-hosting",
      title: "Web Hosting Infrastructure",
      divisionCode: "DIV-03",
      layer: "Layer 02 · Hosting Layer",
      shortDesc: "Ultra-reliable cloud VPS infrastructure guaranteed at 99.99% uptime with automated daily backups and DDoS shielding.",
      fullDesc: "Reliable, secure, and blazing-fast web hosting services. Guaranteed 99.99% uptime with automated daily backups, SSL security certificates, and 24/7 technical monitoring from our Nakuru operations hub.",
      deliverables: [
        "Dedicated Virtual Private Server (VPS) with High-Speed NVMe Storage",
        "Guaranteed 99.99% Uptime Service Level Agreement (SLA)",
        "Global Anycast CDN & Direct DDoS Traffic Filtering",
        "Automated Nightly Offsite Backups with Disaster Recovery Verification",
        "24/7 DevOps Support & Round-the-Clock Server Health Monitoring"
      ],
      idealFor: "Critical portals, high-traffic e-commerce, corporate email servers, APIs",
      technologies: ["Linux VPS", "Nginx", "Anycast CDN", "DDoS Shield", "SSL", "systemd"],
      timeline: "Instant Setup (within 2 hours)",
      categoryTag: "Cloud VPS & Security",
      icon: "Server",
      accentColor: "#FFD166"
    },
    {
      id: "hardware",
      title: "Computer Hardware Supply",
      divisionCode: "DIV-04",
      layer: "Layer 01 · Hardware Layer",
      shortDesc: "Enterprise-grade hardware procurement. From developer workstations to rack servers and networking gear.",
      fullDesc: "High-performance hardware supply pipelines, procurement, and deployment. We source, configure, test, and ship top-tier developer workstations, enterprise rack servers, and secure networking hardware across Kenya and East Africa.",
      deliverables: [
        "High-Spec Developer Workstations (Intel Core i9 / AMD Ryzen, 64GB RAM, NVMe)",
        "Rack-Mount Enterprise Dual Xeon / AMD EPYC Servers for Heavy Operations",
        "Enterprise High-Speed Managed Switches, Fiber Panels & Firewall Units",
        "Hardware Diagnostic Stress-Testing & Clean OS Provisioning Prior to Shipping",
        "Direct Equipment Warranty & Onsite Deployment Assistance in Kenya"
      ],
      idealFor: "Software companies, enterprise IT departments, universities, design agencies",
      technologies: ["Intel Core i9 / Xeon", "AMD Ryzen / EPYC", "Cisco / Ubiquiti", "NVMe Arrays"],
      timeline: "2 to 7 days delivery",
      categoryTag: "Enterprise Hardware",
      icon: "Cpu",
      accentColor: "#00F0FF"
    },
    {
      id: "it-training",
      title: "IT Training, Mentorship & Corporate Instruction",
      divisionCode: "EDU-01",
      layer: "Cross-Layer · Human Infrastructure",
      shortDesc: "Practical, project-based engineering instruction for corporate development teams, colleges, and aspiring engineers.",
      fullDesc: "As an experienced Senior IT Instructor, I bridge the gap between abstract computer science theory and production-grade software engineering. Mentored over 650+ students on modern full-stack web engineering, database architecture, and Linux administration.",
      deliverables: [
        "Curated, Real-World Practical Curriculum (not toy apps)",
        "Hands-On Guided System Builds (ERPs, Portals, APIs)",
        "Linux Server Administration & Zero-Downtime Deployment Workshops",
        "Architectural Code Reviews & Clean Code Principles",
        "Post-Course Mentorship & Career Guidance"
      ],
      idealFor: "Colleges, coding academies, corporate dev teams, upskilling engineers",
      technologies: ["PHP", "JavaScript / TypeScript", "Python", "SQL", "Linux", "Git"],
      timeline: "Single workshops to 12-week intensive bootcamps",
      categoryTag: "Technical Mentorship",
      icon: "GraduationCap",
      accentColor: "#3b82f6"
    }
  ] as ServiceItem[],

  engineeringProcess: [
    {
      step: "01",
      name: "Discovery & System Modeling",
      description: "We formalize user requirements, identify commercial edge-cases, and design the entity-relationship diagrams (ERD) before writing a single line of application code.",
      deliverable: "Schema specification, architecture roadmap, and wireframe flow."
    },
    {
      step: "02",
      name: "Security & Database Foundation",
      description: "Implement normalized database tables with strict integrity constraints, foreign keys, RBAC permission matrices, and security threat mitigations.",
      deliverable: "Tested database migrations, seed datasets, and secure auth scaffolding."
    },
    {
      step: "03",
      name: "Core Business Logic Implementation",
      description: "Develop idempotent API endpoints, calculation engines, and atomic transactions. Every financial calculation or stock deduction is guaranteed ACID compliant.",
      deliverable: "REST endpoints, business services, and unit test suites."
    },
    {
      step: "04",
      name: "High-Fidelity Interface & UX",
      description: "Build an ultra-responsive, accessible interface using Next.js, React, and Tailwind CSS. Focused on tactile feedback, speed, and keyboard ergonomics.",
      deliverable: "Component architecture, data tables with pagination, and mobile PWA views."
    },
    {
      step: "05",
      name: "Deployment & Production Hardening",
      description: "Provision Linux production servers, configure reverse proxy with Nginx, enforce HTTPS/SSL, setup automated daily backups, and wire CI/CD deployment pipelines.",
      deliverable: "Live production environment on InfraBit Cloud with monitoring and SSL A+ rating."
    },
    {
      step: "06",
      name: "Documentation, Training & SLA",
      description: "Deliver complete technical documentation, database schemas, API references, and conduct staff walkthroughs to guarantee effortless operational handoff.",
      deliverable: "Video tutorials, Markdown docs, staff sign-off, and ongoing SLA maintenance."
    }
  ],

  blogPosts: [
    {
      id: "building-sub-second-page-performance",
      slug: "building-sub-second-page-performance-east-africa",
      title: "Building Sub-Second Page Performance in East Africa",
      excerpt: "Why lightweight static asset delivery, modern CSS, and edge CDN routing are essential for fast loading on African mobile networks.",
      publishedAt: "2026-03-20",
      readTime: "4 min read",
      category: "Web Performance",
      tags: ["Performance", "Edge CDN", "Mobile Networks", "Next.js", "InfraBit Systems"],
      featured: true,
      content: `In East Africa, the vast majority of consumers and business operators access digital services through mobile 4G and 3G networks. 

When an e-commerce website or institutional portal takes 7 seconds to load, over 50% of prospective clients bounce before the first interactive element finishes parsing.

### 1. Eliminating Client-Side Bloat
Heavy 3MB client JavaScript bundles are a death sentence on mobile edge connections. At InfraBit Systems, we prioritize:
- Server-side rendering (SSR) and static generation (SSG) with streaming HTML.
- Zero-runtime or utility-first CSS to avoid stylesheet cascades that lock the browser's render tree.
- Aggressive WebP/AVIF image transcoding with explicit width/height to avoid layout shifting (CLS).

### 2. Edge CDN Routing Across Regional Nodes
A request that travels from Nairobi or Nakuru all the way to a Frankfurt data center incurs 180ms+ round-trip latency just for the TCP and TLS handshakes.

By placing cached assets on edge nodes across Africa, First Contentful Paint drops to under 300ms, creating that instant, native-app feel that drives conversion.`,
      codeSnippet: {
        language: "javascript",
        title: "Edge Cache Header Configuration",
        code: `// Next.js & Nginx edge caching directive
export async function GET(request) {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'CDN-Cache-Control': 'max-age=604800'
    }
  });
}`
      }
    },
    {
      id: "bespoke-vs-off-the-shelf",
      slug: "bespoke-vs-off-the-shelf-software-enterprise-dilemma",
      title: "Bespoke vs Off-The-Shelf Software: The Enterprise Dilemma",
      excerpt: "An engineering analysis on why growing enterprise companies reach a wall with generic software and require custom-tailored logic.",
      publishedAt: "2026-03-05",
      readTime: "6 min read",
      category: "Architecture",
      tags: ["Custom Software", "Enterprise ERP", "System Architecture", "InfraBit Systems"],
      featured: true,
      content: `Every expanding wholesale distributor or school begins with off-the-shelf software or spreadsheets. But once order volume scales past thousands of transactions, generic software creates crippling friction:

1. **Feature Bloat vs Missing Crucial Logic**: Off-the-shelf tools have hundreds of menus you never use, yet fail to accommodate your specific multi-branch commission scheme or MPESA checkout workflow.
2. **Recurring Per-Seat Licensing Taxes**: Paying hefty per-seat licensing fees for staff members consumes huge recurrent capital every year—capital better invested in proprietary systems that your business owns outright.
3. **Data Lock-in**: When your core business records are trapped in proprietary vendor clouds, exporting your raw relational data for analysis or migration becomes a costly nightmare.

Building custom software tailored precisely to your operational workflows gives your business a permanent, compounding competitive advantage.`,
      codeSnippet: {
        language: "sql",
        title: "Proprietary Commission Calculation Procedure",
        code: `CREATE PROCEDURE \`CalculateBranchCommission\`(
  IN in_branch_id INT,
  IN in_start_date DATE,
  IN in_end_date DATE
)
BEGIN
  SELECT 
    clerk_id,
    SUM(net_total) AS total_sales,
    ROUND(SUM(net_total * commission_tier), 2) AS payout
  FROM sales_orders
  WHERE branch_id = in_branch_id 
    AND order_date BETWEEN in_start_date AND in_end_date
  GROUP BY clerk_id;
END;`
      }
    },
    {
      id: "optimizing-hosting-mpesa-callbacks",
      slug: "optimizing-high-availability-hosting-mpesa-callbacks",
      title: "Optimizing High-Availability Hosting for M-PESA Callbacks",
      excerpt: "Ensuring 99.99% uptime and zero dropped payment webhooks under heavy transaction spikes using automated DDoS shielding and load balancing.",
      publishedAt: "2026-02-18",
      readTime: "5 min read",
      category: "DevOps & CI/CD",
      tags: ["MPESA", "Webhooks", "Hosting", "DDoS Shield", "FinTech"],
      featured: true,
      content: `When a customer enters their PIN on an M-Pesa prompt, Safaricom's Daraja gateway dispatches an asynchronous HTTP POST callback to your endpoint.

If your web server is rebooting, under high CPU load, or dropping connections, the webhook fails. Safaricom will retry, but delayed confirmations result in confused customers and duplicate purchase attempts.

### Key Hosting Optimizations:
1. **Lightweight Ingestion Endpoints**: Route webhook endpoints through an isolated Nginx pool that accepts the JSON payload, verifies the HMAC token, dumps the raw body into Redis in < 20ms, and responds with HTTP 200 OK.
2. **Idempotency Locks**: Prevent double-crediting by checking an atomic Redis \`SETNX\` key before initiating any database write.
3. **Automated DDoS Shielding**: Ensure payment gateway IP ranges bypass generic web application firewall (WAF) rate limits while scrubbing malicious traffic.`,
      codeSnippet: {
        language: "nginx",
        title: "Dedicated Nginx Webhook Ingestion Block",
        code: `location /api/v1/mpesa-callback {
    proxy_pass http://webhook_worker_upstream;
    proxy_connect_timeout 5s;
    proxy_read_timeout 10s;
    proxy_set_header X-Real-IP $remote_addr;
    limit_req zone=payment_zone burst=50 nodelay;
}`
      }
    },
    {
      id: "sourcing-developer-workstations",
      slug: "sourcing-high-spec-developer-workstations-kenya",
      title: "Sourcing High-Spec Developer Workstations in Kenya",
      excerpt: "Navigating supply chains for enterprise rack servers, dual CPU configurations, and high-performance developer hardware.",
      publishedAt: "2026-01-28",
      readTime: "4 min read",
      category: "Hardware Procurement",
      tags: ["Hardware", "Workstations", "Servers", "InfraBit Systems"],
      featured: false,
      content: `Local hardware procurement in East Africa is plagued by counterfeit components, overpriced low-spec consumer laptops, and lack of warranty support for heavy computational workstations.

Software development, local Docker container stacks, and database profiling require serious hardware:
- Minimum 32GB to 64GB DDR5 RAM for running multiple containerized microservices and local databases without swap thrashing.
- Gen4/Gen5 NVMe SSDs with high IOPS for sub-second database compile times and test suite execution.
- Enterprise rack servers with dual Xeon or EPYC processors and redundant power supplies (PSUs) for continuous on-premise operations.

InfraBit Systems bridges this gap by directly procuring, stress-testing, and provisioning genuine high-spec hardware for African tech teams.`,
      codeSnippet: {
        language: "bash",
        title: "Workstation Memory & NVMe Stress Test Script",
        code: `# Verify NVMe read/write throughput and memory stability
fio --name=nvme-bench --filename=/dev/nvme0n1 --rw=randwrite --bs=4k --ioengine=libaio --iodepth=64 --runtime=60 --time_based
stress-ng --vm 4 --vm-bytes 85% --timeout 120s`
      }
    }
  ] as BlogPost[],

  labDemos: [
    {
      id: "sql-simulator",
      name: "Interactive SQL Query Engine",
      description: "Execute real SQL queries on an in-memory database of a retail business. View execution times, result rows, and EXPLAIN query plan analysis.",
      icon: "Database"
    },
    {
      id: "api-inspector",
      name: "REST API Latency & Header Inspector",
      description: "Simulate live production endpoints (`/api/v1/inventory`, `/api/v1/reconcile`, `/api/v1/auth`), inspect headers, status codes, and latency waterfall.",
      icon: "Cpu"
    },
    {
      id: "jwt-debugger",
      name: "Cryptographic JWT Claims Inspector",
      description: "Decode and inspect role-based JWT access tokens, verify simulated HMAC signatures, and check token expiry policies.",
      icon: "Key"
    },
    {
      id: "system-architecture",
      name: "Interactive System Failover Simulator",
      description: "Toggle nodes in an enterprise server topology (Load Balancer, Web Nodes, Primary DB, Read Replica, Redis Cache) to test failover behavior.",
      icon: "Network"
    }
  ],

  aiKnowledgeBase: {
    systemPrompt: `You are PaulAI, the intelligent engineering copilot for Paul Wanjiru's portfolio.
Paul Wanjiru is a Full-Stack Software Engineer & Systems Architect based in Nakuru City, Kenya.
Tagline: "I don't just write code. I design, build, deploy and maintain real-world software systems."

Key Operational Facts:
- Developer & Systems Architect: Paul Wanjiru
- Location: Nakuru City, Kenya
- Official Email: infrabitsystems@gmail.com
- Phone / Direct Contact: +254 114 988 331
- WhatsApp: https://wa.me/254114988331
- Core Metrics: 99.99% Uptime SLA guaranteed, 30M+ daily requests handled across edge nodes, 1M+ students hosted across institutional portals, 300% average sales lift for e-commerce clients.

Core Engineering Divisions & Solutions Architected:
1. Web Development & Modern Frontend: Sub-second speeds, Next.js 16/React 19, TypeScript, Tailwind CSS, SEO & Edge CDN.
2. Custom Software & Backend Engineering: PHP 8.2 (DDD/OOP), Node.js, Python, M-PESA Daraja STK Push APIs, workflow automation, RBAC, audit trails.
3. Web Hosting & Cloud VPS Infrastructure: 99.99% uptime cloud VPS, Nginx, Anycast CDN, DDoS shielding, daily automated backups, 24/7 DevOps.
4. Computer Hardware & Server Procurement: High-spec developer workstations (Core i9/Ryzen, 64GB RAM), enterprise dual Xeon/EPYC servers, managed switching.
5. IT Training & Mentorship: Over 650+ developers and students mentored in full-stack engineering, MySQL database optimization, and Linux administration.

Live Client Platforms Engineered by Paul Wanjiru:
- Maximilian College (https://maximiliancollege.co.ke): Scalable e-learning portal, student records, fee tracking, 1M+ students hosted. Tech stack: PHP 8.2, MySQL 8.0, Node.js, Nginx, Linux VPS.
- Bevs Foods (https://bevsfoods.co.ke): High-conversion online food store with automated MPESA STK Push checkout, real-time inventory management, 300% sales lift. Tech stack: Node.js, PHP 8.2, MPESA Daraja API, MySQL, Redis, Tailwind CSS.
- Sammy Moindi Executive Showcase (https://sammymoindi.com): High-end executive portfolio, interactive biography, 99/100 Lighthouse score. Tech stack: HTML5, CSS3, JavaScript, Glassmorphism, Edge CDN.
- Rocksan Foundation (https://rocksanfoundation.or.ke): NGO community and donation portal with automated donation pipeline and global reach. Tech stack: PostgreSQL, Modern Web UI, Payment Webhooks, Linux.
- Euntech College (https://euntechcollege.com): Technical campus information system with 99.99% uptime. Tech stack: PHP 8.2, MySQL, REST APIs, Nginx.
- Din Foods (https://din-foods.com): B2B food distribution ordering pipeline with automated delivery manifests. Tech stack: Node.js, MySQL, B2B Catalog, Linux VPS.
- ApexERP & PayRoute FinTech Gateway: High-throughput wholesale ERP and 38ms mobile payment micro-gateway with Redis mutex locks. Tech stack: Next.js 16, React 19, PHP 8.2, MySQL InnoDB, Redis, Docker.

Always be courteous, technically authoritative, concise, and encourage clients to request a quote or connect via email (infrabitsystems@gmail.com) or WhatsApp (+254 114 988 331).`,
    faq: [
      {
        q: "Who is Paul Wanjiru?",
        a: "Paul Wanjiru is a Full-Stack Software Engineer, Systems Architect, and IT Instructor based in Nakuru City, Kenya. He architects and develops real-world web applications, bespoke enterprise systems, e-commerce storefronts, and cloud hosting infrastructure."
      },
      {
        q: "What live client projects has Paul Wanjiru built?",
        a: "Notable platforms developed by Paul include Maximilian College (maximiliancollege.co.ke, 1M+ students hosted), Bevs Foods (bevsfoods.co.ke, 300% sales lift with MPESA checkout), Sammy Moindi's Executive Portfolio (sammymoindi.com), Rocksan Foundation (rocksanfoundation.or.ke), Euntech College (euntechcollege.com), and the ApexERP Business Suite."
      },
      {
        q: "What is Paul Wanjiru's core tech stack?",
        a: "Paul specializes in Next.js 16, React 19, TypeScript, PHP 8.2+, Node.js, Python, MySQL/MariaDB (InnoDB tuning, partitioning), PostgreSQL, Redis caching, Linux SysAdmin (Nginx, systemd), and Safaricom M-PESA Daraja STK Push integrations."
      },
      {
        q: "How can I contact Paul Wanjiru directly?",
        a: "You can email infrabitsystems@gmail.com, call +254 114 988 331, chat via WhatsApp at +254 114 988 331, or visit Nakuru City, Kenya."
      }
    ]
  }
};
