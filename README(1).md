# Amit Kumar Shah - Portfolio Website

A premium, production-grade portfolio website showcasing my work as a Full-Stack Software Engineer specializing in AI-powered systems, Web3 platforms, and startup-grade products.

## 🚀 Built With

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Google Fonts (Inter)** - Typography

## ✨ Features

- **Cyberpunk-Inspired Design** - Dark theme with cyan/purple gradient accents
- **Smooth Animations** - Powered by Framer Motion
- **Fully Responsive** - Mobile to ultra-wide screens
- **Glassmorphism UI** - Modern backdrop-blur effects
- **Production-Ready** - Clean, scalable, modular code

## 📦 Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

The site will open at `http://localhost:3000`

3. **Build for Production**
```bash
npm run build
```

4. **Preview Production Build**
```bash
npm run preview
```

## 🎨 Customization

### Update Contact Email
In `portfolio.jsx`, find the Contact section and update the email link:
```jsx
<a href="mailto:your.email@example.com" ...>
```

### Modify Colors
Edit `portfolio.jsx` to change the color scheme. Current accent colors:
- Cyan: `cyan-400`, `cyan-500`
- Purple: `purple-400`, `purple-600`

### Add More Projects
In the Projects section, add more `<ProjectCard />` components with your project details.

### Update Social Links
All social media links are already set to:
- GitHub: https://github.com/Amitshah18
- LinkedIn: https://linkedin.com/in/amitshah1803
- Instagram: https://instagram.com/amit_shah1803

## 📁 Project Structure

```
.
├── index.html          # HTML entry point
├── main.jsx           # React entry point
├── portfolio.jsx      # Main portfolio component
├── index.css          # Tailwind CSS imports
├── package.json       # Dependencies
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── postcss.config.js  # PostCSS configuration
```

## 🌐 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 💡 Key Sections

1. **Hero** - High-impact introduction with animated gradient text
2. **About** - Personal story and quick stats
3. **Experience** - Current role at BandhuBot
4. **Tech Stack** - Categorized skills
5. **Projects** - Featured work with tech stack badges
6. **Achievements** - Hackathon wins and leadership roles
7. **Contact** - Multiple ways to connect

## 🔧 Tech Stack Highlights

- **Frontend:** React, Tailwind CSS, Next.js
- **Backend:** Node.js, Express.js, Java, Spring Boot, Python, Flask
- **AI/ML:** TensorFlow, PyTorch, LangChain, FAISS, NLP
- **Web3:** Solidity, Smart Contracts, Web3.js, IPFS
- **Databases:** MongoDB, PostgreSQL, MySQL

## 📱 Responsive Design

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px - 1920px
- **Ultra-wide:** 1920px+

## 🎯 Performance

- Minimal dependencies
- Optimized animations
- Lazy loading where applicable
- Production-grade code quality

## 📄 License

© 2025 Amit Kumar Shah. All rights reserved.

---

**Built with 💙 by Amit Kumar Shah**
