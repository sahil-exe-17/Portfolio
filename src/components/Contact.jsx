import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Check, Copy } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const email = "sahillale17@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Engineering Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#292524]/08">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#78716C] block mb-2">
              // 07. CONNECT & COLLABORATE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] uppercase leading-[0.98]">
              Have An <br />
              <span className="editorial-serif lowercase font-normal text-[#57534E]">
                ambitious
              </span>{' '}
              Idea? Let's Build.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#78716C] max-w-xs text-left md:text-right">
            AVAILABLE FOR HIGH-IMPACT SOFTWARE ENGINEERING ROLES & SELECT PROJECTS.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/80 p-6 sm:p-8 rounded-2xl border border-[#292524]/08 shadow-[0_4px_20px_rgba(41,37,36,0.02)] space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C]">
                DIRECT CHANNELS
              </span>

              <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
                Whether you are exploring high-performance web systems, architectural product engineering, or seeking a disciplined developer for your team, my inbox is open.
              </p>

              {/* One-Click Copy Pill */}
              <div className="pt-2">
                <button
                  onClick={handleCopyEmail}
                  data-cursor="COPY"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#292524]/04 hover:bg-[#292524]/08 border border-[#292524]/10 transition-all text-xs font-mono text-[#1C1917] group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail size={16} className="text-[#57534E]" />
                    <span className="font-semibold">{email}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider bg-white border border-[#292524]/10 text-[#78716C] group-hover:text-[#1C1917]">
                    {isCopied ? (
                      <>
                        <Check size={12} className="text-[#1C1917]" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>CLICK TO COPY</span>
                      </>
                    )}
                  </span>
                </button>
              </div>

              {/* Coordinates */}
              <div className="pt-4 border-t border-[#292524]/06 space-y-2 text-xs font-mono text-[#78716C]">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#57534E]" />
                  <span>Pune, Maharashtra, India // IST Timezone</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1C1917] ml-0.5" />
                  <span className="text-[#1C1917] font-semibold">Available for full-time & high-impact contracts</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex gap-3">
              <a
                href="https://github.com/sahil-exe-17"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="GITHUB"
                className="flex-1 p-4 rounded-xl bg-white/80 border border-[#292524]/08 hover:border-[#1C1917] transition-all flex items-center justify-between text-xs font-mono text-[#1C1917]"
              >
                <div className="flex items-center gap-2">
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight size={14} className="text-[#78716C]" />
              </a>

              <a
                href="https://linkedin.com/in/sahil-lale-199072355"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LINKEDIN"
                className="flex-1 p-4 rounded-xl bg-white/80 border border-[#292524]/08 hover:border-[#1C1917] transition-all flex items-center justify-between text-xs font-mono text-[#1C1917]"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight size={14} className="text-[#78716C]" />
              </a>
            </div>
          </div>

          {/* Right Column: Minimalist Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white/90 p-6 sm:p-8 rounded-2xl border border-[#292524]/08 shadow-[0_4px_24px_rgba(41,37,36,0.02)] space-y-5"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-[#78716C] block">
                SEND AN INQUIRY
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#78716C]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#292524]/03 border border-[#292524]/10 focus:border-[#1C1917] focus:bg-white text-xs sm:text-sm text-[#1C1917] placeholder-[#A8A29E] outline-none transition-all font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono tracking-wider uppercase text-[#78716C]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#292524]/03 border border-[#292524]/10 focus:border-[#1C1917] focus:bg-white text-xs sm:text-sm text-[#1C1917] placeholder-[#A8A29E] outline-none transition-all font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono tracking-wider uppercase text-[#78716C]">
                  Project Brief or Inquiry
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Outline your project scope, timeline, or engineering opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-[#292524]/03 border border-[#292524]/10 focus:border-[#1C1917] focus:bg-white text-xs sm:text-sm text-[#1C1917] placeholder-[#A8A29E] outline-none transition-all font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                data-cursor="TRANSMIT"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-mono font-semibold uppercase tracking-wider text-xs text-[#FAFAF8] bg-[#1C1917] hover:bg-[#292524] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(28,25,23,0.15)]"
              >
                <span>{isSubmitted ? 'Transmitting Message...' : 'Transmit Message'}</span>
                <Send size={13} />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
