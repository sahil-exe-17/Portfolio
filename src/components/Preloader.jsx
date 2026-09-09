import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import KineticTextLoader from './KineticTextLoader';

const terminalPhrases = [
  "INITIALIZING NEURAL NET...",
  "LOADING 3D PHYSICS ENGINES...",
  "ESTABLISHING SECURE CONNECTION...",
  "BYPASSING SECURITY PROTOCOLS...",
  "ACCESS GRANTED."
];

export default function Preloader({ onComplete }) {
  const [isRevealing, setIsRevealing] = useState(false);
  const [counter, setCounter] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // 1. Smooth Counter Logic (0 to 100)
    let startTime = Date.now();
    const duration = 2500;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCounter(Math.floor(easeOutQuart * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);

    // 2. Terminal Text Cycling
    const phraseInterval = setInterval(() => {
      setPhraseIndex(prev => {
        if (prev < terminalPhrases.length - 1) return prev + 1;
        return prev;
      });
    }, 500);

    // 3. Reveal Timer (open shutters)
    const revealTimer = setTimeout(() => setIsRevealing(true), 2500);

    // 4. Final completion callback
    const totalTimer = setTimeout(() => {
      onComplete();
    }, 3500); 

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(revealTimer);
      clearTimeout(totalTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex font-mono">
      
      {/* Background Columns for the Shutter Reveal */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="h-full w-1/5 bg-[#0a0a0a] border-r border-[#1a1a1a] relative overflow-hidden"
          initial={{ y: 0 }}
          animate={isRevealing ? { y: i % 2 === 0 ? '-100%' : '100%' } : { y: 0 }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1], // Very snappy custom easing curve
            delay: i * 0.08, // Stagger effect between columns
          }}
        >
          {/* Faint grid pattern on the background */}
          <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>
      ))}

      {/* Foreground Content */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        animate={isRevealing ? { opacity: 0, scale: 1.2 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "power2.inOut" }}
      >
        
        {/* Massive Background Counter Watermark */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none opacity-[0.03]">
           <h1 className="text-[40vw] font-bold text-white tracking-tighter leading-none select-none">
             {counter}
           </h1>
        </div>

        {/* The Kinetic Text Loader (Centered) */}
        <div className="relative z-10 scale-125">
           <KineticTextLoader text="Loading" />
        </div>

        {/* HUD Elements: Bottom Left Terminal */}
        <div className="absolute bottom-8 left-8 z-10 flex flex-col gap-2">
           <div className="text-primary text-[10px] tracking-widest uppercase opacity-70">System Status</div>
           <AnimatePresence mode="wait">
             <motion.div
               key={phraseIndex}
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 10 }}
               transition={{ duration: 0.2 }}
               className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
             >
               {terminalPhrases[phraseIndex]}
             </motion.div>
           </AnimatePresence>
        </div>

        {/* HUD Elements: Bottom Right Counter */}
        <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-1">
           <div className="text-primary text-[10px] tracking-widest uppercase opacity-70">Boot Sequence</div>
           <div className="text-white text-2xl md:text-4xl font-bold tracking-widest">{counter}%</div>
        </div>

        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 z-10">
           <div 
             className="h-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)] transition-all duration-75"
             style={{ width: `${counter}%` }}
           />
        </div>

        {/* Sci-Fi Corner Accents */}
        <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
        <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
        <div className="absolute bottom-[90px] left-8 w-6 h-6 border-b-2 border-l-2 border-primary/50 opacity-0 md:opacity-100" />
        <div className="absolute bottom-[90px] right-8 w-6 h-6 border-b-2 border-r-2 border-primary/50 opacity-0 md:opacity-100" />

      </motion.div>
    </div>
  );
}
