<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <SchemaMarkup :schema="schema" />
    <Breadcrumbs :items="breadcrumbItems" />
    
    <div v-if="destino" class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <!-- Hero Image -->
      <div class="relative h-[60vh] mb-16 overflow-hidden">
        <NuxtImg 
          :src="destino.image" 
          :alt="`Safari de lujo en ${destino.name} - ${destino.description} | Anasa Viajes expediciones premium`"
          class="w-full h-full object-cover"
          loading="lazy"
          format="webp"
          quality="85"
          sizes="sm:100vw md:100vw lg:100vw"
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

            <!-- Contenido expandido específico para Sudáfrica -->
            <div v-if="destino.slug === 'sudafrica'" class="mt-8 space-y-8">
              <section>
                <h2 class="text-3xl font-serif text-white mb-6">Parque Nacional Kruger: El Corazón del Safari Sudafricano</h2>
                <p class="text-gray-300 leading-relaxed mb-4">
                  El <strong>Parque Nacional Kruger</strong> es uno de los destinos de safari más prestigiosos del mundo. Con sus 20,000 km² de vida silvestre protegida, alberga la mayor concentración de especies africanas, incluyendo los famosos <strong>Big Five</strong>: león, leopardo, elefante, rinoceronte y búfalo del Cabo.
                </p>
                <p class="text-gray-300 leading-relaxed mb-4">
                  Nuestros safaris de lujo en Kruger incluyen <strong>lodges exclusivos</strong> como Singita, &Beyond, y Royal Malewane, donde cada habitación ofrece vistas panorámicas a la sabana africana y servicios de <strong>mayordomo personal</strong>.
                </p>
                
                <h3 class="text-2xl font-serif text-white mb-4 mt-6">¿Qué Vida Silvestre Puedes Ver en Kruger?</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div class="bg-luxury-black/50 p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-lg mb-3">Los Big Five</h4>
                    <ul class="text-gray-300 space-y-2 text-sm">
                      <li>• <strong>Leones:</strong> Más de 1,500 ejemplares en manadas de hasta 20 individuos</li>
                      <li>• <strong>Leopardos:</strong> Los más esquivos, mejores avistamientos al amanecer</li>
                      <li>• <strong>Elefantes:</strong> Más de 12,000 en el parque, familias enteras</li>
                      <li>• <strong>Rinocerontes:</strong> Blancos y negros, especies en recuperación</li>
                      <li>• <strong>Búfalos:</strong> Manadas de cientos de ejemplares</li>
                    </ul>
                  </div>
                  <div class="bg-luxury-black/50 p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-lg mb-3">Otros Animales Icónicos</h4>
                    <ul class="text-gray-300 space-y-2 text-sm">
                      <li>• <strong>Guepardos:</strong> Los felinos más rápidos del mundo</li>
                      <li>• <strong>Licaones:</strong> Los perros salvajes africanos más raros</li>
                      <li>• <strong>Hipopótamos:</strong> En los ríos Sabie y Olifants</li>
                      <li>• <strong>Jirafas:</strong> Las torres elegantes de la sabana</li>
                      <li>• <strong>+500 especies de aves:</strong> Paraíso para los birdwatchers</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 class="text-3xl font-serif text-white mb-6">Ciudad del Cabo: Donde el Lujo se Encuentra con la Naturaleza</h2>
                <p class="text-gray-300 leading-relaxed mb-4">
                  <strong>Ciudad del Cabo</strong> combina perfectamente la experiencia de safari con la sofisticación urbana. Situada entre la <strong>Montaña de la Mesa</strong> y dos océanos, ofrece paisajes únicos en el mundo.
                </p>
                
                <h3 class="text-2xl font-serif text-white mb-4">Experiencias Exclusivas en Ciudad del Cabo</h3>
                <div class="space-y-4 mb-6">
                  <div class="bg-luxury-black/30 p-4 border-l-2 border-luxury-gold">
                    <h4 class="text-white font-serif mb-2">Wine Lands de Stellenbosch & Franschhoek</h4>
                    <p class="text-gray-300 text-sm">Degustaciones privadas en bodegas históricas como Klein Constantia y Boschendal, con maridajes de chef y helicóptero privado.</p>
                  </div>
                  <div class="bg-luxury-black/30 p-4 border-l-2 border-luxury-gold">
                    <h4 class="text-white font-serif mb-2">Avistamiento de Tiburones Blancos</h4>
                    <p class="text-gray-300 text-sm">Buceo en jaula con los depredadores más temidos del océano en Gansbaai, con yate privado y chef a bordo.</p>
                  </div>
                  <div class="bg-luxury-black/30 p-4 border-l-2 border-luxury-gold">
                    <h4 class="text-white font-serif mb-2">Pingüinos de Boulders Beach</h4>
                    <p class="text-gray-300 text-sm">Encuentros íntimos con la única colonia de pingüinos africanos en playas privadas con guía especializado.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 class="text-3xl font-serif text-white mb-6">Temporadas y Clima: Cuándo Viajar a Sudáfrica</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div class="bg-luxury-black/50 p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-lg mb-3">Temporada Seca (Mayo - Septiembre)</h4>
                    <p class="text-gray-300 text-sm mb-3"><strong>Mejor época para safaris</strong> - Los animales se congregan en fuentes de agua, facilitando avistamientos.</p>
                    <ul class="text-gray-300 space-y-1 text-sm">
                      <li>• <strong>Temperatura:</strong> 10-25°C, noches frías</li>
                      <li>• <strong>Lluvia:</strong> Mínima, cielos despejados</li>
                      <li>• <strong>Vegetación:</strong> Menos densa, mejor visibilidad</li>
                      <li>• <strong>Precios:</strong> Alta temporada, reservar con anticipación</li>
                    </ul>
                  </div>
                  <div class="bg-luxury-black/50 p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-lg mb-3">Temporada Verde (Octubre - Abril)</h4>
                    <p class="text-gray-300 text-sm mb-3"><strong>Temporada de nacimientos</strong> - Crías de animales y paisajes verdes exuberantes.</p>
                    <ul class="text-gray-300 space-y-1 text-sm">
                      <li>• <strong>Temperatura:</strong> 20-35°C, días calurosos</li>
                      <li>• <strong>Lluvia:</strong> Tormentas vespertinas breves</li>
                      <li>• <strong>Vida silvestre:</strong> Animales más dispersos</li>
                      <li>• <strong>Ventajas:</strong> Menos turistas, precios mejores</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 class="text-3xl font-serif text-white mb-6">Lodges de Ultra Lujo en Sudáfrica</h2>
                <p class="text-gray-300 leading-relaxed mb-4">
                  Sudáfrica alberga algunos de los <strong>lodges más exclusivos del mundo</strong>, donde el servicio impecable se combina con la aventura del safari.
                </p>
                
                <div class="space-y-6">
                  <div class="bg-gradient-to-r from-luxury-black to-luxury-dark p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-xl mb-3">Singita Kruger National Park</h4>
                    <p class="text-gray-300 text-sm mb-3">El epítome del safari de lujo con solo 15 suites, cada una con piscina privada y mayordomo personal. Desde $2,500/noche.</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Piscina Privada</span>
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Mayordomo 24/7</span>
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Chef Privado</span>
                    </div>
                  </div>
                  
                  <div class="bg-gradient-to-r from-luxury-black to-luxury-dark p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-xl mb-3">Royal Malewane</h4>
                    <p class="text-gray-300 text-sm mb-3">Elegancia colonial en Greater Kruger con spa de lujo y actividades personalizadas. Desde $1,800/noche.</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Spa de Lujo</span>
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Safaris Nocturnos</span>
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Wine Cellar</span>
                    </div>
                  </div>

                  <div class="bg-gradient-to-r from-luxury-black to-luxury-dark p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-xl mb-3">&Beyond Phinda Private Game Reserve</h4>
                    <p class="text-gray-300 text-sm mb-3">Reserva privada en KwaZulu-Natal con 7 ecosistemas diferentes y playa exclusiva. Desde $1,200/noche.</p>
                    <div class="flex flex-wrap gap-2">
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">7 Ecosistemas</span>
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Acceso a Playa</span>
                      <span class="text-xs bg-luxury-gold/20 text-luxury-gold px-2 py-1 rounded">Comunidad Local</span>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 class="text-3xl font-serif text-white mb-6">Itinerarios Recomendados</h2>
                
                <div class="space-y-6">
                  <div class="bg-luxury-black/50 p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-lg mb-3">Safari Clásico (7 días) - Desde $8,500</h4>
                    <ul class="text-gray-300 space-y-2 text-sm">
                      <li><strong>Días 1-2:</strong> Llegada Ciudad del Cabo, tour wine lands Stellenbosch</li>
                      <li><strong>Días 3-5:</strong> Safari privado Kruger National Park, lodge de lujo</li>
                      <li><strong>Días 6-7:</strong> Hermanus para avistamiento ballenas, vuelo de regreso</li>
                    </ul>
                  </div>
                  
                  <div class="bg-luxury-black/50 p-6 border border-white/10">
                    <h4 class="text-luxury-gold font-serif text-lg mb-3">Gran Safari Sudáfrica (14 días) - Desde $18,500</h4>
                    <ul class="text-gray-300 space-y-2 text-sm">
                      <li><strong>Días 1-3:</strong> Ciudad del Cabo: Montaña Mesa, wine tours, Boulders Beach</li>
                      <li><strong>Días 4-8:</strong> Kruger National Park: Multiple lodges, safaris diversos</li>
                      <li><strong>Días 9-11:</strong> Madikwe Game Reserve: Safari walking, cultura local</li>
                      <li><strong>Días 12-14:</strong> Hermanus y Garden Route: Ballenas, paisajes</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 class="text-3xl font-serif text-white mb-6">¿Por Qué Elegir Sudáfrica para tu Safari de Lujo?</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="text-center">
                    <div class="text-luxury-gold text-2xl font-serif mb-2">97%</div>
                    <p class="text-gray-300 text-sm">Probabilidad de ver los Big Five en Kruger</p>
                  </div>
                  <div class="text-center">
                    <div class="text-luxury-gold text-2xl font-serif mb-2">300+</div>
                    <p class="text-gray-300 text-sm">Días de sol al año en Ciudad del Cabo</p>
                  </div>
                  <div class="text-center">
                    <div class="text-luxury-gold text-2xl font-serif mb-2">12</div>
                    <p class="text-gray-300 text-sm">Meses ideales para viajar (clima templado)</p>
                  </div>
                </div>
              </section>
            </div>
            
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
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
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

const currentUrl = computed(() => `https://anasaviajes.com/destinos/${destino.slug}`)
const imageUrl = computed(() => destino.image.startsWith('http') ? destino.image : `https://anasaviajes.com${destino.image}`)

useHead({
  title: `Safari en ${destino.name} | ${destino.price} | Anasa Viajes`,
  meta: [
    { 
      name: 'description', 
      content: `Safari de lujo en ${destino.name}. ${destino.description} Duración: ${destino.duration}. Mejor época: ${destino.season}. Precio desde ${destino.price}.` 
    },
    { 
      name: 'keywords', 
      content: `safari ${destino.name.toLowerCase()}, viajes ${destino.name.toLowerCase()}, turismo ${destino.name.toLowerCase()}, ${destino.name.toLowerCase()} lujo, safari ${destino.countryCode}, big five ${destino.name.toLowerCase()}` 
    },
    { property: 'og:title', content: `Safari de Lujo en ${destino.name} | Anasa Viajes` },
    { property: 'og:description', content: destino.description },
    { property: 'og:image', content: imageUrl.value },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `Safari en ${destino.name} | Anasa Viajes` },
    { name: 'twitter:description', content: destino.description },
    { name: 'twitter:image', content: imageUrl.value }
  ],
  link: [
    { rel: 'canonical', href: currentUrl.value },
    { rel: 'alternate', hreflang: 'es', href: currentUrl.value },
    { rel: 'alternate', hreflang: 'en', href: `https://anasaviajes.com/en/destinos/${destino.slug}` },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl.value }
  ]
})
</script>

