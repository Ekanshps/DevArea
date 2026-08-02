// SEO Schema generation utilities
import { BRAND, SEO } from './constants';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: SEO.baseUrl,
    logo: `${SEO.baseUrl}/logo.png`,
    description: BRAND.description,
    sameAs: [
      BRAND.social.twitter,
      BRAND.social.linkedin,
      BRAND.social.github,
      BRAND.social.instagram,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phone,
      contactType: 'Customer Service',
      email: BRAND.email,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND.address,
        addressCountry: 'IN',
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.name,
    image: `${SEO.baseUrl}/logo.png`,
    description: BRAND.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND.address,
        addressCountry: 'IN',
    },
    telephone: BRAND.phone,
    email: BRAND.email,
    url: SEO.baseUrl,
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  image?: string;
  content: string;
  author: string;
  publishedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image || `${SEO.baseUrl}/og-image.png`,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishedAt,
    description: post.content.substring(0, 160),
  };
}

export function generateServiceSchema(service: {
  name?: string;
  title?: string;
  description: string;
  url?: string;
  href?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name || service.title || 'Service',
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: BRAND.name,
      url: SEO.baseUrl,
    },
    url: service.url || service.href || SEO.baseUrl,
      areaServed: 'IN',
  };
}
