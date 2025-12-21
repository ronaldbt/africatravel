<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200 flex items-center justify-center">
    <div class="text-center max-w-2xl mx-auto px-6">
      <!-- Error Icon -->
      <div class="mb-8">
        <svg 
          class="w-32 h-32 mx-auto text-luxury-gold/30" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="1" 
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 014 12H2.05A9.953 9.953 0 012 12c0 1.384.28 2.702.786 3.9a8.025 8.025 0 01-.786-3.9z" 
          />
          <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="1" 
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      </div>

      <!-- Error Content -->
      <div class="mb-12">
        <h1 class="text-6xl md:text-8xl font-serif text-white mb-6">
          {{ error?.statusCode === 404 ? '404' : 'Error' }}
        </h1>
        <p class="text-2xl md:text-3xl text-luxury-gold font-light mb-6">
          {{ error?.statusCode === 404 ? 'Página no encontrada' : 'Algo ha salido mal' }}
        </p>
        <p class="text-gray-400 text-lg leading-relaxed">
          {{ error?.statusCode === 404 
            ? 'La página que buscas no existe o ha sido movida. Te invitamos a explorar nuestros safaris de lujo en África.' 
            : 'Hemos experimentado un problema técnico. Nuestro equipo está trabajando para solucionarlo.'
          }}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
        <NuxtLink
          to="/"
          class="inline-block px-8 py-4 bg-luxury-gold text-black font-bold uppercase tracking-widest hover:bg-luxury-gold/90 transition-all duration-300 transform hover:scale-105"
        >
          Volver al Inicio
        </NuxtLink>
        
        <NuxtLink
          to="/destinos"
          class="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          Ver Destinos
        </NuxtLink>
        
        <NuxtLink
          to="/contacto"
          class="inline-block px-8 py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-300 transform hover:scale-105"
        >
          Contactar
        </NuxtLink>
      </div>

      <!-- Additional Help -->
      <div class="mt-16 pt-8 border-t border-white/10">
        <p class="text-sm text-gray-500 mb-4">¿Necesitas ayuda?</p>
        <div class="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
          <a 
            href="mailto:concierge@anasaviajes.com"
            class="text-luxury-gold hover:text-luxury-gold/80 transition-colors"
          >
            concierge@anasaviajes.com
          </a>
          <a 
            href="tel:+34912345678"
            class="text-luxury-gold hover:text-luxury-gold/80 transition-colors"
          >
            +34 912 345 678
          </a>
        </div>
      </div>
    </div>

    <!-- Background Pattern -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0 opacity-5" style="background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.05) 10px, rgba(212, 175, 55, 0.05) 20px);">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['error'])

// SEO para páginas de error
useHead({
  title: props.error?.statusCode === 404 ? 'Página no encontrada | Anasa Viajes' : 'Error | Anasa Viajes',
  meta: [
    { name: 'description', content: 'Página no encontrada. Descubre nuestros safaris de lujo en África y experiencias únicas.' },
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>