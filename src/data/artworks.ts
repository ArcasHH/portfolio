// src/data/artworks.ts
const base = import.meta.env.BASE_URL;

export interface Artwork {
  titleEn: string;
  titleRu: string;
  categoryEn: string;
  categoryRu: string;
  tags: string[];
  src: string;
  type?: 'image' | 'video';
}

export const artworks: Artwork[] = [
  { 
    titleEn: 'Girl', 
    titleRu: 'Девочка', 
    categoryEn: 'Animation', 
    categoryRu: 'Анимация',
    tags: ['3D', 'Animation', 'Blender', 'PixelArt'],
    src: `${base}videos/Girl.webp`,
    type: 'image'
  },
  { 
    titleEn: 'Unicorn', 
    titleRu: 'Единорог', 
    categoryEn: 'Concept', 
    categoryRu: 'Концепт',
    tags: ['Concept', 'DigitalArt'],
    src: `${base}images/unicorn.jpg`,
    type: 'image'
  },
];