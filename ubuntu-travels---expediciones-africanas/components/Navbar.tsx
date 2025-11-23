import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Destinos', href: '#destinations' },
    { name: 'Experiencias', href: '#experiences' },
    { name: 'Diseñador IA', href: '#ai-planner' },
    { name: 'Filosofía', href: '#about' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-luxury-dark/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Compass className="h-8 w-8 text-luxury-gold transition-transform duration-700 group-hover:rotate-90" />
              <div className="absolute inset-0 bg-luxury-gold blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-medium tracking-[0.15em] text-white leading-none">UBUNTU</span>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-luxury-gold mt-1">Travels</span>
            </div>
          </a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs font-medium text-gray-300 hover:text-luxury-gold transition-colors uppercase tracking-[0.15em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-8 py-3 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-luxury-gold hover:border-luxury-gold hover:text-black transition-all duration-300"
            >
              Concierge
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-luxury-gold transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-luxury-dark/95 backdrop-blur-xl z-40 transition-transform duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-serif text-white hover:text-luxury-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};