<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Diseñador IA' }]" />
    <AIPlanner />
  </div>
</template>

<script setup>
const currentUrl = 'https://anasaviajes.com/diseñador-ia'

useHead({
  title: 'Diseñador de Viajes con IA | Crea tu Safari Personalizado | Anasa Viajes',
  meta: [
    { 
      name: 'description', 
      content: 'Diseña tu safari perfecto en África con nuestra herramienta de IA. Itinerarios personalizados basados en tus preferencias, presupuesto y duración. Crea tu experiencia única en minutos.' 
    },
    { 
      name: 'keywords', 
      content: 'diseñador safari IA, planificador safari IA, itinerario safari personalizado, safari con inteligencia artificial' 
    },
    { property: 'og:title', content: 'Diseñador de Viajes con IA | Anasa Viajes' },
    { property: 'og:description', content: 'Crea tu safari personalizado en África con IA. Itinerarios únicos en minutos.' },
    { property: 'og:url', content: currentUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Diseñador de Viajes con IA | Anasa Viajes' },
    { name: 'twitter:description', content: 'Crea tu safari personalizado con IA' }
  ],
  link: [
    { rel: 'canonical', href: currentUrl },
    { rel: 'alternate', hreflang: 'es', href: currentUrl },
    { rel: 'alternate', hreflang: 'en', href: 'https://anasaviajes.com/en/diseñador-ia' },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl }
  ]
})
</script>



