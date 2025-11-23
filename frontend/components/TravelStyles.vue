<template>
  <section class="py-32 bg-luxury-black relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
        <div>
          <span class="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">Personalización</span>
          <h2 class="text-4xl md:text-5xl font-serif text-white">Diseñe su <span class="italic text-gray-500">Estilo</span></h2>
        </div>
        <div class="hidden md:block w-1/3 h-[1px] bg-white/10 mb-4"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal">
        
        <!-- Selection Menu -->
        <div class="lg:col-span-4 flex flex-col space-y-2">
          <button
            v-for="style in styles"
            :key="style.id"
            @click="activeStyle = style.id"
            :class="`group flex items-center justify-between p-6 text-left transition-all duration-500 border-l-2 ${
              activeStyle === style.id 
                ? 'border-luxury-gold bg-white/5' 
                : 'border-white/5 hover:border-white/20 hover:bg-white/5'
            }`"
          >
            <span :class="`text-sm font-bold tracking-[0.2em] uppercase transition-colors ${
              activeStyle === style.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
            }`">
              {{ style.title }}
            </span>
            <component 
              :is="style.iconComponent" 
              :class="`w-5 h-5 transition-colors ${
                activeStyle === style.id ? 'text-luxury-gold' : 'text-gray-600 group-hover:text-gray-400'
              }`" 
            />
          </button>
        </div>

        <!-- Content Display Area -->
        <div class="lg:col-span-8 relative min-h-[300px]">
          <div
            v-for="style in styles"
            :key="style.id"
            :class="`absolute inset-0 transition-all duration-700 ease-out transform ${
              activeStyle === style.id 
                ? 'opacity-100 translate-y-0 z-10' 
                : 'opacity-0 translate-y-8 z-0 pointer-events-none'
            }`"
          >
            <div class="h-full flex flex-col justify-center p-8 md:p-16 bg-luxury-dark border border-white/5 relative overflow-hidden">
              <!-- Decorative large icon -->
              <component 
                :is="style.iconComponent" 
                class="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 rotate-12" 
              />
              
              <div class="relative z-10">
                <h3 class="text-luxury-gold font-serif italic text-3xl md:text-4xl mb-6">
                  {{ style.tagline }}
                </h3>
                <p class="text-gray-300 text-lg font-light leading-relaxed max-w-xl mb-10">
                  {{ style.description }}
                </p>
                <button class="text-xs font-bold uppercase tracking-widest text-white border-b border-luxury-gold pb-2 hover:text-luxury-gold transition-colors">
                  Explorar opciones {{ style.title }}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineComponent, h } from 'vue'

// Icon components as inline SVGs
const HeartIcon = defineComponent({
  render: () => h('svg', { 
    fill: 'none', 
    viewBox: '0 0 24 24', 
    stroke: 'currentColor',
    class: 'w-5 h-5'
  }, [
    h('path', { 
      'stroke-linecap': 'round', 
      'stroke-linejoin': 'round', 
      'stroke-width': '2', 
      d: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' 
    })
  ])
})

const UsersIcon = defineComponent({
  render: () => h('svg', { 
    fill: 'none', 
    viewBox: '0 0 24 24', 
    stroke: 'currentColor',
    class: 'w-5 h-5'
  }, [
    h('path', { 
      'stroke-linecap': 'round', 
      'stroke-linejoin': 'round', 
      'stroke-width': '2', 
      d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' 
    })
  ])
})

const CameraIcon = defineComponent({
  render: () => h('svg', { 
    fill: 'none', 
    viewBox: '0 0 24 24', 
    stroke: 'currentColor',
    class: 'w-5 h-5'
  }, [
    h('path', { 
      'stroke-linecap': 'round', 
      'stroke-linejoin': 'round', 
      'stroke-width': '2', 
      d: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' 
    }),
    h('path', { 
      'stroke-linecap': 'round', 
      'stroke-linejoin': 'round', 
      'stroke-width': '2', 
      d: 'M15 13a3 3 0 11-6 0 3 3 0 016 0z' 
    })
  ])
})

const CrownIcon = defineComponent({
  render: () => h('svg', { 
    fill: 'none', 
    viewBox: '0 0 24 24', 
    stroke: 'currentColor',
    class: 'w-5 h-5'
  }, [
    h('path', { 
      'stroke-linecap': 'round', 
      'stroke-linejoin': 'round', 
      'stroke-width': '2', 
      d: 'M5 3l6 6 5-8 5 8 1-6v16H4V3h1z' 
    })
  ])
})

const styles = [
  {
    id: 'honeymoon',
    iconComponent: HeartIcon,
    title: 'Luna de Miel',
    tagline: 'Romance Salvaje',
    description: 'Cenas privadas bajo las estrellas, baños al aire libre y suites aisladas en la inmensidad de la sabana.'
  },
  {
    id: 'family',
    iconComponent: UsersIcon,
    title: 'Familiar',
    tagline: 'Legado & Aprendizaje',
    description: 'Programas educativos para niños, villas privadas exclusivas y logística simplificada para todas las edades.'
  },
  {
    id: 'photo',
    iconComponent: CameraIcon,
    title: 'Fotografía',
    tagline: 'La Luz Perfecta',
    description: 'Vehículos adaptados, guías fotógrafos expertos y acceso a hides exclusivos para la toma perfecta.'
  },
  {
    id: 'royal',
    iconComponent: CrownIcon,
    title: 'Royalty',
    tagline: 'Ultra Lujo',
    description: 'Jets privados, uso exclusivo de lodges enteros y un staff dedicado 24/7 a sus caprichos.'
  }
]

const activeStyle = ref('honeymoon')
</script>