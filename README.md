# Muhsin MYou | Creative Technologist Portfolio

A premium, interactive portfolio website designed with a **"Cinematic Dark"** aesthetic. Features a sophisticated **Orange-on-Black** gradient theme, liquid glassmorphism, and seamless scroll-triggered animations to showcase creative technology work.

## 🎨 Design System

**Theme**: `Cinematic Dark + Vibrant Orange`
- **Background**: Deep gradients (`#2a1e16` -> `#050505` -> `#000000`)
- **Primary Accent**: Vibrant Orange (`#c2410c` -> `#fb923c`)
- **Secondary Accent**: Bronze / Sienna (`#A0522D`)
- **Text**: Warm Stone (`#d6d3d1`)
- **Glass Effect**: Liquid glass with warm, earthy tints and frosted blur.

**Typography**:
- **Primary**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Self-hosted for performance and privacy)
- **Monospace**: Space Grotesk (Used for technical accents)

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: `@fontsource/space-grotesk`

## ✨ Key Features

- **Cinematic Hero**: Full-screen video background with dynamic text reveals and gradients.
- **Liquid Glassmorphism**: Custom CSS utilities for glass panels with dynamic blur and lighting effects.
- **Interactive Elements**:
    - **Draggable Cards**: "Featured Works" section with scattered, draggable polaroid-style cards.
    - **Resume Preview**: Integrated Google Docs resume viewer with PDF download.
    - **Magnetic Buttons**: Interactive buttons with hover shimmer and glow effects.
    - **Scroll Animations**: Parallax effects and scroll-triggered reveals.
- **Functional Contact Form**:
    - **FormSubmit**: Direct email delivery.
    - **Google Sheets**: Automatic backup of form submissions.
- **Performance Optimized**: Self-hosted fonts, lazy loading, and smooth 60fps animations.

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/MuhsinMYou/portfolio25.git
    cd portfolio25
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run locally**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

5.  **Deploy to GitHub Pages**:
    ```bash
    npm run deploy
    ```

## 📂 Project Structure

```
src/
├── components/     # UI Components (Hero, Navbar, RecentWorks, etc.)
├── components/ui/  # Reusable UI elements
├── types/          # TypeScript interfaces
├── constants.ts    # Content data (Images, Text, Links)
├── index.css       # Global styles & Tailwind directives
└── App.tsx         # Main application layout
```

---
*Designed & Developed by Muhsin M. You*
