# 🚀 Dhruv Sharma - Portfolio

> SDET building AI-driven reliability systems that prevent production incidents and help teams ship faster.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://dhruv0111.github.io/Dhruv-Sharma-portfolio/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

## ✨ Features

### 🎨 **Modern Design**
- **Dynamic scroll animations** with scale, blur, and rotation effects
- **3D hover transforms** on cards and buttons
- **Animated gradient backgrounds** with continuous color shifts
- **Fully responsive** design (mobile, tablet, desktop)
- **Dark theme** with premium aesthetics

### 🎯 **Professional Sections**
- **Hero** - Impactful introduction with staggered load animations
- **About** - Engineering philosophy and principles
- **Skills** - Technical capabilities with proof statements
- **Projects** - Selected systems with status indicators and "Next Improvement" thinking
- **Experience** - Timeline of professional journey
- **Education** - Academic background
- **Recruiter Summary** - One-page optimized for 20-30 second scan
- **Contact** - Multiple ways to connect

### 🚀 **Technical Highlights**
- ✅ Custom scroll reveal animations using Intersection Observer
- ✅ Staggered element reveals (100-120ms delays)
- ✅ 3D card hover effects with `transform-style: preserve-3d`
- ✅ Animated gradients with `background-position` animation
- ✅ Accessibility support (`prefers-reduced-motion`)
- ✅ SEO optimized with meta tags and Open Graph
- ✅ PWA ready with web manifest
- ✅ Custom SVG favicon with gradient branding

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite 6.0
- **Styling:** Vanilla CSS with CSS Variables
- **Animations:** Custom CSS animations + Intersection Observer API
- **Icons:** Inline SVG
- **Fonts:** Google Fonts (Inter)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/dhruv0111/Dhruv-Sharma-portfolio.git

# Navigate to project directory
cd Dhruv-Sharma-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
white-viking/
├── public/
│   ├── apple-touch-icon.svg      # iOS/Mac app icon
│   ├── favicon-32x32.svg          # Main favicon
│   ├── favicon-16x16.svg          # Small favicon
│   └── site.webmanifest           # PWA configuration
├── src/
│   ├── components/
│   │   ├── About.jsx              # Engineering approach section
│   │   ├── Contact.jsx            # Contact CTA section
│   │   ├── Education.jsx          # Academic background
│   │   ├── Experience.jsx         # Work history timeline
│   │   ├── Hero.jsx               # Landing section
│   │   ├── HireMeFor.jsx          # Value proposition
│   │   ├── Navbar.jsx             # Navigation
│   │   ├── Projects.jsx           # Selected systems
│   │   ├── Proof.jsx              # Proof of work links
│   │   ├── RecruiterSummary.jsx   # One-page summary
│   │   └── Skills.jsx             # Technical capabilities
│   ├── hooks/
│   │   └── useScrollReveal.js     # Custom scroll animation hook
│   ├── assets/
│   │   └── images/                # Images and media
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Global styles & animations
│   └── main.jsx                   # Entry point
├── index.html                     # HTML template
├── package.json                   # Dependencies
└── vite.config.js                 # Vite configuration
```

## 🎨 Key Components

### **useScrollReveal Hook**
Custom React hook using Intersection Observer for scroll-triggered animations:
```javascript
const { ref, isVisible } = useScrollReveal({ threshold: 0.3, delay: 100 });
```

### **Animation System**
- **Duration:** 220-700ms (FAANG standards)
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` - Smooth ease-out
- **Effects:** Scale (0.95→1), Blur (4px→0), Rotation (-3deg→0deg)
- **Variants:** Left, Right, Rotate, Fade

### **3D Transforms**
Cards and buttons use `transform-style: preserve-3d` for depth:
```css
.card:hover {
  transform: translateY(-8px) rotateX(2deg) scale(1.02);
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.2);
}
```

## 🎯 Design Philosophy

**FAANG-Level Quality:**
- Calm, confident animations (not flashy)
- Intentional motion that guides attention
- Professional color palette (indigo, purple, pink gradients)
- Accessibility-first approach
- Mobile-responsive from the ground up

**US Recruiter Optimized:**
- Trust-based language ("Owned", "Trusted to", "Led")
- Quantified impact and business value
- Decision-making and risk management emphasis
- One-page recruiter summary for quick scanning

## 📊 Performance

- ⚡ **Fast load times** - Vite's optimized bundling
- 🎯 **GPU-accelerated animations** - Using `transform` and `opacity`
- 📱 **Mobile optimized** - Responsive breakpoints at 375px, 768px, 1024px
- ♿ **Accessible** - Respects `prefers-reduced-motion`

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization

### **Colors**
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #6366f1;    /* Indigo */
  --accent-secondary: #8b5cf6;  /* Purple */
  --bg-primary: #0a0a0f;        /* Dark background */
}
```

### **Content**
Update component files in `src/components/` to modify:
- Projects and experience
- Skills and capabilities
- Contact information
- About section text

### **Animations**
Adjust timing in `src/index.css`:
```css
--anim-duration-fast: 220ms;
--anim-duration-normal: 260ms;
--anim-distance-md: 16px;
```

## 🚀 Deployment

### **GitHub Pages**
```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

### **Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Netlify**
```bash
# Build command: npm run build
# Publish directory: dist
```

## 📧 Contact

**Dhruv Sharma**
- 📧 Email: [dhruvsharmaaugust2003@gmail.com](mailto:dhruvsharmaaugust2003@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/dhruv-sharma-ai](https://www.linkedin.com/in/dhruv-sharma-ai/)
- 🐙 GitHub: [github.com/dhruv0111](https://github.com/dhruv0111)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ using React + Vite**

⭐ Star this repo if you find it helpful!

</div>
