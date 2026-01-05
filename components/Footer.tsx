
import React from 'react';
import { COLORS } from '../constants.ts';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="space-y-6">
            <img 
                src="https://i.imgur.com/6cJ3Lv2.png" 
                alt="GLAM EYEWEAR" 
                className="h-12 md:h-16 w-auto object-contain -ml-1"
            />
            <div className="text-[10px] md:text-xs text-gray-400 space-y-1 font-light tracking-wide">
                <p>OWNER: 글램아이웨어 | ADDRESS: 서울 마포구 어울마당로5길 23 빌딩 2F</p>
                <p>TEL: 02-322-1002 | BUSINESS LICENSE: [123-45-67890]</p>
                <p>© 2024 GLAM EYEWEAR. ALL RIGHTS RESERVED.</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-800 mb-4">SITEMAP</p>
                <ul className="text-xs text-gray-500 space-y-2 font-light">
                    <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
                    <li><a href="#brands" className="hover:text-black transition-colors">Brands</a></li>
                    <li><a href="#features" className="hover:text-black transition-colors">Services</a></li>
                    <li><a href="#location" className="hover:text-black transition-colors">Location</a></li>
                </ul>
            </div>
            <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-800 mb-4">SOCIAL</p>
                <ul className="text-xs text-gray-500 space-y-2 font-light">
                    <li><a href="https://www.instagram.com/seo_glam/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a></li>
                    <li><a href="https://blog.naver.com/glameyewear" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Naver Blog</a></li>
                    <li><a href="https://pf.kakao.com/_kuZWC" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Kakaotalk</a></li>
                </ul>
            </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-50 text-[10px] tracking-widest text-gray-300 flex justify-between uppercase">
        <span>Designed with Luxury in Mind</span>
        <span>Hongdae Premium Optical Shop</span>
      </div>
    </footer>
  );
};

export default Footer;
