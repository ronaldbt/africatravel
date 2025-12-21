<template>
  <div class="min-h-screen bg-luxury-dark text-gray-200">
    <ArticleSchema :article="articleSchema" />
    <Breadcrumbs :items="breadcrumbItems" />
    
    <div v-if="guia" class="max-w-4xl mx-auto px-6 lg:px-12 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-16">
        <div class="w-20 h-20 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <svg class="w-10 h-10 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="guia.icon" />
          </svg>
        </div>
        <h1 class="text-4xl md:text-6xl font-serif text-white mb-6">
          {{ guia.title }}
        </h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto">
          {{ guia.excerpt }}
        </p>
      </div>

      <!-- Article Content -->
      <article class="prose prose-invert prose-lg max-w-none">
        <div v-html="guia.content" class="space-y-8"></div>
      </article>

      <!-- Tips Section -->
      <div v-if="guia.tips" class="mt-16 bg-luxury-black border border-white/10 p-8 rounded-lg">
        <h3 class="text-2xl font-serif text-luxury-gold mb-6">💡 Consejos clave</h3>
        <ul class="space-y-3">
          <li v-for="tip in guia.tips" :key="tip" class="flex items-start">
            <svg class="w-5 h-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-300">{{ tip }}</span>
          </li>
        </ul>
      </div>

      <!-- Related Articles -->
      <div class="mt-16">
        <h3 class="text-2xl font-serif text-white mb-8">Artículos relacionados</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink 
            v-for="related in relatedGuias" 
            :key="related.slug"
            :to="`/guia-viajero/${related.slug}`"
            class="group bg-luxury-black border border-white/10 hover:border-luxury-gold/50 p-6 transition-all duration-300"
          >
            <h4 class="text-lg font-serif text-white mb-2 group-hover:text-luxury-gold transition-colors">
              {{ related.title }}
            </h4>
            <p class="text-sm text-gray-400">{{ related.description }}</p>
          </NuxtLink>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center bg-gradient-to-r from-luxury-gold/10 to-luxury-gold/5 p-12 rounded-lg">
        <h3 class="text-3xl font-serif text-white mb-4">¿Listo para tu safari?</h3>
        <p class="text-gray-300 mb-8">Usa nuestro diseñador de viajes con IA para crear tu safari perfecto</p>
        <div class="space-x-4">
          <NuxtLink 
            to="/diseñador-ia"
            class="inline-block px-8 py-4 bg-luxury-gold text-black font-bold uppercase tracking-widest hover:bg-luxury-gold/90 transition-colors"
          >
            Diseñar mi Viaje
          </NuxtLink>
          <NuxtLink 
            to="/contacto"
            class="inline-block px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Contactar Experto
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug

const guias = {
  'mejor-epoca-viajar': {
    title: 'Mejor Época para Viajar a África',
    slug: 'mejor-epoca-viajar',
    excerpt: 'Descubre cuándo es el mejor momento para visitar cada país africano y maximizar tus oportunidades de avistamiento.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
    readTime: '8 min lectura',
    content: `
      <h2>Temporadas en África: Guía Completa</h2>
      
      <h3>Temporada Seca (Mayo - Octubre)</h3>
      <p>La temporada seca es generalmente considerada la mejor época para safaris en la mayoría de destinos africanos.</p>
      
      <h4>Ventajas:</h4>
      <ul>
        <li><strong>Mayor concentración de animales</strong> alrededor de fuentes de agua</li>
        <li><strong>Clima más fresco</strong> durante el día</li>
        <li><strong>Menos malaria</strong> debido a la ausencia de agua estancada</li>
        <li><strong>Carreteras en mejor estado</strong> para acceder a parques</li>
      </ul>
      
      <h3>Temporada de Lluvias (Noviembre - Abril)</h3>
      <p>Aunque menos popular, la temporada de lluvias ofrece experiencias únicas.</p>
      
      <h4>Ventajas:</h4>
      <ul>
        <li><strong>Paisajes exuberantes</strong> y vegetación verde</li>
        <li><strong>Nacimiento de crías</strong> en muchas especies</li>
        <li><strong>Precios más bajos</strong> en alojamientos y tours</li>
        <li><strong>Menos turistas</strong> para experiencias más íntimas</li>
      </ul>
      
      <h3>Por Destino Específico</h3>
      
      <h4>Kenia y Tanzania (Serengeti/Masai Mara)</h4>
      <p><strong>Mejor época:</strong> Julio-Octubre para la Gran Migración</p>
      <ul>
        <li>Julio-Agosto: Cruce del río Mara</li>
        <li>Septiembre-Octubre: Regreso al Serengeti</li>
        <li>Diciembre-Marzo: Época de parto en el sur del Serengeti</li>
      </ul>
      
      <h4>Sudáfrica</h4>
      <p><strong>Mejor época:</strong> Mayo-Septiembre (invierno austral)</p>
      <ul>
        <li>Temperaturas más frescas</li>
        <li>Menor precipitación</li>
        <li>Excelente visibilidad para safaris</li>
      </ul>
      
      <h4>Botswana (Delta del Okavango)</h4>
      <p><strong>Mejor época:</strong> Mayo-Octubre</p>
      <ul>
        <li>Mayo-Agosto: Aguas altas del delta</li>
        <li>Septiembre-Octubre: Concentración de vida silvestre</li>
      </ul>
      
      <h4>Namibia</h4>
      <p><strong>Mejor época:</strong> Mayo-Octubre</p>
      <ul>
        <li>Temperaturas más moderadas</li>
        <li>Cielos despejados para fotografía</li>
        <li>Vida silvestre concentrada en Etosha</li>
      </ul>
    `,
    tips: [
      'Reserva con 6-12 meses de anticipación para temporada alta',
      'Considera la temporada de lluvias para mejores precios y menos multitudes',
      'Verifica las condiciones específicas del destino antes de viajar',
      'Empaca ropa para diferentes temperaturas, especialmente en invierno austral',
      'Consulta calendarios de migración animal para timing perfecto'
    ],
    author: 'Equipo Anasa Viajes',
    publishedAt: '2024-11-20',
    category: 'Planificación'
  },
  'que-llevar-safari': {
    title: 'Qué Llevar en tu Safari',
    slug: 'que-llevar-safari',
    excerpt: 'Lista completa y actualizada de todo lo que necesitas empacar para tu safari en África.',
    icon: 'M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    readTime: '6 min lectura',
    content: `
      <h2>Lista Completa para Safari</h2>
      
      <h3>Ropa Esencial</h3>
      
      <h4>Colores Recomendados</h4>
      <p>Usa colores neutros que te ayuden a mimetizarte con el entorno:</p>
      <ul>
        <li><strong>Caqui, beige, verde oliva:</strong> Ideales para safaris</li>
        <li><strong>Evita:</strong> Blanco (se ensucia), negro (atrae moscas), colores brillantes (espantan animales)</li>
      </ul>
      
      <h4>Prendas por Categoría</h4>
      
      <h5>Parte Superior</h5>
      <ul>
        <li>3-4 camisas de manga larga (protección solar y mosquitos)</li>
        <li>2-3 camisetas de manga corta</li>
        <li>1 chaqueta ligera o fleece</li>
        <li>1 impermeable ligero</li>
      </ul>
      
      <h5>Parte Inferior</h5>
      <ul>
        <li>2-3 pantalones largos (preferiblemente con cremalleras)</li>
        <li>1-2 pantalones cortos</li>
        <li>Ropa interior cómoda (que seque rápido)</li>
      </ul>
      
      <h5>Calzado</h5>
      <ul>
        <li>Botas de trekking cómodas y rodadas</li>
        <li>Zapatos cerrados para las noches</li>
        <li>Sandalias para el lodge</li>
        <li>Calcetines de trekking (lana merino preferiblemente)</li>
      </ul>
      
      <h3>Protección y Cuidado Personal</h3>
      
      <h4>Protección Solar</h4>
      <ul>
        <li><strong>Protector solar SPF 50+</strong> (resistente al agua)</li>
        <li><strong>Sombrero de ala ancha</strong> o gorra con protección para cuello</li>
        <li><strong>Gafas de sol</strong> con protección UV</li>
        <li><strong>Bálsamo labial</strong> con protección solar</li>
      </ul>
      
      <h4>Repelente de Insectos</h4>
      <ul>
        <li>Repelente con DEET (20-30%)</li>
        <li>Ropa tratada con permetrina</li>
        <li>Mosquitera para dormir (si no está incluida)</li>
      </ul>
      
      <h3>Equipos y Accesorios</h3>
      
      <h4>Fotografía</h4>
      <ul>
        <li>Cámara con teleobjetivo (mínimo 300mm)</li>
        <li>Baterías extra y cargador</li>
        <li>Tarjetas de memoria adicionales</li>
        <li>Funda protectora contra polvo</li>
        <li>Prismáticos (8x32 o 10x42)</li>
      </ul>
      
      <h4>Utilidades</h4>
      <ul>
        <li>Linterna frontal con baterías extra</li>
        <li>Powerbank para dispositivos</li>
        <li>Navaja multiusos</li>
        <li>Bolsas de plástico para proteger equipos</li>
      </ul>
      
      <h3>Botiquín Personal</h3>
      
      <h4>Medicamentos Básicos</h4>
      <ul>
        <li>Medicamentos personales recetados</li>
        <li>Analgésicos (ibuprofeno, paracetamol)</li>
        <li>Medicamentos para problemas estomacales</li>
        <li>Antihistamínicos para alergias</li>
      </ul>
      
      <h4>Prevención Malaria</h4>
      <ul>
        <li>Consulta médica previa al viaje</li>
        <li>Medicación profiláctica si es recomendada</li>
        <li>Termómetro digital</li>
      </ul>
      
      <h3>Documentos y Dinero</h3>
      <ul>
        <li>Pasaporte con validez mínima 6 meses</li>
        <li>Visas necesarias</li>
        <li>Certificado de vacunación (fiebre amarilla)</li>
        <li>Seguro de viaje con cobertura médica</li>
        <li>Copias de documentos importantes</li>
        <li>Efectivo en USD para propinas y gastos menores</li>
      </ul>
    `,
    tips: [
      'Empaca en maleta blanda para vuelos en avionetas pequeñas',
      'Lleva siempre una muda de ropa en tu equipaje de mano',
      'Trae más protector solar del que crees necesitar',
      'Rodaje tus botas nuevas antes del viaje',
      'Considera el lavado de ropa en los lodges para empacar menos'
    ],
    author: 'Equipo Anasa Viajes',
    publishedAt: '2024-11-18',
    category: 'Preparación'
  },
  'visados-africa': {
    title: 'Visados para África',
    slug: 'visados-africa',
    excerpt: 'Guía actualizada sobre visados, pasaportes y documentación necesaria para viajar a países africanos.',
    icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    readTime: '10 min lectura',
    content: `
      <h2>Documentación para Safari en África</h2>
      
      <h3>Requisitos Generales de Pasaporte</h3>
      <ul>
        <li><strong>Validez mínima:</strong> 6 meses desde la fecha de entrada</li>
        <li><strong>Páginas en blanco:</strong> Mínimo 2-3 páginas libres</li>
        <li><strong>Estado:</strong> En buenas condiciones, sin daños</li>
      </ul>
      
      <h3>Por Destino Específico</h3>
      
      <h4>Sudáfrica 🇿🇦</h4>
      <p><strong>Ciudadanos españoles:</strong> No requiere visa para estancias hasta 90 días</p>
      <ul>
        <li>Pasaporte válido por mínimo 30 días después del viaje</li>
        <li>Certificado de fiebre amarilla si vienes de área infectada</li>
        <li>Prueba de salida del país (boleto de vuelta)</li>
      </ul>
      
      <h4>Kenia 🇰🇪</h4>
      <p><strong>Visa requerida</strong> para ciudadanos españoles</p>
      <ul>
        <li><strong>eVisa online:</strong> $51 USD (procesamiento 2-7 días)</li>
        <li><strong>Visa a la llegada:</strong> $51 USD (no recomendado)</li>
        <li>Certificado de fiebre amarilla obligatorio</li>
        <li>Válida por 90 días</li>
      </ul>
      
      <h4>Tanzania 🇹🇿</h4>
      <p><strong>Visa requerida</strong> para ciudadanos españoles</p>
      <ul>
        <li><strong>eVisa online:</strong> $50 USD</li>
        <li><strong>Visa a la llegada:</strong> $50 USD</li>
        <li>Certificado de fiebre amarilla obligatorio</li>
        <li>Válida por 90 días</li>
      </ul>
      
      <h4>Botswana 🇧🇼</h4>
      <p><strong>Ciudadanos españoles:</strong> No requiere visa para estancias hasta 90 días</p>
      <ul>
        <li>Pasaporte válido por mínimo 6 meses</li>
        <li>Prueba de fondos suficientes</li>
        <li>Boleto de salida confirmado</li>
      </ul>
      
      <h4>Namibia 🇳🇦</h4>
      <p><strong>Ciudadanos españoles:</strong> No requiere visa para estancias hasta 90 días</p>
      <ul>
        <li>Pasaporte válido por mínimo 6 meses</li>
        <li>Mínimo 2 páginas en blanco</li>
        <li>Prueba de salida del país</li>
      </ul>
      
      <h4>Ruanda 🇷🇼</h4>
      <p><strong>Visa requerida</strong> para ciudadanos españoles</p>
      <ul>
        <li><strong>eVisa online:</strong> $30 USD</li>
        <li><strong>Visa a la llegada:</strong> $30 USD</li>
        <li>Válida por 30 días</li>
        <li>Extensión posible hasta 90 días</li>
      </ul>
      
      <h4>Madagascar 🇲🇬</h4>
      <p><strong>Visa requerida</strong> para ciudadanos españoles</p>
      <ul>
        <li><strong>Visa a la llegada:</strong> €35 (hasta 60 días)</li>
        <li><strong>eVisa online:</strong> Disponible</li>
        <li>Pasaporte válido por 6 meses</li>
      </ul>
      
      <h3>Vacunas Requeridas</h3>
      
      <h4>Fiebre Amarilla</h4>
      <p><strong>Obligatoria para:</strong> Kenia, Tanzania, si vienes de zona infectada</p>
      <ul>
        <li>Vacuna efectiva 10 días después de aplicación</li>
        <li>Certificado válido de por vida</li>
        <li>Llevar siempre el certificado original</li>
      </ul>
      
      <h4>Vacunas Recomendadas</h4>
      <ul>
        <li><strong>Hepatitis A y B:</strong> Altamente recomendadas</li>
        <li><strong>Tifoidea:</strong> Para áreas rurales</li>
        <li><strong>Meningitis:</strong> Según temporada y región</li>
        <li><strong>Rabia:</strong> Si planeas actividades de aventura</li>
      </ul>
      
      <h3>East Africa Tourist Visa</h3>
      <p><strong>Visa única para Kenia, Tanzania y Uganda</strong></p>
      <ul>
        <li><strong>Costo:</strong> $100 USD</li>
        <li><strong>Validez:</strong> 90 días</li>
        <li><strong>Ventaja:</strong> Múltiples entradas entre los 3 países</li>
        <li><strong>Solicitud:</strong> Solo online, antes del viaje</li>
      </ul>
      
      <h3>Consejos Prácticos</h3>
      
      <h4>Tramitación de Visas</h4>
      <ul>
        <li>Solicita visas online 2-4 semanas antes del viaje</li>
        <li>Guarda copias digitales de todos los documentos</li>
        <li>Verifica fechas de validez antes de viajar</li>
        <li>Lleva efectivo en USD para pagos a la llegada</li>
      </ul>
      
      <h4>En el Aeropuerto</h4>
      <ul>
        <li>Presenta documentos ordenados</li>
        <li>Ten efectivo listo para visas a la llegada</li>
        <li>Muestra prueba de salida del país</li>
        <li>Sé paciente con los tiempos de procesamiento</li>
      </ul>
    `,
    tips: [
      'Consulta siempre la embajada antes del viaje para cambios de última hora',
      'Haz copias de todos los documentos importantes',
      'Lleva fotos tipo pasaporte extra por si las necesitas',
      'Solicita visas online cuando sea posible para evitar colas',
      'Verifica si tu país tiene acuerdos bilaterales que faciliten el proceso'
    ],
    author: 'Equipo Anasa Viajes',
    publishedAt: '2024-11-15',
    category: 'Documentación'
  }
}

const guia = guias[slug]

if (!guia) {
  throw createError({ statusCode: 404, statusMessage: 'Guía no encontrada' })
}

// Artículos relacionados (excluyendo el actual)
const relatedGuias = computed(() => {
  return Object.values(guias)
    .filter(g => g.slug !== guia.slug)
    .slice(0, 2)
})

// Schema para artículos
const articleSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": guia.title,
  "description": guia.excerpt,
  "author": {
    "@type": "Organization",
    "name": guia.author,
    "url": "https://anasaviajes.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Anasa Viajes",
    "url": "https://anasaviajes.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://anasaviajes.com/logo.png"
    }
  },
  "datePublished": guia.publishedAt,
  "dateModified": guia.publishedAt,
  "articleSection": guia.category,
  "wordCount": guia.content.length,
  "url": `https://anasaviajes.com/guia-viajero/${guia.slug}`,
  "mainEntityOfPage": `https://anasaviajes.com/guia-viajero/${guia.slug}`
}))

const breadcrumbItems = computed(() => [
  { label: 'Guía del Viajero', to: '/guia-viajero' },
  { label: guia.title }
])

const currentUrl = computed(() => `https://anasaviajes.com/guia-viajero/${guia.slug}`)
const defaultImage = 'https://anasaviajes.com/og-image.jpg'

useHead({
  title: `${guia.title} | Guía Completa de Safari | Anasa Viajes`,
  meta: [
    { 
      name: 'description', 
      content: `${guia.excerpt} Tiempo de lectura: ${guia.readTime}. Guía completa con consejos prácticos y tips para tu safari en África.` 
    },
    { 
      name: 'keywords', 
      content: `${guia.title.toLowerCase()}, safari áfrica, guía viaje, consejos safari, ${guia.category.toLowerCase()}, planificación safari` 
    },
    { name: 'author', content: guia.author },
    { property: 'article:published_time', content: guia.publishedAt },
    { property: 'article:section', content: guia.category },
    { property: 'article:author', content: guia.author },
    { property: 'og:title', content: `${guia.title} | Anasa Viajes` },
    { property: 'og:description', content: guia.excerpt },
    { property: 'og:image', content: defaultImage },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${guia.title} | Anasa Viajes` },
    { name: 'twitter:description', content: guia.excerpt },
    { name: 'twitter:image', content: defaultImage }
  ],
  link: [
    { rel: 'canonical', href: currentUrl.value },
    { rel: 'alternate', hreflang: 'es', href: currentUrl.value },
    { rel: 'alternate', hreflang: 'en', href: `https://anasaviajes.com/en/guia-viajero/${guia.slug}` },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl.value }
  ]
})
</script>