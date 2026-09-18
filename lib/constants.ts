// Brand constants and configuration
export const BRAND = {
  name: 'DevArea',
  tagline: 'Premium Digital Growth Agency',
  description: 'We build high-performing websites, landing pages, ecommerce stores, and AI-powered experiences that help businesses grow online.',
  email: 'ekanshprataps@gmail.com',
  phone: '+91 7068317379',
  address: 'Lucknow, UP India',
  social: {
    twitter: 'https://twitter.com/devarea',
    linkedin: 'https://linkedin.com/company/devarea',
    github: 'https://github.com/devarea',
    instagram: 'https://instagram.com/devarea',
  },
};

// Navigation structure
export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'UI/UX Design', href: '/services/uiux-design' },
    { label: 'Landing Pages', href: '/services/landing-pages' },
    { label: 'Ecommerce', href: '/services/ecommerce' },
    { label: 'SEO Websites', href: '/services/seo-websites' },
    { label: 'AI Chatbot Integration', href: '/services/ai-chatbot' },
    { label: 'Website Redesign', href: '/services/website-redesign' },
    { label: 'Maintenance', href: '/services/maintenance' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms & Conditions', href: '/legal/terms' },
    { label: 'Refund Policy', href: '/legal/refund' },
    { label: 'Cookie Policy', href: '/legal/cookies' },
    { label: 'Disclaimer', href: '/legal/disclaimer' },
  ],
};

// SEO Configuration
export const SEO = {
  baseUrl: 'https://devareyt.in',
  title: 'DevArea | Web Development, SEO & AI Automation Agency India',
  description: 'DevArea is a digital solutions agency in India building high-performance websites, landing pages, ecommerce stores, SEO foundations, and AI automations for growing businesses.',
  keywords: [
    'digital solutions agency India',
    'web development agency India',
    'web development agency Lucknow',
    'website redesign services',
    'conversion-focused landing pages',
    'AI automation agency',
    'AI chatbot integration',
    'Google Meta ChatGPT ads',
    'SEO website development',
    'ecommerce website development',
    'digital growth partner India',
  ],
};

// Service categories
export const SERVICES = [
  {
    id: 'web-development',
    title: 'Custom Web Development',
    description: 'Bespoke, high-performance websites built to your exact specifications.',
    icon: 'Code',
    href: '/services/web-development',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'uiux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, user-centered designs that drive engagement and conversions.',
    icon: 'Palette',
    href: '/services/uiux-design',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting landing pages optimized for maximum performance.',
    icon: 'Rocket',
    href: '/services/landing-pages',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Solutions',
    description: 'Full-featured ecommerce platforms that drive sales and growth.',
    icon: 'ShoppingCart',
    href: '/services/ecommerce',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 'seo-websites',
    title: 'SEO-Friendly Websites',
    description: 'Websites built for search visibility and organic traffic growth.',
    icon: 'TrendingUp',
    href: '/services/seo-websites',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot Integration',
    description: 'Intelligent chatbots that enhance customer experience and support.',
    icon: 'MessageSquare',
    href: '/services/ai-chatbot',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Modernize and optimize your existing online presence.',
    icon: 'RefreshCw',
    href: '/services/website-redesign',
    color: 'from-violet-500 to-purple-600',
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and optimization for peak performance.',
    icon: 'Wrench',
    href: '/services/maintenance',
    color: 'from-slate-500 to-gray-600',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    content: 'DevArea transformed our online presence completely. Our new website increased lead generation by 250% in the first three months.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStartup Inc.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
  },
  {
    id: 2,
    content: 'The team delivered a stunning ecommerce solution that felt intuitive from day one. Our conversion rate improved significantly.',
    author: 'Michael Chen',
    role: 'Founder, Digital Goods Co.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
  },
  {
    id: 3,
    content: 'Professional, thorough, and results-driven. They understood our vision and executed it flawlessly. Highly recommended!',
    author: 'Emily Rodriguez',
    role: 'Marketing Director, Brand Studio',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
  },
];

// Case studies
export const CASE_STUDIES = [
  {
    id: 1,
    title: 'TechStartup Inc. - Lead Generation Campaign',
    category: 'Web Development',
    challenge: 'Growing SaaS startup needed a modern website to establish credibility and generate B2B leads.',
    solution: 'Built a conversion-optimized website with integrated CRM, live chat, and automated email sequences.',
    results: [
      '250% increase in qualified leads',
      '45% conversion rate improvement',
      'Top 3 Google rankings for target keywords',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e11526ab?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Fashion Brand E-Commerce Launch',
    category: 'Ecommerce',
    challenge: 'High-fashion brand needed a seamless online shopping experience with inventory management.',
    solution: 'Developed custom ecommerce platform with Shopify integration, payment processing, and inventory sync.',
    results: [
      '120% revenue increase in 6 months',
      '89% average order value improvement',
      'Mobile-first design boosted mobile sales to 65%',
    ],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Consulting Firm Website Redesign',
    category: 'UI/UX Design',
    challenge: 'Legacy website was outdated and not mobile-friendly, hurting brand perception.',
    solution: 'Complete redesign with modern UI/UX, responsive design, case study showcase, and thought leadership blog.',
    results: [
      '180% increase in organic traffic',
      '3 minute average session duration',
      'Mobile traffic grew to 55% of total',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  },
];

// FAQ data
export const FAQ = [
  {
    id: 1,
    question: 'How long does a typical website project take?',
    answer: 'Most projects take 6-12 weeks depending on complexity, features, and content readiness. We follow an agile approach with regular check-ins to ensure we stay on track.',
  },
  {
    id: 2,
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes! We offer maintenance packages ranging from basic updates to comprehensive management. Most clients opt for ongoing support to ensure their site stays secure and performant.',
  },
  {
    id: 3,
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. We design mobile-first, ensuring perfect performance on all devices. Mobile optimization is crucial for user experience and SEO rankings.',
  },
  {
    id: 4,
    question: 'Can you help with SEO?',
    answer: 'Yes, we build SEO into every website from day one. Technical SEO, keyword optimization, structured data, and performance are all built in. We also offer SEO-specific service packages.',
  },
  {
    id: 5,
    question: 'What about content? Do you provide copywriting?',
    answer: 'We can work with your content or provide professional copywriting services. Our copy is conversion-focused and SEO-optimized.',
  },
  {
    id: 6,
    question: 'How much does a website cost?',
    answer: 'Pricing depends on scope, complexity, and features. Typical projects range from ₹18,000 to ₹2,50,000+. We provide a clear custom quote after understanding your requirements.',
  },
];

// Pricing packages
export const PRICING = [
  {
    id: 1,
    name: 'Starter',
    description: 'Perfect for small businesses getting online',
    price: 2999,
    period: 'one-time',
    features: [
      '5-page website',
      'Mobile responsive design',
      'SEO basics included',
      'Contact form',
      '3 months support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    id: 2,
    name: 'Professional',
    description: 'For growing businesses needing lead generation',
    price: 7999,
    period: 'one-time',
    features: [
      'Up to 15 pages',
      'Advanced UI/UX design',
      'SEO optimization',
      'Lead capture system',
      'Analytics setup',
      'CMS integration',
      '6 months support',
      'One revision round',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'Custom solutions for complex requirements',
    price: null,
    period: 'custom',
    features: [
      'Unlimited pages',
      'Custom integrations',
      'API development',
      'Advanced ecommerce',
      'AI features',
      'Dedicated account manager',
      'Ongoing optimization',
      'Unlimited support',
    ],
    cta: 'Contact for Quote',
    popular: false,
  },
];

// Blog categories
export const BLOG_CATEGORIES = [
  { id: 'design', name: 'Design', slug: 'design' },
  { id: 'development', name: 'Development', slug: 'development' },
  { id: 'seo', name: 'SEO', slug: 'seo' },
  { id: 'business', name: 'Business', slug: 'business' },
  { id: 'trends', name: 'Trends', slug: 'trends' },
];

// Sample blog posts
export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Why Mobile-First Website Design Matters for Business Growth',
    slug: 'mobile-first-design-business-growth',
    excerpt: 'In 2024, over 60% of web traffic comes from mobile devices. Learn why mobile-first design is no longer optional—it\'s essential.',
    content: `Mobile-first design is a critical component of modern web development. With the majority of users browsing on mobile devices, designing for mobile first ensures your website serves the majority of your audience optimally.

## The Mobile Revolution

Over the past decade, mobile usage has grown exponentially. Today, more than 60% of all web traffic originates from mobile devices. This shift has fundamentally changed how we approach web design.

### Key Benefits of Mobile-First Design

1. **Better User Experience**: Mobile-first design forces you to focus on essential content and functionality
2. **Improved SEO Rankings**: Google prioritizes mobile-friendly websites in search results
3. **Higher Conversion Rates**: Optimized mobile experiences lead to better engagement and conversions
4. **Future-Proof**: As devices evolve, mobile-first approach scales better

## Implementation Best Practices

- Start with mobile layouts
- Use responsive grids and flexible layouts
- Optimize images for mobile bandwidth
- Ensure touch-friendly interfaces
- Test on real devices

Mobile-first design isn't just about smaller screens—it's about smarter, more intentional design that works everywhere.`,
    author: 'Sarah Chen',
    category: 'design',
    publishedAt: new Date('2024-03-15'),
    image: 'https://images.unsplash.com/photo-1432888498266-38c75b13b2cd?w=800&h=400&fit=crop',
    readTime: 6,
  },
  {
    id: 2,
    title: 'How SEO-Friendly Web Development Improves Google Rankings',
    slug: 'seo-friendly-development-google-rankings',
    excerpt: 'Technical SEO matters. Discover how proper web development practices directly impact your search engine visibility.',
    content: `Technical SEO is the foundation of any successful search strategy. While content is important, the underlying code and structure of your website significantly impact rankings.

## Technical SEO Fundamentals

### Core Web Vitals
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

These metrics directly influence Google rankings.

### Key Technical Factors

1. **Site Speed**: Faster sites rank higher and convert better
2. **Mobile Optimization**: Mobile-first indexing is now standard
3. **Structured Data**: Schema markup helps search engines understand content
4. **Internal Linking**: Strategic linking helps distribute page authority
5. **XML Sitemaps**: Helps search engines crawl efficiently

## Implementation Strategy

- Optimize images and assets
- Use CDN for faster delivery
- Implement lazy loading
- Minimize CSS/JavaScript
- Use modern frameworks like Next.js

A well-developed website is a competitive advantage in search rankings.`,
    author: 'Marcus Williams',
    category: 'seo',
    publishedAt: new Date('2024-02-20'),
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e11526ab?w=800&h=400&fit=crop',
    readTime: 8,
  },
  {
    id: 3,
    title: 'Best Landing Page Design Practices for Lead Generation',
    slug: 'landing-page-design-lead-generation',
    excerpt: 'A well-designed landing page can increase conversions by 200%+. Here\'s what separates high-converting pages from underperformers.',
    content: `Landing pages are conversion machines when designed correctly. Here's what makes the difference between mediocre and exceptional performance.

## Landing Page Principles

### 1. Clear Value Proposition
Your headline should immediately communicate what you offer and why it matters. Don't be clever—be clear.

### 2. Visual Hierarchy
Guide users' eyes to the most important elements. Use size, color, and whitespace strategically.

### 3. Trust Signals
- Client logos
- Testimonials and reviews
- Trust badges
- Clear contact information

### 4. Compelling CTA
Your call-to-action should be obvious, compelling, and above the fold. Use action-oriented language.

### 5. Minimal Distractions
Remove navigation, extraneous links, and anything that takes focus away from the conversion goal.

## Conversion Optimization Checklist

- Mobile-responsive design
- Page load speed under 3 seconds
- Clear headline and subheadline
- High-quality images
- Strong CTA placement
- Minimal form fields
- Live chat or support option
- Social proof elements

## Testing and Optimization

A/B test your headlines, CTA colors, form fields, and layouts. Data-driven decisions lead to continuous improvement.

The best landing pages are never "done"—they're continuously optimized based on user behavior and performance data.`,
    author: 'Alex Turner',
    category: 'design',
    publishedAt: new Date('2024-01-28'),
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    readTime: 7,
  },
];
