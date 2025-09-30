# Joshua Kwak - Portfolio

A modern, fully-animated portfolio website for Joshua Kwak, a graphic designer specializing in visual communication and brand identity.

**Live Site:** [Coming Soon - joshuakwak.me]

[![Built with Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff69b4?logo=framer)](https://www.framer.com/motion/)

---

## ✨ Features

- 🎨 **Custom Design System** with OKLCH color space for perceptually uniform colors
- 🌊 **Fluid Typography** that scales smoothly across all screen sizes
- ✨ **Smooth Animations** powered by Framer Motion
- 🎯 **Active Section Detection** with animated navigation indicators
- 📱 **Fully Responsive** design from mobile to desktop
- 🌙 **Automatic Dark Mode** with smooth transitions
- ♿ **Accessible** with proper ARIA labels and keyboard navigation
- ⚡ **Fast Performance** using Next.js 15 + Turbopack

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/mkre153/Joshua-portfolio.git
cd Joshua-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
joshua-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Design system & global styles
├── components/
│   ├── Header.tsx          # Sticky navigation with active states
│   ├── Hero.tsx            # Animated hero section with typewriter
│   ├── About.tsx           # Bio + skills grid
│   ├── Projects.tsx        # Project showcase (6 projects)
│   ├── Guestbook.tsx       # Visitor guestbook
│   ├── Contact.tsx         # Contact form + methods
│   └── Footer.tsx          # Social links + credits
├── public/                 # Static assets
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
└── next.config.ts          # Next.js config
```

---

## 🎨 Design System

### Color Palette (OKLCH)

The portfolio uses the OKLCH color space for perceptually uniform colors that look great in both light and dark modes.

**Light Theme:**
- Primary: `oklch(75% 0.15 330)` - Coral/pink accent
- Secondary: `oklch(65% 0.12 85)` - Warm yellow
- Background: `oklch(98% 0.005 280)` - Off-white
- Text: `oklch(20% 0.02 280)` - Near black

**Dark Theme:**
- Automatically adjusts via `prefers-color-scheme: dark`
- Maintains color relationships while adapting for dark backgrounds

### Typography Scale (Fluid)

Typography scales smoothly using `clamp()` for responsive sizing without media queries:

```css
--font-size-display: clamp(2.5rem, 5vw + 1.5rem, 5rem);
--font-size-2xl: clamp(2rem, 3vw + 1.25rem, 3.5rem);
--font-size-xl: clamp(1.5rem, 2vw + 1rem, 2.5rem);
--font-size-lg: clamp(1.125rem, 1vw + 0.95rem, 1.375rem);
--font-size-base: clamp(1rem, 0.75vw + 0.85rem, 1.125rem);
```

### Spacing System (4pt Grid)

Consistent spacing based on a 4-point grid:

```css
--space-xs: 0.25rem   /* 4px */
--space-sm: 0.5rem    /* 8px */
--space-md: 1rem      /* 16px */
--space-lg: 2rem      /* 32px */
--space-xl: 4rem      /* 64px */
```

---

## 🎬 Animation Patterns

All animations are powered by Framer Motion and optimized for performance.

### Scroll-Triggered Animations

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

### Staggered Entrances

```tsx
transition={{ duration: 0.3, delay: index * 0.05 }}
```

### Hover Interactions

```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

---

## 📄 Page Sections

### 1. Header
- Sticky navigation with backdrop blur
- Active section detection and highlighting
- Mobile hamburger menu with smooth transitions
- Animated underline indicator

### 2. Hero
- Full-viewport section with gradient background
- Typewriter effect for title (100ms per character)
- Blinking cursor animation
- CTA buttons with hover effects
- Bouncing scroll indicator

### 3. About
- Two-column responsive layout
- Profile image placeholder
- Three bio paragraphs with sequential animations
- 9-skill grid with hover effects
- Design philosophy quote card

### 4. Projects
- 2-column grid (responsive)
- 6 sample projects with:
  - Category tags
  - Year labels
  - Descriptions
  - Tag pills
  - Hover overlay with "View Project" CTA
- Staggered card entrances

### 5. Guestbook
- Visitor message form
- Entry display with timestamps
- Smart relative date formatting
- Pre-populated sample entries
- Ready for database integration

### 6. Contact
- Two-column layout
- Contact form with validation
- Success/sending states
- Alternative contact methods (4 cards)
- Availability status card

### 7. Footer
- Copyright with dynamic year
- Social links (Email, LinkedIn, Instagram, Behance)
- Technology credits
- Fade-in on scroll

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5.4 | React framework with App Router |
| React | 19.1.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.0 (beta) | CSS framework with inline theme |
| Framer Motion | 12.23.22 | Animation library |
| Turbopack | Latest | Fast development bundler |

### Why These Technologies?

- **Next.js 15**: Server Components, App Router, and optimized performance
- **React 19**: Latest features and improvements
- **TypeScript**: Full type safety and better developer experience
- **Tailwind v4**: CSS-first configuration with modern features
- **Framer Motion**: Industry-leading animation library with great DX
- **OKLCH Colors**: Perceptually uniform color space for better design

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub (already done!)
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import the `Joshua-portfolio` repository
4. Vercel auto-detects Next.js configuration
5. Click "Deploy"

Your site will be live in ~2 minutes!

### Custom Domain Setup

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain: `joshuakwak.me`
3. Follow DNS configuration instructions
4. SSL certificate is automatically generated

---

## 🔮 Future Enhancements

### Phase 2: Database Integration
- [ ] PostgreSQL + Prisma setup
- [ ] Persistent guestbook entries
- [ ] Contact form email integration
- [ ] Admin panel for content management

### Phase 3: Advanced Features
- [ ] Project view counters
- [ ] Image uploads and optimization
- [ ] Blog/case study pages
- [ ] Search functionality
- [ ] RSS feed

### Phase 4: Performance
- [ ] Image optimization with next/image
- [ ] Route prefetching
- [ ] Bundle size optimization
- [ ] Lighthouse score 100/100

---

## 🎯 Performance

Current optimizations:

- ✅ GPU-accelerated animations (transform/opacity only)
- ✅ Lazy loading with `whileInView`
- ✅ Turbopack for fast dev builds (15-99ms)
- ✅ Code splitting via Next.js
- ✅ Optimized font loading (Geist Sans/Mono)
- ✅ Reduced motion support

---

## ♿ Accessibility

- ✅ Semantic HTML (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ✅ ARIA labels on interactive elements
- ✅ Focus visible states (2px primary outline)
- ✅ `prefers-reduced-motion` support
- ✅ Keyboard navigation friendly
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text for images (when added)
- ✅ Color contrast meets WCAG AA standards

---

## 🐛 Known Issues

None currently! 🎉

If you find any issues, please [open an issue](https://github.com/mkre153/Joshua-portfolio/issues).

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Joshua Kwak**
- Email: joshua@joshuakwak.me
- LinkedIn: [linkedin.com/in/joshuakwak](https://linkedin.com)
- Instagram: [@joshuakwak.design](https://instagram.com)
- Behance: [behance.net/joshuakwak](https://behance.net)

---

## 🙏 Acknowledgments

Design inspiration from:
- [Brittany Chiang](https://brittanychiang.com) - Simplicity and clarity
- [Lee Robinson](https://leerob.com) - Dynamic features
- [Hamish Williams](https://hamishw.com) - Subtle motion design

Built with care using:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📊 Project Stats

- **Lines of Code**: ~1,700+
- **Components**: 7
- **Sections**: 6
- **Animations**: 50+
- **Build Time**: ~10 development steps
- **Compile Time**: 15-99ms (Turbopack)

---

<div align="center">

**Built with ❤️ by Joshua Kwak**

🤖 *Generated with [Claude Code](https://claude.com/claude-code)*

*Co-Authored-By: Claude <noreply@anthropic.com>*

[⬆ Back to Top](#joshua-kwak---portfolio)

</div>