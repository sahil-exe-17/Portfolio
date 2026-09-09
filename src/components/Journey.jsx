import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Award, Rocket, Database } from 'lucide-react';

const MILESTONES = [
  {
    period: "2024 — PRESENT",
    title: "AI & Full-Stack Systems Engineering",
    institution: "Autonomous Architectures & Real-World Deployments",
    description: "Architected and shipped 16+ production-grade web applications and AI engines spanning LLM-assisted tutors (StackFlow AI), intelligent PropTech valuation (EstateIQ AI), live crypto intelligence platforms (CryptoPulse AI), sports predictive ensembles (MatchMind AI), and fintech models (Stock Sense AI).",
    badge: "16+ APPS DEPLOYED",
    icon: <Rocket size={20} className="text-white" />,
  },
  {
    period: "2024",
    title: "Academic Honors & Scholarship Award",
    institution: "MIT World Peace University (MIT-WPU)",
    description: "Awarded the prestigious MIT-WPU II Scholarship for academic distinction in Integrated B.Tech Computer Science, maintaining an 8.9 cumulative CGPA with specialization in Artificial Intelligence and Data Science.",
    badge: "SCHOLARSHIP RECIPIENT",
    icon: <Award size={20} className="text-white" />,
  },
  {
    period: "2023 — PRESENT",
    title: "Integrated B.Tech in Computer Science",
    institution: "MIT World Peace University, Pune, Maharashtra",
    description: "Currently in 2nd year of Integrated B.Tech. Rigorous academic focus on Advanced Data Structures, Discrete Mathematics, Machine Learning Foundations, Neural Networks, Database Management Systems, and Object-Oriented System Design.",
    badge: "8.9 CGPA",
    icon: <GraduationCap size={20} className="text-white" />,
  },
  {
    period: "2023",
    title: "Statistical Modeling & Data Science Genesis",
    institution: "Predictive Analytics & Core Machine Learning",
    description: "Began deep-dive data analysis, mastering Python, Scikit-Learn, Pandas, NumPy, and statistical hypothesis testing. Engineered predictive models including salary modeling (EarnIQ) and YouTube growth forecasting algorithms (YT Predictor).",
    badge: "DATA FOUNDATION",
    icon: <Database size={20} className="text-white" />,
  }
];

export default function Journey() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 150, damping: 25 });

  return (
    <section id="journey" ref={containerRef} className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-16 sm:mb-20 pb-6 border-b border-white/10"
        >
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/60 block mb-2">
              // 04. EXPERIENCE & MILESTONES
            </span>
            <h2 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
              The <span className="text-white">Journey.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-white/40 max-w-xs text-left md:text-right">
            AUTHENTIC ACADEMIC EXCELLENCE & PRODUCT ENGINEERING VELOCITY.
          </p>
        </motion.div>

        {/* Vertical Timeline with Scroll Progress Drawing */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Background Track */}
          <div className="absolute top-4 bottom-4 left-5 md:left-1/2 -translate-x-1/2 w-[2px] bg-white/10" />

          {/* Glowing Animated Progress Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute top-4 bottom-4 left-5 md:left-1/2 -translate-x-1/2 w-[2px] bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-0"
          />

          <div className="space-y-10 sm:space-y-16">
            {MILESTONES.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Marker */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-pill bg-[#0c0c10] border border-white/20 flex items-center justify-center z-10 shadow-[0_0_25px_rgba(0,0,0,0.9)] hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0 ${isEven ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="glass-card p-5 sm:p-8 rounded-3xl border border-white/15 hover:border-white/40 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                    >
                      <div className={`flex flex-wrap items-center gap-2 mb-3 ${isEven ? "justify-start" : "md:justify-end"}`}>
                        <span className="text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider bg-white/[0.05] border border-white/10 text-white/80">
                          {item.period}
                        </span>
                        <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider text-black bg-white">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-white tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider mb-4">
                        {item.institution}
                      </h4>
                      <p className="text-sm font-light text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer on other side */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
