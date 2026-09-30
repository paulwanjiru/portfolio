"use client";

import * as React from "react";
import Image from "next/image";
import { Sun, Moon, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    const isDark = resolvedTheme === "dark";
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--surface-card)]/90 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-xs"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-blue-500/30 bg-zinc-900 shrink-0 shadow-xs group-hover:border-blue-500 transition-colors">
                <Image
                  src="/paul-wanjiru.jpg"
                  alt="Paul Wanjiru"
                  fill
                  priority
                  loading="eager"
                  sizes="36px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base tracking-tight text-[var(--foreground)] group-hover:text-blue-600 transition-colors">
                  Paul Wanjiru
                </span>
                <span className="text-[10px] sm:text-[11px] text-[var(--text-muted)] -mt-0.5">
                  Full-Stack &amp; Systems Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-muted)] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[var(--border)] bg-[var(--surface-card)] hover:bg-[var(--surface-muted)] text-[var(--text-muted)] hover:text-[var(--foreground)] flex items-center justify-center transition-colors cursor-pointer"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              )}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/254114988331"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[var(--border)] bg-[var(--surface-card)] text-[var(--foreground)] flex items-center justify-center cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs md:hidden flex flex-col justify-start p-4 pt-20" 
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="w-full bg-[var(--surface-card)] border border-[var(--border)] rounded-2xl p-5 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <span className="font-bold text-sm text-[var(--foreground)]">Navigation</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg hover:bg-[var(--surface-muted)] text-[var(--text-muted)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-muted)] transition-colors active:bg-[var(--surface-muted)]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[var(--border)] grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/254114988331"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                Contact
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
