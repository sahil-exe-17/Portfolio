import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './Navbar';
import SocialDock from './SocialDock';
import Character3D from './Character3D';
import Hero from './Hero';
import AboutSection from './AboutSection';
import WhatIDo from './WhatIDo';
import CareerSection from './CareerSection';
import WorkSection from './WorkSection';
import TechStackSection from './TechStackSection';
import CtaSection from './CtaSection';
import ContactSection from './ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function MainPortfolio({ lenisRef, isLoading }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);

    // High performance smooth Lenis synchronized with GSAP ticker
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false
    });

    if (lenisRef) {
      lenisRef.current = lenis;
    }

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, [lenisRef]);

  return (
    <div className="container-main">
      <Navbar lenisInstance={lenisRef?.current} />
      <SocialDock />

      {/* 3D Interactive Animated Character (Desktop only, mounts cleanly upon load) */}
      {isDesktop && !isLoading && <Character3D />}

      {/* Main Connected Editorial Flow */}
      <div className="container-main">
        <Hero />
        <AboutSection />
        <WhatIDo />
        <CareerSection />
        <WorkSection />
        <TechStackSection />
        <CtaSection />
        <ContactSection />
      </div>
    </div>
  );
}
