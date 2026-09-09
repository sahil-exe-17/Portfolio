# Sahil Lale — AI & Intelligent Systems Developer Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-sahil--tech.netlify.app-00FFA3?style=for-the-badge&logo=netlify&logoColor=black)](https://sahil-tech.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-sahil--exe--17-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sahil-exe-17)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

A modern, high-performance developer portfolio showcasing 15 production-grade AI applications, machine learning systems, and full-stack platforms. Built with immersive WebGL graphics, custom shaders, and smooth kinetic interactions.

---

## 🚀 Live Demo

**Experience the live portfolio:** [https://sahil-tech.netlify.app/](https://sahil-tech.netlify.app/)

---

## ✨ Key Features & Architectural Highlights

- **3D Curved Cylinder Project Gallery (`OGL` WebGL)**:
  - Custom vertex & fragment shaders with dynamic wave deformation, image aspect-ratio preservation, and antialiased rounded borders.
  - Interactive mouse/touch drag, wheel scrolling, and keyboard arrow navigation.
  - Accurate screen-to-world click hit-testing for direct project launching.
  - Smooth programmatic centering and interactive quick-jump selector.
- **Active Project Command Deck (HUD)**:
  - Synchronized in real time with the 3D cylinder.
  - Displays project metadata, category badges, key metrics, descriptions, and technology pills.
  - Instant access buttons for **Live Application**, **GitHub Source Code**, and **Technical Blueprint**.
- **Case Study Blueprint Modal**:
  - In-depth architectural breakdown for each project, covering Problem Context, Technical Approach, Core Architecture, and Production Solution.
- **Animated Aurora Shader Background**:
  - Multi-stop dynamic color gradient animation (`#7cff67`, `#B497CF`, `#5227FF`) rendered over an ambient vignette.
- **Glassmorphic Navigation**:
  - Dynamic pill navigation with smooth particle burst effects, active section scroll-spy, and dark-mode backdrop filters.
- **Smooth Momentum Scrolling**:
  - Integrated with Lenis for continuous, butter-smooth scroll inertia across all devices.

---

## 🛠️ Technology Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend Core** | React 19, Vite, JavaScript (ESNext), HTML5 Semantic Structure |
| **Styling & Design** | Tailwind CSS v4, Vanilla CSS Design System, Glassmorphism |
| **3D & WebGL Graphics** | OGL (Minimal WebGL Library), Three.js, Custom GLSL Shaders |
| **Animations & Motion** | Framer Motion, GSAP, ScrollTrigger, Lenis Smooth Scroll |
| **Icons & UI** | Lucide React, React Icons |
| **Deployment** | Netlify Continuous Deployment (`dist`, `netlify.toml`) |

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── projects/          # High-fidelity SVG project cards & banners
│   ├── favicon.svg        # Portfolio brand favicon
│   └── profile.jpg        # Profile asset
├── src/
│   ├── components/
│   │   ├── About.jsx             # Bio, philosophy, and personal metrics
│   │   ├── Aurora.jsx            # Dynamic WebGL aurora background shader
│   │   ├── CircularGallery.jsx   # 3D interactive cylinder carousel engine (OGL)
│   │   ├── Contact.jsx           # Contact links, social dock, and email action
│   │   ├── Footer.jsx            # Minimal luxury footer
│   │   ├── GooeyNav.jsx          # Kinetic glassmorphic navbar with particle bursts
│   │   ├── Hero.jsx              # High-impact hero section with typography & CTA
│   │   ├── Journey.jsx           # Career timeline and milestones
│   │   ├── Navbar.jsx            # Floating glass header and scroll tracking
│   │   ├── Projects.jsx          # Consolidated 3D circular project showcase & HUD
│   │   ├── Skills.jsx            # Interactive technical skills radar
│   │   ├── SmoothScroll.jsx      # Lenis smooth scroll provider
│   │   └── TechStack.jsx         # Categorized framework & tool grid
│   ├── App.jsx                   # Root application orchestrator
│   ├── main.jsx                  # React DOM root entrypoint
│   └── index.css                 # Global CSS variables, fonts, and utilities
├── netlify.toml                  # Netlify build and redirect configuration
├── package.json                  # Dependencies and scripts
└── vite.config.js                # Vite build configuration
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm**: v9.0.0 or later

### 2. Clone the Repository
```bash
git clone https://github.com/sahil-exe-17/Portfolio.git
cd Portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to explore the local build with Hot Module Replacement (HMR).

### 5. Build for Production
```bash
npm run build
```
Generates an optimized, minified production bundle in the `dist/` directory.

### 6. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚢 Deployment (Netlify)

This project is configured with `netlify.toml` for automatic deployments:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

To deploy via Netlify CLI:
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

## 📬 Contact & Connect

- **Name**: Sahil Lale
- **Role**: AI & Intelligent Systems Developer
- **Email**: [sahillale17@gmail.com](mailto:sahillale17@gmail.com)
- **GitHub**: [github.com/sahil-exe-17](https://github.com/sahil-exe-17)
- **Portfolio**: [sahil-tech.netlify.app](https://sahil-tech.netlify.app)

---

*Designed & Developed with precision by Sahil Lale.*
