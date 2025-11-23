import React from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop" 
          alt="African Landscape" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-luxury-dark"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
        <div className="reveal active transition-all duration-1000 ease-out">
          <span className="block text-luxury-gold text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-6 pl-1">
            Expediciones de Autor
          </span>
          
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8">
            Africa <br />
            <span className="italic opacity-80 font-light text-5xl md:text-7xl lg:text-8xl">Untamed</span>
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base max-w-lg leading-loose font-light border-l border-luxury-gold/50 pl-6 mb-12">
            Donde el lujo se encuentra con lo salvaje. Diseñamos itinerarios a medida que transforman su perspectiva del mundo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Button onClick={() => document.getElementById('ai-planner')?.scrollIntoView()}>
              Diseñar Expedición
            </Button>
            <button 
              onClick={() => document.getElementById('destinations')?.scrollIntoView()}
              className="text-white text-sm uppercase tracking-[0.2em] hover:text-luxury-gold transition-colors flex items-center gap-4 group"
            >
              Explorar Destinos
              <span className="w-8 h-[1px] bg-white group-hover:w-16 group-hover:bg-luxury-gold transition-all"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-12 right-12 hidden md:block animate-float">
        <div className="bg-white/5 backdrop-blur-md p-6 border border-white/10 max-w-xs">
          <p className="text-luxury-gold font-serif italic text-xl mb-2">"El único hombre que envidio es aquel que aún no ha estado en África."</p>
          <p className="text-gray-400 text-xs tracking-widest uppercase">— Richard Mullin</p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
           onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white">Descubrir</span>
        <ChevronDown className="h-4 w-4 text-luxury-gold animate-bounce" />
      </div>
    </div>
  );
};