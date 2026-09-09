import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, X, ChevronRight, ChevronLeft, CheckCircle2, Terminal, Code2, Cpu } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import CircularGallery from './CircularGallery';
import ElectricBorder from './ElectricBorder';


const ALL_PROJECTS = [
  {
    id: "stackflow-ai",
    number: "01",
    title: "StackFlow AI",
    category: "AI Algorithmic Engine",
    domain: "ai",
    desc: "An interactive educational platform visualizing complex data structures with real-time Groq AI tutor explanations and dynamic execution tracking.",
    tech: ["React 19", "Groq AI", "Data Structures", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://stack-flow-ai.vercel.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Sub-50ms Inference // Live Memory Canvas",
    caseStudy: {
      problem: "Complex algorithms and pointer manipulation in data structures are often abstract and difficult for learners to mentally trace.",
      approach: "Built a reactive visual canvas coupled with Groq's high-speed inference engine to provide instantaneous, step-by-step visual and textual explanations.",
      architecture: ["Reactive memory state machine", "Groq AI real-time streaming tutor", "Custom pointer vector canvas", "Dynamic call-stack tracer"],
      solution: "Learners manipulate stacks, queues, and tree nodes directly on screen while receiving context-aware algorithmic breakdowns."
    }
  },
  {
    id: "cryptopulse-ai",
    number: "02",
    title: "CryptoPulse AI",
    category: "Crypto Intelligence Platform",
    domain: "fintech",
    desc: "A sleek cryptocurrency platform providing live market tracking, simulated AI price forecasting, and multi-timeframe interactive charts.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "CoinGecko API"],
    liveUrl: "https://cryptopulse-ai64.vercel.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "WebSocket Streaming // Multi-Timeframe ML",
    caseStudy: {
      problem: "Fragmented crypto analytics tools lack cohesive predictive signals and clean, non-distracting user interfaces.",
      approach: "Engineered a unified dashboard with WebSocket real-time market data, trend analytics, and algorithmic simulation models.",
      architecture: ["Real-time multi-asset polling engine", "Predictive forecasting pipeline", "Interactive multi-interval charts", "Firebase authentication"],
      solution: "A high-performance crypto command center delivering millisecond market updates alongside predictive price trajectories."
    }
  },
  {
    id: "treenova",
    number: "03",
    title: "TreeNova BST",
    category: "Educational Algorithm Tool",
    domain: "tools",
    desc: "A premium 'Cyberpunk' BST visualizer featuring recursive SVG logic, in-browser synthesized audio via Web Audio API, and zero-lag state orchestration.",
    tech: ["React 19", "Tailwind v4", "Zustand", "Web Audio API", "Framer Motion"],
    liveUrl: "https://treenova-bst-visualizer.vercel.app",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Synthesized Web Audio // Recursive Math",
    caseStudy: {
      problem: "Traditional BST visualizers feel clunky, lack aesthetic delight, and fail to provide multi-sensory feedback for traversal operations.",
      approach: "Crafted mathematical recursive SVG coordinates paired with dynamic frequency audio synthesis generated directly via Web Audio oscillators.",
      architecture: ["Recursive SVG tree calculation", "In-browser Web Audio oscillators (zero external sound files)", "Zustand state synchronizer", "High-contrast dark glass UI"],
      solution: "An immersive, auditory and visual tool where every insertion, search, and balance operation triggers unique harmonic tones."
    }
  },
  {
    id: "matchmind-ai",
    number: "04",
    title: "MatchMind AI",
    category: "AI Intelligence Platform",
    domain: "ai",
    desc: "A premium AI ensemble platform for TATA IPL 2026, providing hyper-accurate match predictions and cinematic statistical insights.",
    tech: ["React", "Node.js", "Framer Motion", "Recharts", "XGBoost", "Vercel"],
    liveUrl: "https://matchmind-ai-chi.vercel.app",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Ensemble XGBoost // Quantum Worm Charts",
    caseStudy: {
      problem: "Cricket match analytics rely on static historical data rather than dynamically adjusting to in-game momentum and player matchup physics.",
      approach: "Trained an ensemble of XGBoost, Random Forest, and neural weighting models on ball-by-ball IPL match records.",
      architecture: ["ML ensemble scoring model", "Vercel Edge Functions", "Interactive Worm run-rate charts", "Liquid Glass design system"],
      solution: "Cinematic, probabilistic match predictions that evolve with real-time match conditions and statistical depth."
    }
  },
  {
    id: "stock-sense-ai",
    number: "05",
    title: "Stock Sense AI",
    category: "AI Fintech Platform",
    domain: "fintech",
    desc: "A next-generation stock intelligence platform combining ML, sentiment analysis, and explainable AI to deliver predictive market insights.",
    tech: ["React", "FastAPI", "Python", "XGBoost", "NLP", "Vader Sentiment"],
    liveUrl: "https://stock-sense-ai.netlify.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "NLP Sentiment // Explainable AI Models",
    caseStudy: {
      problem: "Retail investors struggle to correlate financial news sentiment with algorithmic technical indicators.",
      approach: "Built a dual-stream engine combining NLP sentiment scoring from financial news feeds with XGBoost technical price prediction.",
      architecture: ["FastAPI backend pipeline", "Vader & Transformers NLP analysis", "Feature importance explainability", "Liquid glass dashboard"],
      solution: "Clear, explainable market insights accompanied by conversational AI assistants for deeper financial inquiries."
    }
  },
  {
    id: "ascendia-ai",
    number: "06",
    title: "Ascendia AI",
    category: "AI Placement Assistant",
    domain: "ai",
    desc: "A full-stack AI-powered placement assistant with resume analyzer (ATS scoring), interactive mock interview system, and personalized roadmap generator.",
    tech: ["React", "FastAPI", "Gemini API", "Tailwind CSS", "Python"],
    liveUrl: "https://ascendia-ai.netlify.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "ATS Scoring Engine // Gemini Mock Agent",
    caseStudy: {
      problem: "University students lack targeted, actionable preparation feedback for technical interviews and resume ATS screenings.",
      approach: "Integrated Gemini multimodal capabilities into structured resume parsing and real-time verbal interview simulation.",
      architecture: ["FastAPI resume ATS evaluator", "Gemini AI interview agent", "Dynamic skills gap roadmap generator", "Glassmorphic progress tracker"],
      solution: "A complete end-to-end placement suite providing objective scoring, mock interview transcripts, and customized learning milestones."
    }
  },
  {
    id: "culina-ai",
    number: "07",
    title: "Culina AI",
    category: "Full Stack AI App",
    domain: "ai",
    desc: "A smart recipe application powered by AI, featuring real-time macro tracking, voice interface, and ingredient parsing.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Spoonacular API", "OpenAI API"],
    liveUrl: "https://culina-ai.netlify.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Real-Time Nutrition // AI Voice Assistant",
    caseStudy: {
      problem: "Everyday meal planning lacks intelligent personalization that matches on-hand ingredients with precise dietary targets.",
      approach: "Engineered a conversational AI culinary assistant that translates photos and raw ingredient text into calibrated recipes with live macronutrient calculations.",
      architecture: ["OpenAI vision and text parsing", "Spoonacular nutritional database API", "Speech-to-text voice assistant pipeline", "Adaptive pantry state tracker"],
      solution: "Zero-waste recipe generation with instant macro breakdowns and interactive cooking guidance."
    }
  },
  {
    id: "travix-ai",
    number: "08",
    title: "Travix AI",
    category: "Generative AI Agent",
    domain: "ai",
    desc: "An intelligent travel planner utilizing LLMs to generate personalized, budget-optimized itineraries with interactive maps and destination reasoning.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "LLM APIs", "Mapbox"],
    liveUrl: "https://travix-ai.netlify.app",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Autonomous Itinerary // Budget Engine",
    caseStudy: {
      problem: "Trip planning across multiple destinations involves scattered research across flight, hotel, and attraction portals without holistic budget control.",
      approach: "Constructed an autonomous itinerary generator that optimizes travel routes, time allocation, and cost constraints in a unified timeline.",
      architecture: ["Multi-turn LLM reasoning agent", "Geospatial Mapbox route plotting", "Dynamic budget optimization logic", "Exportable PDF itinerary generator"],
      solution: "Personalized, feasible itineraries generated in seconds with day-by-day geographic clustering and realistic travel times."
    }
  },
  {
    id: "spectra-ai",
    number: "09",
    title: "Spectra AI",
    category: "AI Productivity Suite",
    domain: "tools",
    desc: "A modern AI toolkit combining content generation, text processing, and workflow automation into a single scalable platform.",
    tech: ["React", "AI APIs", "Tailwind CSS", "Vite"],
    liveUrl: "https://spectra-ai-tools.netlify.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Unified AI Toolkit // Instant Pipelines",
    caseStudy: {
      problem: "Content creators and developers switch between multiple single-purpose AI tools, fragmenting their workflow and increasing tool fatigue.",
      approach: "Consolidated text restructuring, automated summarization, prompt enhancement, and translation into a high-speed unified workspace.",
      architecture: ["Low-latency API orchestrator", "Modular client-side utility pipelines", "Rich text markdown renderer", "Local storage history synchronizer"],
      solution: "A streamlined, keyboard-friendly command center for high-speed generative text workflows."
    }
  },
  {
    id: "ml-classifier",
    number: "10",
    title: "ML Classifier Studio",
    category: "Interactive ML Platform",
    domain: "ai",
    desc: "Experiment with core algorithms including Decision Trees and Naive Bayes on custom datasets with real-time parameter tuning and visual boundaries.",
    tech: ["React", "FastAPI", "Python", "Scikit-Learn", "Tailwind CSS"],
    liveUrl: "https://ml-classifier-studio.netlify.app",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Live Hyperparameters // Boundary Plots",
    caseStudy: {
      problem: "Understanding how hyperparameters alter machine learning decision boundaries requires running tedious script iterations.",
      approach: "Built an interactive sandbox that sends parameter changes over a lightweight FastAPI backend to render real-time contour maps.",
      architecture: ["Scikit-Learn classification engines", "FastAPI computation microservice", "Interactive 2D decision boundary canvas", "Dataset generator with noise injection"],
      solution: "Instant visual intuition into model overfitting, underfitting, and convergence properties."
    }
  },
  {
    id: "earniq",
    number: "11",
    title: "EarnIQ",
    category: "Data Science Platform",
    domain: "fintech",
    desc: "A predictive salary modeling dashboard built with a Flask backend, utilizing XGBoost to provide real-time compensation insights based on role and experience.",
    tech: ["Python", "Flask", "XGBoost", "Scikit-Learn", "Chart.js"],
    liveUrl: "https://github.com/SahilLale/EarnIQ",
    githubUrl: "https://github.com/SahilLale/EarnIQ",
    metrics: "XGBoost Regression // Compensation Intelligence",
    caseStudy: {
      problem: "Tech compensation transparency is hindered by wide variances across location, years of experience, and specialized skill sets.",
      approach: "Trained an XGBoost regression model on thousands of verified compensation records to compute percentile-based compensation estimates.",
      architecture: ["Feature engineering pipeline", "Tuned XGBoost regression model", "Flask RESTful inference endpoint", "Interactive benchmark distribution graphs"],
      solution: "Accurate salary benchmarking with actionable skill-differential impact analysis."
    }
  },
  {
    id: "pune-traffic",
    number: "12",
    title: "Pune Traffic Jam Predictor",
    category: "Smart City Infrastructure",
    domain: "tools",
    desc: "A real-time monitoring tool designed to help commuters navigate Pune's congestion by providing proactive alerts for specific city chokepoints and live travel times.",
    tech: ["React", "Next.js", "Google Maps API", "Traffic APIs", "Tailwind CSS"],
    liveUrl: "https://pune-traffic-jam-predictor-363.created.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Live Traffic Stream // Pune Urban Corridors",
    caseStudy: {
      problem: "Commuters in Pune face unpredictable bottleneck delays at peak hours without localized chokepoint telemetry.",
      approach: "Streamed real-time Google Maps traffic telemetry across major arterial junctions and computed predictive bottleneck delays.",
      architecture: ["Google Maps Traffic Layer integration", "Key bottleneck junction monitors", "Proactive congestion alert system", "Mobile-optimized commuter view"],
      solution: "Actionable real-time congestion scores that recommend optimal departure windows."
    }
  },
  {
    id: "zentrix",
    number: "13",
    title: "ZentriX App",
    category: "Web Application",
    domain: "tools",
    desc: "A responsive web application for ZentriX eSports that presents team information, player roster details, and dynamic tournament statistics.",
    tech: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://stately-babka-61d818.netlify.app/",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Live Tournament Hub // Dynamic Roster",
    caseStudy: {
      problem: "Gaming organizations require cohesive, high-energy digital brand presence with live roster tracking and schedule updates.",
      approach: "Engineered an esports hub with cyber-minimal aesthetics, real-time Firebase roster database, and tournament schedule integration.",
      architecture: ["Firebase Cloud Firestore sync", "Cyber-glassmorphic responsive layouts", "Interactive player stat cards", "Social media stream integration"],
      solution: "A modern, lightning-fast digital headquarters celebrating competitive roster achievements."
    }
  },
  {
    id: "intelaris",
    number: "14",
    title: "Intelaris",
    category: "Interactive Logic Game",
    domain: "tools",
    desc: "Reimagines the classic number guessing game as a smart system with adaptive difficulty, AI-inspired hints, streak tracking, and minimal glassmorphism aesthetic.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Web Audio API"],
    liveUrl: "https://intelaris.netlify.app",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Adaptive Difficulty // Streak Analytics",
    caseStudy: {
      problem: "Classic deduction games are often presented as plain text interfaces without engaging progression or sound design.",
      approach: "Elevated the deduction mechanic with dynamic audio feedback via Web Audio API, streak persistence, and adaptive clue systems.",
      architecture: ["In-browser state engine", "Dynamic algorithmic hint generator", "Synthesized sound effects without asset overhead", "Dark glassmorphic HUD design"],
      solution: "A sleek, addictive logic deduction experience with satisfying sensory rewards."
    }
  },
  {
    id: "yt-predictor",
    number: "15",
    title: "YT Predictor",
    category: "ML Analytics Dashboard",
    domain: "ai",
    desc: "Analyzes YouTube channel performance and predicts future subscriber growth using Machine Learning and Facebook Prophet with interactive Plotly visualizations.",
    tech: ["Python", "Streamlit", "Prophet", "Scikit-Learn", "YouTube API"],
    liveUrl: "https://github.com/sahil-exe-17",
    githubUrl: "https://github.com/sahil-exe-17",
    metrics: "Prophet Forecasting // Plotly Visualizations",
    caseStudy: {
      problem: "YouTube creators lack statistical clarity on their long-term subscriber trajectory when factoring in seasonal video release cycles.",
      approach: "Employed Facebook Prophet to analyze multi-month upload cadence and model subscriber growth with uncertainty confidence intervals.",
      architecture: ["YouTube Data API v3 extractor", "Facebook Prophet additive forecasting model", "Interactive Plotly graph canvas", "Streamlit lightweight dashboard runtime"],
      solution: "Accurate, actionable channel forecasts with seasonal and weekly inflection points."
    }
  }
];

const GALLERY_ITEMS = ALL_PROJECTS.map((p, idx) => ({
  id: p.id,
  text: p.title,
  title: p.title,
  number: p.number,
  category: p.category,
  domain: p.domain,
  tech: p.tech,
  metrics: p.metrics,
  liveUrl: p.liveUrl,
  image: `/projects/${p.id}.png`,
}));

export default function Projects() {
  const galleryRef = useRef(null);
  const [activeProjectId, setActiveProjectId] = useState("stackflow-ai");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const activeProject = ALL_PROJECTS.find(p => p.id === activeProjectId) || ALL_PROJECTS[0];

  const handleActiveChange = useCallback((itemData) => {
    if (itemData?.id) {
      setActiveProjectId(itemData.id);
    }
  }, []);

  const handleItemClick = useCallback((itemData) => {
    if (itemData?.id) {
      setActiveProjectId(itemData.id);
      const proj = ALL_PROJECTS.find(p => p.id === itemData.id);
      if (proj && proj.liveUrl && proj.liveUrl !== '#') {
        window.open(proj.liveUrl, '_blank', 'noopener,noreferrer');
      } else if (proj) {
        setSelectedCaseStudy(proj);
      }
    }
  }, []);

  const handleSelectProject = (id) => {
    setActiveProjectId(id);
    galleryRef.current?.goToId(id);
  };

  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/60 block mb-2">
              // 03. INTERACTIVE PORTFOLIO
            </span>
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
              Featured <br />
              <span className="text-white">
                Works.
              </span>
            </h2>
          </div>
          <div className="space-y-1 text-left md:text-right">
            <p className="text-xs sm:text-sm font-mono text-white/60">
              15 PRODUCTION ENGINES, ALGORITHMS &amp; PLATFORMS
            </p>
            <p className="text-[11px] font-mono text-white/40">
              DRAG CYLINDER // CLICK ANY PROJECT TO LAUNCH DIRECTLY
            </p>
          </div>
        </div>

        {/* 3D Circular Cylinder Showcase Vessel */}
        <ElectricBorder
          color="#7cff67"
          speed={0.5}
          chaos={0.06}
          thickness={1.2}
          borderRadius={40}
          className="w-full"
        >
          <div className="relative w-full rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-white/[0.05] via-[#09090f]/90 to-black/95 p-5 sm:p-8 lg:p-10 overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          
          {/* Top Bar with Mode and Navigation Buttons */}
          <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-white/80 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#7cff67] animate-pulse" />
              <span>3D Interactive Cylinder // Click any project card to launch live</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => galleryRef.current?.prev()}
                className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95"
                title="Previous Project"
                aria-label="Previous project"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => galleryRef.current?.next()}
                className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white transition-all hover:scale-105 active:scale-95"
                title="Next Project"
                aria-label="Next project"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* 3D Cylinder Stage */}
          <div className="relative h-[420px] sm:h-[480px] md:h-[540px] w-full my-2">
            <CircularGallery
              ref={galleryRef}
              items={GALLERY_ITEMS}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.04}
              scrollSpeed={2}
              onActiveChange={handleActiveChange}
              onItemClick={handleItemClick}
            />

            {/* Left & Right Subtle Touch Edge Gradients */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#09090f] to-transparent pointer-events-none z-10 opacity-70" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#09090f] to-transparent pointer-events-none z-10 opacity-70" />
          </div>

          {/* Active Project Command Deck (Integrated Directly into the Circular Hover Experience) */}
          <div className="pt-6 border-t border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold tracking-widest text-white/50">
                      PROJ // {activeProject.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/10 text-white border border-white/20">
                      {activeProject.category}
                    </span>
                  </div>

                  <div className="px-3.5 py-1 rounded-full text-[11px] font-mono text-white/80 bg-white/[0.05] border border-white/15 flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#7cff67]" />
                    <span>{activeProject.metrics}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed max-w-2xl">
                      {activeProject.desc}
                    </p>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeProject.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.06] border border-white/15 text-white/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Project Action Buttons */}
                  <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-stretch lg:items-end">
                    {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-black hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_25px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2 group"
                      >
                        <span>Launch Live Application</span>
                        <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    <div className="flex items-center gap-3">
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider bg-white/5 hover:bg-white/15 border border-white/15 text-white transition-all flex items-center gap-2 flex-1 sm:flex-initial justify-center"
                          aria-label="GitHub Repository"
                        >
                          <Github size={15} />
                          <span>Source Code</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedCaseStudy(activeProject)}
                        className="px-5 py-3 rounded-full text-xs font-mono text-white/80 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 flex items-center gap-2 transition-all flex-1 sm:flex-initial justify-center"
                      >
                        <span>Technical Blueprint</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Quick 15-Project Navigation Pills */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 mr-2 shrink-0">
                Jump To:
              </span>
              {ALL_PROJECTS.map((p) => {
                const isActive = p.id === activeProjectId;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProject(p.id)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider shrink-0 transition-all duration-300 flex items-center gap-1.5 ${
                      isActive
                        ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105"
                        : "bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    <span>{p.number}</span>
                    <span className="hidden sm:inline font-sans">{p.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
        </ElectricBorder>

      </div>

      {/* Case Study Blueprint Modal Drawer */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 260 }}
              className="relative w-full max-w-2xl z-10"
            >
              <ElectricBorder
                color="#B497CF"
                speed={0.5}
                chaos={0.05}
                thickness={1.1}
                borderRadius={24}
                className="w-full"
              >
                <div className="relative w-full max-h-[85vh] overflow-y-auto glass-card bg-[#0e0e14]/95 border-white/20 p-6 sm:p-10 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
                    TECHNICAL BLUEPRINT // PROJ {selectedCaseStudy.number}
                  </span>
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-1">
                    {selectedCaseStudy.title}
                  </h3>
                  <p className="text-sm font-mono text-white/50 mt-1">
                    {selectedCaseStudy.category}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 text-sm font-light leading-relaxed">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                      Problem Context
                    </h4>
                    <p className="text-white/80">
                      {selectedCaseStudy.caseStudy?.problem || selectedCaseStudy.desc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                      Technical Approach
                    </h4>
                    <p className="text-white/80">
                      {selectedCaseStudy.caseStudy?.approach || "Engineered scalable modular components with optimized state lifecycles and real-time reactive data pipelines."}
                    </p>
                  </div>

                  {selectedCaseStudy.caseStudy?.architecture && (
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-2">
                        Core Architecture
                      </h4>
                      <ul className="space-y-2">
                        {selectedCaseStudy.caseStudy.architecture.map((item, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-white/90">
                            <CheckCircle2 size={14} className="text-white shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white/40 mb-1">
                      Production Solution
                    </h4>
                    <p className="text-white/80">
                      {selectedCaseStudy.caseStudy?.solution || selectedCaseStudy.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCaseStudy.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedCaseStudy.githubUrl && (
                      <a
                        href={selectedCaseStudy.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white transition-all"
                        aria-label="GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {selectedCaseStudy.liveUrl && selectedCaseStudy.liveUrl !== '#' && (
                      <a
                        href={selectedCaseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2"
                      >
                        <span>Launch Project</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    </div>
                  </div>
                </div>
              </div>
              </ElectricBorder>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
