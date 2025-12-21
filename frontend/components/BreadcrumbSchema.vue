<script setup>
const props = defineProps({
  items: {
    type: Object,
    required: true
  }
})

const schemaJson = computed(() => JSON.stringify(props.items, null, 2))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: schemaJson
    }
  ]
})
</script>