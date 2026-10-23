import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, ArrowRight, X, Mail, Sparkles, Command } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { playStoneClick, playChime } from '@/utils/audio';

const QUICK_ACTIONS = [
  { id: 'india-intern', title: 'India Intern AI', category: 'GovTech AI Engine', href: 'https://lnkd.in/dt8WygUn', external: true },
  { id: 'estateiq', title: 'EstateIQ AI', category: 'PropTech Valuation Platform', href: 'https://estateiq-ai-omega.vercel.app/', external: true },
  { id: 'stackflow', title: 'StackFlow AI', category: 'Algorithmic Visualizer', href: 'https://stack-flow-ai.vercel.app/', external: true },
  { id: 'treenova', title: 'TreeNova', category: 'Web Audio BST Engine', href: 'https://treenova-bst-visualizer.vercel.app', external: true },
  { id: 'cryptopulse', title: 'CryptoPulse AI', category: 'Crypto Intelligence', href: 'https://cryptopulse-ai64.vercel.app/', external: true },
  { id: 'work', title: 'All 16 Projects', category: 'Jump to Selected Works', href: '#work', external: false },
  { id: 'skills', title: 'Technical Stack', category: 'Jump to Capabilities', href: '#skills', external: false },
  { id: 'journey', title: 'Chronology & Education', category: 'Jump to Milestones', href: '#journey', external: false },
  { id: 'github', title: 'GitHub Profile', category: 'github.com/sahil-exe-17', href: 'https://github.com/sahil-exe-17', external: true },
  { id: 'linkedin', title: 'LinkedIn Profile', category: 'linkedin.com/in/sahil-lale-199072355', href: 'https://linkedin.com/in/sahil-lale-199072355', external: true },
  { id: 'email', title: 'Copy Email Address', category: 'sahillale17@gmail.com', action: 'copy-email' },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        playStoneClick(520);
        if (isOpen) onClose();
        else onClose(true);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredActions = QUICK_ACTIONS.filter(a => 
    a.title.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action) => {
    playStoneClick(600);
    if (action.action === 'copy-email') {
      navigator.clipboard.writeText('sahillale17@gmail.com');
      playChime();
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 1200);
      return;
    }

    if (action.external) {
      window.open(action.href, '_blank', 'noopener,noreferrer');
    } else {
      const el = document.querySelector(action.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-24 sm:pt-32 px-4 bg-[#1C1917]/25 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg rounded-2xl bg-[#FAFAF8] border border-[#292524]/15 shadow-[0_20px_50px_rgba(41,37,36,0.14)] overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[#292524]/10 bg-white/70">
              <Search size={16} className="text-[#78716C]" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or jump to project..."
                className="w-full text-xs sm:text-sm font-mono text-[#1C1917] placeholder-[#A8A29E] bg-transparent outline-none"
              />
              <button
                onClick={() => onClose()}
                className="px-2 py-1 rounded text-[10px] font-mono bg-[#292524]/05 text-[#78716C] hover:text-[#1C1917]"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-72 overflow-y-auto p-2 divide-y divide-[#292524]/04">
              {filteredActions.length === 0 ? (
                <div className="p-6 text-center text-xs font-mono text-[#78716C]">
                  No matching systems found.
                </div>
              ) : (
                filteredActions.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#292524]/05 text-left transition-colors group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-mono font-semibold text-[#1C1917] group-hover:translate-x-0.5 transition-transform">
                        {item.title}
                      </div>
                      <div className="text-[10px] font-mono text-[#78716C]">
                        {item.category}
                      </div>
                    </div>

                    <span className="text-[10px] font-mono text-[#A8A29E] group-hover:text-[#1C1917] flex items-center gap-1">
                      {item.action === 'copy-email' && copied ? (
                        <span className="text-[#1C1917] font-bold">COPIED ✓</span>
                      ) : (
                        <span>SELECT ↵</span>
                      )}
                    </span>
                  </button>
                ))
              )}
            </div>

            {/* Bottom Footer Hint */}
            <div className="px-4 py-2 border-t border-[#292524]/08 bg-[#292524]/02 flex items-center justify-between text-[10px] font-mono text-[#78716C]">
              <span>NAVIGATION SHORTCUT</span>
              <span>PRESS ⌘K / CTRL+K ANYTIME</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
