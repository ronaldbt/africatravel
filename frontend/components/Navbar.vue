<template>
  <nav 
    :class="`fixed w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-luxury-dark/80 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-8'
    }`"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="relative">
            <svg class="h-8 w-8 text-luxury-gold transition-transform duration-700 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5L12 16l5-4.5M7 11.5L12 7l5 4.5M7 11.5V3a2 2 0 012-2h6a2 2 0 012 2v8.5M7 21h10a2 2 0 002-2v-2.5" />
            </svg>
            <div class="absolute inset-0 bg-luxury-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <div class="flex flex-col">
            <span class="font-serif text-2xl font-medium tracking-[0.15em] text-white leading-none">UBUNTU</span>
            <span class="text-[0.6rem] uppercase tracking-[0.3em] text-luxury-gold mt-1">Travels</span>
          </div>
        </a>
        
        <!-- Desktop Links -->
        <div class="hidden md:flex items-center space-x-12">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href" 
            class="text-xs font-medium text-gray-300 hover:text-luxury-gold transition-colors uppercase tracking-[0.15em] relative group"
          >
            {{ link.name }}
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#contact" 
            class="px-8 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300"
          >
            Concierge
          </a>
        </div>

        <!-- Mobile Toggle -->
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="text-white hover:text-luxury-gold transition-colors">
            <svg v-if="isMenuOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div :class="`fixed inset-0 bg-luxury-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`">
      <div class="flex flex-col items-center justify-center h-full space-y-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-2xl font-serif text-white hover:text-luxury-gold transition-colors"
          @click="isMenuOpen = false"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Destinos', href: '#destinations' },
  { name: 'Experiencias', href: '#experiences' },
  { name: 'Diseñador IA', href: '#ai-planner' },
  { name: 'Filosofía', href: '#about' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>