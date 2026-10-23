import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config';

export default function MyWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my production projects, systems, and creations</p>
      </div>

      <div className="myworks-grid">
        {config.projects.map((project, index) => {
          const numberDisplay = index < 9 ? `0${index + 1}` : `${index + 1}`;

          return (
            <a
              key={project.id}
              className="myworks-card"
              data-cursor="disable"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="myworks-card-number">{numberDisplay}</div>
              <div className="myworks-card-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
