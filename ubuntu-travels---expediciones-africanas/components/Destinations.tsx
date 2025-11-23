import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: 1,
    name: "Serengeti",
    country: "Tanzania",
    description: "La gran migración vista desde campamentos privados.",
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop",
    price: "Desde $4,500"
  },
  {
    id: 2,
    name: "Okavango",
    country: "Botswana",
    description: "Santuario acuático de vida salvaje exclusiva.",
    imageUrl: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2070&auto=format&fit=crop",
    price: "Desde $6,200"
  },
  {
    id: 3,
    name: "Namib Desert",
    country: "Namibia",
    description: "Dunas rojas y cielos estrellados infinitos.",
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop",
    price: "Desde $3,800"
  },
  {
    id: 4,
    name: "Cape Town",
    country: "Sudáfrica",
    description: "Vino, arte y océanos en la ciudad madre.",
    imageUrl: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=2187&auto=format&fit=crop",
    price: "Desde $2,500"
  }
];

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-32 bg-luxury-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
          <div>
            <span className="text-luxury-gold text-xs font-bold tracking-[0.3em] uppercase block mb-4">Colección Exclusiva</span>
            <h2 className="text-4xl md:text-6xl font-serif">Destinos <span className="italic text-gray-500">Curados</span></h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-loose mt-6 md:mt-0">
            Seleccionamos meticulosamente cada lodge y ruta para asegurar privacidad, confort y avistamientos excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinations.map((dest, index) => (
            <div key={dest.id} className={`group cursor-pointer reveal ${index % 2 !== 0 ? 'md:mt-24' : ''}`}>
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={dest.imageUrl} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
                    <ArrowUpRight className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-end border-b border-white/10 pb-4 group-hover:border-luxury-gold transition-colors duration-500">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-luxury-gold tracking-widest uppercase">{dest.country}</span>
                  </div>
                  <h3 className="text-3xl font-serif mb-1 group-hover:translate-x-2 transition-transform duration-300">{dest.name}</h3>
                </div>
                <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">
                  {dest.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {dest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};