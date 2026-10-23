import React, { useRef } from 'react';
import { config } from '../config';

export default function WhatIDo() {
  const contentRefs = useRef([]);

  const handleCardClick = (index) => {
    const clickedEl = contentRefs.current[index];
    if (!clickedEl) return;

    const isActive = clickedEl.classList.contains('what-content-active');

    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === index) {
        if (isActive) {
          el.classList.remove('what-content-active');
        } else {
          el.classList.add('what-content-active');
          el.classList.remove('what-sibling');
        }
      } else {
        if (isActive) {
          el.classList.remove('what-sibling');
        } else {
          el.classList.remove('what-content-active');
          el.classList.add('what-sibling');
        }
      }
    });
  };

  return (
    <div className="whatIDO" id="services">
      {/* Left Title Box */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            &nbsp;I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      {/* Right Content Accordion Box */}
      <div className="what-box">
        <div className="what-box-in">
          {/* Dashed Vertical Boundary Line SVG */}
          <div className="what-border2" aria-hidden="true">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* Card 1: AI & ML Systems */}
          <div
            className="what-content what-noTouch"
            ref={(el) => (contentRefs.current[0] = el)}
            onClick={() => handleCardClick(0)}
          >
            <div className="what-border1" aria-hidden="true">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner" aria-hidden="true" />
            <div className="what-content-in">
              <h3>{config.skills.develop.title}</h3>
              <h4>{config.skills.develop.description}</h4>
              <p>{config.skills.develop.details}</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                {config.skills.develop.tools.map((tool, idx) => (
                  <div key={idx} className="what-tags">
                    {tool}
                  </div>
                ))}
              </div>
              <div className="what-arrow" aria-hidden="true" />
            </div>
          </div>

          {/* Card 2: Full-Stack Architecture */}
          <div
            className="what-content what-noTouch"
            ref={(el) => (contentRefs.current[1] = el)}
            onClick={() => handleCardClick(1)}
          >
            <div className="what-border1" aria-hidden="true">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner" aria-hidden="true" />
            <div className="what-content-in">
              <h3>{config.skills.design.title}</h3>
              <h4>{config.skills.design.description}</h4>
              <p>{config.skills.design.details}</p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                {config.skills.design.tools.map((tool, idx) => (
                  <div key={idx} className="what-tags">
                    {tool}
                  </div>
                ))}
              </div>
              <div className="what-arrow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
