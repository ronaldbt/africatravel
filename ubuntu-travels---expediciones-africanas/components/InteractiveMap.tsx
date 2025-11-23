import React, { useState } from 'react';
import { ArrowRight, MapPin, Compass } from 'lucide-react';

interface CountryData {
  id: string;
  name: string;
  price: string;
  tour: string;
  description: string;
  path: string;
}

const africanCountries: CountryData[] = [
  {
    id: "ZA",
    name: "Sudáfrica",
    price: "Desde $3,200",
    tour: "Kruger & Cape Winelands",
    description: "La combinación perfecta de safari de clase mundial, viñedos históricos y la cosmopolita Cape Town.",
    path: "M566 854l-7-6-16-2-4 8-10-5-7 6-2 14-10 3-1 7-10 2-6 9 4 5 12 3 7 7 6 15 11 6 11-2 12 3 21-10 8-10 18-2 5-10-1-7-6-9 5-16-7-2-12-3-12 3-9-3z"
  },
  {
    id: "NA",
    name: "Namibia",
    price: "Desde $4,200",
    tour: "Sossusvlei & Skeleton Coast",
    description: "Paisajes surrealistas donde el desierto más antiguo se encuentra con el mar. Dunas rojas y cielos infinitos.",
    path: "M482 748l13 2 26-2 3 6 44-2 2 34 2 5 24 2 3 17-9 3-12 3 7 2 5 16 6 9-10 5-4-8-16 2-7 6-10-5-4 8-16-2-21-28-12-16-10-11-5-22-6-18z"
  },
  {
    id: "BW",
    name: "Botsuana",
    price: "Desde $7,500",
    tour: "Okavango Delta Exclusivo",
    description: "Safaris acuáticos en mokoro a través de un ecosistema virgen y la mayor concentración de elefantes.",
    path: "M524 754l44-2 2 34 2 5 24 2 3 17-9 3-12 3-3 12-12 3-7-2-5-16-6-9-2-14 7-6 10 5 4-8 16-2 7-6-13-2-3-17z" 
  },
  {
    id: "TZ",
    name: "Tanzania",
    price: "Desde $5,500",
    tour: "Gran Migración & Cráter",
    description: "Testimonio de la mayor migración de mamíferos del mundo en el Serengeti y el cráter del Ngorongoro.",
    path: "M617 646l11 6 18-4 13 12 14 36 5 12-2 8-11 11-18 13-6-3-7 3-11-4-5-15 3-10-12-7-4-12-3-1-5 2-6-7 7-13 14-13 5-14z"
  },
  {
    id: "KE",
    name: "Kenia",
    price: "Desde $4,800",
    tour: "Masai Mara Legendario",
    description: "Encuentros culturales con los Masai y los 'Big Five' en reservas privadas con vistas al Kilimanjaro.",
    path: "M628 586l30 4 17 18 9 32-5 12-14-36-13-12-18 4-11-6-4-6 6-22-3-16 6-13 3-12 8 3z"
  },
  {
    id: "RW",
    name: "Ruanda",
    price: "Desde $6,000",
    tour: "Gorilas en la Niebla",
    description: "Trekking de alta montaña en los volcanes Virunga para encuentros íntimos y transformadores con gorilas.",
    path: "M603 658l5 2 3 8-4 4-6-2-2-8 4-4z" 
  },
  {
    id: "MG",
    name: "Madagascar",
    price: "Desde $3,900",
    tour: "Avenida de los Baobabs",
    description: "Un mundo aparte. Lemures, selvas tropicales y playas vírgenes en la isla roja.",
    path: "M780 730l10 5 8 28 3 14-6 18-12 15-14 6-8-8-4-16 3-22 8-18 12-22z"
  }
];

// ViewBox calibrated specifically for Southern/Eastern Africa focus
const MAP_VIEWBOX = "400 500 450 450";

export const InteractiveMap: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<CountryData | null>(africanCountries[0]);

  return (
    <section className="py-24 bg-luxury-dark relative overflow-hidden border-t border-white/5">
      
      {/* Background Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Nuestro Territorio</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            La Colección <span className="italic font-light text-luxury-gold">Safari</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          
          {/* MAPA */}
          <div className="relative w-full max-w-md aspect-square reveal select-none">
            {/* Silhouette of Africa for context (Subtle) */}
            <svg viewBox={MAP_VIEWBOX} className="w-full h-full overflow-visible filter drop-shadow-2xl">
              <g className="transition-all duration-500">
                {africanCountries.map((country) => {
                  const isActive = activeCountry?.id === country.id;
                  return (
                    <path
                      key={country.id}
                      d={country.path}
                      onClick={() => setActiveCountry(country)}
                      onMouseEnter={() => setActiveCountry(country)}
                      fill={isActive ? '#C5A059' : '#2A2E35'}
                      stroke={isActive ? '#C5A059' : '#1A1D23'}
                      strokeWidth="2"
                      className="transition-all duration-300 ease-out cursor-pointer hover:fill-luxury-gold/60 focus:outline-none origin-center hover:scale-105"
                      style={{ 
                        zIndex: isActive ? 10 : 1,
                        opacity: isActive ? 1 : 0.7
                      }}
                    />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* INFO CARD */}
          <div className="w-full lg:w-5/12 reveal reveal-delay-200">
            {activeCountry ? (
              <div className="bg-luxury-black border border-white/10 p-10 relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-4xl md:text-5xl font-serif text-white">{activeCountry.name}</h3>
                  <MapPin className="w-6 h-6 text-luxury-gold animate-bounce" />
                </div>
                
                <h4 className="text-lg font-serif italic text-gray-400 mb-6">{activeCountry.tour}</h4>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  {activeCountry.description}
                </p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Precio Estimado</p>
                    <p className="text-xl text-white font-serif">{activeCountry.price}</p>
                  </div>
                  <button className="bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-luxury-gold transition-colors flex items-center gap-2">
                    Ver Detalles <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50 p-12 border border-white/5 border-dashed">
                 <Compass className="w-12 h-12 text-white mb-4" />
                 <p className="font-serif text-lg">Explore el mapa para descubrir</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};