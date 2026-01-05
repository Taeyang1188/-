
import React from 'react';
import { MapPin, Clock, Car, ExternalLink } from 'lucide-react';
import { COLORS } from '../constants.ts';

const InfoSection: React.FC = () => {
  const MAP_URL = "https://maps.app.goo.gl/qkRERC8QWg56f8kf8";
  const EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.240726744211!2d126.91728!3d37.549219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98da1c51480d%3A0xc39f997787c88a80!2z6riA656M7JWE7J207Juo7Ja0!5e0!3m2!1sko!2skr!4v1714041724000!5m2!1sko!2skr";

  return (
    <section id="location" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
            <div>
                <h2 className="text-4xl font-serif-luxury font-medium mb-8">Visit Us</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="mt-1"><MapPin size={20} style={{ color: COLORS.primary }} /></div>
                        <div>
                            <p className="font-bold text-sm mb-1">LOCATION</p>
                            <p className="text-sm text-gray-600 font-light">
                                서울 마포구 어울마당로5길 23 빌딩 2F<br/>
                                (합정역 3·5번 출구 도보 5분 / 상수역 1번 출구 도보 5분)
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1"><Clock size={20} style={{ color: COLORS.primary }} /></div>
                        <div>
                            <p className="font-bold text-sm mb-1">OPERATING HOURS</p>
                            <div className="text-sm text-gray-600 font-light grid grid-cols-2 gap-x-4">
                                <span>화 – 토</span> <span>11:30 – 20:30</span>
                                <span>일요일 / 공휴일</span> <span>12:00 – 20:00</span>
                                <span>월요일</span> <span>11:30 – 20:30</span>
                                <span className="font-bold text-red-500">목요일</span> <span className="font-bold text-red-500">정기 휴무</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="mt-1"><Car size={20} style={{ color: COLORS.primary }} /></div>
                        <div>
                            <p className="font-bold text-sm mb-1">PARKING</p>
                            <p className="text-sm text-gray-600 font-light">
                                매장 입구 우측 자주식 주차 2대 가능<br/>
                                (만차 시 합정1공영주차장 이용 권장)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
                <p className="text-sm font-light text-gray-500 leading-relaxed italic">
                    "당신의 일상에 가장 최적화된 안경을 설계해드립니다. 
                    홍대와 합정 사이, 9년간 많은 고객들의 눈을 책임져온 글램아이웨어를 방문해 보세요."
                </p>
            </div>
            
            <a 
              href={MAP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity"
            >
              Open in Google Maps <ExternalLink size={12} />
            </a>
        </div>

        <div className="relative group">
            <a 
                href={MAP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full aspect-square bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
                <iframe 
                    src={EMBED_URL}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Glam Eyewear Map"
                    className="pointer-events-none"
                ></iframe>
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors cursor-pointer">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md px-6 py-3 shadow-xl flex items-center gap-3">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black">Click to View on Maps</span>
                        <ExternalLink size={14} className="text-black" />
                    </div>
                </div>
            </a>
            
            <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-sm shadow-lg text-[10px] tracking-widest font-bold uppercase pointer-events-none">
                HONGDAE AREA
            </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
