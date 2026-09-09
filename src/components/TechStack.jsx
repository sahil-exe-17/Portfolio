import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSTELLATION_TECH = [
  { name: "Python", category: "Core ML", role: "Primary language for models, PyTorch & algorithmic backend logic.", x: 20, y: 30 },
  { name: "PyTorch", category: "Deep Learning", role: "Neural network architectures and tensor processing.", x: 35, y: 22 },
  { name: "TensorFlow", category: "Deep Learning", role: "Model training, Keras pipelines and evaluation.", x: 28, y: 48 },
  { name: "Scikit-Learn", category: "Machine Learning", role: "Regression, clustering, Decision Trees & ensemble estimators.", x: 15, y: 65 },
  { name: "OpenAI API", category: "Generative AI", role: "LLM integration, reasoning agents, and function calling.", x: 50, y: 20 },
  { name: "Gemini API", category: "Generative AI", role: "Multimodal analysis, context windows, and code execution.", x: 62, y: 32 },
  { name: "Hugging Face", category: "Model Hub", role: "Transformers, embeddings, and open-source model pipelines.", x: 45, y: 42 },
  { name: "Groq AI", category: "Inference Engine", role: "Ultra-low-latency real-time algorithmic tutor execution.", x: 58, y: 55 },
  { name: "React 19", category: "Modern Web", role: "Next-gen reactive component architecture & server actions.", x: 75, y: 25 },
  { name: "Tailwind CSS v4", category: "Styling System", role: "High-performance styling, custom glassmorphism and CSS variables.", x: 85, y: 45 },
  { name: "FastAPI", category: "Backend", role: "High-throughput asynchronous Python microservices and endpoints.", x: 40, y: 75 },
  { name: "Firebase", category: "Cloud Platform", role: "Real-time database, authentication, and live state streaming.", x: 70, y: 70 },
  { name: "Streamlit", category: "Data Apps", role: "Rapid dashboard prototyping and analytical tool interfaces.", x: 25, y: 82 },
  { name: "Git", category: "Workflow", role: "Distributed version control and collaboration management.", x: 82, y: 78 },
  { name: "Zustand", category: "State Management", role: "Zero-boilerplate store for audio oscillators and tree visualizers.", x: 65, y: 85 },
];

export default function TechStack() {
  const canvasRef = useRef(null);
  const [activeTech, setActiveTech] = useState(CONSTELLATION_TECH[0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const nodes = CONSTELLATION_TECH.map((t) => ({
      ...t,
      currentX: (t.x / 100) * width,
      currentY: (t.y / 100) * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      baseRadius: 4,
    }));

    let mouse = { x: -1000, y: -1000 };

    const handleCanvasMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      let closest = null;
      let minDist = 70;
      nodes.forEach((node) => {
        const dist = Math.hypot(node.currentX - mouse.x, node.currentY - mouse.y);
        if (dist < minDist) {
          minDist = dist;
          closest = node;
        }
      });
      if (closest) setActiveTech(closest);
    };

    const handleCanvasTouch = (e) => {
      if (!e.touches || !e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;

      let closest = null;
      let minDist = 80;
      nodes.forEach((node) => {
        const dist = Math.hypot(node.currentX - mouse.x, node.currentY - mouse.y);
        if (dist < minDist) {
          minDist = dist;
          closest = node;
        }
      });
      if (closest) setActiveTech(closest);
    };

    let isIntersecting = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && !animId) {
          animId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const render = () => {
      if (!isIntersecting || document.hidden) {
        animId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      nodes.forEach((n) => {
        n.currentX += n.vx;
        n.currentY += n.vy;

        if (n.currentX < 40 || n.currentX > width - 40) n.vx *= -1;
        if (n.currentY < 40 || n.currentY > height - 40) n.vy *= -1;

        const distToMouse = Math.hypot(n.currentX - mouse.x, n.currentY - mouse.y);
        if (distToMouse < 120) {
          const angle = Math.atan2(n.currentY - mouse.y, n.currentX - mouse.x);
          n.currentX += Math.cos(angle) * 0.8;
          n.currentY += Math.sin(angle) * 0.8;
        }
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(
            nodes[i].currentX - nodes[j].currentX,
            nodes[i].currentY - nodes[j].currentY
          );
          if (dist < 170) {
            const alpha = (1 - dist / 170) * 0.2;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].currentX, nodes[i].currentY);
            ctx.lineTo(nodes[j].currentX, nodes[j].currentY);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        const isHovered = activeTech?.name === n.name;
        
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(n.currentX, n.currentY, 16, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, 0.15)`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(n.currentX, n.currentY, isHovered ? 5 : n.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.6)';
        ctx.textAlign = 'center';
        ctx.fillText(n.name, n.currentX, n.currentY + 18);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    canvas.addEventListener('mousemove', handleCanvasMouseMove, { passive: true });
    canvas.addEventListener('touchstart', handleCanvasTouch, { passive: true });
    canvas.addEventListener('touchmove', handleCanvasTouch, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleCanvasMouseMove);
      canvas.removeEventListener('touchstart', handleCanvasTouch);
      canvas.removeEventListener('touchmove', handleCanvasTouch);
    };
  }, [activeTech]);

  return (
    <section id="stack" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/10"
        >
          <div>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-white/60 block mb-2">
              // 05. INTERACTIVE CONSTELLATION
            </span>
            <h2 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase">
              Tech <span className="text-white">Stack.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-white/40 max-w-xs text-left md:text-right">
            HOVER OR TAP NODES TO EXPLORE ARCHITECTURAL ROLES IN PRODUCTION.
          </p>
        </motion.div>

        {/* Constellation Canvas & HUD Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start"
        >
          {/* Interactive Canvas Area */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            <div className="h-[320px] sm:h-[440px] lg:h-[520px] rounded-3xl glass-card relative overflow-hidden border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
              <div className="absolute top-4 left-6 z-10 flex items-center gap-2 text-[11px] sm:text-xs font-mono text-white/50">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>LIVE ORBITAL TOPOLOGY</span>
              </div>
              
              <canvas ref={canvasRef} className="w-full h-full cursor-crosshair touch-none" />
            </div>

            {/* Quick-Select Tech Chips for Finger / Mobile Touch */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none pt-1">
              <span className="text-[10px] font-mono uppercase text-white/40 mr-1 shrink-0">SELECT:</span>
              {CONSTELLATION_TECH.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setActiveTech(t)}
                  className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono shrink-0 transition-all ${
                    activeTech?.name === t.name
                      ? "bg-white text-black font-bold shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                      : "bg-white/[0.04] text-white/60 hover:text-white border border-white/10"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Technology HUD Detail Panel */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              {activeTech && (
                <motion.div
                  key={activeTech.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-white/20 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/60 block mb-2">
                    {activeTech.category}
                  </span>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 sm:mb-4">
                    {activeTech.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed mb-6">
                    {activeTech.role}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono text-white/40">
                    <span>STATUS</span>
                    <span className="text-white font-medium">PRODUCTION READY</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
