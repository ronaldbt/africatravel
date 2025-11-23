import React, { useState } from 'react';
import { Sparkles, Calendar, DollarSign, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { generateTravelItinerary } from '../services/geminiService';
import { AIPlannerResponse } from '../types';

export const AIPlanner: React.FC = () => {
  const [preferences, setPreferences] = useState('');
  const [duration, setDuration] = useState('10');
  const [budget, setBudget] = useState('Ultra Lujo');
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState<AIPlannerResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePlanTrip = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setItinerary(null);

    try {
      const result = await generateTravelItinerary(preferences, duration, budget);
      setItinerary(result);
    } catch (err) {
      setError("Nuestros sistemas de planificación están ocupados. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-32 bg-luxury-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Intro & Form */}
          <div className="w-full lg:w-5/12 reveal">
            <div className="flex items-center gap-3 text-luxury-gold mb-6">
              <Sparkles className="h-5 w-5 animate-pulse" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase">Gemini AI Concierge</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Arquitectura de <br/>
              <span className="italic text-white/50">Viajes a Medida</span>
            </h2>
            
            <p className="text-gray-400 mb-10 leading-relaxed font-light">
              Utilizamos inteligencia artificial avanzada para estructurar la base de su expedición ideal. Luego, nuestros especialistas humanos perfeccionan cada detalle.
            </p>

            <form onSubmit={handlePlanTrip} className="space-y-8">
              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 group-focus-within:text-luxury-gold transition-colors">
                  Su Visión
                </label>
                <textarea
                  required
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/20 focus:outline-none focus:border-luxury-gold transition-colors resize-none h-32 text-lg font-serif"
                  placeholder="Ej: Cena privada en el cráter del Ngorongoro y avistamiento de leopardos..."
                />
              </div>

              <div className="grid grid-cols-2 gap-12">
                <div className="group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 group-focus-within:text-luxury-gold transition-colors">
                    Días
                  </label>
                  <div className="flex items-center border-b border-white/20 py-2 group-focus-within:border-luxury-gold transition-colors">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <input
                      type="number"
                      min="3"
                      max="30"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full bg-transparent text-white focus:outline-none text-xl font-serif"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 group-focus-within:text-luxury-gold transition-colors">
                    Nivel
                  </label>
                  <div className="flex items-center border-b border-white/20 py-2 group-focus-within:border-luxury-gold transition-colors">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-transparent text-white focus:outline-none text-xl font-serif appearance-none cursor-pointer [&>option]:bg-luxury-dark"
                    >
                      <option>Premium</option>
                      <option>Lujo</option>
                      <option>Ultra Lujo</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" className="w-full" isLoading={isLoading}>
                  Generar Propuesta
                </Button>
              </div>
            </form>
          </div>

          {/* Right Column: Itinerary Output */}
          <div className="w-full lg:w-7/12 reveal reveal-delay-200">
            <div className="relative h-full min-h-[600px] bg-white/5 backdrop-blur-2xl border border-white/10 p-1 rounded-none lg:mt-12">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
              
              {/* Empty State */}
              {!itinerary && !isLoading && !error && (
                <div className="h-full flex flex-col justify-center items-center text-center p-12">
                  <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="h-8 w-8 text-white/20" />
                  </div>
                  <p className="text-gray-500 font-serif text-xl">Su viaje comienza con un sueño.</p>
                </div>
              )}

              {/* Loading State */}
              {isLoading && (
                <div className="h-full flex flex-col justify-center items-center p-12">
                  <Loader2 className="h-12 w-12 text-luxury-gold animate-spin mb-6" />
                  <p className="text-white font-serif text-xl animate-pulse">Consultando disponibilidad...</p>
                  <p className="text-gray-500 text-sm mt-2">Diseñando rutas exclusivas</p>
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="h-full flex items-center justify-center p-12 text-center">
                  <p className="text-red-400">{error}</p>
                </div>
              )}

              {/* Result State */}
              {itinerary && !isLoading && (
                <div className="h-full overflow-y-auto custom-scrollbar bg-luxury-black/40 p-8 md:p-12">
                  <div className="mb-12 border-b border-white/10 pb-8">
                    <span className="text-luxury-gold text-xs font-bold tracking-widest uppercase">Propuesta Preliminar</span>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mt-2 mb-2">{itinerary.tripName}</h3>
                    <p className="text-gray-400">{itinerary.estimatedCost} por persona</p>
                  </div>
                  
                  <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-white/10"></div>

                    {itinerary.days.map((day, index) => (
                      <div key={index} className="relative pl-10 group">
                        <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border border-gray-600 bg-luxury-dark group-hover:border-luxury-gold group-hover:bg-luxury-gold transition-colors"></div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-3">
                          <span className="text-sm font-bold text-white font-serif">{day.day}</span>
                          <span className="text-xs text-luxury-gold tracking-widest uppercase border border-luxury-gold/30 px-2 py-1">
                            {day.highlight}
                          </span>
                        </div>
                        
                        <h4 className="text-xl text-white font-serif mb-3 group-hover:translate-x-1 transition-transform">{day.title}</h4>
                        <p className="text-gray-400 text-sm leading-loose font-light">{day.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-16 pt-8 border-t border-white/10">
                    <button className="w-full py-4 bg-white text-black uppercase tracking-widest font-bold text-xs hover:bg-gray-200 transition-colors">
                      Finalizar con un Experto
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};