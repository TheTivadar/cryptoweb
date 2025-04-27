// app/sitemap.ts
export default async function sitemap() {
    const baseUrl = 'https://alegex.hu';
    const languages = ['','/hu', '/en', '/de', '/fr', '/es', '/it'];
    const routes = ['', '/aitrading','/tecnology','/tiers','/profitability', '/aboutus', '/login'];
  
    const entries = [];
    
    for (const lang of languages) {
      for (const route of routes) {
        entries.push({
          url: `${baseUrl}${lang}${route}`,
          lastModified: new Date(),
          changeFrequency: route === '' ? 'weekly' : 'monthly',
          priority: route === '' ? 1 : 0.8,
          alternates: {
            languages: Object.fromEntries(
              languages.map(l => [l, `${baseUrl}${l}${route}`]))
          }
        });
      }
    }
  
    return entries;
  }