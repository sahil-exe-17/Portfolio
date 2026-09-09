import React from 'react';
import { motion } from 'framer-motion';

const NewAbout = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="section-label">Identity</span>
            <h2 className="section-title text-white">About Me</h2>
            <div className="h-[2px] w-20 bg-primary mt-4 mb-8" />
            
            <div className="space-y-6 text-textSecondary text-xl font-light leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">Sahil Lale</span>, an AI-focused developer passionate about building intelligent systems and real-world solutions.
              </p>
              <p>
                My journey began with deep-dive data analysis, which evolved into a focus on <span className="text-primary">Generative AI</span>, automation, and building high-performance smart applications.
              </p>
              <p>
                I thrive at the intersection of data science and modern frontend engineering, creating digital experiences that are not just functional, but intelligently driven.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-white mb-2">92%</span>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Full-Stack</span>
            </div>
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-white mb-2">88%</span>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">ML Models</span>
            </div>
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-white mb-2">95%</span>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">AI Systems</span>
            </div>
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <span className="text-4xl font-bold text-white mb-2">100%</span>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">Vibecoding</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
