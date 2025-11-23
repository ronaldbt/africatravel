import React from 'react';
import { Compass, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Compass className="h-6 w-6 text-luxury-gold" />
              <span className="font-serif text-xl tracking-widest">UBUNTU</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-md font-light text-sm">
              Creando conexiones profundas entre el viajero exigente y el alma indómita de África. Somos artesanos de experiencias transformadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">Explorar</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Destinos</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Nuestras Villas</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Avionetas Privadas</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Prensa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">Oficinas</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li>Madrid, España</li>
              <li>Cape Town, Sudáfrica</li>
              <li>Arusha, Tanzania</li>
              <li className="pt-4 text-luxury-gold">+34 912 345 678</li>
              <li className="text-white">concierge@ubuntutravels.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs uppercase tracking-wider">&copy; Ubuntu Travels {new Date().getFullYear()}</p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors"><Twitter className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};