'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../utils'

gsap.registerPlugin(ScrollTrigger)

// The crazy rollup card
const RollupSkillCard = ({ skill, isActive, onMouseEnter, onClick }) => {
  return (
    <motion.div
      layout
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-3xl flex items-center justify-center transition-shadow",
        isActive 
          ? "bg-primary/10 shadow-[0_0_40px_rgba(var(--primary),0.5)] border border-primary" 
          : "bg-white/5 border border-white/5 hover:border-white/20"
      )}
      animate={{
        width: isActive ? "320px" : "110px",
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20, 
        mass: 1 
      }}
      style={{ 
        height: "150px",
        perspective: 1200
      }}
    >
      {/* Crazy Scanning Laser Line (only when active) */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ top: "-10%" }}
            animate={{ top: "110%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_#a4d42b] z-0 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Default State: Icon that rolls UP and disappears on hover */}
      <motion.div
         className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10"
         animate={{
           y: isActive ? -120 : 0, // Rolls UP
           opacity: isActive ? 0 : 1,
           rotateX: isActive ? 90 : 0, // 3D roll up effect
           scale: isActive ? 0.5 : 1
         }}
         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
         style={{ transformOrigin: "bottom" }}
      >
         <div className={cn("text-5xl transition-colors duration-500", isActive ? "text-primary" : "text-white/30")}>
           {skill.icon}
         </div>
      </motion.div>

      {/* Active State: Content rolls UP from the bottom */}
      <motion.div
         className="absolute inset-0 flex items-center justify-between px-6 z-10 overflow-hidden bg-primary"
         initial={{ y: 150, rotateX: -90, opacity: 0 }}
         animate={{
           y: isActive ? 0 : 150, // Rolls UP from bottom
           rotateX: isActive ? 0 : -90,
           opacity: isActive ? 1 : 0
         }}
         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: isActive ? 0.1 : 0 }}
         style={{ transformOrigin: "top" }}
      >
          <div className="flex flex-col gap-1 items-start text-bg text-left">
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-bg animate-pulse" />
              {skill.subLabel}
            </span>
            <h3 className="text-2xl font-bold whitespace-nowrap tracking-tight">{skill.label}</h3>
          </div>
          <div className="text-6xl drop-shadow-2xl text-bg transform -rotate-12 group-hover:rotate-0 transition-transform">
            {skill.icon}
          </div>
      </motion.div>

    </motion.div>
  )
}

const SkillRow = ({ skills, rowIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div 
      className="skill-row-container flex w-full gap-4 relative z-10 justify-center" 
      onMouseLeave={() => setActiveIndex(0)}
    >
      {skills.map((skill, index) => (
        <RollupSkillCard
          key={index}
          skill={skill}
          isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  )
}

export function StaggeredGrid({
    skills = [],
    centerText = "ARSENAL",
    className
}) {
    const containerRef = useRef(null)
    const textRef = useRef(null)
    
    // Split skills into chunks of 5
    const rows = []
    for (let i = 0; i < skills.length; i += 5) {
      rows.push(skills.slice(i, i + 5))
    }

    const splitText = (text) => {
        return text.split('').map((char, i) => (
            <span key={i} className="char inline-block" style={{ willChange: 'transform' }}>{char === ' ' ? '\u00A0' : char}</span>
        ))
    }

    // Crazy GSAP Entrance Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Text Element (Restored Original Scrub)
            if (textRef.current) {
                const chars = textRef.current.querySelectorAll('.char')
                gsap.timeline({
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: 'top bottom',
                        end: 'center center-=25%',
                        scrub: 1,
                    }
                })
                    .from(chars, {
                        ease: 'sine.out',
                        yPercent: 300,
                        autoAlpha: 0,
                        stagger: {
                            each: 0.05,
                            from: 'center'
                        }
                    })
            }

            // Skills Grid Rollup
            gsap.from('.skill-row-container', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
                y: 300,
                z: -500,
                rotateX: -60, // Deep 3D rollup
                opacity: 0,
                stagger: 0.15,
                ease: "back.out(1.5)",
                duration: 1.5,
                transformPerspective: 1200,
                transformOrigin: "bottom center"
            })
        }, containerRef)
        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className={cn("relative overflow-hidden w-full py-32 perspective-[2000px]", className)}>
            
            {/* Animated Grid Background for extra craziness */}
            <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col gap-12 relative z-10">
                
                <section className="grid place-items-center w-full relative mb-10 mt-10">
                    <div ref={textRef} className="text-center font-heading font-bold uppercase flex content-center text-[clamp(3rem,14vw,10rem)] leading-[0.7] text-white drop-shadow-2xl tracking-tighter">
                        {splitText(centerText)}
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 mt-12"
                    >
                        <div className="w-12 h-[1px] bg-primary" />
                        <p className="text-primary tracking-[0.3em] uppercase text-xs font-bold">
                            Hover to Activate Focus
                        </p>
                        <div className="w-12 h-[1px] bg-primary" />
                    </motion.div>
                </section>

                <div className="flex flex-col gap-6 w-full items-center">
                    {rows.map((rowSkills, rowIndex) => (
                        <SkillRow key={rowIndex} skills={rowSkills} rowIndex={rowIndex} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default StaggeredGrid
