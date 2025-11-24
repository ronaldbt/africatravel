<template>
  <nav v-if="items.length > 0" class="bg-luxury-dark/50 border-b border-white/5 py-4 pt-24" aria-label="Breadcrumb">
    <BreadcrumbSchema :items="breadcrumbSchema" />
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <ol class="flex items-center space-x-2 text-sm">
        <li>
          <NuxtLink to="/" class="text-gray-400 hover:text-luxury-gold transition-colors">
            Inicio
          </NuxtLink>
        </li>
        <li v-for="(item, index) in items" :key="index" class="flex items-center">
          <svg class="w-4 h-4 text-gray-600 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <NuxtLink 
            v-if="item.to && index < items.length - 1"
            :to="item.to"
            class="text-gray-400 hover:text-luxury-gold transition-colors"
          >
            {{ item.label }}
          </NuxtLink>
          <span v-else class="text-luxury-gold font-medium">{{ item.label }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

// Generar schema JSON-LD para breadcrumbs
const breadcrumbSchema = computed(() => {
  const itemListElements = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://anasaviajes.com/"
    }
  ]

  props.items.forEach((item, index) => {
    itemListElements.push({
      "@type": "ListItem",
      position: index + 2,
      name: item.label,
      item: item.to ? `https://anasaviajes.com${item.to}` : undefined
    })
  })

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: itemListElements
  }
})
</script>

