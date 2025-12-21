import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const baseUrl = 'https://anasaviajes.com'
const currentDate = new Date().toISOString().split('T')[0]

const routes = [
  // Páginas principales
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: currentDate },
  { url: '/destinos', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/experiencias', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/tipo-viaje', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/guia-viajero', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/blog', changefreq: 'daily', priority: 0.8, lastmod: currentDate },
  { url: '/contacto', changefreq: 'monthly', priority: 0.7, lastmod: currentDate },
  { url: '/diseñador-ia', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/sobre-nosotros', changefreq: 'monthly', priority: 0.6, lastmod: currentDate },
  
  // Destinos
  { url: '/destinos/sudafrica', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/destinos/kenia', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/destinos/tanzania', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/destinos/botswana', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/destinos/namibia', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/destinos/ruanda', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/destinos/madagascar', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  
  // Experiencias
  { url: '/experiencias/safari-lujo', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/experiencias/gran-migracion', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/experiencias/big-five', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/experiencias/safari-fotografico', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/experiencias/safari-romantico', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/experiencias/safari-familiar', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/experiencias/safari-aventura', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/experiencias/trekking-gorilas', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  
  // Guías
  { url: '/guia-viajero/mejor-epoca-viajar', changefreq: 'monthly', priority: 0.7, lastmod: currentDate },
  { url: '/guia-viajero/que-llevar-safari', changefreq: 'monthly', priority: 0.7, lastmod: currentDate },
  { url: '/guia-viajero/visados-africa', changefreq: 'monthly', priority: 0.7, lastmod: currentDate },
  
  // Tipos de viaje
  { url: '/tipo-viaje/safari-7-dias', changefreq: 'weekly', priority: 0.7, lastmod: currentDate },
  { url: '/tipo-viaje/safari-10-dias', changefreq: 'weekly', priority: 0.7, lastmod: currentDate },
  { url: '/tipo-viaje/safari-14-dias', changefreq: 'weekly', priority: 0.7, lastmod: currentDate },
  
  // Versiones en inglés (hreflang)
  { url: '/en', changefreq: 'daily', priority: 1.0, lastmod: currentDate },
  { url: '/en/destinos', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/en/experiencias', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
  { url: '/en/tipo-viaje', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/en/guia-viajero', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/en/blog', changefreq: 'daily', priority: 0.8, lastmod: currentDate },
  { url: '/en/contacto', changefreq: 'monthly', priority: 0.7, lastmod: currentDate },
  { url: '/en/diseñador-ia', changefreq: 'weekly', priority: 0.8, lastmod: currentDate },
  { url: '/en/sobre-nosotros', changefreq: 'monthly', priority: 0.6, lastmod: currentDate },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(route => {
  const alternateLinks = route.url.startsWith('/en/') 
    ? `<xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.url}" />
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${route.url.replace('/en', '')}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.url.replace('/en', '')}" />`
    : `<xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${route.url}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.url}" />`
  
  return `  <url>
    <loc>${baseUrl}${route.url}</loc>
    ${alternateLinks}
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
}).join('\n')}
</urlset>`

// Escribir en public/ para desarrollo
const publicPath = join(process.cwd(), 'public', 'sitemap.xml')
writeFileSync(publicPath, sitemap, 'utf-8')
console.log(`✅ Sitemap generado en ${publicPath}`)

// También escribir en .output/public si existe (para build)
const outputPath = join(process.cwd(), '.output', 'public', 'sitemap.xml')
const outputDir = join(process.cwd(), '.output', 'public')
if (existsSync(outputDir)) {
  writeFileSync(outputPath, sitemap, 'utf-8')
  console.log(`✅ Sitemap también copiado a ${outputPath}`)
}

