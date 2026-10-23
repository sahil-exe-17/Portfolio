import React from 'react';
import { config } from '../config';

export default function CareerSection() {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          {/* Glowing vertical neon timeline with animated pulsing dot */}
          <div className="career-timeline">
            <div className="career-dot" />
          </div>

          {config.experiences.map((exp, idx) => {
            const periodDisplay = exp.period.includes('Present')
              ? 'NOW'
              : exp.period.includes(' - ')
              ? exp.period.split(' - ')[0]
              : exp.period;

            return (
              <div key={idx} className="career-info-box">
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{exp.position}</h4>
                    <h5>{exp.company}</h5>
                  </div>
                  <h3>{periodDisplay}</h3>
                </div>
                <p>{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
