<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Destinos' }]" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-serif text-white mb-6">
          Destinos en <span class="text-luxury-gold italic">África</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Descubre los destinos más exclusivos de África. Desde las llanuras del Serengeti hasta las dunas de Namibia, cada destino ofrece experiencias únicas e inolvidables.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="destino in destinos"
          :key="destino.slug"
          :to="`/destinos/${destino.slug}`"
          class="group relative overflow-hidden bg-luxury-black border border-white/10 hover:border-luxury-gold/50 transition-all duration-500"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img 
              :src="destino.image" 
              :alt="destino.name"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          </div>
          <div class="p-8">
            <h2 class="text-2xl font-serif text-white mb-3 group-hover:text-luxury-gold transition-colors">
              {{ destino.name }}
            </h2>
            <p class="text-gray-400 text-sm mb-4 line-clamp-2">
              {{ destino.description }}
            </p>
            <div class="flex items-center text-luxury-gold text-sm font-semibold">
              Explorar
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
  title: 'Destinos en África | Anasa Viajes',
  meta: [
    { name: 'description', content: 'Descubre los destinos más exclusivos de África: Sudáfrica, Kenia, Tanzania, Botswana, Namibia, Ruanda y Madagascar. Safaris de lujo personalizados.' },
    { name: 'keywords', content: 'destinos áfrica, safari sudafrica, safari kenia, safari tanzania, safari botswana, safari namibia, safari ruanda, safari madagascar' }
  ]
})

const destinos = [
  {
    slug: 'sudafrica',
    name: 'Sudáfrica',
    description: 'La combinación perfecta de safari de clase mundial, viñedos históricos y la cosmopolita Cape Town.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'kenia',
    name: 'Kenia',
    description: 'Encuentros culturales con los Masai y los Big Five en reservas privadas con vistas al Kilimanjaro.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'tanzania',
    name: 'Tanzania',
    description: 'Testimonio de la mayor migración de mamíferos del mundo en el Serengeti y el cráter del Ngorongoro.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'botswana',
    name: 'Botswana',
    description: 'Safaris acuáticos en mokoro a través de un ecosistema virgen y la mayor concentración de elefantes.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'namibia',
    name: 'Namibia',
    description: 'Paisajes surrealistas donde el desierto más antiguo se encuentra con el mar. Dunas rojas y cielos infinitos.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'ruanda',
    name: 'Ruanda',
    description: 'Trekking de alta montaña en los volcanes Virunga para encuentros íntimos y transformadores con gorilas.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  },
  {
    slug: 'madagascar',
    name: 'Madagascar',
    description: 'Un mundo aparte. Lemures, selvas tropicales y playas vírgenes en la isla roja.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop'
  }
]
</script>

