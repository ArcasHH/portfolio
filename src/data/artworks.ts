// src/data/artworks.ts
const base = import.meta.env.BASE_URL;

export interface Artwork {
  slug: string;
  titleEn: string;
  titleRu: string;
  categoryEn: string;
  categoryRu: string;
  src: string;
  type?: 'image' | 'video';
}

export const artworks: Artwork[] = [
  { 
    slug: 'girl',
    titleEn: 'Girl', 
    titleRu: 'Девочка', 
    categoryEn: 'Concept', 
    categoryRu: 'Концепт', 
    src: `${base}videos/Girl.webp`,
    type: 'image'
  },
  { 
    slug: 'girl',
    titleEn: 'Unicorn', 
    titleRu: 'Единорог', 
    categoryEn: 'Character', 
    categoryRu: 'Персонаж', 
    src: `${base}images/unicorn.jpg`,
    type: 'image'
  },
];