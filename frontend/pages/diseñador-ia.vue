<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="[{ label: 'Diseñador IA' }]" />
    <AIPlanner />
  </div>
</template>

<script setup>
useHead({
  title: 'Diseñador de Viajes con IA | Anasa Viajes',
  meta: [
    { name: 'description', content: 'Diseña tu safari perfecto en África con nuestra herramienta de IA. Itinerarios personalizados basados en tus preferencias.' }
  ]
})
</script>


