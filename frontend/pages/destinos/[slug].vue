<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <SchemaMarkup :schema="schema" />
    <Breadcrumbs :items="breadcrumbItems" />
    
    <div v-if="destino" class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <!-- Hero Image -->
      <div class="relative h-[60vh] mb-16 overflow-hidden">
        <img 
          :src="destino.image" 
          :alt="destino.name"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-luxury-dark via-black/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-12">
          <h1 class="text-5xl md:text-7xl font-serif text-white mb-4">
            {{ destino.name }}
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl">
            {{ destino.description }}
          </p>
        </div>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div class="lg:col-span-2">
          <div class="prose prose-invert max-w-none">
            <h2 class="text-3xl font-serif text-white mb-6">Sobre {{ destino.name }}</h2>
            <p class="text-gray-300 leading-relaxed mb-6">
              {{ destino.content }}
            </p>
            
            <h3 class="text-2xl font-serif text-white mb-4 mt-8">Qué ver y hacer</h3>
            <ul class="space-y-3 text-gray-300">
              <li v-for="activity in destino.activities" :key="activity" class="flex items-start">
                <svg class="w-5 h-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                {{ activity }}
              </li>
            </ul>

            <h3 class="text-2xl font-serif text-white mb-4 mt-8">Mejor época para visitar</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ destino.bestTime }}
            </p>
          </div>
        </div>

        <div class="lg:col-span-1">
          <div class="bg-luxury-black border border-white/10 p-8 sticky top-24">
            <h3 class="text-xl font-serif text-white mb-6">Información del Destino</h3>
            <div class="space-y-4 text-sm">
              <div>
                <span class="text-gray-400 uppercase tracking-wider text-xs">Precio desde</span>
                <p class="text-2xl text-luxury-gold font-serif mt-1">{{ destino.price }}</p>
              </div>
              <div>
                <span class="text-gray-400 uppercase tracking-wider text-xs">Duración recomendada</span>
                <p class="text-white mt-1">{{ destino.duration }}</p>
              </div>
              <div>
                <span class="text-gray-400 uppercase tracking-wider text-xs">Mejor época</span>
                <p class="text-white mt-1">{{ destino.season }}</p>
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

const destinos = {
  sudafrica: {
    name: 'Sudáfrica',
    slug: 'sudafrica',
    countryCode: 'ZA',
    description: 'La combinación perfecta de safari de clase mundial, viñedos históricos y la cosmopolita Cape Town.',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $3,200',
    duration: '7-14 días',
    season: 'Mayo - Septiembre',
    content: 'Sudáfrica ofrece una experiencia única que combina la emoción del safari con la sofisticación urbana. Desde el Parque Nacional Kruger, uno de los mejores lugares del mundo para avistar los Big Five, hasta los viñedos de Stellenbosch y la vibrante ciudad de Cape Town, Sudáfrica es un destino que lo tiene todo.',
    activities: [
      'Safari en el Parque Nacional Kruger',
      'Explorar Cape Town y Table Mountain',
      'Ruta de los Viñedos en Stellenbosch',
      'Garden Route y la Costa Salvaje',
      'Avistamiento de ballenas en Hermanus',
      'Visita a Robben Island'
    ],
    bestTime: 'La mejor época para visitar Sudáfrica es durante el invierno seco (mayo a septiembre), cuando los animales se concentran alrededor de las fuentes de agua y el clima es más fresco. El verano (diciembre a febrero) es ideal para Cape Town y la Garden Route.'
  },
  kenia: {
    name: 'Kenia',
    slug: 'kenia',
    countryCode: 'KE',
    description: 'Encuentros culturales con los Masai y los Big Five en reservas privadas con vistas al Kilimanjaro.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $4,800',
    duration: '7-10 días',
    season: 'Julio - Octubre',
    content: 'Kenia es el hogar del legendario Masai Mara, donde cada año tiene lugar la Gran Migración, considerada uno de los espectáculos naturales más impresionantes del planeta. Además de sus increíbles safaris, Kenia ofrece encuentros culturales auténticos con las comunidades Masai.',
    activities: [
      'Gran Migración en Masai Mara',
      'Safari en Amboseli con vistas al Kilimanjaro',
      'Encuentros culturales con los Masai',
      'Safari en Samburu',
      'Lago Nakuru para avistamiento de flamencos',
      'Balloon safari al amanecer'
    ],
    bestTime: 'La mejor época para visitar Kenia es durante la temporada seca (julio a octubre), cuando la Gran Migración alcanza su punto máximo en el Masai Mara. Esta es también la mejor época para avistar animales, ya que se concentran alrededor de las fuentes de agua.'
  },
  tanzania: {
    name: 'Tanzania',
    slug: 'tanzania',
    countryCode: 'TZ',
    description: 'Testimonio de la mayor migración de mamíferos del mundo en el Serengeti y el cráter del Ngorongoro.',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $5,500',
    duration: '8-12 días',
    season: 'Junio - Octubre',
    content: 'Tanzania alberga algunos de los parques nacionales más famosos de África, incluyendo el Serengeti, donde tiene lugar la Gran Migración, y el cráter del Ngorongoro, una caldera volcánica que alberga una increíble concentración de vida silvestre.',
    activities: [
      'Gran Migración en el Serengeti',
      'Cráter del Ngorongoro',
      'Safari en Tarangire',
      'Lago Manyara',
      'Zanzíbar para relajación post-safari',
      'Caminatas con chimpancés en Mahale'
    ],
    bestTime: 'La mejor época para visitar Tanzania es durante la temporada seca (junio a octubre), cuando la Gran Migración está en su apogeo. Diciembre a marzo también es excelente para el sur del Serengeti durante el parto de las cebras y ñus.'
  },
  botswana: {
    name: 'Botswana',
    slug: 'botswana',
    countryCode: 'BW',
    description: 'Safaris acuáticos en mokoro a través de un ecosistema virgen y la mayor concentración de elefantes.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $7,500',
    duration: '10-14 días',
    season: 'Mayo - Octubre',
    content: 'Botswana es sinónimo de exclusividad y conservación. El Delta del Okavango, Patrimonio de la Humanidad, ofrece safaris acuáticos únicos en mokoro (canoas tradicionales), mientras que Chobe alberga la mayor concentración de elefantes de África.',
    activities: [
      'Safari acuático en mokoro en el Delta del Okavango',
      'Safari en Chobe para ver elefantes',
      'Reserva de Moremi',
      'Desierto del Kalahari',
      'Safari a pie en reservas privadas',
      'Vuelos en helicóptero sobre el delta'
    ],
    bestTime: 'La mejor época para visitar Botswana es durante la temporada seca (mayo a octubre), cuando el Delta del Okavango está en su máximo esplendor y los animales se concentran alrededor de las fuentes de agua permanentes.'
  },
  namibia: {
    name: 'Namibia',
    slug: 'namibia',
    countryCode: 'NA',
    description: 'Paisajes surrealistas donde el desierto más antiguo se encuentra con el mar. Dunas rojas y cielos infinitos.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $4,200',
    duration: '10-14 días',
    season: 'Mayo - Octubre',
    content: 'Namibia es un país de contrastes extremos: desde las dunas rojas de Sossusvlei hasta la Skeleton Coast, donde el desierto se encuentra con el océano. Es un destino perfecto para fotógrafos y amantes de paisajes únicos.',
    activities: [
      'Dunas de Sossusvlei al amanecer',
      'Skeleton Coast y barcos naufragados',
      'Parque Nacional Etosha',
      'Twyfelfontein con arte rupestre',
      'Encuentros con la tribu Himba',
      'Vuelos escénicos sobre el desierto'
    ],
    bestTime: 'La mejor época para visitar Namibia es durante la temporada seca (mayo a octubre), cuando las temperaturas son más moderadas y los animales se concentran alrededor de las fuentes de agua en Etosha.'
  },
  ruanda: {
    name: 'Ruanda',
    slug: 'ruanda',
    countryCode: 'RW',
    description: 'Trekking de alta montaña en los volcanes Virunga para encuentros íntimos y transformadores con gorilas.',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $6,000',
    duration: '5-7 días',
    season: 'Junio - Septiembre, Diciembre - Febrero',
    content: 'Ruanda, conocida como la "Tierra de las Mil Colinas", es el hogar de los gorilas de montaña en peligro de extinción. El trekking para ver estos majestuosos primates es una experiencia transformadora que pocos olvidan.',
    activities: [
      'Trekking de gorilas de montaña',
      'Trekking de chimpancés',
      'Parque Nacional de los Volcanes',
      'Lago Kivu',
      'Visita a Kigali y memorial del genocidio',
      'Golden Monkey trekking'
    ],
    bestTime: 'La mejor época para visitar Ruanda es durante las temporadas secas (junio a septiembre y diciembre a febrero), cuando las condiciones para el trekking son más favorables y hay menos lluvia.'
  },
  madagascar: {
    name: 'Madagascar',
    slug: 'madagascar',
    countryCode: 'MG',
    description: 'Un mundo aparte. Lemures, selvas tropicales y playas vírgenes en la isla roja.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop',
    price: 'Desde $3,900',
    duration: '10-14 días',
    season: 'Abril - Noviembre',
    content: 'Madagascar es un mundo completamente diferente, con el 90% de su flora y fauna endémica. Desde los famosos lémures hasta los baobabs gigantes y las playas paradisíacas, Madagascar ofrece una experiencia única.',
    activities: [
      'Avistamiento de lémures',
      'Avenida de los Baobabs',
      'Parque Nacional de Andasibe',
      'Isla de Nosy Be',
      'Tsingy de Bemaraha',
      'Playas vírgenes de la costa este'
    ],
    bestTime: 'La mejor época para visitar Madagascar es durante la temporada seca (abril a noviembre), cuando el clima es más agradable y las condiciones para el trekking y la observación de vida silvestre son óptimas.'
  }
}

const destino = destinos[slug]

if (!destino) {
  throw createError({ statusCode: 404, statusMessage: 'Destino no encontrado' })
}

const schema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "TouristDestination",
  "name": destino.name,
  "description": destino.description,
  "url": `https://anasaviajes.com/destinos/${destino.slug}`,
  "image": destino.image,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": destino.countryCode
  }
}))

const breadcrumbItems = computed(() => [
  { label: 'Destinos', to: '/destinos' },
  { label: destino.name }
])

useHead({
  title: `${destino.name} | Safaris de Lujo | Anasa Viajes`,
  meta: [
    { name: 'description', content: destino.description },
    { name: 'keywords', content: `safari ${destino.name.toLowerCase()}, viajes ${destino.name.toLowerCase()}, turismo ${destino.name.toLowerCase()}, ${destino.name.toLowerCase()} lujo` }
  ],
  link: [
    { rel: 'canonical', href: `https://anasaviajes.com/destinos/${destino.slug}` }
  ]
})
</script>

