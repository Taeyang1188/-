
import React from 'react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white">
      {/* Part 1: Hero Image Visual (Responsive height) */}
      <div className="relative h-[75vh] sm:h-[85vh] md:h-screen w-full overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 w-full h-full">
          <img 
            src="https://i.imgur.com/czF3jl9.png" 
            alt="Glam Eyewear Visual" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent pointer-events-none"></div>

        {/* Responsive Background Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
            <h1 className="text-[18vw] md:text-[12vw] font-serif-luxury font-medium text-gray-900/5 select-none uppercase tracking-tighter text-center leading-none">
                GLAM EYEWEAR
            </h1>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 animate-bounce opacity-40">
            <span className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase font-bold text-gray-900">Scroll</span>
            <div className="w-px h-6 md:h-12 bg-gray-400"></div>
        </div>
      </div>

      {/* Part 2: Introduction & CTA Section (Responsive spacing) */}
      <div className="relative z-10 bg-white py-12 sm:py-24 md:py-32 px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex flex-col items-center">
            <h2 className="text-[8px] md:text-xs tracking-[0.4em] md:tracking-[0.8em] font-bold uppercase text-gray-400 mb-4 md:mb-6">
              Professional Optical Service • Since 2017
            </h2>
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>

          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light px-2 sm:px-4">
            눈의 건강과 일상의 결을 함께 고민하는 <br className="hidden sm:block" /> 홍대 정밀 시력검사 전문 안경원.<br/>
            <span className="font-medium text-gray-900 mt-4 md:mt-8 block italic text-lg md:text-3xl lg:text-5xl font-serif-luxury tracking-tight">
                "오래 써도 눈이 편안한 안경"
            </span>
          </p>
          
          <div className="pt-6 md:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-[#1A1C26] text-white text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all hover:bg-black hover:-translate-y-1 active:scale-95 shadow-xl"
            >
              Explore Collection
            </button>
            <button 
              className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-white border border-gray-100 text-[#1A1C26] text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all hover:bg-gray-50 hover:-translate-y-1 active:scale-95 shadow-sm"
              onClick={() => {
                const element = document.getElementById('location');
                if (element) {
                    window.scrollTo({
                        top: element.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
              }}
            >
              Visit Store
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Branding Elements - Visible from tablet up */}
      <div className="absolute top-[85vh] left-6 lg:left-12 hidden sm:block">
        <div className="h-16 lg:h-32 w-px bg-gradient-to-b from-gray-200 to-transparent"></div>
      </div>
      
      <div className="absolute top-[85vh] right-6 lg:right-12 hidden sm:flex flex-col items-end gap-2 lg:gap-3 text-right">
        <p className="text-[9px] lg:text-[11px] tracking-[0.3em] font-bold text-gray-400">HONGDAE • HAPJEONG</p>
        <div className="h-px w-8 lg:w-10 bg-gray-200"></div>
        <p className="text-[8px] lg:text-[10px] tracking-[0.3em] font-medium text-gray-300 uppercase">Premium Eyewear Lab</p>
      </div>
    </section>
  );
};

export default Hero;
