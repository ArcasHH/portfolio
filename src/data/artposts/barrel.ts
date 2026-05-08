// src/data/artposts/unicorn.ts
import type { ArtPost } from './index';

const base = import.meta.env.BASE_URL;

export const unicornPost: ArtPost = {
  slug: 'barrel',
  title: '3D barrel model',
  titleRu: '3D модель бочки',
  description: 'Creation of a low-poly barrel model: UV unwrapping, texturing, and custom shader setup in Blender Shader Editor',
  descriptionRu: 'Создание low-poly модели бочки: UV-развертка, текстурирование, настройка кастомного материала через Shader Editor',
  content: `
    <h2>About this work</h2>
    <p>This character design was created for a fantasy project.</p>

    <h2>Frame</h2>
    <div class="animation-grid">
      <div class="animation-item">
        <img src="${base}videos/Barrel_frame.webp" alt="Barrel model" class="pixel-art" width="256" height="256" />
      </div>
    </div>

    <h2>Process</h2>
    <p>The artwork focuses on ethereal and magical elements.</p>
    
    <h2>Tools used</h2>
    <ul>
      <li>Procreate</li>
      <li>Photoshop</li>
    </ul>
  `,
  contentRu: `
    <h2>О работе</h2>
    <p>Готовая модель бочки для использования в игровых движках.</p>

    <h2>Сетка</h2>
    <div class="animation-grid">
      <div class="animation-item">
        <img src="${base}videos/Barrel_frame.webp" alt="Barrel model" class="pixel-art" width="512" height="512" />
      </div>
    </div>

    <h2>Инструменты</h2>
    <ul>
      <li>Blender</li>
    </ul>
  `,
  image: `${base}videos/Barrel.webp`,
  date: '2021-03-10',
};