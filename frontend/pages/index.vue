<template>
  <div>
    <SchemaMarkup :schema="schema" />
    <main>
      <Hero id="hero" />
      
      <!-- Interactive Map Section -->
      <InteractiveMap id="destinations" />

      <!-- Travel Styles Section -->
      <TravelStyles id="experiences" />

      <Destinations />
      
      <!-- Parallax Visual Break -->
      <div 
        class="h-[60vh] relative bg-fixed bg-cover bg-center overflow-hidden group" 
        style="background-image: url('https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=2026&auto=format&fit=crop')"
        role="img"
        aria-label="Safari de lujo en África - Experiencia única"
      >
        <div class="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/20"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center px-6 reveal">
            <p class="text-luxury-gold uppercase tracking-[0.5em] text-xs mb-6 font-bold">La experiencia definitiva</p>
            <h2 class="text-5xl md:text-7xl font-serif text-white mb-10 drop-shadow-2xl">Más allá del horizonte</h2>
            <button class="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold backdrop-blur-sm">
              Ver Journal
            </button>
          </div>
        </div>
      </div>

      <AIPlanner id="ai-planner" />
    </main>
    <Footer id="about" />
  </div>
</template>

<script setup>
const schema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Anasa Viajes",
  "description": "Safaris de lujo personalizados, lodges exclusivos y experiencias únicas en África",
  "url": "https://anasaviajes.com",
  "logo": "https://anasaviajes.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-912-345-678",
    "contactType": "customer service",
    "email": "concierge@anasaviajes.com",
    "areaServed": "ES",
    "availableLanguage": "Spanish"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madrid",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://www.facebook.com/anasaviajes",
    "https://www.instagram.com/anasaviajes",
    "https://twitter.com/anasaviajes"
  ],
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "TouristTrip",
      "name": "Safari de Lujo en África",
      "description": "Safaris personalizados de lujo en África"
    }
  }
}

const currentUrl = 'https://anasaviajes.com'

useHead({
  meta: [
    { property: 'og:url', content: currentUrl },
    { name: 'twitter:url', content: currentUrl }
  ],
  link: [
    { rel: 'alternate', hreflang: 'es', href: currentUrl },
    { rel: 'alternate', hreflang: 'en', href: 'https://anasaviajes.com/en' },
    { rel: 'alternate', hreflang: 'x-default', href: currentUrl }
  ]
})

onMounted(() => {
  // Scroll reveal functionality
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  // Slight delay to ensure DOM is ready
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }, 100);

  // Clean up observer on unmount
  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

