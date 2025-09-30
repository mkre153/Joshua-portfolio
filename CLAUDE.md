# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start Next.js dev server with Turbopack on http://localhost:3000

# Database
npx prisma dev       # Start local Prisma Postgres database (development only)
npx prisma db push   # Push schema changes to database (creates/updates tables)
npx prisma generate  # Regenerate Prisma Client after schema changes
npx prisma studio    # Open Prisma Studio GUI for database inspection

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Architecture Overview

### Tech Stack
- **Next.js 15.5.4** with App Router and Turbopack
- **React 19** (latest) with TypeScript 5.x
- **Tailwind CSS v4** (beta) - CSS-first configuration in `app/globals.css` using `@theme inline`
- **Framer Motion 12.23** for animations
- **Prisma 6.16** + PostgreSQL for data persistence

### Design System (`app/globals.css`)

The entire design system is defined in `app/globals.css` using CSS custom properties:

**OKLCH Colors**: Perceptually uniform color space for consistent light/dark mode
```css
--color-primary: oklch(75% 0.15 330)    /* Coral/pink accent */
--color-secondary: oklch(65% 0.12 85)   /* Warm yellow */
```

**Fluid Typography**: Responsive without media queries using `clamp()`
```css
--font-size-display: clamp(2.5rem, 5vw + 1.5rem, 5rem)
--font-size-base: clamp(1rem, 0.75vw + 0.85rem, 1.125rem)
```

**4pt Grid Spacing**: Consistent spacing system
```css
--space-xs: 0.25rem   /* 4px */
--space-md: 1rem      /* 16px */
--space-xl: 4rem      /* 64px */
```

**Animation Timing**:
```css
--duration-base: 300ms
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1)
```

### Database Architecture

**Prisma Schema** (`prisma/schema.prisma`):
- `GuestbookEntry`: Visitor messages (name, message, createdAt)
- `ContactMessage`: Contact form submissions (name, email, message, createdAt)

**Prisma Client** (`lib/prisma.ts`):
- Singleton pattern with global caching in development
- Prevents exhausting database connections during hot reload

**API Routes**:
- `app/api/guestbook/route.ts`: GET (fetch entries), POST (create entry with validation)
- `app/api/contact/route.ts`: POST (submit contact form with email validation)

### Component Architecture

**Main Page Components** (single-page portfolio in `components/`):
- `Header.tsx`: Sticky nav with active section detection (scroll listener + state)
- `Hero.tsx`: Typewriter effect with useEffect hook (100ms per character)
- `About.tsx`: Two-column layout (image + bio + skills grid)
- `Projects.tsx`: Grid of project cards linking to `/projects/[slug]`
- `Guestbook.tsx`: Fetches from `/api/guestbook` on mount, POST on submit
- `Contact.tsx`: POST to `/api/contact`, success/error states
- `Footer.tsx`: Social links with dynamic year

**Project Detail Components** (case study pages):
- `ProjectDetail.tsx`: Main layout for `/projects/[slug]` pages
- `ProjectGallery.tsx`: Responsive image grid (2-col + full-width hero)
- `ImageLightbox.tsx`: Full-screen viewer with keyboard nav (ESC, ←, →)
- `ProjectProcess.tsx`: Design evolution showcase with numbered steps
- `ProjectNavigation.tsx`: Previous/Next project buttons

**Routing Architecture**:
- `app/page.tsx`: Single-page layout with all sections (requires `'use client'`)
- `app/projects/[slug]/page.tsx`: Dynamic routes for project case studies
- `lib/projectsData.ts`: Central project data source (6 projects with full content structure)

**Project Data Flow**:
1. `Projects.tsx` uses `getBasicProjects()` for card grid
2. Project cards link to `/projects/{slug}`
3. Dynamic route uses `getProjectBySlug(slug)` to fetch full data
4. `ProjectDetail` renders complete case study with all sub-components

### Animation Patterns

All animations use Framer Motion's `whileInView` with `viewport={{ once: true }}` for performance:

```tsx
// Standard entrance
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

// Staggered items
transition={{ duration: 0.3, delay: index * 0.05 }}

// Hover interactions (GPU-accelerated only)
whileHover={{ scale: 1.05 }}  // Only transform/opacity for 60fps
```

### Key Design Decisions

1. **Tailwind v4 CSS-First**: No `tailwind.config.js` - use `@theme inline` in `globals.css`
2. **OKLCH for Colors**: Better perceptual uniformity than RGB/HSL for gradients and dark mode
3. **Client-Side Only**: All components use `'use client'` - no Server Components yet (Framer Motion requirement)
4. **Smooth Scroll**: `scroll-behavior: smooth` + `scroll-padding-top: 80px` for fixed header offset
5. **Active Section Detection**: Header uses scroll event listener to highlight current section
6. **Database-Ready**: All forms use real API routes, ready for production database

### Database Setup

**Development** (local testing):
1. Run `npx prisma dev` to start local Prisma Postgres
2. Run `npx prisma db push` to create tables
3. Dev server auto-connects via `DATABASE_URL` in `.env`

**Production** (Vercel):
1. Deploy to Vercel
2. Add "Postgres" from Vercel Storage tab
3. Vercel auto-sets `DATABASE_URL` environment variable
4. Run `npx prisma db push` in Vercel deployment settings or via CLI

### Important Files

- `app/globals.css`: **Complete design system** - modify colors, typography, spacing here
- `lib/prisma.ts`: Singleton Prisma client - import from here in all API routes
- `lib/projectsData.ts`: **Central project data** - add/edit projects here
- `prisma/schema.prisma`: Database schema - run `npx prisma generate` after changes
- `.env`: Contains `DATABASE_URL` - **never commit this file**

### Project Data Structure

All project content lives in `lib/projectsData.ts`. Each project includes:
- **Basic info**: id, slug, title, category, description, tags, year, color
- **Overview**: problem, solution, role, deliverables, duration, client
- **Process**: array of steps (title, description, images[])
- **Gallery**: array of final work images
- **Outcome**: description + optional metrics array
- **Navigation**: nextProjectSlug, prevProjectSlug for circular navigation

**Adding a new project**:
1. Add entry to `projects` array in `lib/projectsData.ts`
2. Update `nextProjectSlug`/`prevProjectSlug` in adjacent projects
3. Place images in `/public/projects/{slug}/` directory
4. Update image paths in project data structure
5. Dynamic route automatically generates `/projects/{slug}` page

### Smooth Scroll Navigation

Active section highlighting uses:
1. Scroll event listener in `Header.tsx`
2. Compares `window.scrollY` with section `offsetTop` + `offsetHeight`
3. Updates state → CSS color + animated underline with `layoutId`
4. 80px offset accounts for fixed header

### API Route Validation

Both API routes include validation:
- **Guestbook**: Name < 100 chars, message < 500 chars
- **Contact**: Email regex, name < 100 chars, message < 1000 chars
- All return proper HTTP status codes (400 for validation, 500 for errors)

### Responsive Design

- Mobile-first approach with `md:` (768px+) and `lg:` (1024px+) breakpoints
- Grids adapt: 1 column → 2 columns → 3 columns
- Mobile hamburger menu in Header with animated icon (transforms to X)
- Fluid typography eliminates need for most media queries

### Image Placeholders

Currently all images use gradient placeholders with project colors:
```tsx
background: `linear-gradient(135deg, ${project.color}, oklch(from ${project.color} calc(l * 0.8) c calc(h + 30)))`
```

To replace with real images:
1. Add images to `/public/projects/{slug}/` directory
2. Update paths in `lib/projectsData.ts`:
   - `heroImage`: Main project image (16:9 aspect)
   - `thumbnailImage`: Card thumbnail (4:3 aspect)
   - `process[].images[]`: Process step images
   - `gallery[]`: Final work showcase images
3. Replace gradient `<div>` in components with `<Image>` from `next/image`
4. Keep gradient as fallback during loading

### Lightbox Interaction

`ImageLightbox.tsx` provides full-screen image viewing:
- Click any gallery image to open
- Keyboard: ESC (close), ← → (navigate)
- Counter shows current position (e.g., "3 / 6")
- Background click closes lightbox
- Prevents body scroll when open (`document.body.style.overflow = 'hidden'`)