import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, Award, Rocket, Code2, ArrowUpRight, Compass, CheckCircle2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function InteractiveBentoCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 25 });

  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative overflow-hidden rounded-2xl bg-white/85 p-6 sm:p-8 border border-[#292524]/10 shadow-[0_4px_24px_rgba(41,37,36,0.03)] hover:shadow-[0_16px_40px_rgba(41,37,36,0.08)] transition-shadow ${className}`}
    >
      {/* Light Stone Pearlescent Sheen Follower */}
      <motion.div
        style={{
          left: useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]),
          top: useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]),
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-[#A8A29E]/10 to-transparent blur-2xl"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

const RUNNING_TOKENS_TOP = [
  "SYSTEM ARCHITECTURE",
  "ALGORITHMIC CLARITY",
  "AI SYSTEM ARCHITECTURE",
  "MIT-WPU CS (8.9 CGPA)",
  "FULL-STACK ENGINEERING",
  "ZERO BLOAT",
  "HIGH PERFORMANCE"
];

const RUNNING_TOKENS_BOTTOM = [
  "16+ PRODUCTION APPS",
  "FASTAPI & PYTHON",
  "REACT 19 & TAILWIND",
  "SCIKIT-LEARN ML",
  "AUDIO SYNTHESIS",
  "COMPUTATIONAL RIGOR",
  "GOVTECH & FINTECH"
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      
      {/* Crazy Double Opposing Kinetic Ribbons */}
      <div className="w-full overflow-hidden mb-16 sm:mb-24 space-y-2.5">
        <div className="py-2.5 bg-[#292524]/03 border-y border-[#292524]/08 overflow-hidden">
          <motion.div
            animate={{ x: [0, -800] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            {[...RUNNING_TOKENS_TOP, ...RUNNING_TOKENS_TOP, ...RUNNING_TOKENS_TOP].map((item, i) => (
              <span key={i} className="flex items-center gap-6 text-xs font-mono tracking-[0.22em] text-[#78716C] uppercase">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
              </span>
            ))}
          </motion.div>
        </div>

        <div className="py-2.5 bg-[#292524]/02 border-b border-[#292524]/08 overflow-hidden">
          <motion.div
            animate={{ x: [-800, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            {[...RUNNING_TOKENS_BOTTOM, ...RUNNING_TOKENS_BOTTOM, ...RUNNING_TOKENS_BOTTOM].map((item, i) => (
              <span key={i} className="flex items-center gap-6 text-xs font-mono tracking-[0.22em] text-[#A8A29E] uppercase">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8A29E]" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#292524]/08">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#78716C] block mb-2">
              // 02. PROFILE & CREDENTIALS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] uppercase leading-[0.96]">
              Academic Rigor <br />
              <span className="editorial-serif lowercase font-normal text-[#57534E]">
                & production
              </span>{' '}
              Engineering.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#78716C] max-w-xs text-left md:text-right">
            DRIVEN BY EMPIRICAL SCIENCE, CLEAN CODE, AND REAL-WORLD PRODUCT DEPLOYMENT.
          </p>
        </div>

        {/* Crazy Interactive 3D Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento 1: Primary Narrative Card (Span 7) */}
          <InteractiveBentoCard className="md:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#292524]/06">
                <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                  BIOGRAPHY & DISCIPLINE
                </span>
                <span className="text-xs font-mono text-[#1C1917] font-semibold">
                  MIT-WPU PUNE
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1C1917] leading-snug">
                Engineering software with architectural discipline, high responsiveness, and zero fluff.
              </h3>

              <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
                I am an Integrated B.Tech Computer Science student at MIT World Peace University (8.9 CGPA, Scholarship Recipient). Over the past two years, I have engineered and shipped <strong className="font-semibold text-[#1C1917]">16+ production-grade web applications</strong> spanning GovTech platforms, PropTech valuation models, and interactive educational engines.
              </p>

              <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
                As lead engineer for <strong className="font-semibold text-[#1C1917]">India Intern AI</strong>, I designed an intelligent recommendation and recruiter ranking platform solving national-scale candidate placement bottlenecks.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#292524]/06 flex items-center justify-between text-xs font-mono text-[#78716C]">
              <span>LOCATION: PUNE, MAHARASHTRA</span>
              <span className="font-semibold text-[#1C1917]">STATUS: OPEN TO ROLES</span>
            </div>
          </InteractiveBentoCard>

          {/* Bento 2: Academic Honors & Scholarship (Span 5) */}
          <InteractiveBentoCard className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#292524]/06">
                <div className="p-2 rounded-xl bg-[#292524]/05 text-[#1C1917]">
                  <GraduationCap size={20} />
                </div>
                <span className="text-xs font-mono font-bold text-[#1C1917] px-2.5 py-0.5 rounded-full bg-[#292524]/05">
                  8.9 CGPA
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#78716C] uppercase">
                  ACADEMIC STANDING
                </span>
                <h4 className="font-heading text-xl font-bold text-[#1C1917] mt-1">
                  MIT World Peace University
                </h4>
                <p className="text-xs font-mono text-[#57534E] mt-0.5">
                  Integrated B.Tech in Computer Science & Engineering
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#292524]/03 border border-[#292524]/06 text-xs text-[#44403C] space-y-1">
                <div className="font-semibold text-[#1C1917] flex items-center gap-1.5">
                  <Award size={14} />
                  <span>MIT-WPU Scholarship Recipient</span>
                </div>
                <p className="text-[#57534E] font-light leading-relaxed">
                  Honored with the university distinction scholarship for continuous academic excellence across Data Structures, Algorithms, and Object-Oriented Design.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#292524]/06 text-xs font-mono text-[#78716C]">
              BATCH: 2023 — PRESENT (PUNE, IN)
            </div>
          </InteractiveBentoCard>

          {/* Bento 3: Hackathon Distinction (Span 5) */}
          <InteractiveBentoCard className="md:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#292524]/06">
                <div className="p-2 rounded-xl bg-[#292524]/05 text-[#1C1917]">
                  <Award size={20} />
                </div>
                <span className="text-xs font-mono font-bold text-[#1C1917] px-2.5 py-0.5 rounded-full bg-[#292524]/05">
                  GOVTECH AI
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#78716C] uppercase">
                  AUTONOMOUS AI ENGINE
                </span>
                <h4 className="font-heading text-xl font-bold text-[#1C1917] mt-1">
                  India Intern AI Engine
                </h4>
                <p className="text-xs font-mono text-[#57534E] mt-0.5">
                  Autonomous Placement & Recruiter Ranking
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
                Engineered India Intern AI: an intelligent bidirectional recommendation engine built for automated candidate matching and recruiter ranking at scale.
              </p>
            </div>

            <a
              href="https://lnkd.in/dt8WygUn"
              target="_blank"
              rel="noopener noreferrer"
              className="pt-4 border-t border-[#292524]/06 flex items-center justify-between text-xs font-mono text-[#1C1917] hover:underline"
            >
              <span>VIEW PROJECT DETAILS</span>
              <ArrowUpRight size={13} />
            </a>
          </InteractiveBentoCard>

          {/* Bento 4: Production Volume & Channels (Span 7) */}
          <InteractiveBentoCard className="md:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#292524]/06">
                <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                  DEPLOYMENT TRACK RECORD
                </span>
                <span className="text-xs font-mono font-bold text-[#1C1917]">
                  16 REAL APPLICATIONS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#292524]/03 border border-[#292524]/06 text-center">
                  <span className="font-heading text-2xl font-bold text-[#1C1917] block">16+</span>
                  <span className="text-[10px] font-mono text-[#78716C]">Live Systems</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#292524]/03 border border-[#292524]/06 text-center">
                  <span className="font-heading text-2xl font-bold text-[#1C1917] block">8.9</span>
                  <span className="text-[10px] font-mono text-[#78716C]">CGPA MIT-WPU</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#292524]/03 border border-[#292524]/06 text-center">
                  <span className="font-heading text-2xl font-bold text-[#1C1917] block">99%</span>
                  <span className="text-[10px] font-mono text-[#78716C]">Precision Score</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#292524]/03 border border-[#292524]/06 text-center">
                  <span className="font-heading text-2xl font-bold text-[#1C1917] block">100%</span>
                  <span className="text-[10px] font-mono text-[#78716C]">Real Products</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://github.com/sahil-exe-17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-[#292524]/03 hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-all flex items-center justify-between text-xs font-mono text-[#1C1917]"
                >
                  <div className="flex items-center gap-2">
                    <FaGithub size={15} />
                    <span>github.com/sahil-exe-17</span>
                  </div>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://linkedin.com/in/sahil-lale-199072355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-[#292524]/03 hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-all flex items-center justify-between text-xs font-mono text-[#1C1917]"
                >
                  <div className="flex items-center gap-2">
                    <FaLinkedin size={15} />
                    <span>sahil-lale-199072355</span>
                  </div>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[#292524]/06 text-xs font-mono text-[#78716C] flex items-center justify-between">
              <span>CONTACT: sahillale17@gmail.com</span>
              <span className="text-[#1C1917]">VERIFIED CREDENTIALS ✓</span>
            </div>
          </InteractiveBentoCard>

        </div>
      </div>
    </section>
  );
}
