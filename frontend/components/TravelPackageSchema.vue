<script setup>
const props = defineProps({
  package: {
    type: Object,
    required: true
  }
})

const schemaJson = computed(() => JSON.stringify(props.package, null, 2))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: schemaJson
    }
  ]
})
</script>