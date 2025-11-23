<template>
  <div class="min-h-screen flex flex-col bg-luxury-dark text-gray-200 font-sans selection:bg-luxury-gold selection:text-black">
    <Navbar />
    <NuxtPage />
    <WhatsAppButton />
  </div>
</template>

<script setup>
// Navbar y WhatsAppButton están disponibles globalmente en todas las páginas
</script>

<style>
/* Custom styles for Anasa Viajes */
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
