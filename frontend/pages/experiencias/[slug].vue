<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <Breadcrumbs :items="breadcrumbItems" />
    
    <div v-if="experiencia" class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div class="relative h-[60vh] mb-16 overflow-hidden">
        <img 
          :src="experiencia.image" 
          :alt="experiencia.name"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-luxury-dark via-black/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-12">
          <h1 class="text-5xl md:text-7xl font-serif text-white mb-4">
            {{ experiencia.name }}
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            {{ experiencia.description }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2">
          <div class="prose prose-invert max-w-none">
            <h2 class="text-3xl font-serif text-white mb-6">Sobre esta Experiencia</h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              {{ experiencia.content }}
            </p>
            
            <h3 class="text-2xl font-serif text-white mb-4 mt-8">Qué incluye</h3>
            <ul class="space-y-3 text-gray-300">
              <li v-for="item in experiencia.includes" :key="item" class="flex items-start">
                <svg class="w-5 h-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-luxury-black border border-white/10 p-8 sticky top-24">
            <h3 class="text-xl font-serif text-white mb-6">Información</h3>
            <div class="space-y-4 text-sm">
              <div>
                <span class="text-gray-400 uppercase tracking-wider text-xs">Precio desde</span>
                <p class="text-2xl text-luxury-gold font-serif mt-1">{{ experiencia.price }}</p>
              </div>
              <div>
                <span class="text-gray-400 uppercase tracking-wider text-xs">Duración</span>
                <p class="text-white mt-1">{{ experiencia.duration }}</p>
              </div>
            </div>
            <NuxtLink 
              to="/contacto"
              class="block w-full mt-8 px-6 py-4 bg-luxury-gold text-black text-center font-bold uppercase tracking-widest hover:bg-luxury-gold/90 transition-colors"
            >
              Solicitar Presupuesto
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const experiencias = {
  'safari-lujo': {
    name: 'Safari de Lujo',
    slug: 'safari-lujo',
    description: 'Experiencias premium con lodges exclusivos, guías privados y servicios de clase mundial.',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $5,000',
    duration: '7-14 días',
    content: 'Nuestros safaris de lujo están diseñados para los viajeros más exigentes. Cada detalle está cuidadosamente planificado para ofrecer una experiencia inolvidable, desde los lodges más exclusivos hasta los guías más experimentados.',
    includes: [
      'Alojamiento en lodges de lujo',
      'Guías privados expertos',
      'Vehículos de safari exclusivos',
      'Comidas gourmet',
      'Bebidas premium incluidas',
      'Experiencias privadas',
      'Traslados en avioneta'
    ]
  },
  'gran-migracion': {
    name: 'Gran Migración',
    slug: 'gran-migracion',
    description: 'Presencia el mayor espectáculo natural del mundo: la migración anual de millones de animales.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $6,500',
    duration: '8-12 días',
    content: 'La Gran Migración es uno de los espectáculos naturales más impresionantes del planeta. Cada año, más de dos millones de animales migran a través del Serengeti y el Masai Mara en busca de pastos frescos.',
    includes: [
      'Seguimiento de la migración',
      'Alojamiento en campamentos móviles',
      'Guías especializados en migración',
      'Balloon safari incluido',
      'Fotografía de vida silvestre',
      'Experiencias culturales Masai'
    ]
  },
  'big-five': {
    name: 'Big Five',
    slug: 'big-five',
    description: 'Encuentra los cinco grandes: león, leopardo, elefante, búfalo y rinoceronte en su hábitat natural.',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $4,500',
    duration: '7-10 días',
    content: 'El Big Five es el santo grial de los safaris africanos. Nuestros itinerarios están diseñados para maximizar las oportunidades de avistamiento de estos cinco animales icónicos en sus hábitats naturales.',
    includes: [
      'Safaris en múltiples reservas',
      'Guías expertos en rastreo',
      'Safaris al amanecer y atardecer',
      'Safaris a pie',
      'Alojamiento en reservas privadas',
      'Garantía de avistamiento'
    ]
  },
  'safari-fotografico': {
    name: 'Safari Fotográfico',
    slug: 'safari-fotografico',
    description: 'Diseñado para fotógrafos, con vehículos especializados y guías expertos en fotografía de vida silvestre.',
    image: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $5,200',
    duration: '10-14 días',
    content: 'Nuestros safaris fotográficos están especialmente diseñados para fotógrafos apasionados. Con vehículos adaptados, horarios flexibles y guías expertos en comportamiento animal, capturarás las mejores imágenes de la vida silvestre africana.',
    includes: [
      'Vehículos modificados para fotografía',
      'Guías especializados en fotografía',
      'Horarios flexibles para la mejor luz',
      'Equipos de fotografía disponibles',
      'Talleres de fotografía nocturna',
      'Acceso a escondites fotográficos',
      'Edición y procesado de imágenes'
    ]
  },
  'safari-romantico': {
    name: 'Safari Romántico',
    slug: 'safari-romantico',
    description: 'Experiencias íntimas perfectas para parejas, con cenas privadas bajo las estrellas y lodges románticos.',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $6,800',
    duration: '7-10 días',
    content: 'Diseñado para celebrar el amor en el escenario más romántico del mundo. Desde cenas privadas bajo las estrellas hasta suites de luna de miel con vistas panorámicas, cada momento está pensado para crear recuerdos únicos.',
    includes: [
      'Suites privadas con vistas panorámicas',
      'Cenas privadas bajo las estrellas',
      'Safaris privados para dos',
      'Spa y tratamientos de pareja',
      'Picnics románticos en la sabana',
      'Champagne y cenas gourmet',
      'Fotografía profesional de pareja'
    ]
  },
  'safari-familiar': {
    name: 'Safari Familiar',
    slug: 'safari-familiar',
    description: 'Aventuras diseñadas para familias, con actividades educativas y alojamientos familiares.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $3,800',
    duration: '7-12 días',
    content: 'Nuestros safaris familiares combinan aventura y educación, creando experiencias inolvidables para toda la familia. Con actividades adaptadas para niños y alojamientos pensados para familias.',
    includes: [
      'Alojamientos familiares espaciosos',
      'Actividades educativas para niños',
      'Guías especializados en familias',
      'Safaris adaptados para todas las edades',
      'Actividades culturales interactivas',
      'Menús infantiles disponibles',
      'Programa Junior Ranger'
    ]
  },
  'safari-aventura': {
    name: 'Safari Aventura',
    slug: 'safari-aventura',
    description: 'Para los más intrépidos: safaris a pie, camping bajo las estrellas y experiencias de inmersión total.',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $4,200',
    duration: '10-16 días',
    content: 'Para los verdaderos aventureros que buscan una conexión profunda con la naturaleza africana. Safaris a pie, camping bajo las estrellas y experiencias que te pondrán en contacto directo con la vida silvestre.',
    includes: [
      'Safaris a pie con guardas armados',
      'Camping bajo las estrellas',
      'Seguimiento de animales',
      'Experiencias de supervivencia',
      'Caminatas nocturnas',
      'Participación en conservación',
      'Encuentros con comunidades locales'
    ]
  },
  'trekking-gorilas': {
    name: 'Trekking Gorilas',
    slug: 'trekking-gorilas',
    description: 'Encuentros íntimos y transformadores con gorilas de montaña en los volcanes de Ruanda y Uganda.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $7,500',
    duration: '5-8 días',
    content: 'Una experiencia transformadora que te llevará cara a cara con los gorilas de montaña en los volcanes de Virunga. Solo quedan menos de 1000 gorilas de montaña en el mundo, haciendo de este encuentro algo verdaderamente especial.',
    includes: [
      'Permisos de trekking de gorilas',
      'Guías expertos locales',
      'Equipo de trekking',
      'Alojamiento cerca de los parques',
      'Visitas a centros de conservación',
      'Encuentros con comunidades locales',
      'Contribución a conservación'
    ]
  }
}

const experiencia = experiencias[slug]

if (!experiencia) {
  throw createError({ statusCode: 404, statusMessage: 'Experiencia no encontrada' })
}

const breadcrumbItems = [
  { label: 'Experiencias', to: '/experiencias' },
  { label: experiencia.name }
]

useHead({
  title: `${experiencia.name} | Anasa Viajes`,
  meta: [
    { name: 'description', content: experiencia.description }
  ],
  link: [
    { rel: 'canonical', href: `https://anasaviajes.com/experiencias/${experiencia.slug}` }
  ]
})
</script>


