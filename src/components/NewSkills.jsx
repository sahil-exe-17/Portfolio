import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiC, SiCplusplus, SiNumpy, SiPandas, 
  SiScikitlearn, SiTensorflow, SiPostman, SiStreamlit, SiGit, 
  SiPytorch, SiOpencv, SiKeras, SiHuggingface, SiOpenai,
  SiFastapi, SiReact, SiTailwindcss, SiFirebase
} from 'react-icons/si';

const techGroups = [
  {
    category: "Deep Learning",
    label: "Core AI",
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "OpenCV", icon: <SiOpencv /> }
    ]
  },
  {
    category: "Generative AI",
    label: "Advanced",
    skills: [
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "Hugging Face", icon: <SiHuggingface /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Streamlit", icon: <SiStreamlit /> }
    ]
  },
  {
    category: "Web & Infra",
    label: "Full Stack",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Git", icon: <SiGit /> }
    ]
  }
];

const NewSkills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-32">
          {techGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex flex-col md:flex-row gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-1/3"
              >
                <span className="section-label">{group.label}</span>
                <h2 className="section-title text-white">{group.category}</h2>
                <div className="h-[2px] w-20 bg-primary mt-4" />
              </motion.div>

              <div className="flex-1 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-16 h-16 glass-card flex items-center justify-center text-3xl text-primary neon-glow">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-mono text-textSecondary uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSkills;
