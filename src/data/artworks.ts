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
        slug: 'googoose',
        titleEn: 'Goo-Goose',
        titleRu: 'Goo-Goose',
        descriptionEn: 'working as an artist on the game Goo-Goose',
        descriptionRu: 'Работа художником над игрой Goo-Goose',
        tags: ['2D', 'Game'],
        src: `${base}images/googoose/GooGoose.webp`,
        type: 'image'
    },
    { 
        slug: 'girl',
        titleEn: 'Animation Render', 
        titleRu: 'Рендер анимации', 
        descriptionEn: 'Animation in Blender followed by rendering in SpriteSheet', 
        descriptionRu: 'Анимация в Blender с последующим рендером в SpriteSheet',
        tags: ['3D', 'Animation', 'PixelArt'],
        src: `${base}videos/Girl.webp`,
        type: 'image'
    },
    { 
        slug: 'barrel',
        titleEn: 'Barrel', 
        titleRu: 'Бочка', 
        descriptionEn: 'Low-poly 3D model with UV scanning, textures, and custom shader', 
        descriptionRu: 'Low-poly 3D-модель с UV-разверткой, текстурами и кастомным шейдером',
        tags: ['3D', 'UV & Textures', 'Shaders'],
        src: `${base}videos/Barrel.webp`,
        type: 'image'
    },
    {
        slug: 'forester',
        titleEn: 'Forester',
        titleRu: 'Forester',
        descriptionEn: 'A set of assets for the Forester game',
        descriptionRu: 'Набор ассетов к игре Forester',
        tags: ['2D', 'Game'],
        src: `${base}images/forester/Forester.webp`,
        type: 'image'
    },

];