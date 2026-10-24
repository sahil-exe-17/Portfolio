export const config = {
  developer: {
    name: "Sahil",
    fullName: "Sahil Lale",
    title: "AI Engineer & Full-Stack Developer",
    description: "AI & Full-Stack Developer architecting intelligent systems, high-performance web platforms, and machine learning solutions. Computer science engineer passionate about building scalable, zero-bloat digital experiences."
  },
  social: {
    github: "sahil-exe-17",
    email: "sahillale17@gmail.com",
    location: "Pune, Maharashtra, India"
  },
  about: {
    title: "About Me",
    description: "I am an AI & Full-Stack Developer based in Pune, India, currently pursuing Integrated B.Tech in Computer Science at MIT-WPU (8.9 CGPA). I specialize in designing and shipping scalable full-stack applications, intelligent machine learning platforms, and high-performance algorithms. I have shipped 16+ production applications spanning PropTech AI valuations, AST code visualizers, audio-synthesized algorithms, and GovTech platforms. I love turning complex computational challenges into elegant, intuitive software."
  },
  experiences: [
    {
      position: "AI & NLP Systems Engineer",
      company: "India Intern AI // GovTech Engine",
      period: "2024 - Present",
      location: "India",
      description: "Architected India Intern AI — an intelligent NLP-powered recommendation engine and recruiter ranking platform designed for large-scale candidate placement.",
      responsibilities: [
        "Architected NLP recommendation algorithms matching rural and underserved youth to internships",
        "Engineered recruiter ranking pipelines with 8.9 match precision scores",
        "Built responsive, accessible interfaces using React 19 and FastAPI backends"
      ],
      technologies: ["Python", "FastAPI", "NLP", "Scikit-Learn", "React 19"]
    },
    {
      position: "Full-Stack & Systems Engineer",
      company: "Independent Projects & Production Apps",
      period: "2024 - 2025",
      location: "Pune, India",
      description: "Designed, engineered, and deployed 16+ production web applications and ML systems, serving real-time inferences and interactive tools to thousands of users.",
      responsibilities: [
        "Shipped EstateIQ AI (PropTech valuation engine with sub-second ML inferences & Groq GenAI)",
        "Engineered TreeNova (Binary Search Tree visualizer with synthesized audio via Web Audio API)",
        "Developed StackFlow AI (Interactive data structures visualizer with real-time AI tutor)",
        "Built CryptoPulse AI & Stock Sense AI for automated market predictive forecasting"
      ],
      technologies: ["React 19", "FastAPI", "Python", "TypeScript", "Tailwind CSS", "Web Audio API", "PostgreSQL"]
    },
    {
      position: "Academic Distinction Scholarship",
      company: "MIT World Peace University (MIT-WPU)",
      period: "2024",
      location: "Pune, India",
      description: "Honored with the Academic Distinction Scholarship in Computer Science & Engineering for sustained academic excellence, maintaining an 8.9 cumulative CGPA.",
      responsibilities: [
        "Advanced coursework in Algorithms, Data Structures, and Systems Programming",
        "Authored predictive models for salary trends and automated data pipelines",
        "Active contributor to technical initiatives and competitive programming competitions"
      ],
      technologies: ["Algorithms", "Data Structures", "C++", "Python", "Scikit-Learn"]
    },
    {
      position: "Integrated B.Tech in Computer Science",
      company: "MIT-WPU Faculty of Engineering",
      period: "2023 - Present",
      location: "Pune, India",
      description: "Pursuing integrated undergraduate degree with comprehensive focus on software architecture, object-oriented systems design, operating systems, and artificial intelligence.",
      responsibilities: [
        "Building foundational computational and algorithmic rigor in C++ and Python",
        "Designing scalable RESTful microservices and database schemas",
        "Experimenting with neural networks, ensemble classifiers, and AST parsing engines"
      ],
      technologies: ["C++", "Python", "Linux", "Object-Oriented Design", "Databases"]
    },
    {
      position: "Predictive ML & Data Science Genesis",
      company: "Self-Driven Research & Foundations",
      period: "2023",
      location: "Pune, India",
      description: "Began journey into machine learning and computational mathematics, developing initial predictive regression pipelines with Scikit-learn, Pandas, and NumPy.",
      responsibilities: [
        "Built regression models forecasting developer salaries with XGBoost (EarnIQ)",
        "Created subscriber growth prediction tools and data scraping workflows",
        "Mastered fundamental numerical computing and statistical validation techniques"
      ],
      technologies: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Matplotlib"]
    }
  ],
projects: [
    {
      id: "india-intern-ai",
      title: "India Intern AI",
      category: "SIH 2025 // GovTech AI Engine",
      technologies: "Python, NLP, Scikit-Learn, React 19, FastAPI, Vector Search, Tailwind CSS",
      image: "/projects/india-intern-ai.svg",
      description: "Smart India Hackathon 2025 Project (PS ID: 25034): An AI-driven internship recommendation engine & recruiter ranking platform for the PM Internship Scheme, connecting students from rural and underserved regions with high-fit opportunities.",
      link: "https://lnkd.in/dt8WygUn"
    },
    {
      id: "estateiq-ai",
      title: "EstateIQ AI",
      category: "PropTech Valuation & AI Platform",
      technologies: "React 19, TypeScript, FastAPI, Python, Scikit-Learn, Groq API, Tailwind CSS",
      image: "/projects/estateiq-ai.svg",
      description: "An intelligent PropTech valuation and investment platform combining Scikit-Learn ML pricing models with Groq GenAI market intelligence for instant property valuations, algorithmic ROI scoring, and micro-market insights.",
      link: "https://estateiq-ai-omega.vercel.app/"
    },
    {
      id: "stackflow-ai",
      title: "StackFlow AI",
      category: "AI Algorithmic Engine",
      technologies: "React 19, Groq AI, Data Structures, Tailwind CSS, Framer Motion",
      image: "/projects/stackflow-ai.webp",
      description: "An interactive educational platform visualizing complex data structures with real-time Groq AI tutor explanations and dynamic execution tracking.",
      link: "https://stack-flow-ai.vercel.app/"
    },
    {
      id: "cryptopulse-ai",
      title: "CryptoPulse AI",
      category: "Crypto Intelligence Platform",
      technologies: "Next.js, TypeScript, Tailwind CSS, Firebase, CoinGecko API",
      image: "/projects/cryptopulse-ai.webp",
      description: "A sleek cryptocurrency platform providing live market tracking, simulated AI price forecasting, and multi-timeframe interactive charts.",
      link: "https://cryptopulse-ai64.vercel.app/"
    },
    {
      id: "treenova",
      title: "TreeNova BST",
      category: "Educational Algorithm Tool",
      technologies: "React 19, Tailwind v4, Zustand, Web Audio API, Framer Motion",
      image: "/projects/treenova.svg",
      description: "A premium 'Cyberpunk' BST visualizer featuring recursive SVG logic, in-browser synthesized audio via Web Audio API, and zero-lag state orchestration.",
      link: "https://treenova-bst-visualizer.vercel.app"
    },
    {
      id: "matchmind-ai",
      title: "MatchMind AI",
      category: "AI Intelligence Platform",
      technologies: "React, Node.js, Framer Motion, Recharts, XGBoost, Vercel",
      image: "/projects/matchmind-ai.svg",
      description: "A premium AI ensemble platform for TATA IPL 2026, providing hyper-accurate match predictions and cinematic statistical insights.",
      link: "https://matchmind-ai-chi.vercel.app"
    },
    {
      id: "stock-sense-ai",
      title: "Stock Sense AI",
      category: "AI Fintech Platform",
      technologies: "React, FastAPI, Python, XGBoost, NLP, Vader Sentiment",
      image: "/projects/stock-sense-ai.svg",
      description: "A next-generation stock intelligence platform combining ML, sentiment analysis, and explainable AI to deliver predictive market insights.",
      link: "https://stock-sense-ai.netlify.app/"
    },
    {
      id: "ascendia-ai",
      title: "Ascendia AI",
      category: "AI Placement Assistant",
      technologies: "React, FastAPI, Gemini API, Tailwind CSS, Python",
      image: "/projects/ascendia-ai.svg",
      description: "A full-stack AI-powered placement assistant with resume analyzer (ATS scoring), interactive mock interview system, and personalized roadmap generator.",
      link: "https://ascendia-ai.netlify.app/"
    },
    {
      id: "culina-ai",
      title: "Culina AI",
      category: "Full Stack AI App",
      technologies: "React, Tailwind CSS, Framer Motion, Spoonacular API, OpenAI API",
      image: "/projects/culina-ai.svg",
      description: "A smart recipe application powered by AI, featuring real-time macro tracking, voice interface, and ingredient parsing.",
      link: "https://culina-ai.netlify.app/"
    },
    {
      id: "travix-ai",
      title: "Travix AI",
      category: "Generative AI Agent",
      technologies: "React, Tailwind CSS, Framer Motion, LLM APIs, Mapbox",
      image: "/projects/travix-ai.svg",
      description: "An intelligent travel planner utilizing LLMs to generate personalized, budget-optimized itineraries with interactive maps and destination reasoning.",
      link: "https://travix-ai.netlify.app"
    },
    {
      id: "spectra-ai",
      title: "Spectra AI",
      category: "AI Productivity Suite",
      technologies: "React, AI APIs, Tailwind CSS, Vite",
      image: "/projects/spectra-ai.svg",
      description: "A modern AI toolkit combining content generation, text processing, and workflow automation into a single scalable platform.",
      link: "https://spectra-ai-tools.netlify.app/"
    },
    {
      id: "ml-classifier",
      title: "ML Classifier Studio",
      category: "Interactive ML Platform",
      technologies: "React, FastAPI, Python, Scikit-Learn, Tailwind CSS",
      image: "/projects/ml-classifier.svg",
      description: "Experiment with core algorithms including Decision Trees and Naive Bayes on custom datasets with real-time parameter tuning and visual boundaries.",
      link: "https://ml-classifier-studio.netlify.app"
    },
    {
      id: "earniq",
      title: "EarnIQ",
      category: "Data Science Platform",
      technologies: "Python, Flask, XGBoost, Scikit-Learn, Chart.js",
      image: "/projects/earniq.svg",
      description: "A predictive salary modeling dashboard built with a Flask backend, utilizing XGBoost to provide real-time compensation insights based on role and experience.",
      link: "https://github.com/SahilLale/EarnIQ"
    },
    {
      id: "pune-traffic",
      title: "Pune Traffic Jam Predictor",
      category: "Smart City Infrastructure",
      technologies: "React, Next.js, Google Maps API, Traffic APIs, Tailwind CSS",
      image: "/projects/pune-traffic.webp",
      description: "A real-time monitoring tool designed to help commuters navigate Pune's congestion by providing proactive alerts for specific city chokepoints and live travel times.",
      link: "https://pune-traffic-jam-predictor-363.created.app/"
    },
    {
      id: "zentrix",
      title: "ZentriX App",
      category: "Web Application",
      technologies: "React, Firebase, Tailwind CSS, Framer Motion",
      image: "/projects/zentrix.webp",
      description: "A responsive web application for ZentriX eSports that presents team information, player roster details, and dynamic tournament statistics.",
      link: "https://stately-babka-61d818.netlify.app/"
    },
    {
      id: "intelaris",
      title: "Intelaris",
      category: "Interactive Logic Game",
      technologies: "React, Tailwind CSS, Framer Motion, Web Audio API",
      image: "/projects/intelaris.webp",
      description: "Reimagines the classic number guessing game as a smart system with adaptive difficulty, AI-inspired hints, streak tracking, and minimal glassmorphism aesthetic.",
      link: "https://intelaris.netlify.app"
    },
    {
      id: "yt-predictor",
      title: "YT Predictor",
      category: "ML Analytics Dashboard",
      technologies: "Python, Streamlit, Prophet, Scikit-Learn, YouTube API",
      image: "/projects/yt-predictor.svg",
      description: "Analyzes YouTube channel performance and predicts future subscriber growth using Machine Learning and Facebook Prophet with interactive Plotly visualizations.",
      link: "https://github.com/sahil-exe-17"
    }
  ],
    contact: {
    email: "sahillale17@gmail.com",
    github: "https://github.com/sahil-exe-17",
    linkedin: "https://linkedin.com/in/sahil-lale",
    twitter: "https://x.com/sahil_lale",
    facebook: "https://github.com/sahil-exe-17",
    instagram: "https://instagram.com/sahil_lale"
  },
  skills: {
    develop: {
      title: "AI & ML SYSTEMS",
      description: "Intelligent systems, NLP pipelines & predictive modeling",
      details: "Developing intelligent algorithms, recommendation systems, and machine learning models using Python, Scikit-Learn, PyTorch, and FastAPI. Specializing in NLP engines, predictive ensembles, and low-latency microservices.",
      tools: [
        "Python",
        "FastAPI",
        "Scikit-Learn",
        "PyTorch",
        "NLP",
        "NumPy",
        "Pandas",
        "Algorithms",
        "C++",
        "Groq AI"
      ]
    },
    design: {
      title: "FULL-STACK ARCHITECTURE",
      description: "Scalable web applications & reactive interfaces",
      details: "Architecting high-performance web systems using React 19, TypeScript, Next.js, and Node.js. Delivering zero-bloat state management, dynamic 3D visualizations, Web Audio synthesis, and responsive user experiences.",
      tools: [
        "React 19",
        "TypeScript",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
        "Three.js",
        "PostgreSQL",
        "MongoDB",
        "Web Audio API",
        "Docker",
        "Git"
      ]
    }
  }
};

export const techStackPyramid = [
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", url: "https://python.org" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", url: "https://en.cppreference.com/w/c" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", url: "https://isocpp.org" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", url: "https://www.gnu.org/software/bash/" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" }
  ],
  [
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", url: "https://scikit-learn.org" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", url: "https://numpy.org" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", url: "https://threejs.org" }
  ],
  [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://postgresql.org" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", url: "https://redis.io" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://docker.com" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", url: "https://firebase.google.com" }
  ],
  [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", url: "https://linux.org" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" }
  ],
  [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", url: "https://jupyter.org" }
  ]
];
