import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Aurora from './Aurora';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#070709] text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
        
        {/* Global Cinematic Scroll Progress Bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "0%" }}
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-white z-[100] shadow-[0_0_15px_rgba(255,255,255,0.9)] pointer-events-none"
        />

        {/* Animated Aurora Background from React Bits */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-85 overflow-hidden">
          <Aurora
            colorStops={["#7cff67", "#B497CF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          {/* Ambient vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070709]/25 to-[#070709]/85 pointer-events-none" />
        </div>

        {/* Floating Glass Navigation */}
        <Navbar />

        {/* Main Connected Experience with Cinematic Scroll Transitions */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <TechStack />
          <Contact />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />

        {/* Cyber Magnetic Cursor Follower */}
        <CustomCursor />
      </div>
    </SmoothScroll>
  );
}
