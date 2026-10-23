import React, { useEffect, useRef } from 'react';
import { Award, Code2, Cpu, GraduationCap, Sparkles, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { config } from '../config';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "16+", label: "PRODUCTION APPS SHIPPED", detail: "Spanning ML, GovTech, FinTech & Algorithms" },
  { value: "8.9", label: "CUMULATIVE CGPA", detail: "MIT World Peace University, Pune" },
  { value: "99.9%", label: "SYSTEM UPTIME", detail: "Robust reactive pipelines & zero-bloat state" },
  { value: "<100ms", label: "INFERENCE LATENCY", detail: "Sub-second predictive valuations" }
];

const PILLARS = [
  {
    icon: <Sparkles className="text-[#c2a4ff]" size={22} />,
    tag: "GOVTECH & AI ENGINES",
    title: "Intelligent Systems",
    desc: "Architected NLP recommendation and recruiter ranking engines matching thousands of candidates to opportunities with automated semantic matching and scoring.",
    tech: ["NLP", "PyTorch", "FastAPI", "Vector Search"]
  },
  {
    icon: <Code2 className="text-[#c2a4ff]" size={22} />,
    tag: "HIGH-PERFORMANCE WEB",
    title: "Modern Full-Stack",
    desc: "Architecting reactive systems with React 19, TypeScript, Next.js, and FastAPI. Focused on zero-bloat state orchestration, Web Audio synthesis, and dynamic 3D visuals.",
    tech: ["React 19", "Next.js", "Three.js", "TailwindCSS"]
  },
  {
    icon: <Cpu className="text-[#c2a4ff]" size={22} />,
    tag: "PREDICTIVE MODELING",
    title: "Applied ML & Data",
    desc: "Developing algorithmic valuation models (EstateIQ AI), sentiment classification pipelines, and explainable predictive systems using Python, Scikit-Learn, and PyTorch.",
    tech: ["Scikit-Learn", "Pandas", "XGBoost", "REST APIs"]
  },
  {
    icon: <GraduationCap className="text-[#c2a4ff]" size={22} />,
    tag: "COMPUTATIONAL RIGOR",
    title: "Algorithms & Systems",
    desc: "Maintaining an 8.9 CGPA in Computer Science at MIT-WPU. Deep grounding in Advanced Data Structures, Object-Oriented Software Design, and low-latency C++ programming.",
    tech: ["C++", "DSA", "System Design", "OOP"]
  }
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll('.about-bento-card');
    const stats = el.querySelectorAll('.about-stat-item');

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el.querySelector('.about-grid'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    gsap.fromTo(
      stats,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el.querySelector('.about-stats-ribbon'),
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section className="about-section about-section-enhanced section-container" id="about" ref={sectionRef}>
      {/* Editorial Header Row: positioned neatly to complement the 3D robot on desktop */}
      <div className="about-me about-header-top">
        <div className="about-meta-row">
          <span className="about-category-pill">
            // 02. PROFILE & PHILOSOPHY
          </span>
          <div className="about-live-status">
            <span className="live-dot" />
            <span>PUNE, INDIA // OPEN FOR HIGH-IMPACT ROLES</span>
          </div>
        </div>

        <h2 className="about-main-headline">
          Turning Complex Computational Logic Into{' '}
          <span className="about-gradient-text">
            Elegant, Scalable Software Systems.
          </span>
        </h2>

        <p className="about-narrative-lead">
          I am an AI & Full-Stack Engineer pursuing Computer Science at MIT World Peace University (8.9 CGPA). 
          I engineer robust software solutions at the convergence of <strong className="text-white">Applied Machine Learning</strong>, 
          <strong className="text-white"> Algorithmic Platforms</strong>, and <strong className="text-white">Modern Web Architectures</strong>. 
          With 16+ production systems deployed, I build software engineered for computational speed, clarity, and real-world impact.
        </p>
      </div>

      {/* 4-Item Interactive Metrics Ribbon */}
      <div className="about-stats-ribbon">
        {STATS.map((stat, i) => (
          <div key={i} className="about-stat-item">
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-detail">{stat.detail}</div>
          </div>
        ))}
      </div>

      {/* Interactive 4-Column Bento Grid */}
      <div className="about-grid">
        {PILLARS.map((pillar, i) => (
          <div key={i} className="about-bento-card group">
            <div className="card-top-row">
              <div className="card-icon-box">{pillar.icon}</div>
              <span className="card-tag">{pillar.tag}</span>
            </div>
            <h3 className="card-title">{pillar.title}</h3>
            <p className="card-desc">{pillar.desc}</p>
            <div className="card-tech-chips">
              {pillar.tech.map((t, idx) => (
                <span key={idx} className="card-tech-chip">{t}</span>
              ))}
            </div>
            <div className="card-glow-line" />
          </div>
        ))}
      </div>
    </section>
  );
}
