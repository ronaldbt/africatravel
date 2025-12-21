<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Blog' }]" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-serif text-white mb-6">
          Blog de <span class="text-luxury-gold italic">Viajes</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Historias, consejos y guías sobre safaris en África, conservación y experiencias únicas.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group bg-luxury-black border border-white/10 hover:border-luxury-gold/50 transition-all duration-500 overflow-hidden"
        >
          <div class="aspect-[16/9] overflow-hidden">
            <img 
              :src="post.image" 
              :alt="`${post.title} - Blog Anasa Viajes`"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div class="p-8">
            <span class="text-xs text-luxury-gold uppercase tracking-wider mb-2 block">{{ post.category }}</span>
            <h2 class="text-2xl font-serif text-white mb-3 group-hover:text-luxury-gold transition-colors">
              {{ post.title }}
            </h2>
            <p class="text-gray-400 text-sm mb-4 line-clamp-2">
              {{ post.excerpt }}
            </p>
            <div class="flex items-center text-luxury-gold text-sm font-semibold">
              Leer más
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentUrl = 'https://anasaviajes.com/blog'

useHead({
  title: 'Blog de Safaris en África | Consejos, Guías y Experiencias | Anasa Viajes',
  meta: [
    { 
      name: 'description', 
      content: 'Descubre todo sobre safaris en África: consejos de viaje, mejores épocas, qué llevar, guías de destinos, conservación y experiencias únicas. Todo lo que necesitas para planificar tu safari perfecto.' 
    },
    { 
      name: 'keywords', 
      content: 'blog safari áfrica, consejos safari, guías viaje áfrica, conservación áfrica, mejor época safari, qué llevar safari, gran migración, big five' 
    },
    { property: 'og:title', content: 'Blog de Safaris en África | Anasa Viajes' },
    { property: 'og:description', content: 'Consejos, guías y experiencias sobre safaris en África. Todo lo que necesitas para planificar tu safari perfecto.' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blog de Safaris en África | Anasa Viajes' },
    { name: 'twitter:description', content: 'Consejos, guías y experiencias sobre safaris en África' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl },
    { rel: 'alternate', hreflang: 'es', href: currentUrl },
    { rel: 'alternate', hreflang: 'en', href: 'https://anasaviajes.com/en/blog' },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl }
  ]
})

const posts = [
  {
    slug: 'mejor-epoca-safari-africa',
    title: 'La Mejor Época para Hacer Safari en África',
    excerpt: 'Descubre cuándo es el mejor momento para visitar cada destino y maximizar tus oportunidades de avistamiento.',
    category: 'Consejos',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'gran-migracion-guia-completa',
    title: 'Guía Completa de la Gran Migración',
    excerpt: 'Todo lo que necesitas saber sobre el mayor espectáculo natural del mundo.',
    category: 'Experiencias',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'conservacion-africa',
    title: 'Conservación en África: Nuestro Compromiso',
    excerpt: 'Cómo trabajamos para proteger la vida silvestre y apoyar las comunidades locales.',
    category: 'Conservación',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  }
]
</script>



