import { getDb } from './db';
import { units, blogPosts } from '../drizzle/schema';
import { eq, sql } from 'drizzle-orm';

export async function generateSitemap(): Promise<string> {
  const db = await getDb();
  if (!db) throw new Error('Database connection failed');
  
  const baseUrl = 'https://cocris.org';
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: '/quem-somos', changefreq: 'monthly', priority: '0.8' },
    { url: '/unidades', changefreq: 'weekly', priority: '0.9' },
    { url: '/projetos', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog', changefreq: 'daily', priority: '0.8' },
    { url: '/doacoes', changefreq: 'monthly', priority: '0.9' },
    { url: '/transparencia', changefreq: 'weekly', priority: '0.8' },
    { url: '/compliance', changefreq: 'monthly', priority: '0.7' },
    { url: '/contato', changefreq: 'monthly', priority: '0.7' },
  ];

  // Get dynamic units
  const allUnits = await db.select().from(units).execute();
  
  // Get published blog posts
  const publishedPosts = await db
    .select()
    .from(blogPosts)
    .where(eq(blogPosts.published, true))
    .execute();

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add unit pages
  allUnits.forEach((unit: any) => {
    const slug = unit.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    sitemap += `  <url>
    <loc>${baseUrl}/unidades/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  // Add blog posts
  publishedPosts.forEach((post: any) => {
    sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.updatedAt ? post.updatedAt.toISOString().split('T')[0] : currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}
