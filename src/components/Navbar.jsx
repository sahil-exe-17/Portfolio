import React from 'react';
import { config } from '../config';

export function HoverLink({ text }) {
  return (
    <div className="hover-link" data-cursor="disable">
      <div className="hover-in">
        {text} <div>{text}</div>
      </div>
    </div>
  );
}

export default function Navbar({ lenisInstance }) {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      if (lenisInstance && lenisInstance.scrollTo) {
        lenisInstance.scrollTo(el, { offset: 0, duration: 1.5 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SL
        </a>

        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>

        <ul>
          <li>
            <a
              href="#about"
              data-href="#about"
              onClick={(e) => handleScroll(e, '#about')}
            >
              <HoverLink text="ABOUT" />
            </a>
          </li>
          <li>
            <a
              href="#work"
              data-href="#work"
              onClick={(e) => handleScroll(e, '#work')}
            >
              <HoverLink text="WORK" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              data-href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
            >
              <HoverLink text="CONTACT" />
            </a>
          </li>
        </ul>
      </header>

      {/* Ambient background blur circles */}
      <div className="landing-circle1" aria-hidden="true" />
      <div className="landing-circle2" aria-hidden="true" />
      <div className="nav-fade" aria-hidden="true" />
    </>
  );
}
