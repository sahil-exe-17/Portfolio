import React from 'react';
import { Brain, Cpu, Network, Database, MessageSquare, Zap } from 'lucide-react';
import { 
  SiPython, SiCplusplus, SiPandas, SiScikitlearn, SiTensorflow, 
  SiPostman, SiStreamlit, SiGit, SiPytorch, SiOpencv, SiKeras, 
  SiHuggingface, SiOpenai, SiFastapi, SiReact, SiTailwindcss
} from 'react-icons/si';
import StaggeredGrid from './StaggeredGrid';

const skills = [
  { label: "Python", icon: <SiPython />, subLabel: "ML Core" },
  { label: "PyTorch", icon: <SiPytorch />, subLabel: "ML Core" },
  { label: "TensorFlow", icon: <SiTensorflow />, subLabel: "ML Core" },
  { label: "Scikit-Learn", icon: <SiScikitlearn />, subLabel: "ML Core" },
  { label: "Keras", icon: <SiKeras />, subLabel: "ML Core" },
  { label: "OpenCV", icon: <SiOpencv />, subLabel: "ML Core" },
  
  { label: "OpenAI API", icon: <SiOpenai />, subLabel: "Gen AI" },
  { label: "Hugging Face", icon: <SiHuggingface />, subLabel: "Gen AI" },
  { label: "LLM Tuning", icon: <Brain />, subLabel: "Gen AI" },
  { label: "RAG Systems", icon: <Database />, subLabel: "Gen AI" },
  { label: "Prompt Eng", icon: <MessageSquare />, subLabel: "Gen AI" },
  { label: "Multi-Agent", icon: <Network />, subLabel: "Gen AI" },
  
  { label: "C++", icon: <SiCplusplus />, subLabel: "Languages" },
  { label: "Pandas", icon: <SiPandas />, subLabel: "Languages" },
  { label: "Git", icon: <SiGit />, subLabel: "Tools" },
  { label: "Streamlit", icon: <SiStreamlit />, subLabel: "Tools" },
  
  { label: "React", icon: <SiReact />, subLabel: "Frontend" },
  { label: "FastAPI", icon: <SiFastapi />, subLabel: "Backend" },
  { label: "Tailwind CSS", icon: <SiTailwindcss />, subLabel: "Frontend" },
  { label: "Firebase", icon: <Zap />, subLabel: "Cloud" },
  { label: "Postman", icon: <SiPostman />, subLabel: "Tools" }
];

export default function ProjectsSection() {
  return (
    <section id="arsenal" className="bg-black text-white relative z-20 overflow-hidden w-full">
      <div className="w-full">
        <StaggeredGrid 
          skills={skills} 
          centerText="ARSENAL" 
        />
      </div>
    </section>
  );
}
