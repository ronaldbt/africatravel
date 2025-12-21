<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Sobre Nosotros' }]" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-7xl font-serif text-white mb-6">
          Sobre <span class="text-luxury-gold italic">Anasa Viajes</span>
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Creando conexiones profundas entre el viajero exigente y el alma indómita de África.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 class="text-3xl font-serif text-white mb-6">Nuestra Filosofía</h2>
          <p class="text-gray-300 leading-relaxed mb-4">
            En Anasa Viajes, creemos que cada safari debe ser una experiencia transformadora. No solo organizamos viajes; creamos conexiones profundas entre nuestros viajeros y el continente africano.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            Trabajamos exclusivamente con lodges y campamentos que comparten nuestros valores de conservación, sostenibilidad y excelencia. Cada itinerario está cuidadosamente diseñado para ofrecer momentos únicos e inolvidables.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Nuestro compromiso va más allá del lujo. Apoyamos activamente proyectos de conservación y trabajamos con comunidades locales para asegurar que el turismo beneficie tanto a los viajeros como a África.
          </p>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop"
            alt="Sobre Anasa Viajes - Safaris de lujo en África con compromiso de conservación"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-5xl font-serif text-luxury-gold mb-4">15+</div>
          <h3 class="text-xl font-serif text-white mb-2">Años de Experiencia</h3>
          <p class="text-gray-400 text-sm">Creando experiencias únicas en África</p>
        </div>
        <div class="text-center">
          <div class="text-5xl font-serif text-luxury-gold mb-4">500+</div>
          <h3 class="text-xl font-serif text-white mb-2">Viajeros Satisfechos</h3>
          <p class="text-gray-400 text-sm">Testimonios de experiencias transformadoras</p>
        </div>
        <div class="text-center">
          <div class="text-5xl font-serif text-luxury-gold mb-4">50+</div>
          <h3 class="text-xl font-serif text-white mb-2">Destinos</h3>
          <p class="text-gray-400 text-sm">En toda África</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentUrl = 'https://anasaviajes.com/sobre-nosotros'

useHead({
  title: 'Sobre Nosotros | Filosofía y Compromiso con África | Anasa Viajes',
  meta: [
    { 
      name: 'description', 
      content: 'Conoce Anasa Viajes: 15+ años creando safaris de lujo en África. Nuestra filosofía combina experiencias transformadoras con conservación y apoyo a comunidades locales. 500+ viajeros satisfechos, 50+ destinos.' 
    },
    { 
      name: 'keywords', 
      content: 'sobre anasa viajes, agencia safari áfrica, conservación áfrica, safaris lujo, filosofía safari, compromiso conservación' 
    },
    { property: 'og:title', content: 'Sobre Nosotros | Anasa Viajes' },
    { property: 'og:description', content: '15+ años creando safaris de lujo en África con compromiso de conservación.' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Sobre Nosotros | Anasa Viajes' },
    { name: 'twitter:description', content: 'Filosofía y compromiso con África' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl },
    { rel: 'alternate', hreflang: 'es', href: currentUrl },
    { rel: 'alternate', hreflang: 'en', href: 'https://anasaviajes.com/en/sobre-nosotros' },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl }
  ]
})
</script>



