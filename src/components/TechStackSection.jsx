import React from 'react';
import { techStackPyramid } from '../config';

export default function TechStackSection() {
  return (
    <div className="techstack-new" id="techstack">
      {/* Background looping ambient video */}
      <div className="techstack-video-container" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay" />
      </div>

      {/* Tech stack inverted pyramid badge grid */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStackPyramid.map((row, rowIdx) => (
            <div key={rowIdx} className="techstack-row">
              {row.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={item.name}
                  data-cursor="disable"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
