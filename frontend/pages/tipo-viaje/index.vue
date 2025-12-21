<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Tipo de Viaje' }]" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-serif text-white mb-6">
          Tipo de <span class="text-luxury-gold italic">Viaje</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Encuentra el safari perfecto según la duración de tu viaje.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="tipo in tipos"
          :key="tipo.slug"
          class="bg-luxury-black border border-white/10 hover:border-luxury-gold/50 p-8 transition-all duration-500"
        >
          <h2 class="text-3xl font-serif text-white mb-4">
            {{ tipo.name }}
          </h2>
          <p class="text-gray-400 text-sm mb-6">
            {{ tipo.description }}
          </p>
          <div class="space-y-2 text-sm text-gray-300 mb-6">
            <p><span class="text-luxury-gold">Precio desde:</span> {{ tipo.price }}</p>
            <p><span class="text-luxury-gold">Destinos:</span> {{ tipo.destinations }}</p>
          </div>
          <NuxtLink 
            :to="`/tipo-viaje/${tipo.slug}`"
            class="inline-block px-6 py-3 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all uppercase text-xs font-bold tracking-widest"
          >
            Ver Itinerarios
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentUrl = 'https://anasaviajes.com/tipo-viaje'

useHead({
  title: 'Safaris por Duración | 7, 10, 14 Días y Más | Anasa Viajes',
  meta: [
    { 
      name: 'description', 
      content: 'Encuentra el safari perfecto según la duración de tu viaje. Safaris de 7 días desde €2,800, 10 días desde €4,200, 14 días desde €6,800 y expediciones de 3 semanas. Itinerarios personalizados para cada duración.' 
    },
    { 
      name: 'keywords', 
      content: 'safari 7 días, safari 10 días, safari 14 días, safari 3 semanas, expediciones áfrica, safari corto, safari largo, duración safari' 
    },
    { property: 'og:title', content: 'Safaris por Duración | Anasa Viajes' },
    { property: 'og:description', content: 'Encuentra el safari perfecto según la duración: 7, 10, 14 días y más. Itinerarios personalizados.' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Safaris por Duración | Anasa Viajes' },
    { name: 'twitter:description', content: 'Encuentra el safari perfecto según la duración de tu viaje' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl },
    { rel: 'alternate', hreflang: 'es', href: currentUrl },
    { rel: 'alternate', hreflang: 'en', href: 'https://anasaviajes.com/en/tipo-viaje' },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl }
  ]
})

const tipos = [
  {
    slug: 'safari-7-dias',
    name: 'Safari 7 Días',
    description: 'Perfecto para una primera experiencia o una escapada corta. Ideal para un solo destino.',
    price: 'Desde $3,500',
    destinations: '1-2 destinos'
  },
  {
    slug: 'safari-10-dias',
    name: 'Safari 10 Días',
    description: 'Tiempo suficiente para explorar múltiples parques y tener una experiencia completa.',
    price: 'Desde $5,000',
    destinations: '2-3 destinos'
  },
  {
    slug: 'safari-14-dias',
    name: 'Safari 14 Días',
    description: 'La duración ideal para una experiencia completa con tiempo para relajarse.',
    price: 'Desde $7,500',
    destinations: '3-4 destinos'
  },
  {
    slug: 'safari-3-semanas',
    name: 'Safari 3 Semanas',
    description: 'Una expedición completa que te permite explorar múltiples países y experiencias.',
    price: 'Desde $12,000',
    destinations: '4-5 destinos'
  }
]
</script>



