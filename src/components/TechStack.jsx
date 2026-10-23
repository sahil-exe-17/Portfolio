import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, Layers, Sparkles, ArrowUpRight } from 'lucide-react';

const TECH_NODES = [
  { name: "Python", category: "Core Systems", role: "Primary language for high-throughput backend services and numerical computation.", x: 22, y: 32 },
  { name: "FastAPI", category: "Backend Service", role: "Asynchronous microservice endpoints with strict Pydantic schemas.", x: 42, y: 24 },
  { name: "React 19", category: "Reactive Frontend", role: "Component architecture, concurrent rendering, and server actions.", x: 72, y: 28 },
  { name: "TypeScript", category: "Type Architecture", role: "End-to-end type safety, strict API contracts, and scalable refactoring.", x: 82, y: 48 },
  { name: "Tailwind CSS", category: "Design Systems", role: "High-performance modular CSS tokens and responsive layout systems.", x: 62, y: 55 },
  { name: "Scikit-Learn", category: "Data Science", role: "Statistical machine learning, regression valuation, and clustering.", x: 28, y: 62 },
  { name: "PyTorch", category: "Deep Learning", role: "Tensor computation and neural model research.", x: 18, y: 48 },
  { name: "C++", category: "Systems & Algorithms", role: "Low-level data structures, algorithmic complexity, and fast compute.", x: 34, y: 80 },
  { name: "NumPy & Pandas", category: "Data Analysis", role: "Matrix algebra, high-volume tabular transformations, and statistical metrics.", x: 14, y: 72 },
  { name: "Git & Linux", category: "DevOps & Core", role: "Version control workflows, shell automation, and deployment environments.", x: 80, y: 76 },
  { name: "Framer Motion", category: "Motion Physics", role: "Fluid spring animations, layout morphs, and kinetic micro-interactions.", x: 54, y: 78 },
  { name: "Web Audio API", category: "Audio Synthesis", role: "Client-side sound synthesis and reactive frequency waveforms (TreeNova).", x: 48, y: 45 },
];

export default function TechStack() {
  const canvasRef = useRef(null);
  const [activeNode, setActiveNode] = useState(TECH_NODES[0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.parentElement?.clientWidth || 700;
    let height = canvas.parentElement?.clientHeight || 450;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    const nodes = TECH_NODES.map((t) => ({
      ...t,
      currentX: (t.x / 100) * width,
      currentY: (t.y / 100) * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      baseRadius: 4.5,
    }));

    let mouse = { x: -1000, y: -1000 };

    const handleCanvasMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      let closest = null;
      let minDist = 75;
      nodes.forEach((node) => {
        const dist = Math.hypot(node.currentX - mouse.x, node.currentY - mouse.y);
        if (dist < minDist) {
          minDist = dist;
          closest = node;
        }
      });
      if (closest) setActiveNode(closest);
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

      // Update positions
      nodes.forEach((n) => {
        n.currentX += n.vx;
        n.currentY += n.vy;

        if (n.currentX < 35 || n.currentX > width - 35) n.vx *= -1;
        if (n.currentY < 35 || n.currentY > height - 35) n.vy *= -1;

        const distToMouse = Math.hypot(n.currentX - mouse.x, n.currentY - mouse.y);
        if (distToMouse < 110) {
          const angle = Math.atan2(n.currentY - mouse.y, n.currentX - mouse.x);
          n.currentX += Math.cos(angle) * 0.7;
          n.currentY += Math.sin(angle) * 0.7;
        }
      });

      // Draw subtle ink links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(
            nodes[i].currentX - nodes[j].currentX,
            nodes[i].currentY - nodes[j].currentY
          );
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.16;
            ctx.strokeStyle = `rgba(41, 37, 36, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].currentX, nodes[i].currentY);
            ctx.lineTo(nodes[j].currentX, nodes[j].currentY);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const isHovered = activeNode?.name === n.name;

        // Outer glow on hover
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(n.currentX, n.currentY, 12, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(41, 37, 36, 0.08)';
          ctx.fill();
        }

        // Center dot
        ctx.beginPath();
        ctx.arc(n.currentX, n.currentY, isHovered ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#1C1917' : '#78716C';
        ctx.fill();

        // Node Label
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = isHovered ? '#1C1917' : '#A8A29E';
        ctx.fillText(n.name, n.currentX + 10, n.currentY + 3.5);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [activeNode]);

  return (
    <section id="stack" className="relative py-20 sm:py-32 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#292524]/08">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#78716C] block mb-2">
              // 06. SYSTEMS CONSTELLATION
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] uppercase leading-[0.98]">
              Interactive <br />
              <span className="editorial-serif lowercase font-normal text-[#57534E]">
                constellation
              </span>{' '}
              Matrix.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#78716C] max-w-xs text-left md:text-right">
            HOVER OVER NODES TO EXPLORE ARCHITECTURAL INTEGRATION & ROLES.
          </p>
        </div>

        {/* 2-Column Canvas + Spec Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Canvas */}
          <div className="lg:col-span-8 bg-white/70 rounded-2xl border border-[#292524]/08 shadow-[0_4px_24px_rgba(41,37,36,0.02)] overflow-hidden h-[380px] sm:h-[460px] relative">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 text-[10px] font-mono text-[#78716C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917] animate-pulse" />
              <span>LIVE INTERACTION CANVAS</span>
            </div>

            <canvas
              ref={canvasRef}
              className="w-full h-full cursor-crosshair"
              onMouseMove={(e) => {
                const canvas = canvasRef.current;
                if (!canvas) return;
                const rect = canvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                let closest = null;
                let minDist = 80;
                TECH_NODES.forEach((node) => {
                  const nodeX = (node.x / 100) * canvas.width;
                  const nodeY = (node.y / 100) * canvas.height;
                  const dist = Math.hypot(nodeX - x, nodeY - y);
                  if (dist < minDist) {
                    minDist = dist;
                    closest = node;
                  }
                });
                if (closest) setActiveNode(closest);
              }}
            />
          </div>

          {/* Right: Active Spec Card */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              {activeNode && (
                <motion.div
                  key={activeNode.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white/90 p-6 sm:p-8 rounded-2xl border border-[#292524]/12 shadow-[0_8px_30px_rgba(41,37,36,0.04)] space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#292524]/08">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#78716C]">
                      NODE TELEMETRY
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#292524]/05 text-[#1C1917]">
                      {activeNode.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-3xl font-bold text-[#1C1917]">
                      {activeNode.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed mt-2.5">
                      {activeNode.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#292524]/06 flex items-center justify-between text-xs font-mono text-[#78716C]">
                    <span>STATUS: ACTIVE IN PRODUCTION</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
