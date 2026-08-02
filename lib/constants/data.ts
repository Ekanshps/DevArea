export const SITE_CONFIG = {
  name: 'DevArea',
  description: 'Premium digital agency offering custom website development, responsive design, UI/UX, and digital solutions for growing businesses.',
  url: 'https://devarea.com',
  ogImage: 'https://devarea.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/devarea',
    linkedin: 'https://linkedin.com/company/devarea',
    instagram: 'https://instagram.com/devarea',
  },
}

export const SERVICES = [
  {
    id: 'web-development',
    slug: 'custom-website-development',
    title: 'Custom Website Development',
    shortDescription: 'Bespoke websites built to drive results',
    description: 'Fully custom, responsive websites tailored to your business goals. We build fast, scalable, and SEO-friendly websites from scratch.',
    icon: 'Code2',
    features: [
      'Custom React/Next.js Development',
      'Responsive Design',
      'Performance Optimization',
      'SEO Implementation',
      'Security Best Practices',
      'Ongoing Support',
    ],
    benefits: [
      'Higher conversion rates',
      'Faster loading speeds',
      'Better SEO rankings',
      'Mobile-first experience',
      'Scalability built-in',
      'Maintenance support',
    ],
  },
  {
    id: 'ui-ux',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    shortDescription: 'User-centered design that converts',
    description: 'Beautiful, intuitive interfaces designed with user psychology and conversion optimization in mind.',
    icon: 'Palette',
    features: [
      'User Research & Strategy',
      'Wireframing & Prototyping',
      'High-Fidelity Design',
      'Design Systems',
      'Accessibility Compliance',
      'Design Handoff',
    ],
    benefits: [
      'Improved user satisfaction',
      'Higher engagement',
      'Better conversion funnel',
      'Brand consistency',
      'Reduced bounce rate',
      'Better retention',
    ],
  },
  {
    id: 'landing-pages',
    slug: 'landing-page-design',
    title: 'Landing Page Design',
    shortDescription: 'High-converting landing pages',
    description: 'Strategic landing pages designed to capture leads and drive specific actions with persuasive copywriting and compelling design.',
    icon: 'Zap',
    features: [
      'Conversion Optimization',
      'A/B Testing Setup',
      'Persuasive Copy',
      'Clear CTAs',
      'Fast Loading',
      'Analytics Integration',
    ],
    benefits: [
      '3-5x higher conversion rates',
      'Lower cost per lead',
      'Better ROI on ads',
      'Increased sales',
      'Lead generation',
      'Scalable growth',
    ],
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-website-development',
    title: 'Ecommerce Development',
    shortDescription: 'Online stores built to sell',
    description: 'Fully functional ecommerce platforms with payment integration, inventory management, and conversion optimization built-in.',
    icon: 'ShoppingCart',
    features: [
      'Product Management',
      'Payment Gateway Integration',
      'Inventory Tracking',
      'Order Management',
      'Customer Analytics',
      'Upsell & Cross-sell',
    ],
    benefits: [
      'Increased online sales',
      'Better customer experience',
      'Automated operations',
      'Real-time analytics',
      'Mobile commerce ready',
      '24/7 sales channel',
    ],
  },
  {
    id: 'seo',
    slug: 'seo-friendly-website-development',
    title: 'SEO-Friendly Websites',
    shortDescription: 'Websites that rank on Google',
    description: 'Technical SEO, on-page optimization, and strategic content structure built into every website for better rankings.',
    icon: 'TrendingUp',
    features: [
      'Technical SEO Audit',
      'On-page Optimization',
      'Schema Markup',
      'Core Web Vitals',
      'Mobile Optimization',
      'Content Strategy',
    ],
    benefits: [
      'Organic traffic growth',
      'Higher rankings',
      'Lower acquisition cost',
      'Sustainable growth',
      'Long-term visibility',
      'Brand authority',
    ],
  },
  {
    id: 'ai-chatbot',
    slug: 'ai-chatbot-integration',
    title: 'AI Chatbot Integration',
    shortDescription: 'Smart conversational AI for support',
    description: 'AI-powered chatbots that engage visitors, answer questions, qualify leads, and improve customer support automatically.',
    icon: 'MessageSquare',
    features: [
      'Natural Language Processing',
      'Lead Qualification',
      'FAQ Automation',
      'Multi-language Support',
      'Analytics & Insights',
      'CRM Integration',
    ],
    benefits: [
      '24/7 customer support',
      'Lead qualification automation',
      'Reduced support costs',
      'Better customer experience',
      'Increased engagement',
      'Higher conversion rates',
    ],
  },
  {
    id: 'redesign',
    slug: 'website-redesign',
    title: 'Website Redesign',
    shortDescription: 'Modernize your online presence',
    description: 'Complete website redesigns that improve UX, update your brand, increase conversions, and boost SEO performance.',
    icon: 'RefreshCw',
    features: [
      'Current Audit',
      'Modern Design',
      'Better UX',
      'Performance Upgrade',
      'Mobile Optimization',
      'Migration Support',
    ],
    benefits: [
      'Modern brand perception',
      'Improved functionality',
      'Better conversions',
      'Faster performance',
      'Better rankings',
      'Improved security',
    ],
  },
  {
    id: 'maintenance',
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    shortDescription: 'Keep your site running smoothly',
    description: 'Ongoing maintenance, updates, security, and optimization to keep your website fast, secure, and performing optimally.',
    icon: 'Shield',
    features: [
      'Regular Updates',
      'Security Monitoring',
      'Performance Monitoring',
      'Backup Management',
      'Bug Fixes',
      '24/7 Support',
    ],
    benefits: [
      'Peace of mind',
      'Reduced downtime',
      'Better security',
      'Consistent performance',
      'Regular backups',
      'Expert support',
    ],
  },
]

export const SERVICES_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
)

export const CASE_STUDIES = [
  {
    id: 1,
    title: 'E-commerce Store Launch',
    client: 'Fashion Retail Brand',
    category: 'Ecommerce',
    overview: 'Designed and developed a modern ecommerce platform for a premium fashion brand',
    challenge:
      'Client needed a new online store to expand sales channels, with complex product filtering and international shipping',
    solution:
      'Built a custom Next.js ecommerce platform with Shopify integration, advanced filtering, multi-currency support, and optimized checkout',
    results: {
      traffic: '+240%',
      conversion: '+3.5x',
      revenue: '+$450K in first year',
      time: 'Launched in 8 weeks',
    },
    image: '/images/case-study-1.jpg',
    services: ['Ecommerce Development', 'UI/UX Design', 'SEO-Friendly Development'],
  },
  {
    id: 2,
    title: 'SaaS Landing Page Optimization',
    client: 'B2B SaaS Company',
    category: 'Landing Pages',
    overview: 'Redesigned landing pages that resulted in significant conversion improvements',
    challenge:
      'High traffic but low conversion rate (2.1%). Needed to improve messaging and design to increase signup rate',
    solution:
      'Conducted user research, redesigned copy, improved CTA placement, added trust signals, and optimized form fields',
    results: {
      traffic: 'Same',
      conversion: '+6.8% (3.2x improvement)',
      leads: '+145 leads per month',
      cost: '-$12/lead acquisition',
    },
    image: '/images/case-study-2.jpg',
    services: ['Landing Page Design', 'UI/UX Design', 'Conversion Optimization'],
  },
  {
    id: 3,
    title: 'Corporate Website Redesign',
    client: 'B2B Services Company',
    category: 'Website Redesign',
    overview: 'Complete website modernization that improved brand perception and lead generation',
    challenge:
      'Outdated website design, poor mobile experience, low search rankings, declining lead generation',
    solution:
      'Full redesign with mobile-first approach, modern design system, technical SEO implementation, and improved user flows',
    results: {
      organic: '+180% organic traffic',
      ranking: 'Top 3 for 12 target keywords',
      leads: '+320% lead generation',
      mobile: '95% mobile usability score',
    },
    image: '/images/case-study-3.jpg',
    services: ['Website Redesign', 'UI/UX Design', 'SEO-Friendly Development'],
  },
  {
    id: 4,
    title: 'AI Chatbot Implementation',
    client: 'Software Company',
    category: 'AI Integration',
    overview: 'Implemented AI chatbot for support and lead qualification',
    challenge:
      'High support volume, slow response times, many leads lost due to manual follow-up delays',
    solution:
      'Integrated advanced AI chatbot with intelligent lead qualification, FAQ automation, and CRM integration',
    results: {
      support: '-65% support tickets',
      leads: '+40% qualified leads',
      response: '24/7 instant support',
      satisfaction: '92% satisfaction',
    },
    image: '/images/case-study-4.jpg',
    services: ['AI Chatbot Integration', 'Custom Development'],
  },
]

export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  image: string;
  result: string;
  slug: string;
};

// ✏️ Naya project add karna ho to yahan object add karo
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: '1',
    title: 'TechStartup Website Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1499747292307-58a92ef88001?w=600&h=400&fit=crop',
    result: 'Increased conversion rate by 45% with modern, responsive design',
    slug: 'techstartup-redesign',
  },
  {
    id: '2',
    title: 'E-commerce Platform Optimization',
    category: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1516534775068-bb57ad6e9f65?w=600&h=400&fit=crop',
    result: 'Boosted online sales by 60% through UX improvements and checkout optimization',
    slug: 'ecommerce-optimization',
  },
  {
    id: '3',
    title: 'SaaS Dashboard UI Redesign',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    result: 'Improved user engagement by 35% with intuitive dashboard design',
    slug: 'saas-dashboard-ui',
  },
  {
    id: '4',
    title: 'Healthcare Portal Development',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop',
    result: 'HIPAA-compliant portal serving 10,000+ patients with secure data access',
    slug: 'healthcare-portal',
  },
  {
    id: '5',
    title: 'Fashion Brand SEO Campaign',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop',
    result: 'Ranked top 3 for 25+ high-volume keywords, organic traffic +220%',
    slug: 'fashion-seo-campaign',
  },
  {
    id: '6',
    title: 'Mobile App Landing Page',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda097df5a?w=600&h=400&fit=crop',
    result: 'Generated 5,000+ app downloads with conversion-optimized landing page',
    slug: 'mobile-app-landing',
  },
  {
    id: '7',
    title: 'B2B SaaS UI/UX Redesign',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    result: 'Reduced user onboarding time by 40%, improved user retention by 28%',
    slug: 'saas-ux-redesign',
  },
  {
    id: '8',
    title: 'Online Store Launch',
    category: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1488190211105-8342881b725d?w=600&h=400&fit=crop',
    result: 'Successfully launched e-commerce platform with $500K first-month revenue',
    slug: 'online-store-launch',
  },
  {
    id: '9',
    title: 'Corporate Website Redesign',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=600&h=400&fit=crop',
    result: 'Enhanced brand presence with modern design, improved lead generation by 55%',
    slug: 'corporate-redesign',
  },
  {
    id: '10',
    title: 'Local Business SEO Strategy',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    result: 'Achieved #1 local rankings, generated 200+ qualified leads monthly',
    slug: 'local-seo-strategy',
  },
  {
    id: '11',
    title: 'Fintech App Interface Design',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
    result: 'Designed intuitive financial interface used by 100K+ daily active users',
    slug: 'fintech-interface',
  },
  {
    id: '12',
    title: 'Subscription Box Website',
    category: 'Ecommerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
    result: 'Built subscription model, achieved 70% monthly recurring revenue growth',
    slug: 'subscription-box-website',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, Fashion & Co',
    image: '/images/testimonial-1.jpg',
    content:
      'DevArea transformed our online presence. Their design is not just beautiful—it actually sells. Our conversion rate improved by 240% in the first 3 months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, TechStart Inc',
    image: '/images/testimonial-2.jpg',
    content:
      "The team's expertise in both design and development is exceptional. They built us a platform that scales, performs beautifully, and actually ranks on Google.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GlobalBrand',
    image: '/images/testimonial-3.jpg',
    content:
      'Professional, responsive, and creative. DevArea delivered exactly what we needed and exceeded our expectations. Highly recommended.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Park',
    role: 'Owner, Local Services',
    image: '/images/testimonial-4.jpg',
    content:
      'We went from no online presence to ranking #1 for our local keywords. The SEO work was comprehensive and the results were incredible.',
    rating: 5,
  },
]

export const BLOG_CATEGORIES = [
  { id: 'web-design', name: 'Web Design', slug: 'web-design' },
  { id: 'web-development', name: 'Web Development', slug: 'web-development' },
  { id: 'seo', name: 'SEO', slug: 'seo' },
  { id: 'business', name: 'Business', slug: 'business' },
  { id: 'trends', name: 'Trends', slug: 'trends' },
]

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Why Mobile-First Website Design Matters for Business Growth',
    slug: 'mobile-first-website-design',
    excerpt:
      'Discover why mobile-first design is essential in 2026 and how it impacts your business growth and customer engagement.',
    content: `Mobile-first design is no longer optional—it's essential. With over 60% of web traffic coming from mobile devices, businesses that prioritize mobile experience are seeing dramatically better results.

## Why Mobile-First?

Mobile users are impatient. They expect fast loading times, intuitive navigation, and easy-to-tap buttons. If your website doesn't provide that experience, they leave—often to your competitors.

## Key Benefits

1. **Better User Experience**: Easier navigation, faster loading, better readability
2. **Improved SEO**: Google prioritizes mobile-friendly sites in rankings
3. **Higher Conversion Rates**: Users are more likely to complete actions on mobile-optimized sites
4. **Better Analytics**: Mobile-first design helps you understand user behavior better

## Best Practices

- Start with mobile layouts first
- Use larger tap targets (44x44px minimum)
- Optimize images for mobile
- Test on real devices
- Keep forms short and simple
- Use clear, readable typography

Mobile-first design isn't just about making things smaller—it's about creating an intentional, optimized experience for how people actually use the web today.`,
    author: 'Sarah DevArea',
    date: '2026-03-15',
    category: 'web-design',
    image: '/images/blog-1.jpg',
    readTime: 5,
    tags: ['Mobile Design', 'UX', 'Best Practices'],
  },
  {
    id: 2,
    title: 'How SEO-Friendly Web Development Improves Google Rankings',
    slug: 'seo-friendly-web-development',
    excerpt:
      'Learn how technical SEO and proper web development practices can dramatically improve your Google search rankings.',
    content: `SEO isn't just about keywords—it's about building websites the right way from the start. Technical SEO implementation during development phase can make the difference between ranking and getting buried on page 5.

## The Foundation: Technical SEO

Technical SEO ensures search engines can properly crawl, index, and understand your website. This includes:
- Clean URL structure
- Fast page load times (Core Web Vitals)
- Mobile responsiveness
- Proper use of heading hierarchy
- Schema markup

## On-Page Optimization

Every page should have:
- Unique, keyword-rich title tags
- Compelling meta descriptions
- Proper heading structure (H1, H2, H3)
- Internal links to relevant pages
- Optimized images with alt text

## Performance = Rankings

Google's Core Web Vitals (LCP, FID, CLS) are ranking factors. Websites that load fast and provide smooth interactions rank higher. This means:
- Image optimization
- Code splitting
- Lazy loading
- Efficient CSS and JavaScript

## Results

Businesses that implement proper SEO-friendly web development see:
- 50-150% increase in organic traffic
- Top 3 rankings for target keywords
- Sustainable, long-term growth

The best part? This traffic is free and keeps coming month after month.`,
    author: 'Mike Chen',
    date: '2026-03-10',
    category: 'seo',
    image: '/images/blog-2.jpg',
    readTime: 7,
    tags: ['SEO', 'Web Development', 'Google Rankings'],
  },
  {
    id: 3,
    title: 'Best Landing Page Design Practices for Lead Generation',
    slug: 'landing-page-design-practices',
    excerpt:
      'The secrets behind high-converting landing pages. Learn the design patterns that turn visitors into leads.',
    content: `A great landing page is a conversion machine. Whether you're running ads or organic campaigns, a well-designed landing page can mean the difference between breaking even and scaling profitably.

## The 7 Elements of High-Converting Landing Pages

### 1. Clear Value Proposition
Your headline should immediately communicate what you offer and why it matters. No confusion.

### 2. Compelling Headlines
- Lead with benefits, not features
- Use power words
- Create urgency or curiosity
- Test different angles

### 3. Social Proof
- Customer testimonials
- Results/metrics
- Client logos
- Trust badges
- Video testimonials

### 4. Clear CTA
- Use action-oriented language
- Make buttons obvious and easy to click
- Reduce form fields (more fields = lower conversion)
- Create urgency

### 5. Focused Copy
- One primary goal per page
- Remove navigation (no distractions)
- Benefit-driven messaging
- Break up text with visuals

### 6. Visual Hierarchy
- Most important elements largest
- Use color strategically
- White space is your friend
- Scannable layout

### 7. Mobile Optimization
- Mobile-first design
- Fast loading
- Thumb-zone friendly buttons
- Large, readable text

## A/B Testing

The best landing pages are built through testing:
- Test headlines
- Test CTAs
- Test copy length
- Test form fields
- Test colors and layouts

Even small improvements compound. A 1% increase in conversion rate can mean thousands in additional revenue.

## Expected Results

Well-designed landing pages typically see:
- 3-5x higher conversion rates than generic pages
- Lower cost per lead
- Higher quality leads
- Better ROI on ad spend`,
    author: 'Sarah DevArea',
    date: '2026-03-05',
    category: 'web-design',
    image: '/images/blog-3.jpg',
    readTime: 8,
    tags: ['Landing Pages', 'Conversion', 'Design'],
  },
  {
    id: 4,
    title: 'Why Every Business Needs an AI Chatbot on Its Website',
    slug: 'ai-chatbot-business-benefits',
    excerpt:
      'Discover how AI chatbots can improve customer support, qualify leads, and increase conversions 24/7.',
    content: `AI chatbots are no longer a luxury—they're becoming essential infrastructure for competitive businesses. Here's why.

## The Current Customer Expectation

Modern customers expect instant responses. They don't want to wait 24 hours for an email reply. If you can't help them immediately, they'll go to a competitor who can.

## What AI Chatbots Do

Modern AI chatbots can:
- Answer FAQ instantly
- Qualify leads automatically
- Schedule appointments
- Collect customer information
- Provide product recommendations
- Escalate to humans when needed
- Support multiple languages

## Real Business Benefits

### 24/7 Availability
Answer customer questions anytime, even outside business hours. Never miss a lead.

### Reduce Support Costs
Automate 60-80% of support inquiries. Free up your team for complex issues.

### Better Lead Qualification
The chatbot asks qualifying questions and passes ready-to-buy leads to your sales team.

### Improved Conversion Rates
Studies show websites with chatbots see 5-10% increase in conversions.

### Better Customer Data
Collect insights about customer needs and common questions without asking.

## Implementation

Modern AI chatbots are:
- Easy to implement (plug and play)
- Affordable (starts at $50-100/month)
- No coding required
- Can be trained on your content

## The Future

AI chatbots will become as common as contact forms. The businesses getting ahead now will have a competitive advantage tomorrow.`,
    author: 'Alex Kumar',
    date: '2026-02-28',
    category: 'business',
    image: '/images/blog-4.jpg',
    readTime: 6,
    tags: ['AI', 'Chatbots', 'Automation'],
  },
  {
    id: 5,
    title: 'Ecommerce Website Features That Actually Increase Conversions',
    slug: 'ecommerce-conversion-features',
    excerpt:
      'The must-have features and design patterns that turn ecommerce browsers into buyers.',
    content: `Not all ecommerce websites are created equal. The difference between an average store and a high-performing one comes down to thoughtful feature implementation and design.

## Essential Ecommerce Features

### 1. Advanced Product Filtering
Let customers find what they want quickly. Include:
- Category filtering
- Price range
- Brand filtering
- Customer ratings
- Product attributes (size, color, etc.)

### 2. High-Quality Product Images
- Multiple angles
- Zoom functionality
- 360° views for important products
- Video demonstrations

### 3. Clear Product Information
- Detailed descriptions
- Specifications
- Materials/dimensions
- Shipping information
- Return policy

### 4. Customer Reviews
- Show real customer feedback
- Include photos
- Display star ratings
- New reviews first

### 5. Simplified Checkout
- Few form fields
- Guest checkout option
- Multiple payment methods
- Progress indicator
- Security badges

### 6. Trust Signals
- SSL certificate
- Customer testimonials
- Money-back guarantee
- Live chat support
- Return policy clarity

### 7. Personalization
- Recommended products
- Recently viewed items
- Personalized emails
- Loyalty rewards
- Early access sales

### 8. Performance
- Fast loading (critical!)
- Mobile optimization
- Smooth interactions
- No lag on product interactions

## Conversion Rate Optimization

Focus on these areas for immediate impact:
- Product page clarity
- Checkout friction
- Mobile experience
- Page speed
- Product recommendations

## Expected Results

Properly optimized ecommerce sites see:
- 2-5x higher conversion rates
- 30-50% reduction in cart abandonment
- Higher average order value
- Increased customer lifetime value

The investments in these features pay for themselves many times over.`,
    author: 'Emma Tech',
    date: '2026-02-20',
    category: 'business',
    image: '/images/blog-5.jpg',
    readTime: 7,
    tags: ['Ecommerce', 'UX', 'Conversion'],
  },
]

export const BLOG_POSTS_BY_SLUG = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post])
)

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$2,500',
    description: 'Perfect for small businesses getting online',
    features: [
      '5-8 page website',
      'Mobile responsive',
      'Basic SEO setup',
      'Contact form',
      'Social media links',
      '30 days of support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$5,500',
    description: 'For businesses ready to scale',
    features: [
      '10-15 page website',
      'Advanced SEO implementation',
      'Blog setup',
      'E-commerce ready',
      'Advanced analytics',
      'CMS for updates',
      '90 days of support',
      'Monthly optimization',
    ],
    cta: 'Start Growing',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale projects',
    features: [
      'Unlimited pages',
      'Custom development',
      'API integrations',
      'Advanced performance',
      'Security audit',
      'Dedicated account manager',
      'Priority support',
      'Monthly strategy sessions',
    ],
    cta: 'Contact Us',
    highlighted: false,
  },
]

export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'How long does a website project take?',
    answer:
      'Timeline depends on scope and complexity. A starter website typically takes 4-6 weeks. Growth websites take 8-12 weeks. Enterprise projects vary based on requirements. We provide a detailed timeline during the discovery phase.',
  },
  {
    id: 2,
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes! We offer flexible maintenance packages starting at $299/month. This includes security updates, performance optimization, backups, and technical support. Most clients find this invaluable for long-term success.',
  },
  {
    id: 3,
    question: 'Will my website be mobile-friendly?',
    answer:
      'Absolutely. Every website we build is designed mobile-first. We test on all devices and screen sizes to ensure perfect responsive design from mobile phones to large desktops.',
  },
  {
    id: 4,
    question: 'How does SEO work in your websites?',
    answer:
      'We implement technical SEO from day one. This includes proper site structure, fast loading times, mobile optimization, schema markup, and semantic HTML. We also guide content strategy for long-term organic growth.',
  },
  {
    id: 5,
    question: 'Can you redesign my existing website?',
    answer:
      'Yes, we specialize in website redesigns. We audit your current site, keep what works, modernize the design, improve UX, and boost performance. We handle migration carefully to preserve SEO.',
  },
  {
    id: 6,
    question: 'Do you offer ecommerce solutions?',
    answer:
      'Yes, we build full-featured ecommerce platforms. We can integrate Shopify, WooCommerce, or build custom solutions with payment gateways, inventory management, and advanced features.',
  },
  {
    id: 7,
    question: 'What about AI chatbots?',
    answer:
      'We integrate advanced AI chatbots that can handle FAQ, lead qualification, appointment scheduling, and more. Setup is quick and they work 24/7 to support your customers.',
  },
  {
    id: 8,
    question: 'How much does a website cost?',
    answer:
      'Websites range from $2,500 for starter sites to $50,000+ for enterprise projects. Most businesses spend $5,500-$15,000 for a solid, conversion-focused website. We offer flexible payment plans.',
  },
  {
    id: 9,
    question: 'Will you help with content?',
    answer:
      'We can provide copywriting, help with messaging strategy, and guide your content planning. For full content creation, we can recommend experienced copywriters or handle it as an add-on service.',
  },
  {
    id: 10,
    question: 'How do you handle revisions?',
    answer:
      'Revisions are included in the agreed project scope. We work collaboratively and refine until you\'re satisfied. We typically do 2-3 revision rounds per major milestone.',
  },
]

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery & Strategy',
    description: 'We understand your business, goals, target audience, and competition.',
    details: [
      'Business goals alignment',
      'Competitor analysis',
      'Audience research',
      'Strategy session',
    ],
  },
  {
    step: 2,
    title: 'Planning & Design',
    description: 'Create a roadmap and design the optimal user experience.',
    details: [
      'Wireframing',
      'User flow design',
      'Visual design',
      'Design system setup',
    ],
  },
  {
    step: 3,
    title: 'Development',
    description: 'Build your website with performance and SEO in mind.',
    details: [
      'Code architecture',
      'Frontend development',
      'Backend integration',
      'Testing & QA',
    ],
  },
  {
    step: 4,
    title: 'Launch & Optimize',
    description: 'Deploy, monitor, and continuously improve performance.',
    details: [
      'Deployment',
      'Performance tuning',
      'Analytics setup',
      'Ongoing monitoring',
    ],
  },
]

export const INDUSTRIES_SERVED = [
  {
    name: 'Ecommerce & Retail',
    description: 'High-converting stores that sell 24/7',
    icon: 'ShoppingCart',
  },
  {
    name: 'SaaS & Software',
    description: 'Converting freemium users to paying customers',
    icon: 'Zap',
  },
  {
    name: 'Professional Services',
    description: 'Lead generation for agencies and consultants',
    icon: 'Briefcase',
  },
  {
    name: 'Coaches & Consultants',
    description: 'Building authority and attracting premium clients',
    icon: 'Users',
  },
  {
    name: 'Local Businesses',
    description: 'Local SEO and Google visibility',
    icon: 'MapPin',
  },
  {
    name: 'Startups',
    description: 'Launching with impact and credibility',
    icon: 'Rocket',
  },
]
