import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#070709] z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Monogram */}
        <div className="flex items-center gap-3">
          <span className="font-heading text-xl font-bold tracking-tight text-white">
            SL<span className="text-[#7cff67]">.</span>
          </span>
          <span className="text-xs font-mono text-white/40">
            © {new Date().getFullYear()} SAHIL LALE. CRAFTED WITH DISCIPLINE & VISION.
          </span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sahil-exe-17"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="GITHUB"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/in/sahil-lale-199072355"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="LINKEDIN"
            className="text-white/50 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-widest text-white/70 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all uppercase"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} className="text-[#7cff67]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
