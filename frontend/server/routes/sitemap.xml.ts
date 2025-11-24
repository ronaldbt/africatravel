export default defineEventHandler(async (event) => {
  const baseUrl = 'https://anasaviajes.com'
  
  const routes = [
    // Páginas principales
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/destinos', changefreq: 'weekly', priority: 0.9 },
    { url: '/experiencias', changefreq: 'weekly', priority: 0.9 },
    { url: '/tipo-viaje', changefreq: 'weekly', priority: 0.8 },
    { url: '/guia-viajero', changefreq: 'weekly', priority: 0.8 },
    { url: '/blog', changefreq: 'daily', priority: 0.8 },
    { url: '/contacto', changefreq: 'monthly', priority: 0.7 },
    { url: '/diseñador-ia', changefreq: 'weekly', priority: 0.8 },
    { url: '/sobre-nosotros', changefreq: 'monthly', priority: 0.6 },
    
    // Destinos (todas las páginas dinámicas funcionan)
    { url: '/destinos/sudafrica', changefreq: 'weekly', priority: 0.9 },
    { url: '/destinos/kenia', changefreq: 'weekly', priority: 0.9 },
    { url: '/destinos/tanzania', changefreq: 'weekly', priority: 0.9 },
    { url: '/destinos/botswana', changefreq: 'weekly', priority: 0.9 },
    { url: '/destinos/namibia', changefreq: 'weekly', priority: 0.9 },
    { url: '/destinos/ruanda', changefreq: 'weekly', priority: 0.9 },
    { url: '/destinos/madagascar', changefreq: 'weekly', priority: 0.9 },
    
    // Experiencias (todas implementadas)
    { url: '/experiencias/safari-lujo', changefreq: 'weekly', priority: 0.8 },
    { url: '/experiencias/gran-migracion', changefreq: 'weekly', priority: 0.8 },
    { url: '/experiencias/big-five', changefreq: 'weekly', priority: 0.8 },
    { url: '/experiencias/safari-fotografico', changefreq: 'weekly', priority: 0.8 },
    { url: '/experiencias/safari-romantico', changefreq: 'weekly', priority: 0.8 },
    { url: '/experiencias/safari-familiar', changefreq: 'weekly', priority: 0.8 },
    { url: '/experiencias/safari-aventura', changefreq: 'weekly', priority: 0.8 },
    { url: '/experiencias/trekking-gorilas', changefreq: 'weekly', priority: 0.8 },
    
    // Guías (artículos implementados)
    { url: '/guia-viajero/mejor-epoca-viajar', changefreq: 'monthly', priority: 0.7 },
    { url: '/guia-viajero/que-llevar-safari', changefreq: 'monthly', priority: 0.7 },
    { url: '/guia-viajero/visados-africa', changefreq: 'monthly', priority: 0.7 },
    
    // Tipos de viaje (paquetes implementados)
    { url: '/tipo-viaje/safari-7-dias', changefreq: 'weekly', priority: 0.7 },
    { url: '/tipo-viaje/safari-10-dias', changefreq: 'weekly', priority: 0.7 },
    { url: '/tipo-viaje/safari-14-dias', changefreq: 'weekly', priority: 0.7 },
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})


