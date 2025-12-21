// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxt/image'],
  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.json',
        name: 'Español'
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        name: 'English'
      }
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'es',
    strategy: 'prefix_except_default', // /es/ (default), /en/
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
          passes: 2
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'nuxt-vendor': ['@nuxt/kit']
          },
          chunkFileNames: '_nuxt/js/[name]-[hash].js',
          entryFileNames: '_nuxt/js/[name]-[hash].js',
          assetFileNames: '_nuxt/assets/[name]-[hash].[ext]'
        }
      }
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      ignore: ['/guia-viajero/vacunas-africa', '/guia-viajero/seguridad-africa', '/guia-viajero/presupuesto-safari']
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true
    },
    minify: true,
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/sitemap.xml': {
        headers: {
          'Cache-Control': 'public, max-age=3600'
        }
      },
      '/robots.txt': {
        headers: {
          'Cache-Control': 'public, max-age=86400'
        }
      },
      '/': { 
        prerender: true, 
        headers: { 'Cache-Control': 'public, max-age=3600' } 
      },
      '/destinos/**': { 
        prerender: true, 
        headers: { 'Cache-Control': 'public, max-age=3600' } 
      },
      '/experiencias/**': { 
        prerender: true, 
        headers: { 'Cache-Control': 'public, max-age=3600' } 
      }
    }
  },
  runtimeConfig: {
    public: {
      geminiApiKey: process.env.GEMINI_API_KEY || '',
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY || '',
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || '',
        projectId: process.env.FIREBASE_PROJECT_ID || '',
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || '',
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '',
        appId: process.env.FIREBASE_APP_ID || '',
        measurementId: process.env.FIREBASE_MEASUREMENT_ID || ''
      }
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
        { rel: 'canonical', href: 'https://anasaviajes.com/' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
          media: 'print',
          onload: "this.media='all'"
        }
      ]
    }
  },
  image: {
    quality: 85,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    densities: [1, 2],
    domains: ['images.unsplash.com'],
    providers: {
      unsplash: {
        provider: 'unsplash'
      }
    }
  },
  site: {
    url: 'https://anasaviajes.com',
    name: 'Anasa Viajes',
    description: 'Safari de lujo en África | Expediciones premium personalizadas'
  },
  sitemap: {
    hostname: 'https://anasaviajes.com',
    gzip: true,
    routes: [
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
      
      // Destinos
      { url: '/destinos/sudafrica', changefreq: 'weekly', priority: 0.9 },
      { url: '/destinos/kenia', changefreq: 'weekly', priority: 0.9 },
      { url: '/destinos/tanzania', changefreq: 'weekly', priority: 0.9 },
      { url: '/destinos/botswana', changefreq: 'weekly', priority: 0.9 },
      { url: '/destinos/namibia', changefreq: 'weekly', priority: 0.9 },
      { url: '/destinos/ruanda', changefreq: 'weekly', priority: 0.9 },
      { url: '/destinos/madagascar', changefreq: 'weekly', priority: 0.9 },
      
      // Experiencias
      { url: '/experiencias/safari-lujo', changefreq: 'weekly', priority: 0.8 },
      { url: '/experiencias/gran-migracion', changefreq: 'weekly', priority: 0.8 },
      { url: '/experiencias/big-five', changefreq: 'weekly', priority: 0.8 },
      { url: '/experiencias/safari-fotografico', changefreq: 'weekly', priority: 0.8 },
      { url: '/experiencias/safari-romantico', changefreq: 'weekly', priority: 0.8 },
      { url: '/experiencias/safari-familiar', changefreq: 'weekly', priority: 0.8 },
      { url: '/experiencias/safari-aventura', changefreq: 'weekly', priority: 0.8 },
      { url: '/experiencias/trekking-gorilas', changefreq: 'weekly', priority: 0.8 },
      
      // Guías de viajero
      { url: '/guia-viajero/mejor-epoca-viajar', changefreq: 'monthly', priority: 0.7 },
      { url: '/guia-viajero/que-llevar-safari', changefreq: 'monthly', priority: 0.7 },
      { url: '/guia-viajero/visados-africa', changefreq: 'monthly', priority: 0.7 },
      
      // Tipos de viaje
      { url: '/tipo-viaje/safari-7-dias', changefreq: 'weekly', priority: 0.7 },
      { url: '/tipo-viaje/safari-10-dias', changefreq: 'weekly', priority: 0.7 },
      { url: '/tipo-viaje/safari-14-dias', changefreq: 'weekly', priority: 0.7 },
    ]
  }
})