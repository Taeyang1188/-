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
      const HOST = 'https://glameyewear.netlify.app';
      const URL_TO_INDEX = `${HOST}/`;
      const KEY_LOCATION = `${HOST}/${KEY}.txt`;
      const LAST_PING_KEY = 'last_indexnow_ping';
      
      const lastPing = localStorage.getItem(LAST_PING_KEY);
      const today = new Date().toDateString();

      // 하루에 한 번만 실행하여 서버 부하 방지 및 효율적인 인덱싱 유도
      if (lastPing !== today) {
        try {
          // 네이버 서치어드바이저 및 Bing 전용 IndexNow 엔드포인트
          const endpoints = [
            `https://searchadvisor.naver.com/indexnow?url=${encodeURIComponent(URL_TO_INDEX)}&key=${KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`,
            `https://www.bing.com/indexnow?url=${encodeURIComponent(URL_TO_INDEX)}&key=${KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`
          ];

          // fetch를 사용하여 검색 엔진에 핑을 보냅니다. 
          // mode: 'no-cors'는 브라우저의 보안 정책(CORS)으로 인해 요청이 차단되는 것을 방지합니다.
          await Promise.all(endpoints.map(endpoint => 
            fetch(endpoint, { 
              method: 'GET',
              mode: 'no-cors',
              cache: 'no-cache'
            })
          ));
          
          localStorage.setItem(LAST_PING_KEY, today);
          console.log('IndexNow notification sent to Naver and Bing.');
        } catch (error) {
          console.error('IndexNow notification failed:', error);
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