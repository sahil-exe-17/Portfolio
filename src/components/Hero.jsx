import React from 'react';
import { config } from '../config';

export default function Hero() {
  const nameParts = config.developer.fullName.split(' ');
  const firstName = nameParts[0].toUpperCase();
  const lastName = nameParts.slice(1).join(' ').toUpperCase();

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        {/* Left typographic intro */}
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            {firstName} <br />
            {lastName && <span>{lastName}</span>}
          </h1>
        </div>

        {/* Right rotating role display */}
        <div className="landing-info">
          <h3>An</h3>
          <h2 className="landing-info-h2">
            <div className="landing-h2-1">AI Engineer</div>
            <div className="landing-h2-2">AI Engineer</div>
          </h2>
          <h2>
            <div className="landing-h2-info">Full-Stack Developer</div>
            <div className="landing-h2-info-1">Full-Stack Developer</div>
          </h2>
        </div>
      </div>
    </div>
  );
}
