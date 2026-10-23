import React, { useState, useEffect } from 'react';
import { initialFX } from '../utils/initialFX';

export default function LoadingScreen({ onLoaded, lenisInstance }) {
  const [percent, setPercent] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      if (p < 80) {
        p += Math.floor(Math.random() * 8) + 3;
        setPercent(Math.min(p, 80));
      } else if (p < 100) {
        p += Math.floor(Math.random() * 4) + 1;
        setPercent(Math.min(p, 100));
        if (p >= 100) {
          clearInterval(interval);
          setIsReady(true);
        }
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleClick = () => {
    if (!isReady || isClicked) return;
    setIsClicked(true);

    setTimeout(() => {
      initialFX(lenisInstance);
      if (onLoaded) onLoaded();
    }, 700);
  };

  return (
    <div className={`loading-screen-wrapper ${isClicked ? 'loading-done' : ''}`}>
      {/* Header during load */}
      <div className="loading-header">
        <div className="loader-title" data-cursor="disable">
          Sahil Lale
        </div>
        <div className={`loaderGame ${isClicked ? 'loader-out' : ''}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, i) => (
                <div key={i} className="loaderGame-line" />
              ))}
            </div>
            <div className="loaderGame-ball" />
          </div>
        </div>
      </div>

      {/* Main loading screen overlay */}
      <div className="loading-screen">
        {/* Infinite scrolling marquee */}
        <div className="loading-marquee">
          <div className="loading-marquee-in">
            <span>&nbsp; AI & ML ENGINEER &nbsp;</span>
            <span>&nbsp; FULL-STACK DEVELOPER &nbsp;</span>
            <span>&nbsp; SYSTEM ARCHITECT &nbsp;</span>
            <span>&nbsp; ALGORITHMIC PLATFORMS &nbsp;</span>
            <span>&nbsp; AI & ML ENGINEER &nbsp;</span>
            <span>&nbsp; FULL-STACK DEVELOPER &nbsp;</span>
            <span>&nbsp; SYSTEM ARCHITECT &nbsp;</span>
            <span>&nbsp; ALGORITHMIC PLATFORMS &nbsp;</span>
          </div>
        </div>

        {/* Central interactive pill button */}
        <div
          className={`loading-wrap ${isClicked ? 'loading-clicked' : ''}`}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
          data-cursor="disable"
        >
          <div className="loading-hover" />
          <div className={`loading-button ${isReady ? 'loading-complete' : ''}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box" />
            </div>

            <div className="loading-content2">
              <span>{isReady ? 'WELCOME' : 'PREPARING'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
