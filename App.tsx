
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import BrandSection from './components/BrandSection';
import FeaturesSection from './components/FeaturesSection';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import { COLORS } from './constants';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-[#F7BD5C] selection:text-[#291C07]">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <BrandSection />
        <FeaturesSection />
        
        {/* Call to Action Section */}
        <section 
          className="py-32 px-6 text-white text-center"
          style={{ backgroundColor: COLORS.primary }}
        >
            <div className="max-w-4xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-serif-luxury font-medium leading-tight">
                    Let's Shape Your<br/>Vision Together.
                </h2>
                <p className="text-sm md:text-lg opacity-90 max-w-2xl mx-auto font-light">
                    9년간의 정밀한 시력 검사 데이터와 트렌디한 감각으로 
                    당신의 일상에 가장 완벽한 안경을 추천해 드립니다.
                </p>
                <div className="pt-8">
                    <button 
                      className="px-12 py-5 bg-[#1F1C26] text-white text-xs font-bold tracking-[0.3em] hover:bg-black transition-all hover:-translate-y-1 active:scale-95 shadow-2xl uppercase"
                    >
                        Book Your Consultation
                    </button>
                </div>
            </div>
        </section>

        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
