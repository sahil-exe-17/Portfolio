import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const nameWrapperRef = useRef(null);

  const roles = ["INTELLIGENT SYSTEMS", "GENERATIVE AI", "DIGITAL EXPERIENCES", "PREDICTIVE MODELS"];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Framer Motion 3D Hover Effects
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the mouse values
  const mouseX = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 30 });
  
  // Transform values into rotation degrees
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize coordinates between -0.5 and 0.5
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    if (isDeleting) {
      if (currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        timer = setTimeout(() => {}, 400);
      } else {
        timer = setTimeout(() => {
          setCurrentRole(currentFullRole.substring(0, currentRole.length - 1));
        }, 40);
      }
    } else {
      if (currentRole === currentFullRole) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => {
          setCurrentRole(currentFullRole.substring(0, currentRole.length + 1));
        }, 75);
      }
    }

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex, roles]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll parallax effect (moves up, shrinks, fades out)
      gsap.to(nameWrapperRef.current, {
        y: -250,
        scale: 0.85,
        opacity: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home"
      ref={containerRef} 
      className="relative h-screen w-full bg-transparent flex flex-col justify-end pb-10 md:pb-20 px-6 md:px-12 overflow-hidden" 
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10 pointer-events-none flex flex-col justify-between w-full h-full max-w-screen-2xl mx-auto pt-32 pb-10">
        
        {/* Left Side: Typewriter Subtitle */}
        <div className="w-full mt-auto mb-16 md:mb-24">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-max"
          >
            <p className="text-3xl md:text-5xl lg:text-[5rem] text-white font-light pointer-events-auto leading-none tracking-tight uppercase font-heading drop-shadow-2xl" style={{ transform: "translateZ(50px)" }}>
              ENGINEERING <br/>
              <span className="text-primary font-bold italic drop-shadow-[0_0_20px_rgba(164,212,43,0.3)] block mt-2 md:mt-4">
                {currentRole}<span className="animate-pulse opacity-50 font-mono">_</span>
              </span>
            </p>
          </motion.div>
        </div>

        {/* Right Side: Name - 3D Tilt */}
        <div ref={nameWrapperRef} className="w-full flex flex-col items-end text-right">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 100, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="w-full flex flex-col items-end"
          >
            <div className="pb-2 md:pb-4 pointer-events-auto" style={{ transform: "translateZ(80px)" }}>
              <h1 className="text-[80px] md:text-[130px] lg:text-[180px] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] tracking-tighter font-heading cursor-default transition-all duration-500 pb-2">
                SAHIL
              </h1>
            </div>
            
            <div className="pb-4 flex items-center justify-end gap-4 md:gap-8 w-full pointer-events-auto relative" style={{ transform: "translateZ(120px)" }}>
              {/* Static Glowing Orb */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-primary/20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
              
              {/* Spinning Scroll Down indicator */}
              <div className="w-16 h-16 md:w-28 md:h-28 rounded-full border border-primary/20 flex items-center justify-center hidden md:flex shrink-0 animate-[spin_10s_linear_infinite] hover:border-primary/60 transition-colors bg-black/50 backdrop-blur-none">
                <span className="text-[8px] md:text-[10px] uppercase text-primary tracking-[0.2em] text-center leading-tight font-sans">Scroll<br/>Down</span>
              </div>
              
              <h1 className="text-[80px] md:text-[130px] lg:text-[180px] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#6b8e23] drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] tracking-tighter font-heading cursor-default transition-all duration-500 pb-2">
                LALE
              </h1>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
