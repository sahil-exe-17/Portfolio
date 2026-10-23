import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { GraduationCap, Award, Rocket, Database, Layers } from 'lucide-react';

const REAL_MILESTONES = [
  {
    period: "2025",
    title: "India Intern AI — GovTech Recommendation Platform",
    institution: "Autonomous NLP & Matching Architecture",
    description: "Architected India Intern AI: an intelligent NLP-driven recommendation & recruiter ranking engine built to connect talent with opportunities at scale.",
    badge: "AI PLATFORM",
    icon: <Award size={18} className="text-[#1C1917]" />,
  },
  {
    period: "2024 — PRESENT",
    title: "16+ Production Applications Shipped",
    institution: "Independent Software & Model Engineering",
    description: "Architected, built, and shipped 16+ live web applications and platforms spanning real estate ML valuation (EstateIQ AI), interactive CS tutors (StackFlow AI), audio-synthesized BST visualizers (TreeNova), and crypto platforms (CryptoPulse AI).",
    badge: "16+ DEPLOYED APPS",
    icon: <Rocket size={18} className="text-[#1C1917]" />,
  },
  {
    period: "2024",
    title: "Academic Honors & Scholarship Recipient",
    institution: "MIT World Peace University (MIT-WPU), Pune",
    description: "Awarded the MIT-WPU Academic Distinction Scholarship in Integrated B.Tech Computer Science, maintaining an 8.9 cumulative CGPA with specialization in Data Structures and Algorithms.",
    badge: "SCHOLARSHIP RECIPIENT",
    icon: <Award size={18} className="text-[#1C1917]" />,
  },
  {
    period: "2023 — PRESENT",
    title: "Integrated B.Tech in Computer Science",
    institution: "Faculty of Engineering & Technology, MIT-WPU",
    description: "Academic coursework and research in Advanced Data Structures, Object-Oriented Software Design, Machine Learning Foundations, and Systems Programming in C++ & Python.",
    badge: "8.9 CGPA",
    icon: <GraduationCap size={18} className="text-[#1C1917]" />,
  },
  {
    period: "2023",
    title: "Machine Learning & Python Foundations",
    institution: "Data Science & Predictive Modeling Genesis",
    description: "Mastered numerical computation with NumPy and Pandas, developing early predictive projects such as salary forecasting (EarnIQ with XGBoost) and YouTube subscriber growth prediction (YT Predictor).",
    badge: "FOUNDATION",
    icon: <Database size={18} className="text-[#1C1917]" />,
  }
];

export default function Journey() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 160, damping: 25 });

  return (
    <section id="journey" ref={containerRef} className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#292524]/08">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#78716C] block mb-2">
              // 05. CHRONOLOGY & ACHIEVEMENTS
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] uppercase leading-[0.96]">
              Academic & <br />
              <span className="editorial-serif lowercase font-normal text-[#57534E]">
                engineering
              </span>{' '}
              Trajectory.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#78716C] max-w-xs text-left md:text-right">
            CONTINUOUS PROGRESSION THROUGH RIGOROUS EDUCATION AND SHIPPING REAL PRODUCTS.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Static Background Rail */}
          <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-[#292524]/10 rounded-full" />

          {/* Animated Dynamic Stone Progress Rail */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-[#1C1917] rounded-full"
          />

          <div className="space-y-8 sm:space-y-10">
            {REAL_MILESTONES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ x: 6 }}
                className="relative group transition-transform"
              >
                {/* Dynamic Timeline Node with Pulse */}
                <div className="absolute -left-[30px] sm:-left-[46px] top-2 w-4 h-4 rounded-full bg-[#FAFAF8] border-2 border-[#1C1917] group-hover:scale-125 group-hover:bg-[#1C1917] transition-all" />

                {/* Milestone Card */}
                <div className="bg-white/85 p-6 sm:p-8 rounded-2xl border border-[#292524]/10 shadow-[0_4px_20px_rgba(41,37,36,0.03)] group-hover:shadow-[0_12px_32px_rgba(41,37,36,0.06)] group-hover:border-[#292524]/25 transition-all space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#292524]/06">
                    <span className="text-xs font-mono font-bold tracking-wider text-[#1C1917]">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#292524]/05 text-[#57534E] font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C1917]">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-[#78716C]">
                    {item.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
