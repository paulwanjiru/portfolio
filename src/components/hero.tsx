"use client";

import * as React from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  MapPin, 
  MessageCircle, 
  Mail,
  Sparkles
} from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-28 relative overflow-hidden flex items-center min-h-[620px] sm:min-h-[680px]">
      {/* Background Image & Atmospheric Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Portrait Image positioned on the right on desktop, full bleed on mobile */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] h-full">
          <Image
            src="/paul-wanjiru.jpg"
            alt="Paul Wanjiru - Full-Stack Developer & Systems Builder"
            fill
            priority
            loading="eager"
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-[center_18%] lg:object-[center_12%] opacity-30 dark:opacity-35 lg:opacity-75 dark:lg:opacity-70 transition-opacity"
          />
          {/* Multi-layered gradient masks to blend cleanly with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/90 to-transparent lg:via-[var(--background)]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/50 via-transparent to-[var(--background)]" />
        </div>

        {/* Ambient lighting glows */}
        <div className="absolute top-1/4 left-10 w-[350px] sm:w-[550px] h-[300px] sm:h-[400px] bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-[300px] sm:w-[450px] h-[250px] sm:h-[350px] bg-emerald-500/10 dark:bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main Hero Content (Constrained max-width to leave portrait visible on right on desktop) */}
        <div className="max-w-3xl space-y-6 sm:space-y-7">
          
          {/* Availability Badge */}
          <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface-card)]/85 backdrop-blur-md text-xs font-medium text-[var(--text-muted)] shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[var(--foreground)] font-semibold">Available for new projects</span>
            <span className="text-[var(--border)] hidden xs:inline">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-blue-500 shrink-0" />
              Nakuru City, Kenya
            </span>
          </div>

          {/* Main Title & Role */}
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Full-Stack Engineer &amp; Systems Builder</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.08]">
              Paul Wanjiru
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-medium text-[var(--text-muted)] leading-relaxed max-w-2xl pt-1">
              I design, develop, and deploy production-ready web applications, school management portals, e-commerce stores, and custom software systems across Kenya. Specializing in modern Next.js, React, PHP 8, MySQL, and automated M-PESA Daraja integrations.
            </p>
          </div>

          {/* Action Buttons with Pulsing WhatsApp-style live dot */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all active:scale-98 group"
            >
              {/* WhatsApp-style pulsing dot for live projects */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span>View Live Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="https://wa.me/254114988331"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 transition-all active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]/80 hover:bg-[var(--surface-muted)] backdrop-blur-md text-[var(--foreground)] font-semibold text-sm transition-all active:scale-98"
            >
              <Mail className="w-4 h-4 text-[var(--text-muted)]" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Key Highlights / Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-[var(--border)]/70">
            <div className="p-3 sm:p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]/80 backdrop-blur-md">
              <div className="flex items-center gap-2">
                {/* WhatsApp-style pulsing live dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">6+</span>
              </div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Live Deployments</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]/80 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold text-emerald-500">M-PESA</div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Daraja STK API</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]/80 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold text-blue-500">Full-Stack</div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Next.js • PHP • SQL</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]/80 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">Nakuru</div>
              <div className="text-[11px] sm:text-xs text-[var(--text-muted)] mt-0.5">Kenya · Available</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
