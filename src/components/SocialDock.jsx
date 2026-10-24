import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { FileText } from 'lucide-react';
import { config } from '../config';
import { HoverLink } from './Navbar';

export default function SocialDock() {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href={config.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub Profile"
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
            aria-label="LinkedIn Profile"
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
            aria-label="Twitter Profile"
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
            aria-label="Instagram Profile"
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
        aria-label="View Resume PDF"
      >
        <HoverLink text="RESUME" />
        <span>
          <FileText size={18} />
        </span>
      </a>
    </div>
  );
}
