<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <TravelPackageSchema :package="packageSchema" />
    <Breadcrumbs :items="breadcrumbItems" />
    
    <div v-if="tipoViaje" class="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <!-- Hero Section -->
      <div class="relative h-[50vh] mb-16 overflow-hidden rounded-lg">
        <img 
          :src="tipoViaje.image" 
          :alt="`${tipoViaje.name} en África - ${tipoViaje.description}`"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-12">
          <div class="max-w-4xl">
            <h1 class="text-4xl md:text-6xl font-serif text-white mb-4">
              {{ tipoViaje.name }}
            </h1>
            <p class="text-xl text-gray-300 mb-6">
              {{ tipoViaje.description }}
            </p>
            <div class="flex flex-wrap gap-4 text-sm">
              <span class="px-4 py-2 bg-luxury-gold text-black font-bold rounded">
                {{ tipoViaje.duration }}
              </span>
              <span class="px-4 py-2 bg-white/10 text-white border border-white/20 rounded">
                {{ tipoViaje.price }}
              </span>
              <span class="px-4 py-2 bg-white/10 text-white border border-white/20 rounded">
                {{ tipoViaje.destinations }} destinos
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2">
          <!-- Overview -->
          <section class="mb-12">
            <h2 class="text-3xl font-serif text-white mb-6">Descripción del Viaje</h2>
            <div v-html="tipoViaje.content" class="prose prose-invert max-w-none"></div>
          </section>

          <!-- Itinerary -->
          <section class="mb-12">
            <h2 class="text-3xl font-serif text-white mb-6">Itinerario Sugerido</h2>
            <div class="space-y-6">
              <div 
                v-for="(day, index) in tipoViaje.itinerary" 
                :key="index"
                class="bg-luxury-black border border-white/10 p-6 rounded-lg"
              >
                <div class="flex items-start">
                  <div class="flex-shrink-0 w-12 h-12 bg-luxury-gold text-black rounded-full flex items-center justify-center font-bold mr-4">
                    {{ index + 1 }}
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-serif text-white mb-2">{{ day.title }}</h3>
                    <p class="text-gray-400 text-sm mb-3">{{ day.location }}</p>
                    <p class="text-gray-300">{{ day.description }}</p>
                    <ul v-if="day.activities" class="mt-3 space-y-1">
                      <li 
                        v-for="activity in day.activities" 
                        :key="activity"
                        class="text-sm text-gray-400 flex items-center"
                      >
                        <svg class="w-3 h-3 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        {{ activity }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- What's Included -->
          <section class="mb-12">
            <h2 class="text-3xl font-serif text-white mb-6">Qué Incluye</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg text-luxury-gold mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Incluido
                </h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li v-for="item in tipoViaje.included" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg text-red-400 mb-3 flex items-center">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                  </svg>
                  No Incluido
                </h3>
                <ul class="space-y-2 text-sm text-gray-300">
                  <li v-for="item in tipoViaje.notIncluded" :key="item">{{ item }}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <!-- Booking Card -->
          <div class="bg-luxury-black border border-white/10 p-8 rounded-lg sticky top-24 mb-8">
            <h3 class="text-2xl font-serif text-white mb-6">Reserva tu Safari</h3>
            
            <div class="space-y-4 mb-6">
              <div>
                <span class="text-sm text-gray-400 uppercase tracking-wider">Precio desde</span>
                <p class="text-3xl text-luxury-gold font-serif">{{ tipoViaje.price }}</p>
                <span class="text-xs text-gray-400">por persona</span>
              </div>
              
              <div>
                <span class="text-sm text-gray-400 uppercase tracking-wider">Duración</span>
                <p class="text-lg text-white">{{ tipoViaje.duration }}</p>
              </div>
              
              <div>
                <span class="text-sm text-gray-400 uppercase tracking-wider">Mejor época</span>
                <p class="text-lg text-white">{{ tipoViaje.bestTime }}</p>
              </div>
              
              <div>
                <span class="text-sm text-gray-400 uppercase tracking-wider">Grupo máximo</span>
                <p class="text-lg text-white">{{ tipoViaje.maxGroupSize }} personas</p>
              </div>
            </div>

            <div class="space-y-3">
              <NuxtLink 
                to="/diseñador-ia"
                class="block w-full px-6 py-4 bg-luxury-gold text-black text-center font-bold uppercase tracking-widest hover:bg-luxury-gold/90 transition-colors"
              >
                Diseñar mi Viaje
              </NuxtLink>
              
              <NuxtLink 
                to="/contacto"
                class="block w-full px-6 py-4 border border-white text-white text-center font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                Solicitar Presupuesto
              </NuxtLink>
            </div>
          </div>

          <!-- Related Destinations -->
          <div class="bg-luxury-black border border-white/10 p-8 rounded-lg">
            <h3 class="text-xl font-serif text-white mb-4">Destinos Principales</h3>
            <div class="space-y-3">
              <NuxtLink
                v-for="destination in tipoViaje.relatedDestinations"
                :key="destination.slug"
                :to="`/destinos/${destination.slug}`"
                class="block p-3 hover:bg-white/5 transition-colors rounded"
              >
                <div class="flex items-center">
                  <img 
                    :src="destination.image" 
                    :alt="destination.name"
                    class="w-12 h-12 object-cover rounded mr-3"
                  />
                  <div>
                    <h4 class="text-sm font-medium text-white">{{ destination.name }}</h4>
                    <p class="text-xs text-gray-400">{{ destination.highlight }}</p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const tiposViaje = {
  'safari-7-dias': {
    name: 'Safari de 7 Días',
    slug: 'safari-7-dias',
    description: 'La introducción perfecta a África. Una semana completa para experimentar lo mejor de la vida salvaje africana.',
    duration: '7 días / 6 noches',
    price: 'Desde €2,800',
    destinations: '2-3',
    bestTime: 'Mayo - Octubre',
    maxGroupSize: '8',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070&auto=format&fit=crop',
    content: `
      <p>Nuestro safari de 7 días está diseñado para aquellos que buscan una primera experiencia completa en África o tienen tiempo limitado pero no quieren comprometer la calidad.</p>
      
      <p>Este itinerario cuidadosamente planificado combina los destinos más icónicos con tiempo suficiente para relajarse y absorber la magia del continente africano.</p>
      
      <h3>Características Destacadas</h3>
      <ul>
        <li>Equilibrio perfecto entre actividad y relajación</li>
        <li>Alojamiento en lodges de lujo seleccionados</li>
        <li>Máximo 2-3 destinos para evitar fatiga de viaje</li>
        <li>Todos los traslados incluidos</li>
      </ul>
    `,
    itinerary: [
      {
        title: 'Llegada y Primer Safari',
        location: 'Parque Nacional Principal',
        description: 'Llegada al lodge, almuerzo de bienvenida y primer safari vespertino.',
        activities: ['Transfer desde aeropuerto', 'Safari de introducción', 'Cena de bienvenida']
      },
      {
        title: 'Safari Completo',
        location: 'Reserva Principal',
        description: 'Safari matutino al amanecer y vespertino, con tiempo libre en el lodge.',
        activities: ['Safari al amanecer', 'Brunch en el lodge', 'Safari vespertino', 'Cena bajo las estrellas']
      },
      {
        title: 'Día de Exploración',
        location: 'Segunda Reserva',
        description: 'Traslado a segunda ubicación, safari de llegada y actividades opcionales.',
        activities: ['Traslado escénico', 'Safari de tarde', 'Actividades culturales opcionales']
      },
      {
        title: 'Safari Intensivo',
        location: 'Segunda Reserva',
        description: 'Día completo de safaris con picnic en el bush.',
        activities: ['Safari matutino extendido', 'Picnic en la reserva', 'Safari vespertino']
      },
      {
        title: 'Experiencias Especiales',
        location: 'Reserva Principal',
        description: 'Safari a pie, visita cultural o actividades de conservación.',
        activities: ['Safari a pie', 'Visita a centro de conservación', 'Encuentro cultural local']
      },
      {
        title: 'Último Safari',
        location: 'Parque Nacional',
        description: 'Safari final matutino y preparación para el viaje de regreso.',
        activities: ['Safari de despedida', 'Brunch final', 'Tiempo libre en el lodge']
      },
      {
        title: 'Partida',
        location: 'Aeropuerto',
        description: 'Transfer al aeropuerto y vuelo de regreso.',
        activities: ['Desayuno temprano', 'Transfer al aeropuerto', 'Vuelo de regreso']
      }
    ],
    included: [
      'Alojamiento en lodges de lujo',
      'Todas las comidas y bebidas',
      'Safaris con guía experto',
      'Traslados en vehículo 4x4',
      'Tarifas de parques nacionales',
      'Seguro de safari'
    ],
    notIncluded: [
      'Vuelos internacionales',
      'Visas y documentación',
      'Propinas para staff',
      'Bebidas premium',
      'Actividades opcionales',
      'Seguro de viaje personal'
    ],
    relatedDestinations: [
      {
        name: 'Sudáfrica',
        slug: 'sudafrica',
        highlight: 'Kruger + Garden Route',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Kenia',
        slug: 'kenia',
        highlight: 'Masai Mara + Amboseli',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=300&auto=format&fit=crop'
      }
    ]
  },
  'safari-10-dias': {
    name: 'Safari de 10 Días',
    slug: 'safari-10-dias',
    description: 'El equilibrio perfecto entre profundidad y variedad. Tiempo suficiente para explorar múltiples ecosistemas y culturas.',
    duration: '10 días / 9 noches',
    price: 'Desde €4,200',
    destinations: '3-4',
    bestTime: 'Abril - Octubre',
    maxGroupSize: '12',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop',
    content: `
      <p>El safari de 10 días representa el punto dulce para la mayoría de viajeros. Ofrece tiempo suficiente para visitar múltiples destinos sin prisa, permitiendo una inmersión más profunda en la cultura africana y sus ecosistemas.</p>
      
      <p>Este itinerario permite experimentar diferentes tipos de safari: desde los big game drives hasta safaris acuáticos, caminatas y encuentros culturales auténticos.</p>
      
      <h3>Ventajas del Safari de 10 Días</h3>
      <ul>
        <li>Visita a 3-4 destinos complementarios</li>
        <li>Variedad de ecosistemas y experiencias</li>
        <li>Tiempo para encuentros culturales profundos</li>
        <li>Posibilidad de incluir extensión de playa</li>
      </ul>
    `,
    itinerary: [
      {
        title: 'Llegada a África',
        location: 'Ciudad Principal',
        description: 'Llegada, transfer al lodge urbano o primer destino de safari.',
        activities: ['Llegada al aeropuerto', 'Transfer y check-in', 'Briefing de safari', 'Cena de bienvenida']
      },
      {
        title: 'Primer Destino - Día 1',
        location: 'Reserva Principal',
        description: 'Primer contacto con la vida salvaje africana.',
        activities: ['Safari matutino', 'Almuerzo en el lodge', 'Safari vespertino', 'Cena temática']
      },
      {
        title: 'Primer Destino - Día 2',
        location: 'Reserva Principal',
        description: 'Safari completo con actividades especiales.',
        activities: ['Safari al amanecer', 'Desayuno en el bush', 'Actividades en el lodge', 'Safari nocturno']
      },
      {
        title: 'Traslado al Segundo Destino',
        location: 'En ruta',
        description: 'Viaje escénico al segundo destino con paradas interesantes.',
        activities: ['Safari matutino final', 'Traslado panorámico', 'Paradas culturales', 'Llegada y safari vespertino']
      },
      {
        title: 'Segundo Destino - Día 1',
        location: 'Nueva Reserva',
        description: 'Exploración intensiva del nuevo ecosistema.',
        activities: ['Safari extendido', 'Picnic en la reserva', 'Safari vespertino', 'Actividades nocturnas']
      },
      {
        title: 'Segundo Destino - Día 2',
        location: 'Nueva Reserva',
        description: 'Día de experiencias especiales y relajación.',
        activities: ['Safari a pie', 'Visita cultural', 'Spa y relajación', 'Safari fotográfico']
      },
      {
        title: 'Tercer Destino',
        location: 'Reserva Final',
        description: 'Llegada al destino final, nuevo ecosistema.',
        activities: ['Traslado matutino', 'Safari de llegada', 'Exploración del lodge', 'Safari vespertino']
      },
      {
        title: 'Experiencias Únicas',
        location: 'Reserva Final',
        description: 'Actividades especiales y encuentros memorables.',
        activities: ['Balloon safari', 'Encuentro cultural auténtico', 'Safari acuático', 'Cena bajo las estrellas']
      },
      {
        title: 'Último Safari Completo',
        location: 'Reserva Final',
        description: 'Día final de safari intensivo.',
        activities: ['Safari matutino extenso', 'Almuerzo especial', 'Safari de despedida', 'Celebración final']
      },
      {
        title: 'Partida',
        location: 'Aeropuerto',
        description: 'Transfer y despedida de África.',
        activities: ['Desayuno de despedida', 'Safari final opcional', 'Transfer al aeropuerto', 'Vuelo de regreso']
      }
    ],
    included: [
      'Alojamiento premium en lodges seleccionados',
      'Todas las comidas y bebidas estándar',
      'Safaris con guías especializados',
      'Traslados en avioneta o 4x4',
      'Actividades culturales incluidas',
      'Tarifas de parques y conservación',
      'Seguro de safari completo'
    ],
    notIncluded: [
      'Vuelos internacionales',
      'Visas y documentación',
      'Propinas para guías y staff',
      'Bebidas premium y spa',
      'Actividades opcionales extra',
      'Seguro de viaje internacional',
      'Gastos personales'
    ],
    relatedDestinations: [
      {
        name: 'Tanzania',
        slug: 'tanzania',
        highlight: 'Serengeti + Ngorongoro',
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Botswana',
        slug: 'botswana',
        highlight: 'Okavango + Chobe',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Kenia',
        slug: 'kenia',
        highlight: 'Masai Mara + Samburu',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=300&auto=format&fit=crop'
      }
    ]
  },
  'safari-14-dias': {
    name: 'Safari de 14 Días',
    slug: 'safari-14-dias',
    description: 'La experiencia completa de África. Dos semanas para descubrir múltiples países, culturas y ecosistemas únicos.',
    duration: '14 días / 13 noches',
    price: 'Desde €6,800',
    destinations: '4-6',
    bestTime: 'Mayo - Octubre',
    maxGroupSize: '10',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2070&auto=format&fit=crop',
    content: `
      <p>Nuestro safari de 14 días es la experiencia definitiva para los amantes de África. Permite una exploración profunda de múltiples países y ecosistemas, con tiempo suficiente para encuentros culturales auténticos y experiencias verdaderamente transformadoras.</p>
      
      <p>Este itinerario está diseñado para aquellos que quieren experimentar la diversidad completa de África Oriental o Austral, combinando los mejores destinos en un viaje coherente y bien planificado.</p>
      
      <h3>El Safari Definitivo</h3>
      <ul>
        <li>4-6 destinos cuidadosamente seleccionados</li>
        <li>Múltiples países y ecosistemas</li>
        <li>Encuentros culturales profundos</li>
        <li>Actividades especiales exclusivas</li>
        <li>Flexibilidad para personalización</li>
      </ul>
    `,
    itinerary: [
      {
        title: 'Llegada y Ambientación',
        location: 'Nairobi o Ciudad del Cabo',
        description: 'Llegada a África, primer contacto con el continente.',
        activities: ['Llegada internacional', 'City tour opcional', 'Briefing completo del safari', 'Cena de bienvenida']
      },
      {
        title: 'Primer Destino Nacional',
        location: 'Parque Nacional Icónico',
        description: 'Inmersión en el primer ecosistema africano.',
        activities: ['Vuelo a primer destino', 'Safari de llegada', 'Exploración del lodge', 'Safari nocturno']
      },
      {
        title: 'Exploración Intensiva',
        location: 'Primer Destino',
        description: 'Día completo de safari y actividades.',
        activities: ['Safari al amanecer', 'Desayuno en el bush', 'Safari fotográfico', 'Actividades culturales']
      },
      {
        title: 'Experiencias Especiales',
        location: 'Primer Destino',
        description: 'Actividades únicas del destino.',
        activities: ['Balloon safari', 'Safari a pie', 'Visita a centro de investigación', 'Cena bajo las estrellas']
      },
      {
        title: 'Segundo País/Destino',
        location: 'Frontera Internacional',
        description: 'Cambio de país y nuevo ecosistema.',
        activities: ['Vuelo o traslado terrestre', 'Trámites fronterizos', 'Safari de llegada', 'Nuevos paisajes']
      },
      {
        title: 'Nuevo Ecosistema',
        location: 'Segundo Destino',
        description: 'Adaptación a nuevos animales y paisajes.',
        activities: ['Safari matutino diferente', 'Actividades acuáticas', 'Safari vespertino', 'Encuentro cultural local']
      },
      {
        title: 'Inmersión Cultural',
        location: 'Comunidad Local',
        description: 'Día dedicado a la cultura local.',
        activities: ['Visita a aldea auténtica', 'Participación en actividades locales', 'Almuerzo comunitario', 'Safari cultural']
      },
      {
        title: 'Tercer Destino Espectacular',
        location: 'Reserva Premium',
        description: 'Llegada a destino de lujo.',
        activities: ['Traslado en avioneta', 'Safari de lujo', 'Lodge excepcional', 'Experiencias premium']
      },
      {
        title: 'Safari de Lujo Completo',
        location: 'Reserva Premium',
        description: 'Día de experiencias de alto nivel.',
        activities: ['Safari privado', 'Picnic de lujo', 'Spa y relajación', 'Cena gourmet']
      },
      {
        title: 'Cuarto Destino Único',
        location: 'Ecosistema Especial',
        description: 'Experiencia en ecosistema único.',
        activities: ['Llegada a destino especial', 'Safari acuático/desierto', 'Actividades específicas', 'Lodge temático']
      },
      {
        title: 'Actividades Especializadas',
        location: 'Destino Especial',
        description: 'Día de actividades únicas del destino.',
        activities: ['Actividad signature del destino', 'Safari especializado', 'Encuentros únicos', 'Experiencias memorables']
      },
      {
        title: 'Destino Final',
        location: 'Parque Emblemático',
        description: 'Llegada al destino de culminación.',
        activities: ['Traslado final', 'Safari de llegada', 'Lodge icónico', 'Preparación para cierre']
      },
      {
        title: 'Gran Final',
        location: 'Destino Final',
        description: 'Último día completo de safari.',
        activities: ['Safari matutino espectacular', 'Almuerzo de despedida', 'Safari final memorables', 'Celebración de cierre']
      },
      {
        title: 'Despedida de África',
        location: 'Aeropuerto Internacional',
        description: 'Último día y partida.',
        activities: ['Desayuno final', 'Safari opcional matutino', 'Transfer al aeropuerto', 'Vuelo de regreso']
      }
    ],
    included: [
      'Alojamiento de lujo en todos los destinos',
      'Todas las comidas y bebidas premium',
      'Safaris con guías expertos especializados',
      'Todos los traslados internos (avionetas/4x4)',
      'Actividades culturales auténticas',
      'Experiencias especiales exclusivas',
      'Tarifas de parques y conservación',
      'Seguro de safari completo',
      'Coordinador de viaje personal'
    ],
    notIncluded: [
      'Vuelos internacionales',
      'Visas múltiples según países',
      'Propinas para todo el staff',
      'Bebidas ultra premium',
      'Actividades opcionales extra',
      'Seguro de viaje internacional',
      'Gastos personales y souvenirs',
      'Extensiones de playa'
    ],
    relatedDestinations: [
      {
        name: 'Tanzania',
        slug: 'tanzania',
        highlight: 'Serengeti + Ngorongoro + Selous',
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Kenia',
        slug: 'kenia',
        highlight: 'Masai Mara + Amboseli + Samburu',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Botswana',
        slug: 'botswana',
        highlight: 'Okavango + Chobe + Kalahari',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Sudáfrica',
        slug: 'sudafrica',
        highlight: 'Kruger + Winelands + Garden Route',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=300&auto=format&fit=crop'
      }
    ]
  }
}

const tipoViaje = tiposViaje[slug]

if (!tipoViaje) {
  throw createError({ statusCode: 404, statusMessage: 'Tipo de viaje no encontrado' })
}

// Schema para paquetes de viaje
const packageSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": tipoViaje.name,
  "description": tipoViaje.description,
  "url": `https://anasaviajes.com/tipo-viaje/${tipoViaje.slug}`,
  "image": tipoViaje.image,
  "duration": tipoViaje.duration,
  "offers": {
    "@type": "Offer",
    "price": tipoViaje.price.replace(/[^\d]/g, ''),
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString(),
    "seller": {
      "@type": "Organization",
      "name": "Anasa Viajes",
      "url": "https://anasaviajes.com"
    }
  },
  "provider": {
    "@type": "TravelAgency",
    "name": "Anasa Viajes",
    "url": "https://anasaviajes.com"
  },
  "itinerary": tipoViaje.itinerary.map((day, index) => ({
    "@type": "TouristDestination",
    "name": day.title,
    "description": day.description
  }))
}))

const breadcrumbItems = computed(() => [
  { label: 'Tipo de Viaje', to: '/tipo-viaje' },
  { label: tipoViaje.name }
])

const currentUrl = computed(() => `https://anasaviajes.com/tipo-viaje/${tipoViaje.slug}`)
const imageUrl = computed(() => tipoViaje.image.startsWith('http') ? tipoViaje.image : `https://anasaviajes.com${tipoViaje.image}`)

useHead({
  title: `${tipoViaje.name} | ${tipoViaje.price} | Safaris por Duración | Anasa Viajes`,
  meta: [
    { 
      name: 'description', 
      content: `${tipoViaje.name}: ${tipoViaje.description} Precio desde ${tipoViaje.price} para ${tipoViaje.destinations} destinos. Duración: ${tipoViaje.duration}. Mejor época: ${tipoViaje.bestTime}. Itinerario completo incluido.` 
    },
    { 
      name: 'keywords', 
      content: `${tipoViaje.name.toLowerCase()}, ${tipoViaje.duration}, safari ${tipoViaje.destinations} destinos, ${tipoViaje.price.toLowerCase()}, itinerario safari, safari personalizado` 
    },
    { property: 'og:title', content: `${tipoViaje.name} | Anasa Viajes` },
    { property: 'og:description', content: `${tipoViaje.description} ${tipoViaje.price}` },
    { property: 'og:image', content: imageUrl.value },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${tipoViaje.name} | Anasa Viajes` },
    { name: 'twitter:description', content: tipoViaje.description },
    { name: 'twitter:image', content: imageUrl.value }
  ],
  link: [
    { rel: 'canonical', href: currentUrl.value },
    { rel: 'alternate', hreflang: 'es', href: currentUrl.value },
    { rel: 'alternate', hreflang: 'en', href: `https://anasaviajes.com/en/tipo-viaje/${tipoViaje.slug}` },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl.value }
  ]
})
</script>