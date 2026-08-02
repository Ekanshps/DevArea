import { SITE_CONFIG } from '@/lib/constants/data'

export const generateMetadata = (props: {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
}) => {
  return {
    title: props.title,
    description: props.description,
    canonical: props.canonicalUrl || SITE_CONFIG.url,
    openGraph: {
      title: props.title,
      description: props.description,
      url: props.canonicalUrl || SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: props.ogImage || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: props.title,
      description: props.description,
      images: [props.ogImage || SITE_CONFIG.ogImage],
    },
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  logo: `${SITE_CONFIG.url}/logo.svg`,
  sameAs: Object.values(SITE_CONFIG.links),
  contact: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'ekanshprataps@gmail.com',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: '+91 7068317379',
  email: 'ekanshprataps@gmail.com',
  areaServed: ['IN'],
}

export const faqSchema = (items: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const serviceSchema = (service: {
  title: string
  description: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  url: service.url,
  provider: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
})

export const blogSchema = (post: {
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: post.image,
  datePublished: post.date,
  author: {
    '@type': 'Person',
    name: post.author,
  },
  mainEntity: {
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
  },
})
