import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Phone, Mail, Brain, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const STATS = [
  { label: 'AI Systems Automation', value: 95 },
  { label: 'Full-Stack Engineering', value: 92 },
  { label: 'Machine Learning Models', value: 88 },
  { label: 'Vibecoding Velocity', value: 100 },
];

const KEYWORDS = [
  "GENERATIVE AI",
  "NEURAL ARCHITECTURES",
  "VIBECODING",
  "PREDICTIVE MODELING",
  "AGENTIC WORKFLOWS",
  "LLM FINE-TUNING",
  "REAL-TIME APIS",
  "INTELLIGENT SYSTEMS"
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Horizontal Keyword Strip */}
      <div className="w-full overflow-hidden py-4 border-y border-white/10 bg-white/[0.02] backdrop-blur-sm mb-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...KEYWORDS, ...KEYWORDS, ...KEYWORDS].map((kw, i) => (
            <span key={i} className="flex items-center gap-6 text-xs sm:text-sm font-mono tracking-[0.25em] text-white/50 uppercase">
              <span>{kw}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/60 block mb-2">
              // 01. IDENTITY & PHILOSOPHY
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
              Vibe-Driven <br />
              <span className="text-white">
                Engineering.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-white/40 max-w-xs text-left md:text-right">
            COMBINING DEEP DATA SCIENCE FOUNDATIONS WITH RAPID PROTOTYPING VELOCITY.
          </p>
        </div>

        {/* Main 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Diagnostics */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6 text-lg sm:text-xl lg:text-2xl font-light text-white/80 leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Sahil Lale</span>, an aspiring AI and software developer and a 2nd-year Integrated B.Tech student at MIT World Peace University. I am passionate about building intelligent, user-focused applications by combining creativity with strong technical execution.
              </p>
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed">
                I'm known for a <span className="text-white font-medium">vibe-driven approach to coding</span> that emphasizes intuitive design, rapid prototyping, and practical problem-solving to create impactful, real-world applications. Experienced in developing end-to-end AI solutions, integrating real-time APIs, and crafting visually engaging interfaces.
              </p>
            </div>

            {/* Capability Metrics / Diagnostics Panel */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-white/15">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-white/70 uppercase">
                  <Brain size={14} className="text-white" />
                  <span>System Diagnostics // Core Capabilities</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                  OPTIMAL
                </span>
              </div>

              <div className="space-y-5">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono tracking-wider">
                      <span className="text-white/70">{stat.label}</span>
                      <span className="text-white font-bold">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1 * i, ease: 'easeOut' }}
                        className="h-full rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Glass Card */}
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/15">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-white">
                  <GraduationCap size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                  ACADEMIC FOUNDATION
                </span>
              </div>

              <h3 className="text-2xl font-bold font-heading text-white tracking-tight mb-2">
                MIT World Peace University
              </h3>
              <p className="text-sm font-light text-white/70 mb-6">
                Integrated B.Tech in Computer Science<br />
                <span className="text-white/50 text-xs font-mono">Specialization: Artificial Intelligence & Data Science</span>
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                    CUMULATIVE CGPA
                  </span>
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-white">
                    8.9
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 block mb-1">
                    HONORS & AWARDS
                  </span>
                  <span className="text-sm font-semibold text-white block">
                    MIT-WPU II
                  </span>
                  <span className="text-xs font-mono text-white/60">
                    Scholarship (2024)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Connect Glass Card */}
            <div className="glass-card p-8 rounded-3xl relative border border-white/15">
              <h4 className="text-sm font-mono uppercase tracking-widest text-white/60 mb-6 flex items-center gap-2">
                <Sparkles size={14} className="text-white" />
                <span>DIRECT REACH</span>
              </h4>

              <div className="space-y-4 text-sm font-light text-white/80">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-white" />
                  <span>Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-white" />
                  <span className="font-mono">9272557826</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-white" />
                  <a href="mailto:sahillale17@gmail.com" className="hover:text-white transition-colors underline underline-offset-4">
                    sahillale17@gmail.com
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://linkedin.com/in/sahil-lale-199072355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/30 text-xs font-medium text-white flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <FaLinkedin size={15} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/sahil-exe-17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/30 text-xs font-medium text-white flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
