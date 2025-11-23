import React, { useState } from 'react';
import { Camera, Heart, Users, Crown } from 'lucide-react';

const styles = [
  {
    id: 'honeymoon',
    icon: Heart,
    title: 'Luna de Miel',
    tagline: 'Romance Salvaje',
    description: 'Cenas privadas bajo las estrellas, baños al aire libre y suites aisladas en la inmensidad de la sabana.'
  },
  {
    id: 'family',
    icon: Users,
    title: 'Familiar',
    tagline: 'Legado & Aprendizaje',
    description: 'Programas educativos para niños, villas privadas exclusivas y logística simplificada para todas las edades.'
  },
  {
    id: 'photo',
    icon: Camera,
    title: 'Fotografía',
    tagline: 'La Luz Perfecta',
    description: 'Vehículos adaptados, guías fotógrafos expertos y acceso a hides exclusivos para la toma perfecta.'
  },
  {
    id: 'royal',
    icon: Crown,
    title: 'Royalty',
    tagline: 'Ultra Lujo',
    description: 'Jets privados, uso exclusivo de lodges enteros y un staff dedicado 24/7 a sus caprichos.'
  }
];

export const TravelStyles: React.FC = () => {
  const [activeStyle, setActiveStyle] = useState('honeymoon');

  return (
    <section className="py-32 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
          <div>
            <span className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">Personalización</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Diseñe su <span className="italic text-gray-500">Estilo</span></h2>
          </div>
          <div className="hidden md:block w-1/3 h-[1px] bg-white/10 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal">
          
          {/* Selection Menu */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setActiveStyle(style.id)}
                className={`group flex items-center justify-between p-6 text-left transition-all duration-500 border-l-2 ${
                  activeStyle === style.id 
                    ? 'border-luxury-gold bg-white/5' 
                    : 'border-white/5 hover:border-white/20 hover:bg-white/5'
                }`}
              >
                <span className={`text-sm font-bold tracking-[0.2em] uppercase transition-colors ${
                  activeStyle === style.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                }`}>
                  {style.title}
                </span>
                <style.icon className={`w-5 h-5 transition-colors ${
                  activeStyle === style.id ? 'text-luxury-gold' : 'text-gray-600 group-hover:text-gray-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Content Display Area */}
          <div className="lg:col-span-8 relative min-h-[300px]">
            {styles.map((style) => (
              <div
                key={style.id}
                className={`absolute inset-0 transition-all duration-700 ease-out transform ${
                  activeStyle === style.id 
                    ? 'opacity-100 translate-y-0 z-10' 
                    : 'opacity-0 translate-y-8 z-0 pointer-events-none'
                }`}
              >
                <div className="h-full flex flex-col justify-center p-8 md:p-16 bg-luxury-dark border border-white/5 relative overflow-hidden">
                  {/* Decorative large icon */}
                  <style.icon className="absolute -right-12 -bottom-12 w-64 h-64 text-white/5 rotate-12" />
                  
                  <div className="relative z-10">
                    <h3 className="text-luxury-gold font-serif italic text-3xl md:text-4xl mb-6">
                      {style.tagline}
                    </h3>
                    <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl mb-10">
                      {style.description}
                    </p>
                    <button className="text-xs font-bold uppercase tracking-widest text-white border-b border-luxury-gold pb-2 hover:text-luxury-gold transition-colors">
                      Explorar opciones {style.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};