
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { COLORS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    setIsMenuOpen(false);

    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'BRANDS', href: '#brands' },
    { name: 'SERVICE', href: '#features' },
    { name: 'LOCATION', href: '#location' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3 border-b border-gray-100' 
            : 'bg-transparent py-5 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group" onClick={(e) => scrollToSection(e, '#hero')}>
            <img 
              src="https://i.imgur.com/6cJ3Lv2.png" 
              alt="GLAM EYEWEAR" 
              className="h-5 md:h-6 lg:h-7 object-contain transition-opacity group-hover:opacity-70"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] hover:text-gray-400 transition-colors uppercase"
                style={{ color: COLORS.text }}
              >
                {link.name}
              </a>
            ))}
            <button 
              className="ml-2 px-5 lg:px-7 py-2.5 text-[10px] font-bold tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-lg uppercase"
              style={{ backgroundColor: COLORS.primary }}
            >
              Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-900 focus:outline-none z-[110]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Updated for better layout & aesthetics */}
      <div 
        className={`fixed inset-0 bg-white z-[90] md:hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-serif-luxury font-medium tracking-tight text-gray-900 hover:text-gray-400 transition-colors uppercase"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            className="mt-6 px-10 py-4 text-[11px] font-bold tracking-[0.3em] text-white uppercase shadow-xl active:scale-95 transition-transform"
            style={{ backgroundColor: COLORS.primary }}
          >
            BOOK CONSULTATION
          </button>
        </div>
        
        {/* Subtle Background Mark */}
        <div className="absolute bottom-10 left-0 right-0 text-center opacity-5 select-none pointer-events-none">
            <h2 className="text-6xl font-serif-luxury uppercase tracking-widest">GLAM</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
