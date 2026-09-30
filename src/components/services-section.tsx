"use client";

import * as React from "react";
import { 
  Globe, 
  Code2, 
  Server, 
  Cpu, 
  Check, 
  ArrowRight,
  MessageCircle,
  Clock
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  categoryTag: string;
  icon: typeof Globe;
  shortDesc: string;
  deliverables: string[];
  timeline: string;
}

export function ServicesSection() {
  const services: ServiceCard[] = [
    {
      id: "web-dev",
      title: "Web Development & Design",
      categoryTag: "Modern Web & UI",
      icon: Globe,
      shortDesc: "Pixel-perfect, high-performance web applications and corporate websites built with Next.js, React, and Tailwind CSS. Optimized for mobile responsiveness, SEO rankings, and sub-second load times.",
      deliverables: [
        "Responsive, mobile-first design for all devices",
        "Next.js, React & Tailwind CSS engineering",
        "Search engine optimization (SEO) & meta setup",
        "Performance optimization & Edge CDN deployment"
      ],
      timeline: "2 - 4 Weeks"
    },
    {
      id: "custom-software",
      title: "Custom Software Solutions",
      categoryTag: "Systems & Portals",
      icon: Code2,
      shortDesc: "Tailor-made software systems, academic student portals (SIS), inventory managers, and automated M-PESA payment pipelines designed around your organization's exact business operations.",
      deliverables: [
        "Relational database design (MySQL / PostgreSQL)",
        "Automated M-PESA Daraja STK Push & webhooks",
        "Role-Based Access Control (Admin, Staff, Student)",
        "SMS/Email notification alerts & data reporting"
      ],
      timeline: "4 - 8 Weeks"
    },
    {
      id: "web-hosting",
      title: "Web Hosting & Cloud Maintenance",
      categoryTag: "Cloud VPS & Security",
      icon: Server,
      shortDesc: "Fast, secure Linux VPS hosting with guaranteed 99.99% uptime, automated daily backups, free SSL certificates, and round-the-clock server health monitoring from Nakuru.",
      deliverables: [
        "Dedicated high-speed NVMe Linux VPS environment",
        "Anycast CDN & DDoS traffic protection",
        "Automated scheduled backups & disaster recovery",
        "Domain configuration, DNS, and SSL certification"
      ],
      timeline: "Fast Setup (< 24h)"
    },
    {
      id: "hardware",
      title: "Hardware Supply & Procurement",
      categoryTag: "Enterprise Hardware",
      icon: Cpu,
      shortDesc: "Procurement, stress-testing, and nationwide delivery of high-specification developer workstations, enterprise rack servers, and business networking hardware.",
      deliverables: [
        "High-spec developer workstations (Intel/AMD)",
        "Dual Intel Xeon / AMD EPYC rack servers",
        "Managed enterprise networking switches & routers",
        "Hardware diagnostics & clean OS pre-installation"
      ],
      timeline: "2 - 7 Days"
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 border-t border-[var(--border)] bg-[var(--surface)]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              What I Offer
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
              Services &amp; Technical Capabilities.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
              Professional, reliable technical services tailored for educational institutions, businesses, and growing enterprises in Kenya.
            </p>
          </div>

          <a
            href="https://wa.me/254114988331?text=Hi%20Paul,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all self-start md:self-auto active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* 2x2 Responsive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5 sm:p-7 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon and Category Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] border border-[var(--border)]">
                      {svc.categoryTag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {svc.shortDesc}
                    </p>
                  </div>

                  {/* Included Deliverables */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-semibold text-[var(--foreground)] uppercase tracking-wider">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {svc.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="pt-5 mt-5 border-t border-[var(--border)] flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Est: {svc.timeline}</span>
                  </div>

                  <a
                    href={`https://wa.me/254114988331?text=Hi%20Paul,%20I%20am%20interested%20in%20${encodeURIComponent(svc.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <span>Discuss Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
