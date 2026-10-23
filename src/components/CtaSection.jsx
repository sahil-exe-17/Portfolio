import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

export default function CtaSection() {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Link to="/myworks" className="cta-btn cta-btn-play" data-cursor="disable">
          Explore All Works →
        </Link>
        <a
          href={config.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn cta-btn-hire"
          data-cursor="disable"
        >
          Hire Me →
        </a>
      </div>
    </div>
  );
}
