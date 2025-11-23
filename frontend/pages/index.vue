<template>
  <div class="min-h-screen flex flex-col bg-luxury-dark text-gray-200 font-sans selection:bg-luxury-gold selection:text-black">
    <Navbar />
    <main>
      <Hero />
      
      <!-- Interactive Map Section -->
      <InteractiveMap />

      <!-- Travel Styles Section -->
      <TravelStyles />

      <Destinations />
      
      <!-- Parallax Visual Break -->
      <div 
        class="h-[60vh] relative bg-fixed bg-cover bg-center overflow-hidden group" 
        style="background-image: url('https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=2026&auto=format&fit=crop')"
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

      <AIPlanner />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// Nuxt 4 auto-importa los componentes, no necesitamos importarlos manualmente
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

<style>
/* Custom styles for Ubuntu Travels */
body {
  font-family: 'Montserrat', sans-serif;
  background-color: #0F1115;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #0F1115;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: #C5A059;
}

/* Scroll Reveal Animations */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.5, 0, 0, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-100 {
  transition-delay: 0.1s;
}
.reveal-delay-200 {
  transition-delay: 0.2s;
}
.reveal-delay-300 {
  transition-delay: 0.3s;
}
</style>

