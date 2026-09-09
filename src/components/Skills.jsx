import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles, Layers, ArrowUpRight, Terminal, Network, ShieldCheck } from 'lucide-react';
import { 
  SiPython, SiCplusplus, SiC, SiPandas, SiNumpy, SiScikitlearn, 
  SiTensorflow, SiPytorch, SiKeras, SiOpencv, SiOpenai, SiHuggingface,
  SiReact, SiFastapi, SiTailwindcss, SiGit, SiPostman, SiStreamlit, SiFirebase
} from 'react-icons/si';

const SKILL_DOMAINS = [
  {
    id: "gen-ai",
    number: "01",
    title: "Generative AI & Agents",
    tagline: "Autonomous Reasoning & Large Language Model Ecosystems",
    desc: "Designing and deploying production-ready AI agents, retrieval-augmented generation (RAG) pipelines, and multimodal LLM integrations with real-time streaming.",
    icon: <Brain className="text-white" size={28} />,
    skills: [
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "Google Gemini", icon: <Sparkles /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
      { name: "RAG Systems", icon: <Layers /> },
      { name: "LLM Fine-Tuning", icon: <Brain /> },
      { name: "Prompt Engineering", icon: <Terminal /> },
      { name: "Multi-Agent AI", icon: <Network /> },
      { name: "Vibecoding", icon: <Sparkles /> },
    ]
  },
  {
    id: "ml-dl",
    number: "02",
    title: "Deep Learning & ML",
    tagline: "Predictive Analytics, Computer Vision & Statistical Modeling",
    desc: "End-to-end model training, feature engineering, computer vision processing, and deployment of predictive ensemble architectures.",
    icon: <Cpu className="text-white" size={28} />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "Keras", icon: <SiKeras /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
    ]
  },
  {
    id: "frontend",
    number: "03",
    title: "Creative Frontend & UI",
    tagline: "Cinematic, High-Performance Interactive Web Interfaces",
    desc: "Crafting fluid, high-fps web applications with React 19, custom WebGL / Three.js canvas shaders, Tailwind CSS v4, and reactive state orchestration.",
    icon: <Sparkles className="text-white" size={28} />,
    skills: [
      { name: "React 19", icon: <SiReact /> },
      { name: "Tailwind CSS v4", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <Sparkles /> },
      { name: "Three.js / WebGL", icon: <Layers /> },
      { name: "Web Audio API", icon: <Cpu /> },
      { name: "Zustand State", icon: <Layers /> },
      { name: "Responsive UI", icon: <ShieldCheck /> },
    ]
  },
  {
    id: "backend-infra",
    number: "04",
    title: "Backend, APIs & Cloud",
    tagline: "Scalable Microservices, Real-time Protocols & Cloud Pipelines",
    desc: "Constructing high-throughput REST APIs, serverless computing functions, Firebase real-time datastores, and full CI/CD deployment pipelines.",
    icon: <Terminal className="text-white" size={28} />,
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "C / C++", icon: <SiCplusplus /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "RESTful APIs", icon: <Network /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Git & Versioning", icon: <SiGit /> },
    ]
  }
];

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState(SKILL_DOMAINS[0].id);

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/60 block mb-2">
              // 02. CAPABILITIES & ARSENAL
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
              What I <span className="text-white">Build.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-white/40 max-w-xs text-left md:text-right">
            DISCIPLINED EXECUTION ACROSS MACHINE INTELLIGENCE AND MODERN WEB SYSTEMS.
          </p>
        </motion.div>

        {/* 4 Large Interactive Glass Panels with Staggered Scroll Triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_DOMAINS.map((domain, i) => {
            const isSelected = activeDomain === domain.id;
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                onMouseEnter={() => setActiveDomain(domain.id)}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative p-8 sm:p-10 rounded-3xl glass-card cursor-pointer overflow-hidden transition-all duration-500 border ${
                  isSelected 
                    ? 'border-white/40 bg-white/[0.06] shadow-[0_25px_60px_rgba(0,0,0,0.85)]' 
                    : 'border-white/10 bg-white/[0.02] hover:border-white/30'
                }`}
              >
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/40">{domain.number}</span>
                    <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10">
                      {domain.icon}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-full border border-white/15 text-white/60 group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} className={`transition-transform duration-300 ${isSelected ? 'translate-x-0.5 -translate-y-0.5 text-white' : ''}`} />
                  </div>
                </div>

                {/* Domain Title & Tagline */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {domain.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-white/80 mb-4">
                  {domain.tagline}
                </p>
                <p className="text-sm font-light text-white/70 leading-relaxed mb-8">
                  {domain.desc}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.12] hover:border-white/35 transition-all hover:scale-105"
                    >
                      <span className="text-white/70 text-sm">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
