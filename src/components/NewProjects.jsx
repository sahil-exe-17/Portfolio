import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';



const projects = [
  {
    title: "TreeNova",
    label: "Algorithm",
    description: "Cyberpunk BST visualizer with recursive SVG math and in-browser sound synthesis.",
    tech: ["React 19", "Tailwind v4", "Zustand", "Web Audio"],
    link: "https://treenova-bst-visualizer.vercel.app"
  },
  {
    title: "MatchMind AI",
    label: "Prediction",
    description: "Premium AI intelligence platform for IPL 2026 with ensemble forecasting and quantum visualizations.",
    tech: ["React", "Node.js", "XGBoost", "Vercel"],
    link: "https://matchmind-ai-chi.vercel.app"
  },
  {
    title: "Stock Sense AI",
    label: "Intelligence",
    description: "AI-powered stock market intelligence platform with ML ensembles and sentiment analysis.",
    tech: ["React", "FastAPI", "Python", "XGBoost"],
    link: "https://stock-sense-ai.netlify.app/"
  },
  {
    title: "Spectra AI",
    label: "Productivity",
    description: "Modern AI toolkit for content generation, text processing, and automation.",
    tech: ["React", "AI APIs", "Tailwind"],
    link: "https://spectra-ai-tools.netlify.app/"
  },
  {
    title: "Travix AI",
    label: "Travel",
    description: "AI-powered travel planning with smart itinerary builder and budget analysis.",
    tech: ["React", "Tailwind", "Framer"],
    link: "https://travix-ai.netlify.app"
  },
  {
    title: "Culina AI",
    label: "Culinary",
    description: "Recipe discovery platform with AI cooking assistant and meal planning.",
    tech: ["React", "OpenAI", "Spoonacular"],
    link: "https://culina-ai.netlify.app/"
  },
  {
    title: "Ascendia AI",
    label: "Career",
    description: "Placement assistant with resume scoring and mock interviews.",
    tech: ["React", "FastAPI", "Gemini"],
    link: "https://ascendiaai.netlify.app/"
  },
  {
    title: "ML Classifier",
    label: "ML Studio",
    description: "Interactive platform to experiment with core ML algorithms.",
    tech: ["React", "FastAPI", "Scikit-Learn"],
    link: "https://ml-classifier-studio.netlify.app"
  },
  {
    title: "ZentriX App",
    label: "Gaming",
    description: "E-sports brand identity and team roster management.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://stately-babka-61d818.netlify.app/"
  },
  {
    title: "Pune Traffic",
    label: "Smart City",
    description: "Real-time monitoring tool for Pune's traffic congestion.",
    tech: ["Next.js", "Google Maps", "API"],
    link: "https://pune-traffic-jam-predictor-363.created.app/"
  },
  {
    title: "Intelaris",
    label: "Interactive",
    description: "Adaptive difficulty number guessing game with AI hints.",
    tech: ["React", "Framer Motion", "Tailwind"],
    link: "https://intelaris.netlify.app"
  }
];

const NewProjects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <span className="section-label">Selected</span>
          <h2 className="section-title text-white">Projects</h2>
          <div className="h-[2px] w-20 bg-primary mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group relative overflow-hidden h-[400px] flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-primary uppercase tracking-[0.2em]">
                    {project.label}
                  </span>
                  <div className="flex gap-3">
                    {project.link !== '#' && (
                      <a href={project.link} target="_blank" className="text-textSecondary hover:text-white transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-textSecondary font-light leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded text-textSecondary uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blue bottom glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProjects;
