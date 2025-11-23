<template>
  <section id="ai-planner" class="py-32 bg-luxury-dark relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-1/4 h-full bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <!-- Left Column: Intro -->
        <div class="w-full lg:w-5/12 reveal">
          <div class="flex items-center gap-3 text-luxury-gold mb-6">
            <svg class="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM17 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z" />
            </svg>
            <span class="text-xs font-bold tracking-[0.3em] uppercase">Concierge Personal</span>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-serif text-white mb-6">
            Arquitectura de <br/>
            <span class="italic text-white/50">Viajes a Medida</span>
          </h2>
          
          <p class="text-gray-400 mb-10 leading-relaxed font-light">
            Nuestros especialistas en viajes de lujo diseñan cada expedición según sus preferencias personales. Cada detalle es cuidadosamente planificado para crear momentos únicos.
          </p>

          <div class="space-y-8">
            <div class="group">
              <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                Sus Preferencias
              </label>
              <textarea
                readonly
                class="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 resize-none h-32 text-lg font-serif"
                placeholder="Descripción de su viaje ideal..."
              />
            </div>

            <div class="grid grid-cols-2 gap-12">
              <div class="group">
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Duración
                </label>
                <div class="flex items-center border-b border-white/20 py-2">
                  <svg class="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="text-xl font-serif text-white">10-14 días</span>
                </div>
              </div>
              <div class="group">
                <label class="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Nivel
                </label>
                <div class="flex items-center border-b border-white/20 py-2">
                  <svg class="h-5 w-5 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <span class="text-xl font-serif text-white">Ultra Lujo</span>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <Button class-name="w-full">
                Contactar Concierge
              </Button>
            </div>
          </div>
        </div>

        <!-- Right Column: Sample Itinerary -->
        <div class="w-full lg:w-7/12 reveal reveal-delay-200">
          <div class="relative h-full min-h-[600px] bg-white/5 backdrop-blur-2xl border border-white/10 p-1 rounded-none lg:mt-12">
            <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
            
            <div class="h-full overflow-y-auto bg-luxury-black/40 p-8 md:p-12">
              <div class="mb-12 border-b border-white/10 pb-8">
                <span class="text-luxury-gold text-xs font-bold tracking-widest uppercase">Ejemplo de Propuesta</span>
                <h3 class="text-3xl md:text-4xl font-serif text-white mt-2 mb-2">Safari de Lujo en Tanzania</h3>
                <p class="text-gray-400">Desde $12,500 por persona</p>
              </div>
              
              <div class="space-y-12 relative">
                <!-- Vertical Line -->
                <div class="absolute left-[7px] top-2 bottom-0 w-[1px] bg-white/10"></div>

                <div class="relative pl-10 group">
                  <div class="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-luxury-gold bg-luxury-gold transition-colors"></div>
                  
                  <div class="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
                    <span class="text-sm font-bold text-white font-serif">Día 1-3</span>
                    <span class="text-xs text-luxury-gold tracking-widest uppercase border border-luxury-gold/30 px-2 py-1">
                      Serengeti Exclusivo
                    </span>
                  </div>
                  
                  <h4 class="text-xl text-white font-serif mb-3 group-hover:translate-x-1 transition-transform">Lodge Privado en el Serengeti</h4>
                  <p class="text-gray-400 text-sm leading-loose font-light">Villa privada con vistas panorámicas al parque. Safaris matutinos y vespertinos en vehículos exclusivos con guía personal.</p>
                </div>

                <div class="relative pl-10 group">
                  <div class="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-gray-600 bg-luxury-dark group-hover:border-luxury-gold group-hover:bg-luxury-gold transition-colors"></div>
                  
                  <div class="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
                    <span class="text-sm font-bold text-white font-serif">Día 4-6</span>
                    <span class="text-xs text-luxury-gold tracking-widest uppercase border border-luxury-gold/30 px-2 py-1">
                      Cráter Ngorongoro
                    </span>
                  </div>
                  
                  <h4 class="text-xl text-white font-serif mb-3 group-hover:translate-x-1 transition-transform">El Jardín del Edén Africano</h4>
                  <p class="text-gray-400 text-sm leading-loose font-light">Descenso privado al cráter para encuentros únicos con los Big Five en un entorno volcánico espectacular.</p>
                </div>

                <div class="relative pl-10 group">
                  <div class="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-gray-600 bg-luxury-dark group-hover:border-luxury-gold group-hover:bg-luxury-gold transition-colors"></div>
                  
                  <div class="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
                    <span class="text-sm font-bold text-white font-serif">Día 7-10</span>
                    <span class="text-xs text-luxury-gold tracking-widest uppercase border border-luxury-gold/30 px-2 py-1">
                      Zanzibar Privado
                    </span>
                  </div>
                  
                  <h4 class="text-xl text-white font-serif mb-3 group-hover:translate-x-1 transition-transform">Resort de Playa Exclusivo</h4>
                  <p class="text-gray-400 text-sm leading-loose font-light">Villa frente al océano Índico con acceso privado a playas vírgenes. Spa personal y cenas bajo las estrellas.</p>
                </div>
              </div>
              
              <div class="mt-16 pt-8 border-t border-white/10">
                <button class="w-full py-4 bg-white text-black uppercase tracking-widest font-bold text-xs hover:bg-gray-200 transition-colors">
                  Planificar Mi Expedición
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
import Button from './Button.vue'
</script>