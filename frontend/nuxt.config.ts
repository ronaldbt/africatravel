// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      geminiApiKey: process.env.GEMINI_API_KEY || ''
    }
  },
  app: {
    head: {
      title: 'Anasa Viajes | Safari de Lujo en África | Expediciones Premium',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Descubre África con Anasa Viajes. Safaris de lujo personalizados, lodges exclusivos y experiencias únicas en Sudáfrica, Kenia, Tanzania y más. Diseñador de viajes con IA.' },
        { name: 'keywords', content: 'safari lujo áfrica, expediciones áfrica, viajes lujo áfrica, safari premium, safari sudafrica, safari kenia, safari tanzania, gran migración, big five áfrica' },
        { property: 'og:title', content: 'Anasa Viajes | Safari de Lujo en África' },
        { property: 'og:description', content: 'Safaris de lujo personalizados, lodges exclusivos y experiencias únicas en África' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Anasa Viajes | Safari de Lujo en África' },
        { name: 'twitter:description', content: 'Safaris de lujo personalizados, lodges exclusivos y experiencias únicas en África' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Anasa Viajes' },
        { name: 'language', content: 'es' },
        { name: 'geo.region', content: 'ES' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap' }
      ]
    }
  }
})