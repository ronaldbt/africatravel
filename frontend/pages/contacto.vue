<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Contacto' }]" />
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 class="text-5xl md:text-7xl font-serif text-white mb-6">
            Hablemos de tu <span class="text-luxury-gold italic">Safari</span>
          </h1>
          <p class="text-gray-400 text-lg mb-8">
            Estamos aquí para crear la experiencia de safari perfecta para ti. Contáctanos y comencemos a diseñar tu aventura africana.
          </p>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-luxury-gold text-sm uppercase tracking-wider mb-2">Oficinas</h3>
              <p class="text-white">Madrid, España</p>
              <p class="text-white">Cape Town, Sudáfrica</p>
              <p class="text-white">Arusha, Tanzania</p>
            </div>
            
            <div>
              <h3 class="text-luxury-gold text-sm uppercase tracking-wider mb-2">Contacto</h3>
              <p class="text-white">+34 912 345 678</p>
              <p class="text-white">concierge@anasaviajes.com</p>
            </div>
            
            <div>
              <h3 class="text-luxury-gold text-sm uppercase tracking-wider mb-2">Horario</h3>
              <p class="text-white">Lunes - Viernes: 9:00 - 18:00</p>
              <p class="text-white">Sábados: 10:00 - 14:00</p>
            </div>
          </div>
        </div>
        
        <div class="bg-luxury-black border border-white/10 p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm text-gray-400 mb-2">Nombre completo</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                class="w-full bg-luxury-dark border border-white/10 px-4 py-3 text-white focus:border-luxury-gold focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label class="block text-sm text-gray-400 mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full bg-luxury-dark border border-white/10 px-4 py-3 text-white focus:border-luxury-gold focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label class="block text-sm text-gray-400 mb-2">Teléfono</label>
              <input 
                v-model="form.phone"
                type="tel" 
                class="w-full bg-luxury-dark border border-white/10 px-4 py-3 text-white focus:border-luxury-gold focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label class="block text-sm text-gray-400 mb-2">Mensaje</label>
              <textarea 
                v-model="form.message"
                required
                rows="5"
                class="w-full bg-luxury-dark border border-white/10 px-4 py-3 text-white focus:border-luxury-gold focus:outline-none transition-colors"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              class="w-full px-8 py-4 bg-luxury-gold text-black font-bold uppercase tracking-widest hover:bg-luxury-gold/90 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentUrl = 'https://anasaviajes.com/contacto'

useHead({
  title: 'Contacto | Planifica tu Safari de Lujo en África | Anasa Viajes',
  meta: [
    { 
      name: 'description', 
      content: 'Contacta con Anasa Viajes para planificar tu safari de lujo personalizado en África. Oficinas en Madrid, Cape Town y Arusha. Consulta gratuita y presupuesto sin compromiso.' 
    },
    { 
      name: 'keywords', 
      content: 'contacto safari áfrica, presupuesto safari, consulta safari lujo, agencia safari áfrica' 
    },
    { property: 'og:title', content: 'Contacto | Anasa Viajes' },
    { property: 'og:description', content: 'Planifica tu safari de lujo en África. Consulta gratuita y presupuesto sin compromiso.' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contacto | Anasa Viajes' },
    { name: 'twitter:description', content: 'Planifica tu safari de lujo en África' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl },
    { rel: 'alternate', hreflang: 'es', href: currentUrl },
    { rel: 'alternate', hreflang: 'en', href: 'https://anasaviajes.com/en/contacto' },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl }
  ]
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  // Aquí iría la lógica de envío del formulario
  alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.')
  form.value = { name: '', email: '', phone: '', message: '' }
}
</script>



