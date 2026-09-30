"use client";

import * as React from "react";
import { Code2, Database, Server, Wrench } from "lucide-react";

export function TechStack() {
  const stackCategories = [
    {
      title: "Frontend & Web",
      icon: Code2,
      skills: [
        { name: "React & Next.js", desc: "Server components, responsive UI, high-performance web apps" },
        { name: "TypeScript / JavaScript", desc: "Type-safe modern codebases and asynchronous client logic" },
        { name: "Tailwind CSS", desc: "Modern utility-first styling, responsive layouts, dark mode" },
        { name: "HTML5 & Modern CSS", desc: "Semantic markup, mobile-friendly design, accessibility" },
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: [
        { name: "PHP 8 (OOP & PDO)", desc: "Rock-solid backend services, secure session handling, APIs" },
        { name: "Node.js & Express", desc: "Fast asynchronous API microservices and webhook ingestion" },
        { name: "M-PESA Daraja API", desc: "Automated STK push checkout, C2B/B2C callbacks & reconciliation" },
        { name: "RESTful Web Services", desc: "Clean endpoints, JSON validation, token authentication" },
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "MySQL / MariaDB", desc: "Relational schema design, indexes, transactional integrity" },
        { name: "PostgreSQL", desc: "Advanced queries, relational data integrity, strict constraints" },
        { name: "Data Optimization", desc: "Query profiling, index strategies, backup and restore automation" },
      ]
    },
    {
      title: "Systems & Infrastructure",
      icon: Wrench,
      skills: [
        { name: "Linux Administration", desc: "Ubuntu / Debian server setup, systemd, SSH, firewall (UFW)" },
        { name: "Web Servers (Nginx / Apache)", desc: "Reverse proxy, virtual hosts, SSL certificates (Let's Encrypt)" },
        { name: "Git & Version Control", desc: "Branching workflows, GitHub repository management" },
        { name: "VPS Cloud Hosting", desc: "Deployment, monitoring, automated backups, and uptime" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2.5 mb-10 sm:mb-12 max-w-xl">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            Skills &amp; Technologies.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
            Practical tools and production-proven technologies I use every day to build, deploy, and maintain software in production.
          </p>
        </div>

        {/* 4 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-5 sm:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] space-y-4 sm:space-y-5 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)]">
                    {cat.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col space-y-0.5">
                      <div className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">
                        {skill.name}
                      </div>
                      <div className="text-[11px] sm:text-xs text-[var(--text-muted)] leading-relaxed">
                        {skill.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
