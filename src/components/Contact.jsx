import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ElectricBorder from './ElectricBorder';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:sahillale17@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/10"
        >
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/60 block mb-2">
              // 06. CONNECT & COLLABORATE
            </span>
            <h2 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
              Have An Idea? <br />
              <span className="text-white">
                Let's Build It.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-white/40 max-w-xs text-left md:text-right">
            AVAILABLE FOR HIGH-IMPACT ROLES, AI INNOVATION & BESPOKE APPLICATIONS.
          </p>
        </motion.div>

        {/* 2-Column Contact Interface with Scroll Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <p className="text-base sm:text-lg lg:text-xl font-light text-white/80 leading-relaxed">
              Whether you are looking to architect intelligent autonomous agents, integrate generative AI into your product stack, or craft high-velocity digital experiences, my inbox is open.
            </p>

            {/* Contact Details List */}
            <div className="glass-card p-5 sm:p-8 rounded-3xl space-y-4 sm:space-y-5 border border-white/15">
              <a
                href="mailto:sahillale17@gmail.com"
                className="flex items-center gap-3 sm:gap-4 group text-white/80 hover:text-white transition-colors"
              >
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:border-white/40 transition-colors shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">EMAIL</span>
                  <span className="text-xs sm:text-base font-mono font-medium text-white truncate block">sahillale17@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:9272557826"
                className="flex items-center gap-3 sm:gap-4 group text-white/80 hover:text-white transition-colors"
              >
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:border-white/40 transition-colors shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">PHONE</span>
                  <span className="text-xs sm:text-base font-mono font-medium text-white block">+91 9272557826</span>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 text-white/80">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-white/[0.05] border border-white/10 shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">LOCATION</span>
                  <span className="text-xs sm:text-base font-medium text-white block">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Social Connect Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <motion.a
                whileHover={{ y: -4, scale: 1.03 }}
                href="https://linkedin.com/in/sahil-lale-199072355"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/40 flex items-center justify-between group transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin size={18} className="text-white group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">LinkedIn</span>
                </div>
                <ArrowUpRight size={15} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.03 }}
                href="https://github.com/sahil-exe-17"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-white/40 flex items-center justify-between group transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-3">
                  <FaGithub size={18} className="text-white group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">GitHub</span>
                </div>
                <ArrowUpRight size={15} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

          </motion.div>

          {/* Right Column: Glass Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <ElectricBorder
              color="#7cff67"
              speed={0.5}
              chaos={0.05}
              thickness={1.1}
              borderRadius={24}
              className="w-full"
            >
              <div className="glass-card p-5 sm:p-8 lg:p-12 rounded-3xl border border-white/20 relative shadow-[0_25px_80px_rgba(0,0,0,0.8)]">
              <h3 className="font-heading text-xl sm:text-3xl font-bold text-white tracking-tight mb-2 flex items-center gap-2">
                <span>Send A Direct Message</span>
                <Sparkles size={18} className="text-white" />
              </h3>
              <p className="text-[10px] sm:text-xs font-mono text-white/40 mb-6 sm:mb-8 uppercase tracking-wider">
                TRANSMIT INQUIRIES // IMMEDIATE NOTIFICATION
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/70 block">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/70 block">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/70 block">
                    PROJECT VISION & DETAILS
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your vision, requirements, or collaboration goals..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 focus:border-white focus:outline-none text-white text-sm placeholder:text-white/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-sm text-black bg-white shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 font-bold"
                >
                  {isSubmitted ? (
                    <>
                      <Check size={16} />
                      <span>Message Ready in Mail Client!</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            </div>
            </ElectricBorder>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
