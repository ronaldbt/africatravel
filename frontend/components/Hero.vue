<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Dynamic Background -->
    <div class="absolute inset-0">
      <NuxtImg 
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop" 
        alt="Safari de lujo en África - Paisajes salvajes untamed donde el lujo se encuentra con la naturaleza" 
        class="w-full h-full object-cover animate-slow-zoom"
        format="webp"
        quality="90"
        sizes="100vw"
        priority
      />
      <!-- Luxury Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-luxury-dark"></div>
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
      <div class="reveal active transition-all duration-1000 ease-out">
        <span class="block text-luxury-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 pl-1">
          Expediciones de Autor
        </span>
        
        <h1 class="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8">
          Safaris de Lujo en <span class="text-luxury-gold">África</span><br />
          <span class="italic opacity-80 font-light text-5xl md:text-7xl lg:text-8xl">Expediciones Premium</span>
        </h1>
        
        <p class="text-gray-300 text-sm md:text-base max-w-lg leading-loose font-light border-l border-luxury-gold/50 pl-6 mb-12">
          Donde el lujo se encuentra con lo salvaje. Diseñamos itinerarios a medida que transforman su perspectiva del mundo.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6">
          <Button @click="scrollToElement('ai-planner')">
            Diseñar Expedición
          </Button>
          <button 
            @click="scrollToElement('destinations')"
            class="text-white text-sm uppercase tracking-[0.2em] hover:text-luxury-gold transition-colors flex items-center gap-4 group"
          >
            Explorar Destinos
            <span class="w-8 h-[1px] bg-white group-hover:w-16 group-hover:bg-luxury-gold transition-all"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute bottom-12 right-12 hidden md:block animate-float">
      <div class="bg-white/5 backdrop-blur-md p-6 border border-white/10 max-w-xs">
        <p class="text-luxury-gold font-serif italic text-xl mb-2">"Cuando has bebido el agua de África, siempre volverás."</p>
        <p class="text-gray-400 text-xs tracking-widest uppercase">— Proverbio Africano</p>
      </div>
    </div>

    <div 
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
      @click="scrollToElement('features')"
    >
      <span class="text-[10px] uppercase tracking-[0.3em] text-white">Descubrir</span>
      <svg class="h-4 w-4 text-luxury-gold animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue'

const scrollToElement = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>