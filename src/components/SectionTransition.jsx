import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function SectionTransition({ 
  fromIndex = "01", 
  fromTitle = "PROLOGUE", 
  toIndex = "02", 
  toTitle = "PROFILE",
  marker = "CHAPTER TRANSITION"
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineWidth = useSpring(useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]), {
    stiffness: 180,
    damping: 24
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-8 sm:py-12 px-4 sm:px-8 lg:px-20 overflow-hidden pointer-events-none select-none"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto flex items-center justify-between gap-4 sm:gap-8"
      >
        {/* Left hairline */}
        <div className="relative flex-1 h-[1px] bg-[#292524]/08 overflow-hidden">
          <motion.div 
            style={{ width: lineWidth }}
            className="absolute right-0 top-0 bottom-0 bg-[#1C1917]/40"
          />
        </div>

        {/* Central Chapter Transition Pill */}
        <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FAFAF8]/95 border border-[#292524]/10 shadow-[0_2px_12px_rgba(41,37,36,0.03)] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]/40 animate-pulse" />
          
          <span className="text-[9px] sm:text-[10px] font-mono text-[#A8A29E] tracking-wider">
            [{fromIndex}] {fromTitle}
          </span>
          
          <span className="text-[10px] sm:text-xs text-[#1C1917] font-serif font-bold">
            ➔
          </span>

          <span className="text-[9px] sm:text-[10px] font-mono text-[#1C1917] font-semibold tracking-wider">
            [{toIndex}] {toTitle}
          </span>
        </div>

        {/* Right hairline */}
        <div className="relative flex-1 h-[1px] bg-[#292524]/08 overflow-hidden">
          <motion.div 
            style={{ width: lineWidth }}
            className="absolute left-0 top-0 bottom-0 bg-[#1C1917]/40"
          />
        </div>
      </motion.div>
    </div>
  );
}
