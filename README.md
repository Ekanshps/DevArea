# DevArea

DevArea is my attempt to turn a practical freelance skill into a meaningful digital company. I am Ekansh Pratap Singh, Founder and Leader of DevArea. I started by helping businesses with websites and digital work, and I am building DevArea to become a trusted long-term partner for businesses that want to grow online with clarity.

This website is the first public expression of that vision. It presents our web development, UI/UX design, landing pages, ecommerce, SEO websites, AI chatbot integration, website redesign, and maintenance services.

Production website: https://devareyt.in

## Founder Note

I believe a website should do more than look modern. It should explain the business clearly, earn trust, make the next action simple, and give the owner a foundation they can keep building on.

DevArea is being built with that belief. The goal is to combine thoughtful design, reliable engineering, and honest communication in one place. Gaurav Tiwari, our Lead Member and Co-founder, brings technical thinking and hands-on execution to help turn this direction into dependable work.

## Vision

My vision is to build DevArea into a respected digital solutions startup from India that helps ambitious businesses compete with confidence online. I want the company to be known for clear thinking, quality execution, and support that continues after launch.

## Mission

Our mission is to make professional digital work more accessible, useful, and outcome-focused for growing businesses. We start with the real business problem, build only what creates value, and measure progress through clarity, performance, and practical results.

## The Journey

DevArea is growing from a freelancer-led beginning into a startup with a stronger system, a capable team, and a bigger purpose. Freelancing taught me to stay close to the client, understand the real need behind a request, take responsibility for the result, and keep improving through every project.

The next stage is to build a sustainable company around those lessons: a focused team, repeatable processes, strong client relationships, and digital products that create lasting value instead of one-off delivery.

## Highlights

- Responsive App Router website for desktop, tablet, and mobile
- Animated page transitions and viewport-based content reveals
- Service pages with deliverables, project timelines, INR pricing ranges, process steps, FAQs, and CTAs
- About page with team profiles, trust badges, proof points, and process timeline
- Homepage testimonials and FAQ section with FAQ structured data
- Portfolio with category filters and admin-only project management flow
- SEO metadata, canonical URL, Open Graph, Twitter metadata, sitemap, robots.txt, and favicon assets
- Global loading skeleton, error recovery page, custom 404 page, and keyboard focus states
- Optimized production builds with Next.js image optimization and lazy-loaded portfolio images

## Technology

- Next.js 16.3.5
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Icons
- ESLint 9

## Requirements

- Node.js 20 or newer recommended
- npm 10 or newer recommended
- Git

## Local Setup

From the project directory:

```bash
cd devarea
npm install
npm run dev
```

Open http://localhost:3000 in a browser.

The development server supports hot reload. Stop it with `Ctrl+C`.

## Available Commands

```bash
npm run dev       # Start the development server
npm run lint      # Run ESLint
npm run build     # Create the optimized production build
npm run start     # Serve the production build locally
```

Before deployment, run:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Environment Variables

Create a `.env.local` file for local development when using the portfolio admin API:

```env
ADMIN_SECRET=replace-with-a-long-random-secret
```

`ADMIN_SECRET` is used by the portfolio POST and DELETE endpoints. Never commit `.env.local` or expose this value in client-side code.

## Project Structure

```text
app/
  about/                 About page
  api/portfolio/         Portfolio GET, POST, and DELETE API
  blog/                  Blog listing and dynamic article pages
  contact/               Contact page and enquiry form
  faq/                   Full FAQ page
  legal/                 Legal policy pages
  portfolio/             Portfolio and admin interface
  pricing/               Pricing page
  services/              Services index and service detail routes
  error.tsx              Global route error state
  loading.tsx            Global loading skeleton
  not-found.tsx          Custom 404 page
  layout.tsx             Root metadata, navigation, footer, and global providers
  page.tsx               Homepage
components/
  layout/                Navbar, footer, transitions
  sections/              Homepage, service, FAQ, portfolio, and CTA sections
  ui/                    Reusable interface components
lib/
  constants.ts           Brand, navigation, SEO, FAQ, pricing, and content data
  schema.ts              Structured data helpers
  whatsapp.ts            WhatsApp number, flows, and link generation
public/
  favicon/               Favicon, manifest, and app icons
  images/                Website and team images
```

## Content Updates

Most marketing content is stored in `lib/constants.ts` and in the relevant route component.

### Brand and SEO

Update these values in `lib/constants.ts`:

- `BRAND.name`
- `BRAND.email`
- `BRAND.phone`
- `BRAND.address`
- `BRAND.social`
- `SEO.baseUrl`
- `SEO.title`
- `SEO.description`
- `SEO.keywords`

The root metadata in `app/layout.tsx` uses these values for page defaults, canonical metadata, Open Graph, Twitter cards, and robots directives.

### Services

Service detail content is controlled by the `details` object in `components/sections/ServiceDetailPage.tsx`. Each service includes:

- Intro and positioning text
- Deliverables
- Typical timeline
- INR pricing range
- Four process steps
- Frequently asked questions

Update pricing only after reviewing scope, delivery capacity, integrations, and support requirements.

### Team and Images

Team images are stored in `public/images/` and referenced by the About page. Replace the image files or update the paths in `app/about/page.tsx` when team information changes.

## Portfolio Admin API

The public portfolio page reads projects from `/api/portfolio`.

### Read projects

```http
GET /api/portfolio
```

### Add a project

Send all required fields with the admin secret:

```http
POST /api/portfolio
Content-Type: application/json
x-admin-secret: your-secret

{
  "title": "Project title",
  "category": "Web Development",
  "image": "https://example.com/project.jpg",
  "result": "Short measurable result",
  "slug": "project-title"
}
```

### Delete a project

```http
DELETE /api/portfolio
Content-Type: application/json
x-admin-secret: your-secret

{
  "id": "project-id"
}
```

The portfolio admin interface is available by opening `/portfolio?admin=true`. The API still validates the secret server-side.

### Storage note

Projects are currently stored in `data/portfolio-projects.json`. This works in a persistent Node.js environment. On serverless platforms, local filesystem writes may not persist between deployments or function instances. For production portfolio administration, migrate this storage to a database or managed content service before relying on live writes.

## SEO and Indexing

Generated endpoints:

- https://devareyt.in/robots.txt
- https://devareyt.in/sitemap.xml
- https://devareyt.in/favicon/favicon.svg

The sitemap includes static routes and blog article routes. Service pages receive higher priority because they represent the main commercial search intent.

After deployment:

1. Verify the live sitemap and robots URLs return HTTP 200.
2. Add the sitemap in Google Search Console.
3. Verify the domain property for `devareyt.in`.
4. Request indexing for the homepage and important service pages.
5. Review titles, descriptions, canonical URLs, and Open Graph previews.

SEO improves discoverability but rankings cannot be guaranteed. Results depend on content quality, competition, technical health, links, local relevance, and ongoing publishing.

## Deployment

The app can be deployed to a Node.js-compatible host or a managed Next.js platform.

### Generic Node deployment

```bash
npm ci
npm run lint
npm run build
npm run start
```

Set `ADMIN_SECRET` in the hosting provider's environment settings. Do not upload `.env.local` to the server or commit secrets to Git.

### Deployment checklist

- [ ] Configure `ADMIN_SECRET`
- [ ] Confirm the domain points to the hosting provider
- [ ] Confirm HTTPS is enabled
- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Verify homepage and all service routes
- [ ] Verify `/robots.txt` and `/sitemap.xml`
- [ ] Verify favicon and Open Graph image
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Test contact form delivery
- [ ] Test WhatsApp links on desktop and mobile
- [ ] Confirm portfolio storage is suitable for the hosting platform

## Accessibility

The interface includes semantic headings, image alt text, labelled interactive controls, animated accordion state announcements, and visible `focus-visible` outlines. New components should preserve these patterns.

When adding images:

- Use descriptive alt text for meaningful images.
- Use empty alt text only for purely decorative images.
- Prefer `next/image` for local or configured remote images.
- Check contrast in both default and hover states.

## Troubleshooting

### `npm` cannot find `package.json`

Run commands from `E:\DevMaster\devarea`, not its parent directory:

```powershell
Push-Location devarea
npm run build
Pop-Location
```

### Build fails on an icon import

Check the installed package exports. Some brand names are not provided by `lucide-react`; use `react-icons` for social-brand marks.

### Portfolio changes disappear after deployment

The current API writes to a local JSON file. Use persistent storage such as a database or CMS for production hosting that does not guarantee filesystem persistence.

### Metadata changes are not visible in search

Inspect the generated HTML and live metadata, then request re-indexing in Google Search Console. Search engines may take time to refresh snippets.

## License and Ownership

This is a private project for DevArea. Do not publish credentials, private client material, or deployment secrets in the repository.
