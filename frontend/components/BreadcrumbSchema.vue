<template>
  <script type="application/ld+json" v-html="JSON.stringify(items)" />
</template>

<script setup>
defineProps({
  items: {
    type: Object,
    required: true
  }
})
</script>