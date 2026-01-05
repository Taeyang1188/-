
import React from 'react';
import { BRANDS, COLORS } from '../constants.ts';

const BrandSection: React.FC = () => {
  return (
    <section id="brands" className="py-20 md:py-32 lg:py-40 bg-[#1a1c26] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 lg:gap-20 mb-16 md:mb-24">
            <div className="space-y-4">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase opacity-50 block">
                    Selected Brands
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif-luxury font-medium leading-tight">
                    Our Curated Lineup
                </h2>
            </div>
            <p className="max-w-md text-xs md:text-sm lg:text-base text-gray-400 leading-relaxed font-light">
                유행에 치우치지 않고, 얼굴형·도수·사용 목적에 맞는 검증된 하우스 브랜드와 프리미엄 브랜드만을 선별합니다.
            </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 border-l border-t border-white/10">
            {BRANDS.map((brand) => (
                <div 
                    key={brand.name} 
                    className="relative border-r border-b border-white/10 flex items-center justify-center group hover:bg-white/5 transition-all duration-500 cursor-default overflow-hidden aspect-square p-6 md:p-8"
                >
                    {brand.logoUrl ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <img 
                          src={brand.logoUrl} 
                          alt={brand.name} 
                          className={`max-w-full max-h-full transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 ${
                            brand.logoUrl.includes('share-image') || brand.logoUrl.endsWith('.jpg') 
                              ? 'object-cover' 
                              : 'object-contain'
                          } ${
                            brand.logoUrl.endsWith('.svg') ? 'brightness-0 invert' : ''
                          }`}
                          onError={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              e.currentTarget.style.display = 'none';
                              const fallback = parent.querySelector('.fallback-text');
                              if (fallback) fallback.classList.remove('hidden');
                            }
                          }}
                        />
                        <div className="fallback-text hidden absolute inset-0 flex items-center justify-center">
                           <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-white/40 group-hover:text-white transition-colors text-center uppercase px-4">
                            {brand.name}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-white/40 group-hover:text-white transition-colors text-center uppercase px-4">
                          {brand.name}
                      </span>
                    )}
                </div>
            ))}
            <div className="hidden lg:flex border-r border-b border-white/10 items-center justify-center bg-white/5 opacity-20">
               <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
        </div>

        <div className="mt-12 md:mt-24 pt-8 md:pt-12 border-t border-white/5 text-center">
            <p className="text-[11px] md:text-sm font-light text-gray-500 italic tracking-wide">
                & 셀럽들이 선택한 래쉬(LASH) 전 모델 전 컬러 완비
            </p>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
