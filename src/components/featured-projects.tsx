"use client";

import * as React from "react";
import { Globe, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function FeaturedProjects() {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("All");

  const categories = ["All", "Educational System", "E-Commerce", "Full-Stack Web"];

  const filteredProjects = selectedFilter === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-2.5 max-w-xl">
            <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              Selected Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
              Live Client Deployments.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
              Production platforms, college portals, and e-commerce stores engineered and deployed by Paul Wanjiru for businesses and institutions in Kenya.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-blue-600 text-white font-semibold shadow-xs"
                    : "text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid: 1 col on mobile, 2 col on md, 3 col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] p-5 sm:p-6 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-md transition-all group"
            >
              <div className="space-y-3.5">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs font-medium px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 truncate">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Live
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--foreground)] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-1.5 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-[var(--surface-muted)] text-[var(--text-muted)] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link Button */}
              {project.demoUrl && (
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-[var(--border)]">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors py-1 group/btn"
                  >
                    <span className="flex items-center gap-1.5 truncate">
                      <Globe className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                      <span className="truncate">{project.demoUrl.replace("https://", "")}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
