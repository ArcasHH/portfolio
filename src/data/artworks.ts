// src/data/artworks.ts
const base = import.meta.env.BASE_URL;

export interface Artwork {
  slug: string;
  titleEn: string;
  titleRu: string;
  descriptionEn: string;
  descriptionRu: string;
  tags: string[];
  src: string;
  type?: 'image' | 'video';
}

export const artworks: Artwork[] = [
  { 
    slug: 'girl',
    titleEn: 'Girl', 
    titleRu: 'Девочка', 
    descriptionEn: 'Animation in Blender followed by rendering in SpriteSheet', 
    descriptionRu: 'Анимация в Blender с последующим рендером в SpriteSheet',
    tags: ['3D', 'Animation', 'Blender', 'PixelArt'],
    src: `${base}videos/Girl.webp`,
    type: 'image'
  },
  { 
    slug: 'unicorn',
    titleEn: 'Unicorn', 
    titleRu: 'Единорог', 
    descriptionEn: 'Unicorn concept for a dark fantasy', 
    descriptionRu: 'Концепт единорога для мрачного фентези',
    tags: ['Concept', 'DigitalArt', 'Photoshop'],
    src: `${base}images/concepts/Unicorn_preview.webp`,
    type: 'image'
  },
];