import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FileText } from 'lucide-react';
import { config } from '../config';
import { HoverLink } from './Navbar';

export default function SocialDock() {
  useEffect(() => {
    const socialEl = document.getElementById('social');
    if (!socialEl) return;

    const cleanupFns = [];

    socialEl.querySelectorAll('span').forEach((span) => {
      const a = span.querySelector('a');
      if (!a) return;

      const rect = span.getBoundingClientRect();
      let targetX = rect.width / 2;
      let targetY = rect.height / 2;
      let curX = targetX;
      let curY = targetY;
      let animId;

      const animate = () => {
        curX += 0.1 * (targetX - curX);
        curY += 0.1 * (targetY - curY);
        a.style.setProperty('--siLeft', `${curX}px`);
        a.style.setProperty('--siTop', `${curY}px`);
        animId = requestAnimationFrame(animate);
      };

      const handleMove = (e) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x > 10 && x < 40 && y > 5 && y < 40) {
          targetX = x;
          targetY = y;
        } else {
          targetX = rect.width / 2;
          targetY = rect.height / 2;
        }
      };

      document.addEventListener('mousemove', handleMove, { passive: true });
      animate();

      cleanupFns.push(() => {
        document.removeEventListener('mousemove', handleMove);
        cancelAnimationFrame(animId);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href={config.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </span>
        <span>
          <a
            href={config.contact.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter / X"
          >
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a
            href={config.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
        title="View Resume"
      >
        <HoverLink text="RESUME" />
        <span>
          <FileText size={18} />
        </span>
      </a>
    </div>
  );
}
