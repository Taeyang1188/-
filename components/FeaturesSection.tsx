
import React from 'react';
import { FEATURES, COLORS } from '../constants.ts';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif-luxury font-medium mb-4">The Way We Work</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm font-light leading-relaxed">
                글램아이웨어는 단순한 안경점이 아닌, 당신의 하루를 선명하게 만드는 시력 디자인 연구소입니다.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-gray-200">
            {FEATURES.map((feature, idx) => (
                <div key={feature.id} className="bg-white p-12 flex flex-col items-center text-center group">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 border border-gray-100 transition-colors group-hover:border-casablanca-300">
                        <span className="text-xs font-bold tracking-widest text-gray-400 group-hover:text-casablanca-500">0{idx + 1}</span>
                    </div>
                    <div className="aspect-video w-full mb-8 overflow-hidden bg-gray-50">
                        <img 
                            src={feature.imageUrl} 
                            alt={feature.title} 
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
