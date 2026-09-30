"use client";

import * as React from "react";
import Image from "next/image";
import { 
  User, 
  MapPin, 
  Mail, 
  MessageCircle, 
  Code2, 
  CheckCircle2 
} from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      title: "Full-Stack Web Engineering",
      desc: "Building responsive, modern web applications with Next.js, React, PHP 8, and MySQL."
    },
    {
      title: "M-PESA Payment Workflows",
      desc: "Direct integration with Daraja STK Push and instant payment callback verification."
    },
    {
      title: "Institutional & Business Portals",
      desc: "Architecting student portals (SIS), inventory managers, and multi-user systems."
    },
    {
      title: "Technical Mentorship",
      desc: "Delivering practical programming and systems instruction to over 650+ students in Kenya."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 border-t border-[var(--border)] bg-[var(--surface)]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2.5 mb-10 sm:mb-12 max-w-xl">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
            About Paul Wanjiru.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Main Bio Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
            <p>
              I am a <strong className="text-[var(--foreground)]">Full-Stack Software Engineer &amp; Systems Developer</strong> based in Nakuru City, Kenya. I build, deploy, and maintain software that helps organizations, colleges, and commercial brands run their operations seamlessly.
            </p>
            <p>
              Over the past years, I have architected and delivered live production systems, including academic portals for institutions like <strong className="text-[var(--foreground)]">Maximilian College</strong> and <strong className="text-[var(--foreground)]">Eun-Tech College</strong>, automated e-commerce platforms with M-PESA Daraja integrations for <strong className="text-[var(--foreground)]">Bev&apos;s Foods</strong>, executive brand showcases like <strong className="text-[var(--foreground)]">Sammy Moindi</strong>, and community outreach portals for organizations like <strong className="text-[var(--foreground)]">Rocksan Foundation</strong>.
            </p>
            <p>
              In addition to client engineering, I actively serve as an <strong className="text-[var(--foreground)]">IT Instructor and Technical Mentor</strong>, training aspiring engineers in web engineering, database architecture, and Linux system administration.
            </p>

            <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] space-y-1">
                  <div className="text-xs font-bold text-[var(--foreground)] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Card */}
          <div className="lg:col-span-5 p-5 sm:p-7 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] shadow-xs space-y-5 sm:space-y-6">
            {/* Profile Avatar & Header */}
            <div className="flex items-center gap-4 border-b border-[var(--border)] pb-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-zinc-900 shrink-0 shadow-md">
                <Image
                  src="/img/img.jpeg"
                  alt="Paul Wanjiru"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <div className="text-base font-bold text-[var(--foreground)] truncate">
                  Paul Wanjiru
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  Full-Stack Software Engineer
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)] mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Nakuru, Kenya</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-semibold text-[var(--foreground)]">Location</div>
                  <div className="text-[var(--text-muted)]">Nakuru City, Kenya (Available Remote)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-semibold text-[var(--foreground)]">WhatsApp / Phone</div>
                  <a 
                    href="https://wa.me/254114988331" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline break-all"
                  >
                    +254 114 988 331
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-semibold text-[var(--foreground)]">Email</div>
                  <a 
                    href="mailto:infrabitsystems@gmail.com" 
                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    infrabitsystems@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Code2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-semibold text-[var(--foreground)]">Core Stack</div>
                  <div className="text-[var(--text-muted)]">Next.js, React, PHP 8, MySQL, Node.js, M-PESA</div>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <a
                href="https://wa.me/254114988331?text=Hi%20Paul,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-98"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
