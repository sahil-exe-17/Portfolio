import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SocialFlipButton from './SocialFlipButton';

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: '50%',
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="bg-black text-white pt-32 pb-10 px-6 rounded-t-[3rem] -mt-10 relative z-30 flex flex-col items-center justify-between min-h-[70vh]">
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <h2 ref={textRef} className="text-large text-white mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          HAVE AN IDEA? <span className="text-primary italic rounded-full border border-primary/30 px-8 py-2">TELL ME</span>
        </h2>
        
        <div className="w-full mt-20 border-t border-white/10 pt-12 flex justify-center">
          <SocialFlipButton />
        </div>
      </div>
    </section>
  );
}
