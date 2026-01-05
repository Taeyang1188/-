
import { Brand, Feature } from './types';

export const COLORS = {
  primary: '#DEA84A', // Casablanca 300
  primaryDark: '#AC8137', // Casablanca 500
  secondary: '#D6D4DC', // Mischka 100
  secondaryDark: '#847E96', // Mischka 500
  text: '#1A1C26', // Mischka 900
  background: '#F1F0F3', // Mischka 50
};

export const BRANDS: Brand[] = [
  { 
    name: 'STEALER', 
    logoUrl: 'https://i.imgur.com/RM9vqRw.png' 
  },
  { 
    name: 'MUZIK', 
    logoUrl: 'https://muzik.co.kr/web/upload/share-image-1-367d9130ce0694393d84707ea71e7070.png' 
  },
  { 
    name: 'LAURENCE PAUL', 
    logoUrl: 'https://i.imgur.com/4pkpFg8.png' 
  },
  { 
    name: 'VIKTOR & ROLF', 
    logoUrl: 'https://i.imgur.com/xuaTQWF.png' 
  },
  { 
    name: 'NIRO', 
    logoUrl: 'https://i.imgur.com/B4aNjfh.png' 
  },
  { 
    name: 'GANEKO UNIT', 
    logoUrl: 'https://i.imgur.com/LGqDVZS.png' 
  },
  { 
    name: 'SISELY', 
    logoUrl: 'https://i.imgur.com/zLFeFOx.png' 
  },
  { 
    name: 'GROOVER', 
    logoUrl: 'https://i.imgur.com/e9FWsGh.png' 
  },
  { 
    name: 'RIMROCK', 
    logoUrl: 'https://i.imgur.com/r0D9Z3o.png' 
  },
  { 
    name: 'LASH', 
    logoUrl: 'https://i.imgur.com/L7koLHb.png' 
  },
  { 
    name: 'TIFFANY & CO.', 
    logoUrl: 'https://i.imgur.com/6OIK3Rr.png' 
  },
  { 
    name: 'OAKLEY', 
    logoUrl: 'https://i.imgur.com/tP5oFxy.png' 
  },
  { 
    name: 'RAY-BAN', 
    logoUrl: 'https://i.imgur.com/cxKJAgb.png' 
  },
];

export const FEATURES: Feature[] = [
  {
    id: '1',
    title: '다양한 렌즈 옵션',
    description: '시력 교정 목적에 맞춘 다양한 렌즈 옵션을 보유하고 있습니다. 미용렌즈는 취급하지 않으며, 오직 눈 건강을 최우선으로 합니다.',
    imageUrl: 'https://i.imgur.com/ELjuT62.png',
  },
  {
    id: '2',
    title: '정밀 시력 검사',
    description: '생활 패턴을 고려한 9년 노하우의 정밀 시력검사. 단순히 도수를 맞추는 것이 아닌, 일상의 편안함을 설계합니다.',
    imageUrl: 'https://i.imgur.com/GBDOipu.png',
  },
  {
    id: '3',
    title: '프리미엄 프레임',
    description: '국내외 하우스 브랜드를 엄선하여 얼굴형과 도수에 맞는 최적의 디자인을 추천해 드립니다.',
    imageUrl: 'https://i.imgur.com/OkwQnbd.png',
  },
];
