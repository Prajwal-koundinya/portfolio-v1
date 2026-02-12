import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/Prajwal-koundinya',
    },
    publisher: {
      '@type': 'Person',
      name: 'Prajwal Koundinya',
      url: 'https://eindev.ir',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PKCODE',
    description: "A digital workshop where code meets curiosity. Experiments, prototypes, and open-source artifacts by Prajwal Koundinya.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Prajwal Koundinya',
      url: 'https://github.com/Prajwal-koundinya',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Prajwal Koundinya',
    url: 'https://eindev.ir',
    image: 'https://eindev.ir/developer-portrait.png',
    sameAs: [
      'https://github.com/Prajwal-koundinya',
      'https://x.com/Prajwal_K_714',
      'https://www.linkedin.com/in/prajwal-kowndinya-7506b4268/',
    ],
    jobTitle: 'Software Engineering Student',
    worksFor: {
      '@type': 'Organization',
      name: 'PKCODE',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
