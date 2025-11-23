<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Experiencias' }]" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-serif text-white mb-6">
          Experiencias <span class="text-luxury-gold italic">Únicas</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Cada experiencia está diseñada para crear momentos inolvidables. Desde safaris de lujo hasta encuentros íntimos con la vida silvestre.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="exp in experiencias"
          :key="exp.slug"
          :to="`/experiencias/${exp.slug}`"
          class="group relative overflow-hidden bg-luxury-black border border-white/10 hover:border-luxury-gold/50 transition-all duration-500"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img 
              :src="exp.image" 
              :alt="exp.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-8">
            <h2 class="text-2xl font-serif text-white mb-3 group-hover:text-luxury-gold transition-colors">
              {{ exp.name }}
            </h2>
            <p class="text-gray-400 text-sm mb-4 line-clamp-2">
              {{ exp.description }}
            </p>
            <div class="flex items-center text-luxury-gold text-sm font-semibold">
              Descubrir
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
useHead({
  title: 'Experiencias de Safari en África | Anasa Viajes',
  meta: [
    { name: 'description', content: 'Descubre experiencias únicas de safari en África: safaris de lujo, gran migración, big five, safaris fotográficos y más. Experiencias personalizadas y exclusivas.' },
    { name: 'keywords', content: 'experiencias safari áfrica, safari lujo, gran migración, big five, safari fotográfico, safari romántico, trekking gorilas' }
  ]
})

const experiencias = [
  {
    slug: 'safari-lujo',
    name: 'Safari de Lujo',
    description: 'Experiencias premium con lodges exclusivos, guías privados y servicios de clase mundial.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'gran-migracion',
    name: 'Gran Migración',
    description: 'Presencia el mayor espectáculo natural del mundo: la migración anual de millones de animales.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'big-five',
    name: 'Big Five',
    description: 'Encuentra los cinco grandes: león, leopardo, elefante, búfalo y rinoceronte en su hábitat natural.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'safari-fotografico',
    name: 'Safari Fotográfico',
    description: 'Diseñado para fotógrafos, con vehículos especializados y guías expertos en fotografía de vida silvestre.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'safari-romantico',
    name: 'Safari Romántico',
    description: 'Experiencias íntimas perfectas para parejas, con cenas privadas bajo las estrellas y lodges románticos.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'safari-familiar',
    name: 'Safari Familiar',
    description: 'Aventuras diseñadas para familias, con actividades educativas y alojamientos familiares.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'safari-aventura',
    name: 'Safari Aventura',
    description: 'Para los más intrépidos: safaris a pie, camping bajo las estrellas y experiencias de inmersión total.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'trekking-gorilas',
    name: 'Trekking Gorilas',
    description: 'Encuentros íntimos y transformadores con gorilas de montaña en los volcanes de Ruanda y Uganda.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  }
]
</script>

