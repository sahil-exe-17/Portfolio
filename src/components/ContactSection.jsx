import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Copyright } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { config } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(
      el.querySelectorAll('h3'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    ).fromTo(
      el.querySelectorAll('.contact-box'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
      '-=0.4'
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="contact-section section-container" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>

        <div className="contact-flex">
          {/* Box 1: Email & Location */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href={`mailto:${config.contact.email}`}
                data-cursor="disable"
              >
                {config.contact.email}
              </a>
            </p>

            <h4>Location</h4>
            <p>
              <span>{config.social.location}</span>
            </p>
          </div>

          {/* Box 2: Social Links */}
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={config.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <ArrowUpRight size={18} />
            </a>
            <a
              href={config.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <ArrowUpRight size={18} />
            </a>
            <a
              href={config.contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter / X <ArrowUpRight size={18} />
            </a>
            <a
              href={config.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Box 3: Credits & Year */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br />
              by <span>{config.developer.fullName}</span>
            </h2>
            <h5>
              <Copyright size={16} /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
