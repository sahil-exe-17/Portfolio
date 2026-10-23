import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { 
  ExternalLink, ArrowUpRight, ArrowLeft, ArrowRight, 
  Sparkles, Layers, LayoutGrid, Eye, CheckCircle2, Terminal
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { playStoneClick } from '@/utils/audio';

// 16 Real Authentic Projects
export const REAL_PROJECTS = [
  {
    id: "india-intern-ai",
    number: "01",
    title: "India Intern AI",
    category: "GovTech AI Recommendation Engine",
    group: "ai-ml",
    desc: "An AI-driven internship recommendation engine & recruiter ranking platform solving national candidate placement and matching bottlenecks.",
    link: "https://lnkd.in/dt8WygUn",
    github: "https://github.com/sahil-exe-17",
    badge: "GOVTECH ENGINE",
    tech: ["Python", "NLP", "Scikit-Learn", "React 19", "FastAPI"],
    highlight: "8.9 Match Score • NLP Semantic Matching • Vector Search"
  },
  {
    id: "estateiq-ai",
    number: "02",
    title: "EstateIQ AI",
    category: "PropTech Valuation & AI Platform",
    group: "fintech",
    desc: "An intelligent PropTech platform combining Scikit-Learn ML models with Groq GenAI for instant property valuations, algorithmic ROI investment scoring, and interactive AI market intelligence.",
    link: "https://estateiq-ai-omega.vercel.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "ML VALUATION",
    tech: ["React 19", "TypeScript", "FastAPI", "Python", "Scikit-Learn"],
    highlight: "Sub-second Inferences • Groq GenAI • Algorithmic ROI"
  },
  {
    id: "stackflow-ai",
    number: "03",
    title: "StackFlow AI",
    category: "AI Algorithmic Engine",
    group: "algorithms",
    desc: "An interactive educational platform visualizing complex data structures with real-time Groq AI tutor explanations and dynamic execution tracking.",
    link: "https://stack-flow-ai.vercel.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "AST VISUALIZER",
    tech: ["React 19", "Groq AI", "Algorithms", "Tailwind CSS"],
    highlight: "Live AST Tracking • Real-time AI Tutor"
  },
  {
    id: "cryptopulse-ai",
    number: "04",
    title: "CryptoPulse AI",
    category: "Crypto Intelligence Platform",
    group: "fintech",
    desc: "A sleek cryptocurrency platform providing live market tracking, simulated AI price forecasting, and multi-timeframe interactive charts.",
    link: "https://cryptopulse-ai64.vercel.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "FINTECH",
    tech: ["React 19", "FastAPI", "Market Data", "Tailwind CSS"],
    highlight: "Live WebSockets • AI Price Forecast"
  },
  {
    id: "treenova",
    number: "05",
    title: "TreeNova",
    category: "Educational Algorithm Tool",
    group: "algorithms",
    desc: "A BST visualizer featuring recursive SVG logic, in-browser synthesized audio via Web Audio API, and zero-lag state orchestration.",
    link: "https://treenova-bst-visualizer.vercel.app",
    github: "https://github.com/sahil-exe-17",
    badge: "WEB AUDIO API",
    tech: ["React 19", "Web Audio API", "SVG Engine", "Algorithms"],
    highlight: "Zero-lag SVG • Synthesized Acoustics"
  },
  {
    id: "matchmind-ai",
    number: "06",
    title: "MatchMind AI",
    category: "AI Intelligence Platform",
    group: "algorithms",
    desc: "A premium AI ensemble platform for TATA IPL 2026, providing hyper-accurate match predictions and cinematic statistical insights.",
    link: "https://matchmind-ai-chi.vercel.app",
    github: "https://github.com/sahil-exe-17",
    badge: "SPORTS ML",
    tech: ["Python", "FastAPI", "Scikit-Learn", "React 19"],
    highlight: "Ensemble Models • IPL 2026 Forecast"
  },
  {
    id: "stock-sense-ai",
    number: "07",
    title: "Stock Sense AI",
    category: "AI Fintech Platform",
    group: "fintech",
    desc: "A next-generation stock intelligence platform combining ML, sentiment analysis, and explainable AI to deliver predictive market insights.",
    link: "https://stock-sense-ai.netlify.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "QUANT ML",
    tech: ["Python", "FastAPI", "Pandas", "Scikit-Learn"],
    highlight: "Sentiment Pipeline • Explainable AI"
  },
  {
    id: "spectra-ai",
    number: "08",
    title: "Spectra AI",
    category: "AI Productivity Suite",
    group: "web",
    desc: "A modern AI toolkit combining content generation, text processing, and automation into a single scalable platform.",
    link: "https://spectra-ai-tools.netlify.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "PRODUCTIVITY",
    tech: ["React", "Next.js", "OpenAI API", "Tailwind CSS"],
    highlight: "Multi-tool Suite • Automation"
  },
  {
    id: "culina-ai",
    number: "09",
    title: "Culina AI",
    category: "Full Stack AI App",
    group: "web",
    desc: "A smart recipe application powered by AI, featuring real-time macro tracking, voice interface, and ingredient parsing.",
    link: "https://culina-ai.netlify.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "VOICE & MACROS",
    tech: ["React", "Web Speech API", "Node.js", "NLP"],
    highlight: "Voice Parsing • Nutrition AI"
  },
  {
    id: "travix-ai",
    number: "10",
    title: "Travix AI",
    category: "Generative AI Agent",
    group: "web",
    desc: "An intelligent travel planner utilizing LLMs to generate personalized, budget-optimized itineraries with interactive maps.",
    link: "https://travix-ai.netlify.app",
    github: "https://github.com/sahil-exe-17",
    badge: "AGENTIC LLM",
    tech: ["React", "Leaflet", "Gemini API", "Tailwind CSS"],
    highlight: "Dynamic Itineraries • Geo Routing"
  },
  {
    id: "ascendia-ai",
    number: "11",
    title: "Ascendia AI",
    category: "AI Placement Assistant",
    group: "web",
    desc: "A full-stack AI-powered placement assistant with resume analyzer, interactive mock interview system, and personalized roadmap generator.",
    link: "https://ascendia-ai.netlify.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "EDTECH",
    tech: ["React", "Tailwind CSS", "FastAPI", "LangChain"],
    highlight: "ATS Resume Score • Mock Voice Prep"
  },
  {
    id: "ml-classifier",
    number: "12",
    title: "ML Classifier",
    category: "Interactive ML Platform",
    group: "algorithms",
    desc: "Experiment with core algorithms including Decision Trees and Naive Bayes on custom datasets with real-time parameter tuning.",
    link: "https://ml-classifier-studio.netlify.app",
    github: "https://github.com/sahil-exe-17",
    badge: "INTERACTIVE ML",
    tech: ["Python", "Scikit-Learn", "Streamlit", "NumPy"],
    highlight: "Decision Boundaries • Live Tuning"
  },
  {
    id: "earniq",
    number: "13",
    title: "EarnIQ",
    category: "Data Science Platform",
    group: "fintech",
    desc: "A predictive salary modeling dashboard built with a Flask backend, utilizing XGBoost to provide real-time salary insights.",
    link: "https://github.com/SahilLale/EarnIQ",
    github: "https://github.com/sahil-exe-17",
    badge: "DATA SCIENCE",
    tech: ["Python", "Flask", "XGBoost", "Pandas"],
    highlight: "XGBoost Regressor • Market Baselines"
  },
  {
    id: "zentrix-app",
    number: "14",
    title: "ZentriX App",
    category: "Web Application",
    group: "web",
    desc: "A responsive web application for ZentriX eSports that presents team information, roster details, and brand identity.",
    link: "https://stately-babka-61d818.netlify.app/",
    github: "https://github.com/sahil-exe-17",
    badge: "WEB DESIGN",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    highlight: "eSports Roster • Dynamic UI"
  },
  {
    id: "yt-predictor",
    number: "15",
    title: "YT Predictor",
    category: "ML Analytics Dashboard",
    group: "algorithms",
    desc: "Analyzes YouTube channel performance and predicts future subscriber growth using Machine Learning and Prophet time-series models.",
    link: "https://github.com/sahil-exe-17",
    github: "https://github.com/sahil-exe-17",
    badge: "TIME SERIES",
    tech: ["Python", "Prophet", "Pandas", "Streamlit"],
    highlight: "Prophet Forecaster • Growth Analytics"
  },
  {
    id: "intelaris",
    number: "16",
    title: "Intelaris",
    category: "Interactive Logic Game",
    group: "web",
    desc: "Reimagines the classic number guessing game as a smart system with adaptive difficulty and algorithmic hints.",
    link: "https://intelaris.netlify.app",
    github: "https://github.com/sahil-exe-17",
    badge: "LOGIC",
    tech: ["JavaScript", "HTML5", "CSS3"],
    highlight: "Adaptive Logic • Algorithmic Hints"
  }
];

const FILTER_TABS = [
  { id: "all", label: "All Works (16)" },
  { id: "ai-ml", label: "GovTech & AI" },
  { id: "fintech", label: "PropTech & FinTech" },
  { id: "algorithms", label: "Algorithms & Models" },
  { id: "web", label: "Web Apps" }
];

// Crisp, Short & Sweet 3D Spotlight Card
function CrispSpotlightCard({ project, onNext, onPrev, currentIndex, totalCount }) {
  const cardRef = useRef(null);

  // Framer Motion 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);

  // Soft stone specular flashlight
  const mouseXPos = useTransform(x, [-0.5, 0.5], [0, 100]);
  const mouseYPos = useTransform(y, [-0.5, 0.5], [0, 100]);
  const background = useMotionTemplate`radial-gradient(550px circle at ${mouseXPos}% ${mouseYPos}%, rgba(255,255,255,0.7), transparent 60%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    x.set(clientX / width - 0.5);
    y.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full" style={{ perspective: "1400px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full relative rounded-3xl p-6 sm:p-10 md:p-12 bg-[#FAFAF8]/90 backdrop-blur-xl border border-[#292524]/10 shadow-[0_20px_50px_rgba(41,37,36,0.06)] overflow-hidden transition-shadow hover:shadow-[0_28px_60px_rgba(41,37,36,0.1)]"
      >
        {/* Soft Specular Flashlight Overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0 rounded-3xl"
          style={{ background }}
        />

        {/* Ambient Subtle Stone Gradient Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#E7E5E4]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        {/* Card Content - 3D Layered */}
        <div className="relative z-10 flex flex-col justify-between min-h-[340px] sm:min-h-[380px]">
          
          {/* Top Row: Index Badge, Category & Counter */}
          <div 
            className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#292524]/08"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-bold text-[#1C1917] tracking-wider px-2.5 py-1 rounded-md bg-[#292524]/05">
                [{project.number}]
              </span>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#78716C]">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-[#292524]/06 text-[#1C1917]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917] animate-pulse" />
                {project.badge}
              </span>
              <span className="text-xs font-mono text-[#A8A29E] hidden sm:inline">
                {currentIndex + 1} / {totalCount}
              </span>
            </div>
          </div>

          {/* Center: Title & Description */}
          <div className="my-6" style={{ transform: "translateZ(45px)" }}>
            <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1C1917] leading-[0.98]">
              {project.title}
            </h3>

            <p className="text-sm sm:text-lg text-[#57534E] font-light leading-relaxed max-w-3xl mt-4">
              {project.desc}
            </p>

            {/* Quick Metrics / Highlight Pill */}
            {project.highlight && (
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#78716C] bg-white/60 w-fit px-3 py-1.5 rounded-xl border border-[#292524]/06">
                <CheckCircle2 size={13} className="text-[#1C1917]" />
                <span>{project.highlight}</span>
              </div>
            )}
          </div>

          {/* Bottom Row: Tech Tokens & Crisp Actions */}
          <div 
            className="pt-5 border-t border-[#292524]/08 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ transform: "translateZ(60px)" }}
          >
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span 
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#292524]/05 text-[#44403C] border border-[#292524]/04"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions & Next/Prev Controls */}
            <div className="flex items-center gap-2.5">
              {/* Prev / Next buttons */}
              <div className="flex items-center gap-1 mr-1">
                <button
                  onClick={() => {
                    playStoneClick(420);
                    onPrev();
                  }}
                  className="p-2.5 rounded-xl border border-[#292524]/12 text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-all"
                  title="Previous Project (←)"
                >
                  <ArrowLeft size={14} />
                </button>
                <button
                  onClick={() => {
                    playStoneClick(500);
                    onNext();
                  }}
                  className="p-2.5 rounded-xl border border-[#292524]/12 text-[#1C1917] hover:bg-[#1C1917] hover:text-[#FAFAF8] transition-all"
                  title="Next Project (→)"
                >
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* GitHub Repo Link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[#292524]/12 text-[#1C1917] hover:border-[#1C1917] hover:bg-white transition-all"
                  title="GitHub Source"
                >
                  <FaGithub size={15} />
                </a>
              )}

              {/* Primary Live Action */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playStoneClick(600)}
                className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#1C1917] text-[#FAFAF8] hover:bg-[#292524] transition-all flex items-center gap-2 shadow-[0_4px_14px_rgba(28,25,23,0.15)] group"
              >
                <span>{project.link === '#' ? 'In Development' : 'Launch Platform'}</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}

// Main Projects Showcase Component
export default function RealProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("spotlight"); // "spotlight" | "grid"
  const [filter, setFilter] = useState("all");

  const activeProject = REAL_PROJECTS[currentIndex];

  const filteredProjects = filter === "all" 
    ? REAL_PROJECTS 
    : REAL_PROJECTS.filter(p => p.group === filter);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REAL_PROJECTS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REAL_PROJECTS.length) % REAL_PROJECTS.length);
  };

  // Keyboard navigation for spotlight deck
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== "spotlight") return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode]);

  return (
    <section id="work" className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#292524]/08">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#78716C]">
                // 04. SHIPPED PRODUCTIONS (16 SYSTEMS)
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] uppercase leading-[0.96]">
              Real <br />
              <span className="editorial-serif lowercase font-normal text-[#57534E]">
                platforms
              </span>{' '}
              & Systems.
            </h2>
          </div>

          {/* Right Header Controls: View Mode Toggle */}
          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-full bg-[#292524]/05 border border-[#292524]/08">
              <button
                onClick={() => {
                  playStoneClick(480);
                  setViewMode("spotlight");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  viewMode === "spotlight"
                    ? "bg-[#1C1917] text-[#FAFAF8] shadow-[0_2px_8px_rgba(28,25,23,0.15)] font-semibold"
                    : "text-[#57534E] hover:text-[#1C1917]"
                }`}
              >
                <Eye size={12} />
                <span>Spotlight 3D</span>
              </button>
              <button
                onClick={() => {
                  playStoneClick(540);
                  setViewMode("grid");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  viewMode === "grid"
                    ? "bg-[#1C1917] text-[#FAFAF8] shadow-[0_2px_8px_rgba(28,25,23,0.15)] font-semibold"
                    : "text-[#57534E] hover:text-[#1C1917]"
                }`}
              >
                <LayoutGrid size={12} />
                <span>Catalog (16)</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: Crisp, Sweet 3D Spotlight Deck */}
        {viewMode === "spotlight" ? (
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
              >
                <CrispSpotlightCard
                  project={activeProject}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  currentIndex={currentIndex}
                  totalCount={REAL_PROJECTS.length}
                />
              </motion.div>
            </AnimatePresence>

            {/* Quick Strip Switcher: All 16 Projects in a Sweet Dock Pill Bar */}
            <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
              {REAL_PROJECTS.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => {
                    playStoneClick(420 + idx * 15);
                    setCurrentIndex(idx);
                  }}
                  className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all border ${
                    currentIndex === idx
                      ? "bg-[#1C1917] text-[#FAFAF8] border-[#1C1917] shadow-[0_4px_12px_rgba(28,25,23,0.12)] font-semibold scale-105"
                      : "bg-white/70 text-[#57534E] border-[#292524]/08 hover:border-[#292524]/20 hover:text-[#1C1917]"
                  }`}
                >
                  <span className={currentIndex === idx ? "text-[#FAFAF8]" : "text-[#A8A29E]"}>
                    [{proj.number}]
                  </span>
                  <span>{proj.title}</span>
                </button>
              ))}
            </div>

            {/* Hint for keyboard */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A8A29E] px-1">
              <span>Use keyboard arrow keys [←] [→] to browse</span>
              <span>16 Deployed Live Systems</span>
            </div>
          </div>
        ) : (
          /* View Mode 2: Crisp Quick Catalog Grid (All 16 Works) */
          <div>
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 rounded-full bg-[#292524]/04 border border-[#292524]/08 w-fit mb-6">
              {FILTER_TABS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    playStoneClick(500);
                    setFilter(f.id);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                    filter === f.id
                      ? "bg-[#1C1917] text-[#FAFAF8] shadow-[0_2px_8px_rgba(28,25,23,0.12)] font-semibold"
                      : "text-[#57534E] hover:text-[#1C1917]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Responsive Crisp Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25, delay: idx * 0.03 }}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group relative rounded-2xl bg-white/85 p-6 border border-[#292524]/10 shadow-[0_4px_20px_rgba(41,37,36,0.03)] hover:shadow-[0_16px_36px_rgba(41,37,36,0.08)] hover:border-[#292524]/25 flex flex-col justify-between transition-all"
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between pb-3 border-b border-[#292524]/06">
                        <span className="text-xs font-mono font-bold text-[#A8A29E] group-hover:text-[#1C1917] transition-colors">
                          [{project.number}]
                        </span>
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono tracking-wider uppercase bg-[#292524]/05 text-[#57534E] font-medium">
                          {project.badge}
                        </span>
                      </div>

                      {/* Title & Category */}
                      <div className="mt-4">
                        <h3 className="font-heading text-xl font-bold text-[#1C1917] group-hover:translate-x-1 transition-transform">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-[#78716C] mt-1">
                          {project.category}
                        </p>
                        <p className="text-xs text-[#57534E] font-light leading-relaxed mt-2.5">
                          {project.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Tech Tokens & Direct Live Link */}
                    <div className="mt-5 pt-3.5 border-t border-[#292524]/06">
                      <div className="flex flex-wrap gap-1 mb-3.5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#292524]/04 text-[#44403C]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playStoneClick(580)}
                          className="flex-1 py-2 rounded-xl text-center text-xs font-mono font-bold uppercase tracking-wider bg-[#1C1917] text-[#FAFAF8] hover:bg-[#292524] transition-all flex items-center justify-center gap-1.5 shadow-[0_2px_8px_rgba(28,25,23,0.1)]"
                        >
                          <span>Visit Live</span>
                          <ArrowUpRight size={13} />
                        </a>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl border border-[#292524]/12 text-[#1C1917] hover:border-[#1C1917] hover:bg-white transition-all"
                            title="GitHub Repo"
                          >
                            <FaGithub size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
