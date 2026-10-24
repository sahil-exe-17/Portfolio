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
import MonumentalFooter from './MonumentalFooter';

gsap.registerPlugin(ScrollTrigger);

export default function MainPortfolio({ lenisRef, isLoading }) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);

    const isDesktopDevice = window.innerWidth > 1024 && !window.matchMedia('(pointer: coarse)').matches;
    let lenis = null;
    let updateTicker = null;

    if (isDesktopDevice) {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 1.0,
        infinite: false
      });

      if (lenisRef) {
        lenisRef.current = lenis;
      }

      lenis.on('scroll', ScrollTrigger.update);

      updateTicker = (time) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(500, 33);
    } else {
      if (lenisRef) {
        lenisRef.current = null;
      }
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (updateTicker) gsap.ticker.remove(updateTicker);
      if (lenis) lenis.destroy();
    };
  }, [lenisRef]);

  return (
    <div className="container-main">
      <Navbar lenisInstance={lenisRef?.current} />
      <SocialDock />

      {/* 3D Interactive Animated Character (Desktop only, mounts cleanly upon load) */}
      {isDesktop && !isLoading && <Character3D />}

      {/* Main Connected Editorial Flow */}
      <div className="editorial-sections">
        <Hero />
        <AboutSection />
        <WhatIDo />
        <CareerSection />
        <WorkSection />
        <TechStackSection />
        <CtaSection />
        <ContactSection />
        <MonumentalFooter />
      </div>
    </div>
  );
}
