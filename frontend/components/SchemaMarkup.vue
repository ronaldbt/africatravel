<script setup>
const props = defineProps({
  schema: {
    type: Object,
    required: true
  }
})

const schemaJson = computed(() => JSON.stringify(props.schema, null, 2))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: schemaJson
    }
  ]
})
</script>

