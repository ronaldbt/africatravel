<template>
  <footer id="contact" class="bg-black text-white py-20 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-3 mb-8">
            <svg class="h-6 w-6 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5L12 16l5-4.5M7 11.5L12 7l5 4.5M7 11.5V3a2 2 0 012-2h6a2 2 0 012 2v8.5M7 21h10a2 2 0 002-2v-2.5" />
            </svg>
            <span class="font-serif text-xl tracking-widest">UBUNTU</span>
          </div>
          <p class="text-gray-500 leading-relaxed max-w-md font-light text-sm">
            Creando conexiones profundas entre el viajero exigente y el alma indómita de África. Somos artesanos de experiencias transformadoras.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-8 text-white">Explorar</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-light">
            <li><a href="#" class="hover:text-luxury-gold transition-colors">Destinos</a></li>
            <li><a href="#" class="hover:text-luxury-gold transition-colors">Nuestras Villas</a></li>
            <li><a href="#" class="hover:text-luxury-gold transition-colors">Avionetas Privadas</a></li>
            <li><a href="#" class="hover:text-luxury-gold transition-colors">Prensa</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-8 text-white">Oficinas</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-light">
            <li>Madrid, España</li>
            <li>Cape Town, Sudáfrica</li>
            <li>Arusha, Tanzania</li>
            <li class="pt-4 text-luxury-gold">+34 912 345 678</li>
            <li class="text-white">concierge@ubuntutravels.com</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-gray-600 text-xs uppercase tracking-wider">&copy; Ubuntu Travels {{ new Date().getFullYear() }}</p>
        <div class="flex space-x-8">
          <a href="#" class="text-gray-600 hover:text-white transition-colors">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.017 11.215c-.045.0-.081-.0-.126-.0-.056.0-.111.0-.167.0C9.557 11.215 8 12.772 8 14.823c0 .789.252 1.54.7 2.171h-.003c.448.631 1.125 1.006 1.897 1.006h1.8c.772.0 1.449-.375 1.897-1.006h-.003c.448-.631.7-1.382.7-2.171.0-2.051-1.557-3.608-3.724-3.608z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.017 8.25c1.158.0 2.09.933 2.09 2.09s-.932 2.09-2.09 2.09c-1.158.0-2.09-.933-2.09-2.09s.932-2.09 2.09-2.09z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 23.25c5.385.0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75S2.25 8.115 2.25 13.5s4.365 9.75 9.75 9.75z" />
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-white transition-colors">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" class="text-gray-600 hover:text-white transition-colors">
            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional setup needed for this component
</script>