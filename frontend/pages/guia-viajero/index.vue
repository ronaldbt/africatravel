<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Guía del Viajero' }]" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-serif text-white mb-6">
          Guía del <span class="text-luxury-gold italic">Viajero</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Todo lo que necesitas saber para planificar tu safari perfecto en África.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="guia in guias"
          :key="guia.slug"
          :to="`/guia-viajero/${guia.slug}`"
          class="group bg-luxury-black border border-white/10 hover:border-luxury-gold/50 p-8 transition-all duration-500"
        >
          <div class="mb-6">
            <div class="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-luxury-gold/20 transition-colors">
              <svg class="w-8 h-8 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="guia.icon" />
              </svg>
            </div>
            <h2 class="text-2xl font-serif text-white mb-3 group-hover:text-luxury-gold transition-colors">
              {{ guia.title }}
            </h2>
            <p class="text-gray-400 text-sm">
              {{ guia.description }}
            </p>
          </div>
          <div class="flex items-center text-luxury-gold text-sm font-semibold">
            Leer más
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Guía del Viajero | Consejos para Safari en África | Anasa Viajes',
  meta: [
    { name: 'description', content: 'Guía completa para viajar a África: mejor época, qué llevar, visados, vacunas, seguridad y más. Todo lo que necesitas saber para tu safari.' },
    { name: 'keywords', content: 'guía safari áfrica, mejor época safari, qué llevar safari, visados áfrica, vacunas áfrica, consejos safari' }
  ]
})

const guias = [
  {
    slug: 'mejor-epoca-viajar',
    title: 'Mejor Época para Viajar',
    description: 'Descubre cuándo es el mejor momento para visitar cada destino en África.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    slug: 'que-llevar-safari',
    title: 'Qué Llevar en Safari',
    description: 'Lista completa de equipaje y recomendaciones de marcas premium.',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
  },
  {
    slug: 'visados-africa',
    title: 'Visados para África',
    description: 'Información sobre requisitos de visado para cada país africano.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    slug: 'vacunas-africa',
    title: 'Vacunas y Salud',
    description: 'Requisitos de vacunación y consejos de salud para viajar a África.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    slug: 'seguridad-africa',
    title: 'Seguridad en África',
    description: 'Consejos de seguridad y mejores prácticas para tu safari.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    slug: 'presupuesto-safari',
    title: 'Presupuesto de Safari',
    description: 'Guía completa de costos y cómo planificar tu presupuesto.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]
</script>


