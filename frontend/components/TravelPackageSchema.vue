<template>
  <script type="application/ld+json" v-html="JSON.stringify(package)" />
</template>

<script setup>
defineProps({
  package: {
    type: Object,
    required: true
  }
})
</script>