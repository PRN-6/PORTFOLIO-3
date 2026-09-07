# ✦ Prinson | Minimalist Dark Portfolio

A fast, typography-driven personal portfolio website built with **React 19**, **Vite**, and **Tailwind CSS v4**. Designed with a raw terminal aesthetic, kinetic typography, ambient audio, live global counters, and 3D card tilt interactions.

[![Live Site](https://img.shields.io/badge/Live-Demo-white?style=for-the-badge&logo=vercel)](https://prinson.is-a.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-PRN--6-181717?style=for-the-badge&logo=github)](https://github.com/PRN-6)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## ✨ Features

- **🔤 Kinetic Typography**: Hero header cycling through curated retro, glitch, pixel, and gothic monospace Google fonts.
- **🎵 Ambient Audio**: Integrated ambient soundtrack toggle with audio state persistence.
- **⚡ Live Visitor & Click Counters**: Global real-time analytics powered by the Abacus API with optimistic UI updates.
- **🃏 Interactive Project Showcase (Triptych Layout)**:
  - **3D Tilt Preview**: Dynamic cursor perspective tilt on project cards.
  - **Multi-modal Navigation**: Switch projects via UI pills, keyboard shortcuts (`←`/`→`, `1-4`), or mobile touch swipes.
  - **Dual Display Modes**: Single featured showcase or "View all projects" expanded view.
- **📄 About & Tech Stack**: Minimalist developer profile with verified social links, tech badges, Buy Me A Chai support, and downloadable resume.
- **⚡ Performance & Clean Architecture**: Zero bloat, responsive layout, dark aesthetic, and optimized bundle size.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Typography**: Google Fonts (*Space Mono*, *Pixelify Sans*, *Rubik Glitch*, *Orbitron*, *VT323*, *Silkscreen*, etc.)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
3D-PORTFOLIO/
├── public/
│   └── resume.pdf            # Downloadable resume
├── src/
│   ├── assets/               # Images and audio assets
│   │   ├── audio/
│   │   │   └── homeaudio.mp3 # Ambient background track
│   │   ├── icon.png          # Favicon
│   │   ├── mainprofilepic.jpg
│   │   ├── p1.png
│   │   ├── p2.png
│   │   └── p3.png
│   ├── components/
│   │   ├── Navbar.jsx        # Minimalist monospace navigation
│   │   └── Projecttemp.jsx   # Interactive 3D tilt project showcase
│   ├── pages/
│   │   ├── Home.jsx          # Kinetic header, audio player & global counters
│   │   ├── About.jsx         # Bio, social links, tech stack & resume
│   │   └── Projects.jsx      # Projects page wrapper
│   ├── App.jsx               # Routes configuration
│   ├── main.jsx              # React DOM mounting & BrowserRouter
│   └── index.css             # Tailwind v4 import & font family rules
├── index.html                # HTML entry & Google Fonts preload
├── vite.config.js            # Vite + Tailwind plugins
├── eslint.config.js          # ESLint rules
├── package.json
└── vercel.json               # SPA routing rewrite rule
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm` / `yarn`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PRN-6/3D-PORTFOLIO.git
   cd 3D-PORTFOLIO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local dev server at `http://localhost:5173` |
| `npm run build` | Builds production-optimized bundle in `dist/` |
| `npm run preview` | Previews production build locally |
| `npm run lint` | Lints JavaScript and JSX files with ESLint |

---

## 👤 Author

**Prinson Royal Nazareth**
- Website: [prinson.is-a.dev](https://prinson.is-a.dev/)
- GitHub: [@PRN-6](https://github.com/PRN-6)
- LinkedIn: [prinson-nazareth](https://www.linkedin.com/in/prinson-nazareth/)
- X: [@r_prinson66328](https://x.com/r_prinson66328)

⭐ *If you find this project interesting, feel free to give it a star!*
