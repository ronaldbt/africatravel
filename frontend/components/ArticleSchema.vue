<template>
  <script type="application/ld+json" v-html="JSON.stringify(article)" />
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>