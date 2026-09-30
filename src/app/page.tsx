"use client";

import * as React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedProjects } from "@/components/featured-projects";
import { ServicesSection } from "@/components/services-section";
import { TechStack } from "@/components/tech-stack";
import { AboutSection } from "@/components/about-section";
import { ProjectCTA } from "@/components/project-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] selection:bg-blue-500 selection:text-white relative">
      {/* 1. Clean Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />
        {/* 6. About Paul Wanjiru */}
        <AboutSection />
        
        {/* 3. Featured Real-World Client Projects */}
        <FeaturedProjects />

        {/* 4. What I Offer (Services) */}
        <ServicesSection />

        {/* 5. Skills & Tech Stack */}
        <TechStack />

        

        {/* 7. Contact & Direct Inquiries */}
        <ProjectCTA />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/254114988331?text=Hi%20Paul,%20I%20am%20reaching%20out%20from%20your%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Paul Wanjiru on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 transition-transform hover:scale-105 active:scale-95 group"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-black animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-black" />
        <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>

        {/* Tooltip on hover */}
        <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none shadow-lg">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
