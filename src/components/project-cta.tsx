"use client";

import * as React from "react";
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from "lucide-react";

export function ProjectCTA() {
  const [formData, setFormData] = React.useState({
    name: "",
    contact: "",
    service: "Web Development & Design",
    message: ""
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;

    // Build WhatsApp message URL
    const text = `Hi Paul, my name is ${formData.name} (${formData.contact}). I am interested in: ${formData.service}. Message: ${formData.message}`;
    const waUrl = `https://wa.me/254114988331?text=${encodeURIComponent(text)}`;
    
    setSubmitted(true);
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2.5">
              <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
                Let&apos;s Build Your Next Project.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[var(--text-muted)] leading-relaxed">
                Whether you need a modern web application, an academic college portal, an e-commerce platform with M-PESA, or reliable web hosting, let&apos;s connect.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href="https://wa.me/254114988331"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-[var(--text-muted)]">WhatsApp Direct</div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--foreground)] group-hover:text-emerald-500 transition-colors truncate">
                    +254 114 988 331
                  </div>
                </div>
              </a>

              <a
                href="mailto:infrabitsystems@gmail.com"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-card)] hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-[var(--text-muted)]">Email</div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--foreground)] group-hover:text-blue-500 transition-colors truncate">
                    infrabitsystems@gmail.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-[var(--border)] bg-[var(--surface-card)]">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-[var(--text-muted)]">Office Location</div>
                  <div className="text-xs sm:text-sm font-bold text-[var(--foreground)] truncate">
                    Nakuru City, Kenya
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 p-5 sm:p-7 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface-card)] shadow-xs">
            {submitted ? (
              <div className="text-center py-10 sm:py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">Message Sent!</h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto">
                  Opening WhatsApp to chat directly with Paul Wanjiru. Thank you for reaching out!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)]">Send a Message</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Fill out the form below to chat directly with Paul on WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[var(--foreground)]">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-base sm:text-sm text-[var(--foreground)] focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[var(--foreground)]">
                      Phone / Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +254 7XX XXX XXX or email"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-base sm:text-sm text-[var(--foreground)] focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[var(--foreground)]">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-base sm:text-sm text-[var(--foreground)] focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="Web Development & Design">Web Development &amp; Design</option>
                    <option value="Custom Software / SIS Portal">Custom Software / SIS Academic Portal</option>
                    <option value="Web Hosting & Cloud Support">Web Hosting &amp; Cloud Support</option>
                    <option value="Hardware Procurement">Hardware Supply &amp; Procurement</option>
                    <option value="General Consultation / Other">General Consultation / Other</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[var(--foreground)]">
                    Message / Project Scope
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me a bit about your project or what you are looking to build..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] text-base sm:text-sm text-[var(--foreground)] focus:outline-none focus:border-blue-500 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
