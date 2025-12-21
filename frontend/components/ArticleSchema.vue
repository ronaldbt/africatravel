<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const schemaJson = computed(() => JSON.stringify(props.article, null, 2))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: schemaJson
    }
  ]
})
</script>