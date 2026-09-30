"use client";

import * as React from "react";
import { ArrowUp, Mail, MessageCircle, MapPin, Globe } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-card)] text-[var(--foreground)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--border)]">
          {/* Brand Info */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-[var(--foreground)]">
                Paul Wanjiru
              </span>
              <span className="text-xs px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">
                Kenya
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] max-w-sm">
              Full-Stack Software Engineer &amp; Systems Developer. Building production web applications, educational SIS portals, and e-commerce platforms.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-[var(--text-muted)]">
            <a href="#about" className="hover:text-[var(--foreground)] transition-colors">About</a>
            <a href="#projects" className="hover:text-[var(--foreground)] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[var(--foreground)] transition-colors">Services</a>
            <a href="#skills" className="hover:text-[var(--foreground)] transition-colors">Skills</a>
            <a href="#contact" className="hover:text-[var(--foreground)] transition-colors">Contact</a>
            <a 
              href="https://www.infrabitsystems.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              <span>infrabitsystems.co.ke</span>
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-muted)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors self-end md:self-auto"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} Paul Wanjiru. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/254114988331" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>+254 114 988 331</span>
            </a>
            <a 
              href="mailto:infrabitsystems@gmail.com" 
              className="hover:text-blue-500 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>infrabitsystems@gmail.com</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
