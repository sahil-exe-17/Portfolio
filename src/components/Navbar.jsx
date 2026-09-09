import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import GooeyNav from './GooeyNav';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Journey', href: '#journey' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center px-4 sm:px-8 ${
          isScrolled ? 'pt-4' : 'pt-6 sm:pt-8'
        }`}
      >
        <nav
          className={`w-full max-w-6xl transition-all duration-500 rounded-full flex items-center justify-between px-5 sm:px-7 py-3 ${
            isScrolled
              ? 'glass-pill bg-[#0c0c10]/80 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="flex items-center gap-2 text-white group"
          >
            <span className="font-heading text-xl font-bold tracking-tight text-white transition-colors">
              SL<span className="text-white">.</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              AI Engineer
            </span>
          </a>

          {/* Desktop Gooey Navigation from React Bits */}
          <div className="hidden md:flex items-center">
            <GooeyNav
              items={NAV_ITEMS}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              activeIndex={Math.max(0, NAV_ITEMS.findIndex(item => item.href.substring(1) === activeSection))}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:sahillale17@gmail.com"
              className="relative group px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.03] active:scale-95 flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white/80 hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Fullscreen Mobile Glass Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(28px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[#070709]/95 flex flex-col justify-between px-8 py-24 md:hidden"
          >
            <div className="flex flex-col gap-5 mt-8">
              <span className="text-xs font-mono tracking-widest text-white/60 uppercase">Navigation</span>
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.4 }}
                  className="font-heading text-4xl font-bold uppercase tracking-tight text-white hover:text-white/70 transition-colors flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-white/50">
                PUNE, MAHARASHTRA // MIT-WPU
              </div>
              <a
                href="mailto:sahillale17@gmail.com"
                className="w-full py-3.5 rounded-full text-center text-sm font-semibold uppercase tracking-wider bg-white text-black"
              >
                sahillale17@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
