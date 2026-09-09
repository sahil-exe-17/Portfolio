import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Globe, GraduationCap, BrainCircuit } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text blocks
      gsap.from('.about-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // Animate side panels
      gsap.from('.about-panel', {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 md:py-40 px-6 bg-[#f8f9fa] rounded-t-[3rem] -mt-10 relative z-20 text-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Big Text & Summary */}
        <div className="w-full lg:w-3/5 space-y-12">
          <div className="about-text">
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold uppercase tracking-tighter leading-none font-heading mb-6">
              Vibe-Driven <br />
              <span className="italic font-light text-gray-400">Engineering.</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <p className="about-text text-2xl md:text-4xl font-light leading-snug tracking-tight">
              I am an <span className="font-medium">aspiring AI and software developer</span> and a 2nd-year Integrated B.Tech student, passionate about building intelligent, user-focused applications by combining creativity with strong technical execution.
            </p>
            
            <p className="about-text text-xl md:text-3xl font-light leading-snug text-gray-600">
              I'm known for a vibe-driven approach to coding that emphasizes intuitive design, rapid prototyping, and practical problem-solving to create impactful, real-world applications. Experienced in developing end-to-end AI solutions, integrating real-time APIs, and crafting visually engaging interfaces.
            </p>
          </div>

          <div className="about-text grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-black/10">
            <div>
              <span className="block text-5xl md:text-6xl font-medium mb-2 font-heading">AI</span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-black/50 font-bold">End-to-End Solutions</span>
            </div>
            <div>
              <span className="block text-5xl md:text-6xl font-medium mb-2 font-heading">UI</span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-black/50 font-bold">Visually Engaging</span>
            </div>
            <div className="hidden md:block">
              <span className="block text-5xl md:text-6xl font-medium mb-2 font-heading">API</span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-black/50 font-bold">Real-Time Integration</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact & Education Panels */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6 relative">
          {/* Abstract decorative element */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#d1ff4d] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          
          {/* Contact Panel */}
          <div className="about-panel p-8 md:p-10 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <BrainCircuit size={100} />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8 font-heading">Sahil Lale</h3>
            
            <ul className="space-y-5 text-lg font-medium text-gray-700">
              <li className="flex items-center gap-4 group/item">
                <div className="p-3 rounded-full bg-gray-50 group-hover/item:bg-[#d1ff4d] transition-colors"><MapPin size={20} className="text-black" /></div>
                Pune, Maharashtra
              </li>
              <li className="flex items-center gap-4 group/item">
                <div className="p-3 rounded-full bg-gray-50 group-hover/item:bg-[#d1ff4d] transition-colors"><Phone size={20} className="text-black" /></div>
                9272557826
              </li>
              <li className="flex items-center gap-4 group/item">
                <div className="p-3 rounded-full bg-gray-50 group-hover/item:bg-[#d1ff4d] transition-colors"><Mail size={20} className="text-black" /></div>
                sahillale17@gmail.com
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="https://linkedin.com/in/sahil-lale-199072355" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-3 py-4 rounded-full bg-black text-white hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm font-bold">
                <FaLinkedin size={18} /> LinkedIn
              </a>
              <a href="https://sahil-tech.netlify.app" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-3 py-4 rounded-full bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest text-sm font-bold">
                <Globe size={18} /> Portfolio
              </a>
            </div>
          </div>

          {/* Education Panel */}
          <div className="about-panel p-8 md:p-10 bg-[#0a0a0a] text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#d1ff4d] rounded-full filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                <GraduationCap size={28} className="text-[#d1ff4d]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest font-heading text-[#d1ff4d]">Education</h3>
            </div>
            
            <h4 className="text-2xl md:text-3xl font-semibold leading-tight mb-3">MIT World Peace University</h4>
            <p className="text-white/70 text-lg mb-8 font-light">Integrated B.Tech in Computer Science<br/>(Artificial Intelligence & Data Science)</p>
            
            <div className="flex justify-between items-end border-t border-white/20 pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2 font-bold">CGPA</p>
                <p className="text-4xl md:text-5xl font-mono text-[#d1ff4d]">8.9</p>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2 font-bold">Scholarship</p>
                <p className="text-lg font-medium text-white/90">MIT-WPU II <span className="text-white/50 text-sm">(2024)</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
