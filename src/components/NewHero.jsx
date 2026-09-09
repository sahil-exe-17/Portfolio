import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';




const NewHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="section-label">Hello, I'm</span>
            <h1 className="section-title text-white">
              Sahil <span className="text-primary">Lale</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-textSecondary max-w-2xl font-light mb-10"
          >
            AI Developer & Intelligent Systems Architect building the future of 
            <span className="text-white font-medium"> digital experiences</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-bg font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
            >
              VIEW MY WORK <ArrowRight size={18} />
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/sahil-exe-17" target="_blank" className="p-3 glass-card rounded-full hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sahil-lale-199072355" target="_blank" className="p-3 glass-card rounded-full hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sahillale17@gmail.com" className="p-3 glass-card rounded-full hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textSecondary opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

export default NewHero;
