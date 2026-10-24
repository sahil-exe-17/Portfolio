import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { config } from '../config';
import { useTheme } from '../context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      if (lenisInstance && lenisInstance.scrollTo) {
        lenisInstance.scrollTo(el, { offset: 0, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Home">
            SL
          </a>
        </div>

        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>

        <div className="header-right">
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

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            data-cursor="disable"
          >
            {theme === 'light' ? (
              <Moon size={17} className="theme-icon theme-icon-moon" />
            ) : (
              <Sun size={17} className="theme-icon theme-icon-sun" />
            )}
          </button>
        </div>
      </header>

      {/* Ambient background blur circles */}
      <div className="landing-circle1" aria-hidden="true" />
      <div className="landing-circle2" aria-hidden="true" />
      <div className="nav-fade" aria-hidden="true" />
    </>
  );
}
