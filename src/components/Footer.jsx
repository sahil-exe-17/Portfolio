import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-20 border-t border-[#292524]/08 bg-[#FAFAF8] z-20 text-[#1C1917]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Monogram & Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
          <span className="font-heading text-lg font-bold tracking-tight text-[#1C1917] flex items-center gap-0.5">
            SL<span className="w-1.5 h-1.5 rounded-full bg-[#57534E] ml-0.5" />
          </span>
          <span className="text-xs font-mono text-[#78716C] pt-0.5">
            © {new Date().getFullYear()} SAHIL LALE. CRAFTED WITH ARCHITECTURAL RIGOR.
          </span>
        </div>

        {/* Links & Scroll to Top */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/sahil-exe-17"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB"
            className="text-[#78716C] hover:text-[#1C1917] transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://linkedin.com/in/sahil-lale-199072355"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN"
            className="text-[#78716C] hover:text-[#1C1917] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={17} />
          </a>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-[#57534E] hover:text-[#1C1917] bg-white border border-[#292524]/10 hover:border-[#1C1917] transition-all uppercase shadow-[0_2px_8px_rgba(41,37,36,0.03)]"
          >
            <span>TOP</span>
            <ArrowUp size={12} className="text-[#1C1917]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
