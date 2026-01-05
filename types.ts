
export interface Brand {
  name: string;
  logoUrl?: string;
  description?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  BRANDS = 'brands',
  FEATURES = 'features',
  LOCATION = 'location',
}
