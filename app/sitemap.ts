import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://nongthile.vercel.app';
  const languages = ['en', 'vn', 'jp'];
  
  return languages.map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: lang === 'en' ? 1 : 0.8,
  }));
}
