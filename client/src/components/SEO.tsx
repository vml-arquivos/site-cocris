import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'organization';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: object;
}

export default function SEO({
  title = 'COCRIS - Associação Beneficente Coração de Cristo',
  description = 'Organização sem fins lucrativos dedicada à educação infantil de excelência. Administramos 6 unidades de educação infantil no Distrito Federal, transformando vidas através do acolhimento e aprendizagem.',
  keywords = 'COCRIS, educação infantil, creche, CEPI, Recanto das Emas, Brazlândia, educação, crianças, vulnerabilidade social, ONG, doações',
  image = '/images/children-learning.webp',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  schema,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'COCRIS', true);
    updateMetaTag('og:locale', 'pt_BR', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'COCRIS - Associação Beneficente Coração de Cristo');
    updateMetaTag('language', 'Portuguese');
    updateMetaTag('revisit-after', '7 days');

    // Article specific tags
    if (type === 'article') {
      if (author) updateMetaTag('article:author', author, true);
      if (publishedTime) updateMetaTag('article:published_time', publishedTime, true);
      if (modifiedTime) updateMetaTag('article:modified_time', modifiedTime, true);
    }

    // Schema.org JSON-LD
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      
      schemaScript.textContent = JSON.stringify(schema);
    }

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, schema]);

  return null;
}

// Schema.org helpers
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Associação Beneficente Coração de Cristo - COCRIS',
  alternateName: 'COCRIS',
  url: 'https://cocris.org',
  logo: 'https://cocris.org/wp-content/uploads/2021/03/logo-cocris.png',
  description: 'Organização sem fins lucrativos dedicada à educação infantil e assistência social no Distrito Federal.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avenida Recanto das Emas, Quadra 301, Lote 26',
    addressLocality: 'Brasília',
    addressRegion: 'DF',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-61-3575-4125',
    contactType: 'customer service',
    email: 'contato@cocris.org',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.facebook.com/cocris',
    'https://www.instagram.com/cocris',
  ],
};

export const createArticleSchema = (
  title: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  author: string = 'COCRIS'
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: dateModified,
  author: {
    '@type': 'Organization',
    name: author,
  },
  publisher: {
    '@type': 'Organization',
    name: 'COCRIS',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cocris.org/wp-content/uploads/2021/03/logo-cocris.png',
    },
  },
});
