
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import AboutSection from './components/AboutSection.tsx';
import BrandSection from './components/BrandSection.tsx';
import FeaturesSection from './components/FeaturesSection.tsx';
import InfoSection from './components/InfoSection.tsx';
import Footer from './components/Footer.tsx';
import { COLORS } from './constants.ts';

const App: React.FC = () => {
  useEffect(() => {
    const triggerIndexNow = async () => {
      const KEY = '7425fceee01d4ed78035422eb68d0a7e';
      const URL = 'https://glameyewear.netlify.app/';
      const LAST_PING_KEY = 'last_indexnow_ping';
      
      const lastPing = localStorage.getItem(LAST_PING_KEY);
      const today = new Date().toDateString();

      // 하루에 한 번만 핑을 보냅니다.
      if (lastPing !== today) {
        try {
          // IndexNow는 여러 검색 엔진에 공유되지만, 주요 타겟인 Bing과 Naver에 직접 통지합니다.
          const endpoints = [
            `https://www.bing.com/indexnow?url=${encodeURIComponent(URL)}&key=${KEY}`,
            `https://search.naver.com/indexnow?url=${encodeURIComponent(URL)}&key=${KEY}`
          ];

          await Promise.all(endpoints.map(endpoint => 
            fetch(endpoint, { mode: 'no-cors' }) // no-cors로 정책 이슈 방지
          ));
          
          localStorage.setItem(LAST_PING_KEY, today);
          console.log('IndexNow ping sent successfully.');
        } catch (error) {
          console.error('IndexNow ping failed:', error);
        }
      }
    };

    triggerIndexNow();
  }, []);

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
