import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, X, ShieldCheck, FileText, Satellite } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function MonumentalFooter() {
  const { theme } = useTheme();
  const [modalType, setModalType] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const footerRef = useRef(null);

  // Parallax tracking on desktop - optimized with requestAnimationFrame
  useEffect(() => {
    let rAF = null;
    const handleMouseMove = (e) => {
      if (!footerRef.current || window.innerWidth <= 768) return;
      if (rAF) return;
      rAF = requestAnimationFrame(() => {
        rAF = null;
        if (!footerRef.current) return;
        const rect = footerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
          setMousePos({ x, y });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      if (rAF) cancelAnimationFrame(rAF);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="monumental-footer"
      id="monumental-footer"
      aria-label="Portfolio Cinematic Footer"
    >
      {/* Dynamic Atmospheric Nebula Background */}
      <div className="monumental-nebula-glow" />
      <div className="monumental-stars-field" />

      {/* Top Monospace Metadata Bar */}
      <div className="monumental-meta-bar">
        <div className="meta-left">
          <span className="meta-copyright">
            © {new Date().getFullYear()} SAHIL LALE. ALL RIGHTS RESERVED.
          </span>
        </div>

        <div className="meta-center">
          <span className="orbital-status">
            <span className="orbital-pulse" />
            ORBITAL NODE: LAT 18.52° N, LONG 73.85° E // SYS_NOMINAL
          </span>
        </div>

        <div className="meta-right">
          <button
            type="button"
            className="meta-link-btn"
            onClick={() => setModalType('terms')}
            data-cursor="TERMS"
          >
            TERMS &amp; CONDITIONS
          </button>
          <span className="meta-divider">/</span>
          <button
            type="button"
            className="meta-link-btn"
            onClick={() => setModalType('privacy')}
            data-cursor="PRIVACY"
          >
            PRIVACY POLICY
          </button>
          <span className="meta-divider">/</span>
          <button
            type="button"
            className="meta-top-btn"
            onClick={scrollToTop}
            data-cursor="TOP"
            title="Scroll to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} className="meta-arrow" />
          </button>
        </div>
      </div>

      {/* Stage: Multi-Plane 3D Cosmic Composition */}
      <div className="monumental-stage">
        
        {/* Background Space Rocks (Behind Typography) */}
        <div
          className="monumental-rock rock-bg-top"
          style={{
            transform: `translate(${mousePos.x * -12}px, ${mousePos.y * -8}px) rotate(${mousePos.x * 5}deg)`
          }}
        >
          <img
            src="/images/footer_asteroid.webp"
            alt="Cosmic Asteroid Drift"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Massive Monumental Typography: SXHILL */}
        <div className="monumental-text-wrapper">
          <svg
            viewBox="0 0 1600 360"
            className="monumental-svg"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              {/* Dark mode titanium silver monumental sheen */}
              <linearGradient id="sxhillDarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#e2e8f0" />
                <stop offset="75%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>

              {/* Light mode pure brutalist obsidian, matching TURION reference */}
              <linearGradient id="sxhillLightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#140f21" />
                <stop offset="50%" stopColor="#090611" />
                <stop offset="100%" stopColor="#020105" />
              </linearGradient>

              {/* Luminous aurora edge glow */}
              <linearGradient id="sxhillStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(192, 132, 252, 0.7)" />
                <stop offset="50%" stopColor="rgba(56, 189, 248, 0.7)" />
                <stop offset="100%" stopColor="rgba(192, 132, 252, 0.7)" />
              </linearGradient>

              <filter id="monumentalShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#000" floodOpacity="0.75" />
              </filter>
            </defs>

            <text
              x="50%"
              y="74%"
              textAnchor="middle"
              className="monumental-glyph"
              fill={theme === 'light' ? 'url(#sxhillLightGrad)' : 'url(#sxhillDarkGrad)'}
              filter="url(#monumentalShadow)"
            >
              SXHILL
            </text>
          </svg>
        </div>

        {/* Floating High-Tech Satellite Probe (In Front of Typography) */}
        <div
          className="monumental-satellite"
          style={{
            transform: `translate(${mousePos.x * 24}px, ${mousePos.y * 18}px) rotate(${mousePos.x * 3}deg)`
          }}
          data-cursor="ORBITAL"
        >
          <img
            src="/images/footer_satellite.webp"
            alt="Orbital Satellite Probe"
            className="satellite-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Foreground Asteroid Boulder (Floating Left Midground) */}
        <div
          className="monumental-rock rock-fg-left"
          style={{
            transform: `translate(${mousePos.x * 32}px, ${mousePos.y * 22}px) rotate(${mousePos.x * -6}deg)`
          }}
        >
          <img
            src="/images/footer_asteroid.webp"
            alt="Deep Space Asteroid"
            loading="lazy"
            decoding="async"
          />
        </div>

      </div>

      {/* Accessible Policy & Terms Modals */}
      {modalType && (
        <div
          className="monumental-modal-overlay"
          onClick={() => setModalType(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="monumental-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-group">
                {modalType === 'terms' ? (
                  <>
                    <FileText size={20} className="modal-icon" />
                    <h3>Terms &amp; Conditions</h3>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={20} className="modal-icon" />
                    <h3>Privacy Policy</h3>
                  </>
                )}
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setModalType(null)}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-content">
              {modalType === 'terms' ? (
                <>
                  <p className="modal-highlight">
                    Effective: {new Date().getFullYear()} // Architectural &amp; Creative Portfolio
                  </p>
                  <p>
                    All codebases, design architectures, 3D interactive workflows, and bespoke web platforms demonstrated on this portfolio are designed and developed by <strong>Sahil Lale</strong>.
                  </p>
                  <p>
                    Open-source components are provided under the standard MIT License. Client projects and proprietary architectures remain the intellectual property of their respective owners.
                  </p>
                  <p>
                    Feel free to explore, clone public experiments, or get in touch for custom AI development, full-stack architectures, or collaborative ventures.
                  </p>
                </>
              ) : (
                <>
                  <p className="modal-highlight">
                    Zero Tracking // Pure Client-Side Privacy
                  </p>
                  <p>
                    This portfolio does not utilize invasive third-party tracking cookies, fingerprinting algorithms, or personal data monetization.
                  </p>
                  <p>
                    Local preferences (such as your chosen theme: Dark Mode or Light Mode) are stored strictly within your browser's local storage for a seamless browsing experience.
                  </p>
                  <p>
                    Direct inquiries submitted via email or contact channels are treated with complete confidentiality and will never be shared with third parties.
                  </p>
                </>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="modal-action-btn"
                onClick={() => setModalType(null)}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
