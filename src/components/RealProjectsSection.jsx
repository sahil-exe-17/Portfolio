import React, { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const realProjects = [
  {
    title: "StackFlow AI",
    category: "AI Algorithmic Engine",
    desc: "An interactive educational platform visualizing complex data structures with real-time Groq AI tutor explanations and dynamic execution tracking.",
    link: "https://stack-flow-ai.vercel.app/",
    color: "#0a0a0a"
  },
  {
    title: "CryptoPulse AI",
    category: "Crypto Intelligence Platform",
    desc: "A sleek cryptocurrency platform providing live market tracking, simulated AI price forecasting, and multi-timeframe interactive charts.",
    link: "https://cryptopulse-ai64.vercel.app/",
    color: "#1a1a1a"
  },
  {
    title: "TreeNova",
    category: "Educational Algorithm Tool",
    desc: "A premium 'Cyberpunk' BST visualizer featuring recursive SVG logic, in-browser synthesized audio via Web Audio API, and zero-lag state orchestration.",
    link: "https://treenova-bst-visualizer.vercel.app",
    color: "#0a0a0a"
  },
  {
    title: "MatchMind AI",
    category: "AI Intelligence Platform",
    desc: "A premium AI ensemble platform for TATA IPL 2026, providing hyper-accurate match predictions and cinematic statistical insights.",
    link: "https://matchmind-ai-chi.vercel.app",
    color: "#0a0a0a"
  },
  {
    title: "Stock Sense AI",
    category: "AI Fintech Platform",
    desc: "A next-generation stock intelligence platform combining ML, sentiment analysis, and explainable AI to deliver predictive market insights.",
    link: "https://stock-sense-ai.netlify.app/",
    color: "#0a0a0a"
  },
  {
    title: "Spectra AI",
    category: "AI Productivity Suite",
    desc: "A modern AI toolkit combining content generation, text processing, and automation into a single scalable platform.",
    link: "https://spectra-ai-tools.netlify.app/",
    color: "#4a90e2"
  },
  {
    title: "Culina AI",
    category: "Full Stack AI App",
    desc: "A smart recipe application powered by AI, featuring real-time macro tracking, voice interface, and ingredient parsing.",
    link: "https://culina-ai.netlify.app/",
    color: "#a4d42b"
  },
  {
    title: "Travix AI",
    category: "Generative AI Agent",
    desc: "An intelligent travel planner utilizing LLMs to generate personalized, budget-optimized itineraries with interactive maps.",
    link: "https://travix-ai.netlify.app",
    color: "#ffffff"
  },
  {
    title: "Ascendia AI",
    category: "AI Placement Assistant",
    desc: "A full-stack AI-powered placement assistant with resume analyzer, interactive mock interview system, and personalized roadmap generator.",
    link: "https://ascendiaai.netlify.app/",
    color: "#222222"
  },
  {
    title: "ML Classifier",
    category: "Interactive ML Platform",
    desc: "Experiment with core algorithms including Decision Trees and Naive Bayes on custom datasets with real-time parameter tuning.",
    link: "https://ml-classifier-studio.netlify.app",
    color: "#1a1a1a"
  },
  {
    title: "EarnIQ",
    category: "Data Science Platform",
    desc: "A predictive salary modeling dashboard built with a Flask backend, utilizing XGBoost to provide real-time salary insights.",
    link: "https://github.com/SahilLale/EarnIQ",
    color: "#333333"
  },
  {
    title: "ZentriX App",
    category: "Web Application",
    desc: "A responsive web application for ZentriX eSports that presents team information, roster details, and brand identity.",
    link: "https://stately-babka-61d818.netlify.app/",
    color: "#0a0a0a"
  },
  {
    title: "YT Predictor",
    category: "ML Analytics Dashboard",
    desc: "Analyzes YouTube channel performance and predicts future subscriber growth using Machine Learning and Prophet.",
    link: "#",
    color: "#111111"
  },
  {
    title: "Intelaris",
    category: "Interactive Logic Game",
    desc: "Reimagines the classic number guessing game as a smart system with adaptive difficulty and AI-inspired hints.",
    link: "https://intelaris.netlify.app",
    color: "#444444"
  }
];

// Interactive 3D Project Card Component
function ProjectCard3D({ proj, i }) {
  const [hoveredButton, setHoveredButton] = useState(false);
  const cardRef = useRef(null);

  // Framer Motion 3D Tilt Setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  // Flashlight Effect
  const mouseXPos = useTransform(x, [-0.5, 0.5], [0, 100]);
  const mouseYPos = useTransform(y, [-0.5, 0.5], [0, 100]);
  const background = useMotionTemplate`radial-gradient(800px circle at ${mouseXPos}% ${mouseYPos}%, rgba(255,255,255,0.06), transparent 40%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isLight = proj.color === '#ffffff' || proj.color === '#a4d42b';
  const textColor = isLight ? 'text-black' : 'text-white';
  const borderColor = isLight ? 'border-black' : 'border-white';
  const btnBg = isLight ? 'bg-black' : 'bg-white';
  const btnTextColor = hoveredButton 
    ? (isLight ? 'text-white' : 'text-black') 
    : textColor;

  return (
    <div 
      className="project-card-nexus absolute inset-0 m-auto flex items-center justify-center w-full px-6 md:px-0" 
      style={{ perspective: "1500px" }}
    >
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full md:w-[85vw] lg:w-[65vw] h-[60vh] md:h-[70vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group p-8 md:p-16 flex flex-col justify-between shadow-2xl border border-white/20 bg-[#111]"
      >
        {/* Dynamic Glassmorphic Background */}
        <div 
          className="absolute inset-0 z-0 opacity-100"
          style={{ backgroundColor: isLight ? '#e5e5e5' : proj.color }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 pointer-events-none"></div>
        
        {/* Dynamic Flashlight Effect */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background }}
        />
        
        <div className={`z-20 ${textColor}`} style={{ transform: "translateZ(60px)" }}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xl md:text-2xl font-mono opacity-60">0{i + 1}</span>
            <div className={`h-[1px] w-24 ${isLight ? 'bg-black/30' : 'bg-white/30'}`}></div>
          </div>
          <h3 className="text-5xl md:text-7xl lg:text-[7rem] font-bold uppercase tracking-tighter leading-none font-heading drop-shadow-2xl">{proj.title}</h3>
          <p className="text-lg md:text-2xl mt-6 opacity-80 max-w-2xl font-light leading-snug drop-shadow-md" style={{ transform: "translateZ(30px)" }}>{proj.desc}</p>
        </div>

        <div className={`z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 ${textColor}`} style={{ transform: "translateZ(80px)" }}>
          <span className="text-base md:text-xl uppercase tracking-widest font-mono opacity-60">{proj.category}</span>
          <a 
            href={proj.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
            className={`relative px-8 py-4 md:px-12 md:py-6 rounded-full border transition-all uppercase text-sm md:text-base tracking-widest overflow-hidden flex items-center gap-4 ${borderColor} shadow-xl hover:shadow-2xl pointer-events-auto`}
          >
            <div className={`absolute inset-0 transform origin-bottom transition-transform duration-500 ease-out ${
              hoveredButton ? 'scale-y-100' : 'scale-y-0'
            } ${btnBg}`} style={{ borderRadius: '50% 50% 0 0' }}></div>
            
            <span className={`relative z-10 transition-colors duration-500 flex items-center gap-3 ${btnTextColor} font-medium`}>
              {proj.link === '#' ? 'Coming Soon' : 'View Live'}
              <ExternalLink size={18} />
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function RealProjectsSection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card-nexus');
      
      // Initialize State: All cards hidden and scaled down, except the first one
      gsap.set(cards, {
        autoAlpha: 0, // Handles both opacity: 0 and visibility: hidden for max performance
        scale: 0.85,
        zIndex: (i) => cards.length - i,
        x: 0,
        y: 0,
        rotationZ: 0,
        rotationY: 0
      });

      // Show the very first card immediately
      gsap.set(cards[0], { autoAlpha: 1, scale: 1 });

      // Create Scrub Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cards.length * 600}`, // Dynamic scrolling duration
          pin: true,
          scrub: 1, // Smooth scrubbing
        }
      });

      // Build Sequential Sequence (One out, one in)
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return; // Don't throw the very last card
        
        const nextCard = cards[i + 1];
        const isEven = i % 2 === 0;
        
        // 1. Current Card gets thrown away
        tl.to(card, {
          x: isEven ? -window.innerWidth * 0.8 : window.innerWidth * 0.8,
          rotationZ: isEven ? -10 : 10,
          scale: 0.9,
          autoAlpha: 0, // Fades and hides completely to save GPU
          duration: 1,
          ease: "power2.inOut"
        });

        // 2. Next Card scales up and fades in seamlessly
        tl.to(nextCard, {
          scale: 1,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.inOut"
        }, "<"); // Run simultaneously with the throw
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} className="w-full h-screen bg-transparent text-white overflow-hidden relative">
      {/* Title overlay positioned behind the cards */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none opacity-20">
        <h2 className="text-[10rem] md:text-[20rem] font-bold uppercase tracking-tighter font-heading text-white opacity-20">
          WORK
        </h2>
      </div>

      <div className="w-full h-full relative z-10">
        {realProjects.map((proj, i) => (
          <ProjectCard3D key={i} proj={proj} i={i} />
        ))}
      </div>
    </section>
  );
}
