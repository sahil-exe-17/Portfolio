import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2, Zap } from 'lucide-react';

const DYNAMIC_HIGHLIGHTS = [
  "AUTONOMOUS AGENTS",
  "PREDICTIVE ENGINES",
  "INTELLIGENT SYSTEMS",
  "FULL-STACK APPS"
];

export default function Hero() {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const target = DYNAMIC_HIGHLIGHTS[highlightIndex];
    const speed = isDeleting ? 25 : 60;

    if (!isDeleting && displayText === target) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setHighlightIndex((prev) => (prev + 1) % DYNAMIC_HIGHLIGHTS.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText(target.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, highlightIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* 100% Stable Content Container - No screen wobbling */}
      <div className="relative z-10 max-w-6xl w-full mx-auto flex-1 flex flex-col justify-center">
        
        {/* Top Identity Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono tracking-wider text-white">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-semibold text-white">SAHIL LALE</span>
            <span className="text-white/40">//</span>
            <span className="text-white/80">AI DEVELOPER</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-white/60">
            <span>MIT-WPU (8.9 CGPA)</span>
          </div>
        </motion.div>

        {/* Short, Sweet & Magnetic Headline */}
        <div className="space-y-4 max-w-4xl py-2 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-extrabold uppercase tracking-tight text-white leading-[0.95]"
          >
            Turning AI Into <br />
            <span className="text-white">
              {displayText}
              <span className="animate-pulse font-mono text-white ml-1">_</span>
            </span>
          </motion.h1>

          {/* Short & Sweet Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-snug pt-2"
          >
            Building intelligent applications that bridge deep learning with human-centric design. Fast, disciplined, and production-ready.
          </motion.p>
        </div>

        {/* Clean Stable CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm text-black bg-white hover:bg-white/90 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            <span>Explore Projects</span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full font-semibold uppercase tracking-wider text-xs sm:text-sm text-white bg-white/[0.05] border border-white/20 hover:bg-white/[0.1] active:scale-95 transition-all"
          >
            <span>Get In Touch</span>
          </a>

          <div className="hidden sm:flex items-center gap-4 pl-4 border-l border-white/10 text-xs font-mono text-white/50">
            <div className="flex items-center gap-1.5">
              <Code2 size={14} className="text-white" />
              <span>15+ APPS SHIPPED</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Stable Indicator */}
      <div className="relative z-10 max-w-6xl w-full mx-auto pt-8 flex items-center justify-between border-t border-white/10 text-xs font-mono text-white/40">
        <span>PUNE, MAHARASHTRA // AVAILABLE FOR WORK</span>

        <a
          href="#about"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span>SCROLL</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
