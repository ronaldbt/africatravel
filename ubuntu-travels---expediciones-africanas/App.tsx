import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { AIPlanner } from './components/AIPlanner';
import { Footer } from './components/Footer';
import { InteractiveMap } from './components/InteractiveMap';
import { TravelStyles } from './components/TravelStyles';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-luxury-dark text-gray-200 font-sans selection:bg-luxury-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* New Interactive Map Section */}
        <InteractiveMap />

        {/* Replaced Features with Interactive Travel Styles */}
        <TravelStyles />

        <Destinations />
        
        {/* Parallax Visual Break */}
        <div className="h-[60vh] relative bg-fixed bg-cover bg-center overflow-hidden group" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=2026&auto=format&fit=crop")' }}>
          <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 reveal">
              <p className="text-luxury-gold uppercase tracking-[0.5em] text-xs mb-6 font-bold">La experiencia definitiva</p>
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 drop-shadow-2xl">Más allá del horizonte</h2>
              <button className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold backdrop-blur-sm">
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
  );
}

export default App;