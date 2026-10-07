export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const BRAND_DATA = {
  name: 'SkillCraft',
  subname: 'Technology',
  tagline: 'Crafting modern responsive digital experiences and high-performance web products.',
};

export const HERO_CONTENT = {
  eyebrow: 'DIGITAL CRAFTSMANSHIP',
  headingLine1: 'Crafting Modern',
  headingAccent: 'Digital Products.',
  description:
    'SkillCraft Technology designs and engineers responsive web applications, intuitive interfaces, and high-performance digital experiences built to scale.',
  primaryCta: 'Start a Project',
  primaryHref: '#contact',
  secondaryCta: 'Explore What We Do',
  secondaryHref: '#services',
  metrics: ['RESPONSIVE', 'INTERACTIVE', 'PRODUCTION-READY'],
};

export const FEATURES_CONTENT = {
  eyebrow: 'FEATURES —',
  heading: 'Built for Better Digital Experiences',
  cards: [
    {
      id: 'responsive',
      number: '01',
      title: 'Responsive by Design',
      shortDescription: 'Adaptive layout flow ensuring pixel-perfect ergonomics on every screen size.',
      detailedDescription:
        'Engineered with fluid CSS clamp calculations, flexible grids, and breakpoint-free scaling from 320px ultra-compact phones to 4K ultrawide displays with zero horizontal shifting.',
      tag: 'ADAPTIVE VIEWPORTS',
      accent: 'blue',
      accentColor: '#3b82f6',
      badgeBg: 'rgba(59, 130, 246, 0.12)',
      badgeBorder: 'rgba(59, 130, 246, 0.25)',
      specs: [
        'Fluid layout adaptation from 320px to 1920px+',
        'Zero layout shifting across device orientations',
        'Touch-optimized ergonomic interaction targets',
      ],
      actionLabel: 'Explore Specification',
    },
    {
      id: 'interactive',
      number: '02',
      title: 'Smooth Interactions',
      shortDescription: 'Thoughtful micro-interactions and kinetic physics for delightful tactile feedback.',
      detailedDescription:
        'Crafted with hardware-accelerated transforms, spring physics momentum damping, and delicate cursor parallax that feels responsive, organic, and effortlessly alive.',
      tag: 'HARDWARE ACCELERATED',
      accent: 'violet',
      accentColor: '#8b5cf6',
      badgeBg: 'rgba(139, 92, 246, 0.12)',
      badgeBorder: 'rgba(139, 92, 246, 0.25)',
      specs: [
        'Hardware-accelerated 60 FPS transitions',
        'Natural spring dampening with 250–400ms timing',
        'Full prefers-reduced-motion accessibility support',
      ],
      actionLabel: 'Explore Specification',
    },
    {
      id: 'modern-tech',
      number: '03',
      title: 'Modern Technology',
      shortDescription: 'Built with modern React architecture and modular design tokens for enterprise longevity.',
      detailedDescription:
        'Leveraging React 18, Vite bundling, clean semantic HTML5, and modular CSS custom properties to maintain high code clarity, ease of maintenance, and effortless extensibility.',
      tag: 'MODERN COMPONENT STACK',
      accent: 'teal',
      accentColor: '#14b8a6',
      badgeBg: 'rgba(20, 184, 166, 0.12)',
      badgeBorder: 'rgba(20, 184, 166, 0.25)',
      specs: [
        'React 18 + Vite modern component architecture',
        'Modular CSS design tokens and variables',
        'Strict zero-bloat runtime dependencies',
      ],
      actionLabel: 'Explore Specification',
    },
    {
      id: 'performance',
      number: '04',
      title: 'Performance Focused',
      shortDescription: 'Optimized asset pipelines and instantaneous render cycles for seamless user journeys.',
      detailedDescription:
        'Engineered for maximum velocity with sub-second First Contentful Paint, optimized SVGs, lightweight assets, and zero runtime bloat ensuring effortless Core Web Vitals excellence.',
      tag: 'OPTIMIZED ENGINE',
      accent: 'pink',
      accentColor: '#ec4899',
      badgeBg: 'rgba(236, 72, 153, 0.12)',
      badgeBorder: 'rgba(236, 72, 153, 0.25)',
      specs: [
        'Sub-second First Contentful Paint delivery',
        'Optimized SVG vectors and lightweight assets',
        '100% Core Web Vitals target performance',
      ],
      actionLabel: 'Explore Specification',
    },
  ],
};

export const ABOUT_CONTENT = {
  eyebrow: 'MADE WITH PURPOSE —',
  defaultHeading: 'Made With Purpose',
  defaultDescription:
    'Good digital products combine thoughtful design, usability, performance, accessibility, and technology to create experiences that are useful, memorable, and easy to interact with.',
  pillars: [
    {
      id: 'user-first',
      number: '01',
      title: 'USER FIRST',
      tabLabel: 'User First',
      heading: 'User-Centered Experience Design',
      description:
        'Every interface is sculpted around human mental models. We eliminate friction, build intuitive pathways, and ensure seamless navigation across touchscreens, keyboards, and mice.',
      imageKey: 'userfirst',
      accent: 'blue',
      accentColor: '#3b82f6',
      badgeText: 'HUMAN INTERACTION',
      metrics: [
        { label: 'Usability Benchmark', val: '99.4%' },
        { label: 'Accessibility Target', val: 'WCAG AAA' },
        { label: 'Ergonomic Touch Targets', val: '48px+' },
      ],
      details: [
        'Intuitive information architecture that reduces cognitive load',
        'Universal keyboard navigation with high-contrast visible focus rings',
        'Micro-copy crafted for clarity, warmth, and transparent feedback',
      ],
    },
    {
      id: 'scale',
      number: '02',
      title: 'BUILT TO SCALE',
      tabLabel: 'Built to Scale',
      heading: 'Architected for Global Scalability',
      description:
        'From modular design tokens to resilient component hierarchies, we engineer digital infrastructure that expands effortlessly as your business grows without architectural decay.',
      imageKey: 'scale',
      accent: 'violet',
      accentColor: '#8b5cf6',
      badgeText: 'MODULAR ARCHITECTURE',
      metrics: [
        { label: 'Design System Tokens', val: '100% Shared' },
        { label: 'Responsive Viewports', val: '12 Screen Sizes' },
        { label: 'Component Reusability', val: 'Zero Duplication' },
      ],
      details: [
        'Atomic design hierarchy allowing rapid feature composition',
        'Decoupled presentation layers for painless maintenance',
        'Built to support rapid enterprise expansion without redesigns',
      ],
    },
    {
      id: 'performance',
      number: '03',
      title: 'HIGH PERFORMANCE',
      tabLabel: 'Performance',
      heading: 'High-Velocity Computational Engines',
      description:
        'Speed is a foundational feature. We optimize asset delivery, utilize hardware-accelerated composite layers, and maintain steady 60 FPS motion across low-power and high-end hardware alike.',
      imageKey: 'perf',
      accent: 'teal',
      accentColor: '#14b8a6',
      badgeText: 'SPEED OPTIMIZATION',
      metrics: [
        { label: 'Interaction Latency', val: '< 16ms' },
        { label: 'Core Web Vitals', val: '100 / 100' },
        { label: 'FPS Target', val: '60 FPS Solid' },
      ],
      details: [
        'GPU-accelerated CSS transforms minimizing browser repaints',
        'Aggressive asset tree-shaking and modern SVG optimizations',
        'Instantaneous page transitions with zero cumulative layout shifts',
      ],
    },
    {
      id: 'craft',
      number: '04',
      title: 'DETAIL MATTERS',
      tabLabel: 'Detail Matters',
      heading: 'Obsessive Digital Craftsmanship',
      description:
        'Quality lives in the subtleties—spring physics dampening, harmonious typographic proportions, tactile borders, and cohesive ambient lighting that elevate software into memorable craft.',
      imageKey: 'craft',
      accent: 'pink',
      accentColor: '#ec4899',
      badgeText: 'PRECISION CRAFT',
      metrics: [
        { label: 'Animation Timing', val: '250–400ms' },
        { label: 'Visual Grid Alignment', val: 'Sub-Pixel' },
        { label: 'Typography Scale', val: 'Golden Ratio' },
      ],
      details: [
        'Curated color palettes with complementary accents per section',
        'Harmonious contrast ratios compliant with international standards',
        'Delightful tactile micro-interactions on every clickable element',
      ],
    },
  ],
};

export const PROCESS_CONTENT = {
  eyebrow: 'HOW WE BUILD —',
  heading: 'How We Build',
  subtitle:
    'A disciplined engineering process designed to turn complex challenges into polished, intuitive digital products.',
  steps: [
    {
      number: '01',
      phase: 'DISCOVER',
      title: 'Discover & Strategy',
      shortDescription: 'Understand the idea, users, market context and technical goals.',
      detailedDescription:
        'We research user workflows, map information architecture, define technical constraints, and establish clear product benchmarks before writing a single line of code.',
      imageKey: 'discover',
      accent: 'blue',
      accentColor: '#3b82f6',
      deliverables: ['Product Discovery Audit', 'User Flow Maps', 'Technical Architecture Plan'],
    },
    {
      number: '02',
      phase: 'DESIGN',
      title: 'Design System & Prototyping',
      shortDescription: 'Shape the visual direction, design tokens and responsive layouts.',
      detailedDescription:
        'We craft high-fidelity interface systems, component libraries, typography hierarchies, and kinetic motion prototypes tested across desktop, tablet, and mobile viewports.',
      imageKey: 'design',
      accent: 'violet',
      accentColor: '#8b5cf6',
      deliverables: ['Design System Tokens', 'Responsive UI Layouts', 'Motion Prototypes'],
    },
    {
      number: '03',
      phase: 'BUILD',
      title: 'Modern Frontend Engineering',
      shortDescription: 'Turn the design into clean, fast, functional component architecture.',
      detailedDescription:
        'We build scalable frontends using modern React, clean CSS architecture, resilient state flows, and modular reusable components with strict zero-bloat dependencies.',
      imageKey: 'build',
      accent: 'teal',
      accentColor: '#14b8a6',
      deliverables: ['Modular React Architecture', 'Semantic CSS Tokens', 'Clean State Flows'],
    },
    {
      number: '04',
      phase: 'REFINE',
      title: 'Audit, Optimization & QA',
      shortDescription: 'Test, optimize and polish every detail across all 12 device viewports.',
      detailedDescription:
        'We conduct rigorous cross-browser testing, audit 320px–1920px viewports for zero overflow, tune 60 FPS animation timing, and optimize Core Web Vitals metrics.',
      imageKey: 'refine',
      accent: 'pink',
      accentColor: '#ec4899',
      deliverables: ['Cross-Device Viewport QA', '60 FPS Performance Audit', 'Accessibility Compliance'],
    },
    {
      number: '05',
      phase: 'LAUNCH',
      title: 'Production Deployment',
      shortDescription: 'Deploy to high-speed global CDN with production reliability and monitoring.',
      detailedDescription:
        'We configure automated CI/CD pipelines, optimize asset caching, verify SSL certificates, and launch your product seamlessly with full post-launch verification.',
      imageKey: 'launch',
      accent: 'amber',
      accentColor: '#f59e0b',
      deliverables: ['Global CDN Deployment', 'Zero-Downtime Release', 'Post-Launch Verification'],
    },
  ],
};

export const SERVICES_CONTENT = {
  eyebrow: 'WHAT WE DO —',
  heading: 'What We Do',
  subtitle:
    'Comprehensive design and frontend engineering services built to deliver measurable quality and memorable digital interaction.',
  services: [
    {
      id: 'web-dev',
      number: '01',
      title: 'Web Development',
      projectType: 'Web Development',
      description: 'Build fast, responsive and scalable modern web applications tailored to your specific product needs.',
      accent: 'blue',
      accentColor: '#3b82f6',
      iconName: 'Code2',
      tag: 'REACT & MODERN JS',
    },
    {
      id: 'ui-ux',
      number: '02',
      title: 'UI/UX Design',
      projectType: 'UI/UX Design',
      description: 'Create intuitive, elegant and visually striking interfaces that users love interacting with daily.',
      accent: 'violet',
      accentColor: '#8b5cf6',
      iconName: 'Compass',
      tag: 'HUMAN INTERFACES',
    },
    {
      id: 'business-websites',
      number: '03',
      title: 'Business Websites',
      projectType: 'Business Websites',
      description: 'High-conversion, authoritative digital storefronts that present your company with premium polish.',
      accent: 'teal',
      accentColor: '#14b8a6',
      iconName: 'Building2',
      tag: 'ENTERPRISE POLISH',
    },
    {
      id: 'ecommerce',
      number: '04',
      title: 'E-commerce Development',
      projectType: 'E-commerce',
      description: 'Seamless digital commerce experiences with frictionless product showcases and rapid checkout flow.',
      accent: 'emerald',
      accentColor: '#10b981',
      iconName: 'ShoppingBag',
      tag: 'HIGH CONVERSION',
    },
    {
      id: 'web-apps',
      number: '05',
      title: 'Web Applications',
      projectType: 'Web Application',
      description: 'Dynamic single-page applications and management dashboards with resilient state handling.',
      accent: 'cyan',
      accentColor: '#06b6d4',
      iconName: 'Layout',
      tag: 'DYNAMIC DASHBOARDS',
    },
    {
      id: 'landing-pages',
      number: '06',
      title: 'Landing Pages',
      projectType: 'Landing Page',
      description: 'Cinematic, high-impact product landing pages crafted to captivate audiences and maximize conversion.',
      accent: 'pink',
      accentColor: '#ec4899',
      iconName: 'Sparkles',
      tag: 'HIGH ENGAGEMENT',
    },
    {
      id: 'frontend-dev',
      number: '07',
      title: 'Frontend Development',
      projectType: 'Frontend Development',
      description: 'Architect clean, resilient component frameworks and design system implementations with zero runtime bloat.',
      accent: 'indigo',
      accentColor: '#6366f1',
      iconName: 'Cpu',
      tag: 'COMPONENT TOKENS',
    },
    {
      id: 'website-redesign',
      number: '08',
      title: 'Website Redesign',
      projectType: 'Website Redesign',
      description: 'Transform outdated websites into modern, 60 FPS, fully responsive digital powerhouses.',
      accent: 'amber',
      accentColor: '#f59e0b',
      iconName: 'RefreshCw',
      tag: 'MODERN REVAMP',
    },
    {
      id: 'interactive-exp',
      number: '09',
      title: 'Interactive Digital Experiences',
      projectType: 'Interactive Experiences',
      description: 'Fluid micro-interactions, hardware-accelerated motion, and memorable kinetic sensory feedback.',
      accent: 'rose',
      accentColor: '#f43f5e',
      iconName: 'Layers',
      tag: 'KINETIC MOTION',
    },
  ],
};

export const PROJECT_TYPES_LIST = [
  { id: 'web-dev', label: 'Web Development', icon: 'Code2' },
  { id: 'ui-ux', label: 'UI/UX Design', icon: 'Compass' },
  { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingBag' },
  { id: 'web-app', label: 'Web Application', icon: 'Layout' },
  { id: 'landing-page', label: 'Landing Page', icon: 'Sparkles' },
  { id: 'redesign', label: 'Website Redesign', icon: 'RefreshCw' },
  { id: 'other', label: 'Other', icon: 'Layers' },
];

export const TIMELINE_OPTIONS = [
  '< 2 Weeks',
  '1 Month',
  '2–3 Months',
  'Flexible',
];

export const OFFICIAL_CONTACT = {
  email: 'contact@skillcrafttech.com',
  mailto: 'mailto:contact@skillcrafttech.com',
  location: 'Mumbai, Maharashtra, India',
  website: 'https://skillcrafttech.com/',
  websiteDisplay: 'skillcrafttech.com',
  socials: [
    {
      name: 'LinkedIn',
      platform: 'linkedin',
      href: 'https://www.linkedin.com/company/skillcraft-technology/',
      handle: 'skillcraft-technology',
      color: '#0A66C2',
    },
    {
      name: 'Instagram',
      platform: 'instagram',
      href: 'https://www.instagram.com/skillcrafttechnology/',
      handle: '@skillcrafttechnology',
      color: '#E4405F',
    },
    {
      name: 'X',
      platform: 'x',
      href: 'https://twitter.com/SkillCraftTech',
      handle: '@SkillCraftTech',
      color: '#FFFFFF',
    },
  ],
};

export const CTA_FORM_CONTENT = {
  eyebrow: "READY TO COLLABORATE —",
  heading: 'Ready to Build Something Great?',
  description:
    "Let's turn your next idea into a digital experience people remember. Fill out the project details below or reach out directly to begin.",
  contactEmail: 'contact@skillcrafttech.com',
  officialWebsite: 'https://skillcrafttech.com/',
  location: 'Mumbai, Maharashtra, India',
};

export const FOOTER_CONTENT = {
  brand: 'SkillCraft',
  subname: 'Technology',
  description: 'Crafting Success through Technology',
  quickLinksTitle: 'Quick Links',
  connectTitle: 'Connect',
  contactTitle: 'Contact',
  copyright: '© 2026 SkillCraft Technology. All rights reserved.',
  links: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What We Do', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ],
  socials: [
    {
      name: 'LinkedIn',
      platform: 'linkedin',
      href: 'https://www.linkedin.com/company/skillcraft-technology/',
    },
    {
      name: 'Instagram',
      platform: 'instagram',
      href: 'https://www.instagram.com/skillcrafttechnology/',
    },
    {
      name: 'X',
      platform: 'x',
      href: 'https://twitter.com/SkillCraftTech',
    },
  ],
  contact: {
    email: 'contact@skillcrafttech.com',
    location: 'Mumbai, Maharashtra, India',
    website: 'https://skillcrafttech.com/',
  },
  legal: [
    { name: 'Privacy Policy', href: '#contact' },
    { name: 'Terms of Service', href: '#contact' },
  ],
};

