import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Layout, Cpu, Database, Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { 
  SiPython, SiCplusplus, SiC, SiPandas, SiNumpy, SiScikitlearn, 
  SiPytorch, SiReact, SiFastapi, SiTailwindcss, SiGit, SiPostman, SiJavascript
} from 'react-icons/si';

const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages & Systems",
    tagline: "Deterministic Execution & Algorithmic Foundations",
    skills: [
      { name: "Python", icon: <SiPython />, level: "Expert", desc: "Primary language for models, numerical computation & async backends." },
      { name: "C++", icon: <SiCplusplus />, level: "Advanced", desc: "Data structures, memory optimization & algorithmic complexity." },
      { name: "C", icon: <SiC />, level: "Proficient", desc: "Low-level system concepts and pointer architectures." },
      { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: "Advanced", desc: "Modern reactive asynchronous event loop orchestration." },
      { name: "TypeScript", icon: <SiReact />, level: "Advanced", desc: "Type-safe interfaces and rigorous client-server contracts." }
    ]
  },
  {
    id: "web-frontend",
    title: "Modern Web Engineering",
    tagline: "High-FPS Reactive Architecture & Fluid Layouts",
    skills: [
      { name: "React 19", icon: <SiReact />, level: "Advanced", desc: "Concurrent rendering, server actions & custom component hooks." },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Expert", desc: "Utility-first design tokens, responsive breakpoints & micro-styling." },
      { name: "Framer Motion", icon: <Sparkles size={14} />, level: "Advanced", desc: "Physics-based spring curves, layout morphs & kinetic typography." },
      { name: "GSAP / ScrollTrigger", icon: <Layers size={14} />, level: "Advanced", desc: "Timeline orchestration, pin spacers & smooth scroll transitions." },
      { name: "Web Audio API", icon: <Cpu size={14} />, level: "Proficient", desc: "Client-side harmonic frequency synthesis (TreeNova)." }
    ]
  },
  {
    id: "backend-data",
    title: "Backend, ML & Data Engineering",
    tagline: "Microservices, Machine Learning & Mathematical Modeling",
    skills: [
      { name: "FastAPI", icon: <SiFastapi />, level: "Advanced", desc: "High-throughput asynchronous Python endpoints with strict Pydantic models." },
      { name: "Scikit-Learn", icon: <SiScikitlearn />, level: "Advanced", desc: "Regression valuation, decision trees, random forests & clustering." },
      { name: "NumPy & Pandas", icon: <SiPandas />, level: "Advanced", desc: "High-performance vector operations and multidimensional data matrices." },
      { name: "PyTorch", icon: <SiPytorch />, level: "Proficient", desc: "Tensor operations and neural architecture experimentation." },
      { name: "XGBoost", icon: <Cpu size={14} />, level: "Advanced", desc: "Gradient boosting algorithms for predictive analytics (EarnIQ)." }
    ]
  },
  {
    id: "devops-tooling",
    title: "Tooling, Architecture & DevOps",
    tagline: "Reproducible Pipelines, Testing & Version Control",
    skills: [
      { name: "Git & GitHub", icon: <SiGit />, level: "Expert", desc: "Branching workflows, code reviews and distributed version control." },
      { name: "Postman API", icon: <SiPostman />, level: "Advanced", desc: "Endpoint validation, payload testing & contract verification." },
      { name: "Vercel & Netlify", icon: <Layers size={14} />, level: "Advanced", desc: "Edge deployment, environment configuration & automated CI/CD." },
      { name: "Linux & Bash", icon: <Terminal size={14} />, level: "Advanced", desc: "Command-line operations, process monitoring & shell scripting." }
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#292524]/08">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#78716C] block mb-2">
              // 03. TECHNICAL CAPABILITIES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] uppercase leading-[0.96]">
              Competencies <br />
              <span className="editorial-serif lowercase font-normal text-[#57534E]">
                & engineering
              </span>{' '}
              Toolkit.
            </h2>
          </div>

          {/* Interactive Category Selector Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-[#292524]/04 border border-[#292524]/08 max-w-xl">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  activeTab === idx
                    ? 'bg-[#1C1917] text-[#FAFAF8] shadow-[0_2px_10px_rgba(28,25,23,0.15)] font-semibold'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                0{idx + 1}. {cat.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Domain Stage */}
        <div className="bg-white/80 rounded-3xl p-6 sm:p-10 border border-[#292524]/10 shadow-[0_8px_30px_rgba(41,37,36,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#292524]/08 gap-2">
            <div>
              <span className="text-xs font-mono text-[#78716C] uppercase tracking-widest">
                [SECTOR 0{activeTab + 1}]
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
            </div>
            <p className="text-xs font-mono text-[#57534E] max-w-sm sm:text-right">
              {SKILL_CATEGORIES[activeTab].tagline}
            </p>
          </div>

          {/* Crazy Animated Skill Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6"
            >
              {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="p-5 rounded-2xl bg-white/90 border border-[#292524]/08 shadow-[0_2px_12px_rgba(41,37,36,0.02)] hover:border-[#292524]/25 hover:shadow-[0_8px_24px_rgba(41,37,36,0.06)] flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-[#292524]/04 text-lg text-[#1C1917] group-hover:bg-[#1C1917] group-hover:text-[#FAFAF8] transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-[#292524]/05 text-[#57534E]">
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="font-heading text-lg font-bold text-[#1C1917]">
                      {skill.name}
                    </h4>

                    <p className="text-xs text-[#57534E] font-light leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#292524]/06 flex items-center justify-between text-[10px] font-mono text-[#78716C]">
                    <span>STATUS: ACTIVE</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
