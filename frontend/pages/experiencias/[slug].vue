<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="breadcrumbItems" />
    
    <div v-if="experiencia" class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div class="relative h-[60vh] mb-16 overflow-hidden">
        <img 
          :src="experiencia.image" 
          :alt="experiencia.name"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-luxury-dark via-black/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-12">
          <h1 class="text-5xl md:text-7xl font-serif text-white mb-4">
            {{ experiencia.name }}
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            {{ experiencia.description }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2">
          <div class="prose prose-invert max-w-none">
            <h2 class="text-3xl font-serif text-white mb-6">Sobre esta Experiencia</h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              {{ experiencia.content }}
            </p>
            
            <h3 class="text-2xl font-serif text-white mb-4 mt-8">Qué incluye</h3>
            <ul class="space-y-3 text-gray-300">
              <li v-for="item in experiencia.includes" :key="item" class="flex items-start">
                <svg class="w-5 h-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-luxury-black border border-white/10 p-8 sticky top-24">
            <h3 class="text-xl font-serif text-white mb-6">Información</h3>
            <div class="space-y-4 text-sm">
              <div>
                <span class="text-gray-400 uppercase tracking-wider text-xs">Precio desde</span>
                <p class="text-2xl text-luxury-gold font-serif mt-1">{{ experiencia.price }}</p>
              </div>
              <div>
                <span class="text-gray-400 uppercase tracking-wider text-xs">Duración</span>
                <p class="text-white mt-1">{{ experiencia.duration }}</p>
              </div>
            </div>
            <NuxtLink 
              to="/contacto"
              class="block w-full mt-8 px-6 py-4 bg-luxury-gold text-black text-center font-bold uppercase tracking-widest hover:bg-luxury-gold/90 transition-colors"
            >
              Solicitar Presupuesto
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const experiencias = {
  'safari-lujo': {
    name: 'Safari de Lujo',
    slug: 'safari-lujo',
    description: 'Experiencias premium con lodges exclusivos, guías privados y servicios de clase mundial.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $5,000',
    duration: '7-14 días',
    content: 'Nuestros safaris de lujo están diseñados para los viajeros más exigentes. Cada detalle está cuidadosamente planificado para ofrecer una experiencia inolvidable, desde los lodges más exclusivos hasta los guías más experimentados.',
    includes: [
      'Alojamiento en lodges de lujo',
      'Guías privados expertos',
      'Vehículos de safari exclusivos',
      'Comidas gourmet',
      'Bebidas premium incluidas',
      'Experiencias privadas',
      'Traslados en avioneta'
    ]
  },
  'gran-migracion': {
    name: 'Gran Migración',
    slug: 'gran-migracion',
    description: 'Presencia el mayor espectáculo natural del mundo: la migración anual de millones de animales.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $6,500',
    duration: '8-12 días',
    content: 'La Gran Migración es uno de los espectáculos naturales más impresionantes del planeta. Cada año, más de dos millones de animales migran a través del Serengeti y el Masai Mara en busca de pastos frescos.',
    includes: [
      'Seguimiento de la migración',
      'Alojamiento en campamentos móviles',
      'Guías especializados en migración',
      'Balloon safari incluido',
      'Fotografía de vida silvestre',
      'Experiencias culturales Masai'
    ]
  },
  'big-five': {
    name: 'Big Five',
    slug: 'big-five',
    description: 'Encuentra los cinco grandes: león, leopardo, elefante, búfalo y rinoceronte en su hábitat natural.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $4,500',
    duration: '7-10 días',
    content: 'El Big Five es el santo grial de los safaris africanos. Nuestros itinerarios están diseñados para maximizar las oportunidades de avistamiento de estos cinco animales icónicos en sus hábitats naturales.',
    includes: [
      'Safaris en múltiples reservas',
      'Guías expertos en rastreo',
      'Safaris al amanecer y atardecer',
      'Safaris a pie',
      'Alojamiento en reservas privadas',
      'Garantía de avistamiento'
    ]
  }
}

const experiencia = experiencias[slug]

if (!experiencia) {
  throw createError({ statusCode: 404, statusMessage: 'Experiencia no encontrada' })
}

const breadcrumbItems = [
  { label: 'Experiencias', to: '/experiencias' },
  { label: experiencia.name }
]

useHead({
  title: `${experiencia.name} | Anasa Viajes`,
  meta: [
    { name: 'description', content: experiencia.description }
  ]
})
</script>

