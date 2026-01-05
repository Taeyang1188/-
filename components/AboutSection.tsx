
import React from 'react';
import { COLORS } from '../constants';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 lg:py-40 px-6 overflow-hidden" style={{ backgroundColor: '#F1F1F3' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="lg:col-span-6 space-y-6 md:space-y-10 order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-1000">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase" style={{ color: COLORS.primary }}>
                Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif-luxury font-medium leading-[1.2] lg:leading-[1.1]">
                잘 보이는 안경이 아니라,<br className="hidden sm:block" />
                오래 써도 편안한 안경.
            </h2>
            <div className="space-y-4 md:space-y-6 text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg font-light max-w-xl">
                <p>
                    글램아이웨어는 눈 건강을 해치는 미용렌즈나 컬러렌즈는 취급하지 않습니다. 
                    오직 차별화된 시력검사와 당신의 눈에 진정으로 이로운 안경만을 권해드리는 것, 
                    그것이 저희가 2017년부터 지켜온 철칙입니다.
                </p>
                <p>
                    단순히 도수 하나만 맞추는 것이 아닙니다. 
                    당신이 일하는 사무실의 조명, 퇴근길 운전대를 잡는 순간, 
                    밤낮으로 변하는 당신의 시각적 피로도까지 면밀히 분석합니다.
                </p>
            </div>
            
            <button className="flex items-center gap-4 text-[11px] md:text-xs font-bold tracking-[0.3em] group border-b border-black pb-2 mt-4 transition-all hover:opacity-50">
                LEARN MORE ABOUT US <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="relative overflow-hidden rounded-lg shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <img 
                    src="https://i.imgur.com/F3P0wGu.jpeg" 
                    alt="Glam Eyewear Shop Interior" 
                    className="w-full h-auto object-cover block aspect-square md:aspect-video lg:aspect-auto"
                />
                <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
