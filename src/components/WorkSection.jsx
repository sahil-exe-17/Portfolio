import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { config } from '../config';

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const section = sectionRef.current;
    if (!section) return;

    let timer = setTimeout(() => {
      const boxes = section.getElementsByClassName('work-box');
      const workContainer = section.querySelector('.work-container');
      const workFlex = section.querySelector('.work-flex');

      if (!boxes.length || !workContainer || !workFlex) return;

      const containerLeft = workContainer.getBoundingClientRect().left;
      const boxRect = boxes[0].getBoundingClientRect();
      const parentWidth = workFlex.getBoundingClientRect().width;

      const totalDistance = boxRect.width * boxes.length - (containerLeft + parentWidth) + 80;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${totalDistance}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          id: 'work-horizontal-pin',
          invalidateOnRefresh: true
        }
      });

      tl.to(workFlex, {
        x: -totalDistance,
        ease: 'none'
      });

      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      const st = ScrollTrigger.getById('work-horizontal-pin');
      if (st) st.kill();
    };
  }, []);

  const featuredProjects = config.projects.slice(0, 5);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {featuredProjects.map((project, idx) => (
            <div key={project.id} className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>0{idx + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.technologies}</p>
              </div>

              <div className="work-image">
                <a
                  className="work-image-in"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  <div className="work-link">
                    <ArrowUpRight size={24} />
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          ))}

          {/* End CTA Card to See All Works */}
          <div className="work-box work-box-cta">
            <div className="see-all-works">
              <h3>Want to see more?</h3>
              <p>Explore all 16+ production projects, algorithms, and deployed systems</p>
              <Link to="/myworks" className="see-all-btn" data-cursor="disable">
                See All Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
