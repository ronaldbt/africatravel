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
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative">
            <svg class="h-8 w-8 text-luxury-gold transition-transform duration-700 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5L12 16l5-4.5M7 11.5L12 7l5 4.5M7 11.5V3a2 2 0 012-2h6a2 2 0 012 2v8.5M7 21h10a2 2 0 002-2v-2.5" />
            </svg>
            <div class="absolute inset-0 bg-luxury-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <div class="flex flex-col">
            <span class="font-serif text-2xl font-medium tracking-[0.15em] text-white leading-none">ANASA</span>
            <span class="text-[0.6rem] uppercase tracking-[0.3em] text-luxury-gold mt-1">Viajes</span>
          </div>
        </NuxtLink>
        
        <!-- Desktop Links -->
        <div class="hidden md:flex items-center space-x-8">
          <!-- Destinos Dropdown -->
          <div 
            class="relative group"
            @mouseenter="openDropdown = 'destinos'"
            @mouseleave="openDropdown = null"
          >
            <button class="text-xs font-medium text-gray-300 hover:text-luxury-gold transition-colors uppercase tracking-[0.15em] relative flex items-center gap-2">
              Destinos
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': openDropdown === 'destinos' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div 
              v-show="openDropdown === 'destinos'"
              class="absolute top-full left-0 mt-2 w-64 bg-luxury-dark/95 backdrop-blur-md border border-white/10 shadow-2xl py-4"
            >
              <NuxtLink 
                v-for="destino in destinos" 
                :key="destino.slug"
                :to="`/destinos/${destino.slug}`"
                class="block px-6 py-3 text-sm text-gray-300 hover:text-luxury-gold hover:bg-white/5 transition-all"
              >
                {{ destino.name }}
              </NuxtLink>
              <NuxtLink 
                to="/destinos"
                class="block px-6 py-3 text-sm text-luxury-gold border-t border-white/10 mt-2 font-semibold"
              >
                Ver todos los destinos →
              </NuxtLink>
            </div>
          </div>

          <!-- Experiencias Dropdown -->
          <div 
            class="relative group"
            @mouseenter="openDropdown = 'experiencias'"
            @mouseleave="openDropdown = null"
          >
            <button class="text-xs font-medium text-gray-300 hover:text-luxury-gold transition-colors uppercase tracking-[0.15em] relative flex items-center gap-2">
              Experiencias
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': openDropdown === 'experiencias' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <div 
              v-show="openDropdown === 'experiencias'"
              class="absolute top-full left-0 mt-2 w-64 bg-luxury-dark/95 backdrop-blur-md border border-white/10 shadow-2xl py-4"
            >
              <NuxtLink 
                v-for="exp in experiencias" 
                :key="exp.slug"
                :to="`/experiencias/${exp.slug}`"
                class="block px-6 py-3 text-sm text-gray-300 hover:text-luxury-gold hover:bg-white/5 transition-all"
              >
                {{ exp.name }}
              </NuxtLink>
              <NuxtLink 
                to="/experiencias"
                class="block px-6 py-3 text-sm text-luxury-gold border-t border-white/10 mt-2 font-semibold"
              >
                Ver todas las experiencias →
              </NuxtLink>
            </div>
          </div>

          <!-- Tipo de Viaje -->
          <NuxtLink 
            to="/tipo-viaje"
            class="text-xs font-medium text-gray-300 hover:text-luxury-gold transition-colors uppercase tracking-[0.15em] relative group"
          >
            Tipo de Viaje
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>

          <!-- Guía del Viajero -->
          <NuxtLink 
            to="/guia-viajero"
            class="text-xs font-medium text-gray-300 hover:text-luxury-gold transition-colors uppercase tracking-[0.15em] relative group"
          >
            Guía del Viajero
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>

          <!-- Blog -->
          <NuxtLink 
            to="/blog"
            class="text-xs font-medium text-gray-300 hover:text-luxury-gold transition-colors uppercase tracking-[0.15em] relative group"
          >
            Blog
            <span class="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>

          <!-- CTA Button -->
          <NuxtLink 
            to="/contacto"
            class="px-8 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300"
          >
            Solicitar Presupuesto
          </NuxtLink>
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
      <div class="flex flex-col h-full overflow-y-auto">
        <div class="flex-1 px-6 py-20 space-y-6">
          <div>
            <button 
              @click="mobileMenuOpen = mobileMenuOpen === 'destinos' ? null : 'destinos'"
              class="text-2xl font-serif text-white hover:text-luxury-gold transition-colors flex items-center justify-between w-full"
            >
              Destinos
              <svg class="w-5 h-5 transition-transform" :class="{ 'rotate-180': mobileMenuOpen === 'destinos' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="mobileMenuOpen === 'destinos'" class="pl-4 mt-2 space-y-3">
              <NuxtLink 
                v-for="destino in destinos" 
                :key="destino.slug"
                :to="`/destinos/${destino.slug}`"
                @click="isMenuOpen = false"
                class="block text-lg text-gray-400 hover:text-luxury-gold"
              >
                {{ destino.name }}
              </NuxtLink>
              <NuxtLink to="/destinos" @click="isMenuOpen = false" class="block text-lg text-luxury-gold font-semibold">
                Ver todos →
              </NuxtLink>
            </div>
          </div>

          <div>
            <button 
              @click="mobileMenuOpen = mobileMenuOpen === 'experiencias' ? null : 'experiencias'"
              class="text-2xl font-serif text-white hover:text-luxury-gold transition-colors flex items-center justify-between w-full"
            >
              Experiencias
              <svg class="w-5 h-5 transition-transform" :class="{ 'rotate-180': mobileMenuOpen === 'experiencias' }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="mobileMenuOpen === 'experiencias'" class="pl-4 mt-2 space-y-3">
              <NuxtLink 
                v-for="exp in experiencias" 
                :key="exp.slug"
                :to="`/experiencias/${exp.slug}`"
                @click="isMenuOpen = false"
                class="block text-lg text-gray-400 hover:text-luxury-gold"
              >
                {{ exp.name }}
              </NuxtLink>
              <NuxtLink to="/experiencias" @click="isMenuOpen = false" class="block text-lg text-luxury-gold font-semibold">
                Ver todas →
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/tipo-viaje" @click="isMenuOpen = false" class="block text-2xl font-serif text-white hover:text-luxury-gold transition-colors">
            Tipo de Viaje
          </NuxtLink>
          <NuxtLink to="/guia-viajero" @click="isMenuOpen = false" class="block text-2xl font-serif text-white hover:text-luxury-gold transition-colors">
            Guía del Viajero
          </NuxtLink>
          <NuxtLink to="/blog" @click="isMenuOpen = false" class="block text-2xl font-serif text-white hover:text-luxury-gold transition-colors">
            Blog
          </NuxtLink>
          <NuxtLink to="/contacto" @click="isMenuOpen = false" class="block text-2xl font-serif text-white hover:text-luxury-gold transition-colors">
            Contacto
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const openDropdown = ref(null)
const mobileMenuOpen = ref(null)

const destinos = [
  { name: 'Sudáfrica', slug: 'sudafrica' },
  { name: 'Kenia', slug: 'kenia' },
  { name: 'Tanzania', slug: 'tanzania' },
  { name: 'Botswana', slug: 'botswana' },
  { name: 'Namibia', slug: 'namibia' },
  { name: 'Ruanda', slug: 'ruanda' },
  { name: 'Madagascar', slug: 'madagascar' },
]

const experiencias = [
  { name: 'Safari de Lujo', slug: 'safari-lujo' },
  { name: 'Gran Migración', slug: 'gran-migracion' },
  { name: 'Big Five', slug: 'big-five' },
  { name: 'Safari Fotográfico', slug: 'safari-fotografico' },
  { name: 'Safari Romántico', slug: 'safari-romantico' },
  { name: 'Safari Familiar', slug: 'safari-familiar' },
  { name: 'Safari Aventura', slug: 'safari-aventura' },
  { name: 'Trekking Gorilas', slug: 'trekking-gorilas' },
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
