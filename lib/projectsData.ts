// Rich project data structure for portfolio
// This extends the basic project cards with full case study content

export interface ProjectOverview {
  problem: string;
  solution: string;
  role: string;
  deliverables: string[];
  duration?: string;
  client?: string;
}

export interface ProjectProcessStep {
  title: string;
  description: string;
  images: string[];
}

export interface ProjectOutcome {
  description: string;
  metrics?: { label: string; value: string }[];
}

export interface DetailedProject {
  // Basic info (shown on cards)
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  color: string;

  // Detail page content
  heroImage: string;
  thumbnailImage: string;
  overview: ProjectOverview;
  process: ProjectProcessStep[];
  gallery: string[];
  outcome?: ProjectOutcome;

  // Navigation
  nextProjectSlug?: string;
  prevProjectSlug?: string;
}

export const projects: DetailedProject[] = [
  {
    id: 1,
    slug: 'urban-roots-coffee',
    title: 'Urban Roots Coffee',
    category: 'Brand Identity',
    description: 'Complete brand identity system for an artisan coffee roastery, including logo, packaging, and collateral design.',
    tags: ['Branding', 'Packaging', 'Typography'],
    year: '2024',
    color: 'oklch(65% 0.15 40)',
    heroImage: '/projects/urban-roots/hero.jpg',
    thumbnailImage: '/projects/urban-roots/thumbnail.jpg',
    overview: {
      problem: 'Urban Roots Coffee needed a distinctive brand identity that reflected their commitment to sustainable sourcing and artisanal roasting methods while appealing to modern coffee enthusiasts.',
      solution: 'Developed a warm, earthy visual identity combining custom typography with organic illustrations. The logo features interwoven roots symbolizing community and sustainability.',
      role: 'Lead Designer - Brand Strategy, Visual Identity, Packaging Design',
      deliverables: [
        'Logo & Brand Identity System',
        'Packaging Design (Bags, Cups, Boxes)',
        'Brand Guidelines',
        'Marketing Collateral',
        'Social Media Templates'
      ],
      duration: '3 months',
      client: 'Urban Roots Coffee Co.'
    },
    process: [
      {
        title: 'Research & Discovery',
        description: 'Conducted market research, competitor analysis, and stakeholder interviews to understand the brand positioning and target audience.',
        images: [
          '/projects/urban-roots/process-research-1.jpg',
          '/projects/urban-roots/process-research-2.jpg'
        ]
      },
      {
        title: 'Concept Development',
        description: 'Explored multiple visual directions through sketches and mood boards. The roots concept emerged as the strongest metaphor for community and sustainable growth.',
        images: [
          '/projects/urban-roots/process-sketches-1.jpg',
          '/projects/urban-roots/process-sketches-2.jpg',
          '/projects/urban-roots/process-concepts.jpg'
        ]
      },
      {
        title: 'Refinement & Application',
        description: 'Refined the chosen direction and applied it across all touchpoints, ensuring consistency and versatility across physical and digital media.',
        images: [
          '/projects/urban-roots/process-refinement-1.jpg',
          '/projects/urban-roots/process-refinement-2.jpg'
        ]
      }
    ],
    gallery: [
      '/projects/urban-roots/final-logo.jpg',
      '/projects/urban-roots/final-packaging-1.jpg',
      '/projects/urban-roots/final-packaging-2.jpg',
      '/projects/urban-roots/final-collateral-1.jpg',
      '/projects/urban-roots/final-collateral-2.jpg',
      '/projects/urban-roots/final-mockup.jpg'
    ],
    outcome: {
      description: 'The new brand identity successfully launched across three cafe locations, receiving positive feedback from customers and increasing brand recognition by 40% in the first quarter.',
      metrics: [
        { label: 'Brand Recognition', value: '+40%' },
        { label: 'Social Engagement', value: '+65%' },
        { label: 'Customer Satisfaction', value: '4.8/5' }
      ]
    },
    nextProjectSlug: 'minimalist-magazine',
    prevProjectSlug: 'tech-summit-2024'
  },
  {
    id: 2,
    slug: 'minimalist-magazine',
    title: 'Minimalist Magazine',
    category: 'Editorial Design',
    description: 'Art direction and layout design for a quarterly design publication focusing on contemporary minimalism.',
    tags: ['Editorial', 'Typography', 'Art Direction'],
    year: '2024',
    color: 'oklch(70% 0.12 200)',
    heroImage: '/projects/minimalist-magazine/hero.jpg',
    thumbnailImage: '/projects/minimalist-magazine/thumbnail.jpg',
    overview: {
      problem: 'Minimalist Magazine required a fresh editorial design that embodied minimalist principles while remaining visually engaging and readable across 100+ pages per issue.',
      solution: 'Created a flexible grid system with generous white space, sophisticated typography hierarchy, and strategic use of imagery. The design allows content to breathe while maintaining visual interest.',
      role: 'Art Director & Layout Designer',
      deliverables: [
        'Editorial Design System',
        'Typography Guidelines',
        'Layout Templates (12 variations)',
        'Cover Design Series',
        'Digital Edition Adaptation'
      ],
      duration: '4 months (ongoing)',
      client: 'Minimalist Magazine'
    },
    process: [
      {
        title: 'Typography Exploration',
        description: 'Selected and tested serif and sans-serif pairings to establish a sophisticated yet readable hierarchy. Settled on a combination of Freight Text and Founders Grotesk.',
        images: [
          '/projects/minimalist-magazine/process-typography-1.jpg',
          '/projects/minimalist-magazine/process-typography-2.jpg'
        ]
      },
      {
        title: 'Grid System Development',
        description: 'Developed a modular grid system that accommodates various content types while maintaining consistency. The 12-column grid allows for both symmetrical and asymmetrical layouts.',
        images: [
          '/projects/minimalist-magazine/process-grid-1.jpg',
          '/projects/minimalist-magazine/process-grid-2.jpg',
          '/projects/minimalist-magazine/process-layouts.jpg'
        ]
      }
    ],
    gallery: [
      '/projects/minimalist-magazine/final-cover-1.jpg',
      '/projects/minimalist-magazine/final-spread-1.jpg',
      '/projects/minimalist-magazine/final-spread-2.jpg',
      '/projects/minimalist-magazine/final-spread-3.jpg',
      '/projects/minimalist-magazine/final-detail.jpg'
    ],
    outcome: {
      description: 'The redesign received critical acclaim from the design community and contributed to a 30% increase in subscriptions. The magazine was nominated for Best Editorial Design at the 2024 Design Awards.',
    },
    nextProjectSlug: 'momentum-fitness',
    prevProjectSlug: 'urban-roots-coffee'
  },
  {
    id: 3,
    slug: 'momentum-fitness',
    title: 'Momentum Fitness',
    category: 'Digital Experience',
    description: 'Website and app interface design for a modern fitness platform with integrated workout tracking.',
    tags: ['UI/UX', 'Digital', 'Motion'],
    year: '2023',
    color: 'oklch(60% 0.18 140)',
    heroImage: '/projects/momentum-fitness/hero.jpg',
    thumbnailImage: '/projects/momentum-fitness/thumbnail.jpg',
    overview: {
      problem: 'Momentum Fitness needed a comprehensive digital platform that simplified workout tracking while motivating users through intuitive design and data visualization.',
      solution: 'Designed a clean, energetic interface with custom motion graphics, real-time progress visualization, and personalized workout recommendations. Focused on reducing friction in the user journey.',
      role: 'UI/UX Designer - Interface Design, Prototyping, Motion Design',
      deliverables: [
        'Website Design (15+ pages)',
        'Mobile App UI (iOS & Android)',
        'Design System & Component Library',
        'Motion Design Guidelines',
        'User Flow Documentation'
      ],
      duration: '5 months',
      client: 'Momentum Fitness Inc.'
    },
    process: [
      {
        title: 'User Research & Wireframing',
        description: 'Conducted user interviews and usability testing to understand pain points in existing fitness apps. Created low-fidelity wireframes to test information architecture.',
        images: [
          '/projects/momentum-fitness/process-research.jpg',
          '/projects/momentum-fitness/process-wireframes.jpg'
        ]
      },
      {
        title: 'Visual Design & Prototyping',
        description: 'Developed high-fidelity mockups with an energetic color palette and dynamic motion principles. Created interactive prototypes to test user flows.',
        images: [
          '/projects/momentum-fitness/process-visual-1.jpg',
          '/projects/momentum-fitness/process-visual-2.jpg',
          '/projects/momentum-fitness/process-prototype.jpg'
        ]
      }
    ],
    gallery: [
      '/projects/momentum-fitness/final-dashboard.jpg',
      '/projects/momentum-fitness/final-workout.jpg',
      '/projects/momentum-fitness/final-progress.jpg',
      '/projects/momentum-fitness/final-mobile-1.jpg',
      '/projects/momentum-fitness/final-mobile-2.jpg'
    ],
    outcome: {
      description: 'The platform launched with 5,000 beta users and achieved a 4.6-star rating. User engagement metrics exceeded expectations with an average session time of 18 minutes.',
      metrics: [
        { label: 'User Rating', value: '4.6/5' },
        { label: 'Avg Session Time', value: '18 min' },
        { label: 'Daily Active Users', value: '3,200+' }
      ]
    },
    nextProjectSlug: 'heritage-museum',
    prevProjectSlug: 'minimalist-magazine'
  },
  {
    id: 4,
    slug: 'heritage-museum',
    title: 'Heritage Museum',
    category: 'Print & Signage',
    description: 'Wayfinding system and exhibition graphics for a contemporary art museum renovation project.',
    tags: ['Print', 'Environmental', 'Systems'],
    year: '2023',
    color: 'oklch(55% 0.16 280)',
    heroImage: '/projects/heritage-museum/hero.jpg',
    thumbnailImage: '/projects/heritage-museum/thumbnail.jpg',
    overview: {
      problem: 'Heritage Museum underwent a major renovation and needed a comprehensive wayfinding system that guided visitors while respecting the architectural integrity of the historic building.',
      solution: 'Designed a modular signage system using elegant typography and subtle color coding. The system blends seamlessly with the architecture while providing clear navigation across three floors.',
      role: 'Environmental Graphic Designer',
      deliverables: [
        'Wayfinding System Design',
        'Directional Signage',
        'Exhibition Graphics',
        'Donor Recognition Displays',
        'Accessibility Compliance Documentation'
      ],
      duration: '6 months',
      client: 'Heritage Museum Foundation'
    },
    process: [
      {
        title: 'Site Analysis & Planning',
        description: 'Mapped visitor flow patterns and identified key decision points throughout the museum. Assessed architectural constraints and opportunities.',
        images: [
          '/projects/heritage-museum/process-analysis.jpg',
          '/projects/heritage-museum/process-planning.jpg'
        ]
      },
      {
        title: 'Design Development',
        description: 'Developed signage typology and visual language. Created mockups to test legibility and aesthetic integration with the space.',
        images: [
          '/projects/heritage-museum/process-design-1.jpg',
          '/projects/heritage-museum/process-design-2.jpg',
          '/projects/heritage-museum/process-mockups.jpg'
        ]
      }
    ],
    gallery: [
      '/projects/heritage-museum/final-entrance.jpg',
      '/projects/heritage-museum/final-directional.jpg',
      '/projects/heritage-museum/final-exhibition.jpg',
      '/projects/heritage-museum/final-detail-1.jpg',
      '/projects/heritage-museum/final-detail-2.jpg'
    ],
    outcome: {
      description: 'The wayfinding system successfully guided over 50,000 visitors in its first quarter, with visitor surveys showing 95% satisfaction with navigation clarity.',
    },
    nextProjectSlug: 'bloom-cosmetics',
    prevProjectSlug: 'momentum-fitness'
  },
  {
    id: 5,
    slug: 'bloom-cosmetics',
    title: 'Bloom Cosmetics',
    category: 'Brand Identity',
    description: 'Visual identity and packaging design for a sustainable beauty brand with organic ingredients.',
    tags: ['Branding', 'Packaging', 'Illustration'],
    year: '2023',
    color: 'oklch(75% 0.14 330)',
    heroImage: '/projects/bloom-cosmetics/hero.jpg',
    thumbnailImage: '/projects/bloom-cosmetics/thumbnail.jpg',
    overview: {
      problem: 'Bloom Cosmetics, a new sustainable beauty brand, needed a visual identity that communicated their commitment to natural ingredients and eco-friendly practices without appearing generic.',
      solution: 'Created a botanical-inspired identity with custom floral illustrations and a soft, natural color palette. The packaging design emphasizes transparency and sustainability through material choices.',
      role: 'Brand Designer & Illustrator',
      deliverables: [
        'Brand Identity & Logo',
        'Packaging Design (5 product lines)',
        'Custom Botanical Illustrations',
        'Brand Guidelines',
        'E-commerce Website Design'
      ],
      duration: '4 months',
      client: 'Bloom Cosmetics'
    },
    process: [
      {
        title: 'Brand Strategy & Illustration',
        description: 'Developed brand personality and created custom botanical illustrations representing each product line. Each flower species was selected for its symbolic meaning.',
        images: [
          '/projects/bloom-cosmetics/process-illustrations.jpg',
          '/projects/bloom-cosmetics/process-concepts.jpg'
        ]
      },
      {
        title: 'Packaging Design',
        description: 'Designed sustainable packaging using recyclable materials. The label design showcases the illustrations while maintaining a premium, minimalist aesthetic.',
        images: [
          '/projects/bloom-cosmetics/process-packaging-1.jpg',
          '/projects/bloom-cosmetics/process-packaging-2.jpg'
        ]
      }
    ],
    gallery: [
      '/projects/bloom-cosmetics/final-identity.jpg',
      '/projects/bloom-cosmetics/final-packaging-lineup.jpg',
      '/projects/bloom-cosmetics/final-packaging-detail.jpg',
      '/projects/bloom-cosmetics/final-collateral.jpg',
      '/projects/bloom-cosmetics/final-website.jpg'
    ],
    outcome: {
      description: 'The brand launched successfully at three major retailers and online, selling out initial inventory within two weeks. Customer feedback praised the beautiful, eco-conscious packaging.',
    },
    nextProjectSlug: 'tech-summit-2024',
    prevProjectSlug: 'heritage-museum'
  },
  {
    id: 6,
    slug: 'tech-summit-2024',
    title: 'Tech Summit 2024',
    category: 'Event Design',
    description: 'Conference branding including posters, badges, and digital assets for annual technology summit.',
    tags: ['Branding', 'Print', 'Digital'],
    year: '2024',
    color: 'oklch(50% 0.20 260)',
    heroImage: '/projects/tech-summit/hero.jpg',
    thumbnailImage: '/projects/tech-summit/thumbnail.jpg',
    overview: {
      problem: 'Tech Summit 2024, a three-day conference for 2,000 attendees, needed a cohesive visual system that worked across print, digital, and environmental applications while capturing the event\'s innovative spirit.',
      solution: 'Developed a bold, geometric visual identity inspired by data visualization and circuitry. The modular design system adapted seamlessly across all touchpoints from badges to 20-foot banners.',
      role: 'Lead Designer - Event Branding, Print Production',
      deliverables: [
        'Event Brand Identity',
        'Posters & Promotional Materials',
        'Attendee Badges & Lanyards',
        'Stage & Banner Design',
        'Digital Assets (Social, Email, App)',
        'Signage & Wayfinding'
      ],
      duration: '2 months',
      client: 'Tech Summit Conference'
    },
    process: [
      {
        title: 'Concept Development',
        description: 'Explored various visual metaphors for innovation and connectivity. The final direction combines circuit-inspired patterns with vibrant gradients.',
        images: [
          '/projects/tech-summit/process-concepts-1.jpg',
          '/projects/tech-summit/process-concepts-2.jpg'
        ]
      },
      {
        title: 'System Application',
        description: 'Applied the visual system across all materials, ensuring consistency and flexibility. Created templates for sponsors and speakers to maintain brand cohesion.',
        images: [
          '/projects/tech-summit/process-application-1.jpg',
          '/projects/tech-summit/process-application-2.jpg',
          '/projects/tech-summit/process-templates.jpg'
        ]
      }
    ],
    gallery: [
      '/projects/tech-summit/final-poster.jpg',
      '/projects/tech-summit/final-badges.jpg',
      '/projects/tech-summit/final-stage.jpg',
      '/projects/tech-summit/final-signage.jpg',
      '/projects/tech-summit/final-digital.jpg'
    ],
    outcome: {
      description: 'The conference received overwhelmingly positive feedback on its visual identity, with 92% of attendees rating the design as "excellent" or "very good" in post-event surveys.',
      metrics: [
        { label: 'Attendee Satisfaction', value: '92%' },
        { label: 'Social Media Reach', value: '1.2M' },
        { label: 'Brand Recall', value: '87%' }
      ]
    },
    nextProjectSlug: 'urban-roots-coffee',
    prevProjectSlug: 'bloom-cosmetics'
  }
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): DetailedProject | undefined {
  return projects.find(p => p.slug === slug);
}

// Helper function to get all project slugs (for static generation)
export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug);
}

// Helper function to get basic project info for cards
export function getBasicProjects() {
  return projects.map(p => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.category,
    description: p.description,
    tags: p.tags,
    year: p.year,
    color: p.color,
    thumbnailImage: p.thumbnailImage
  }));
}