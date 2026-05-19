// src/data/artposts/girl.ts
import type { ArtPost } from './index';

const base = import.meta.env.BASE_URL;

export const girlPost: ArtPost = {
  slug: 'girl',
  title: 'Try Blender animation',
  titleRu: 'Блендер анимация',
  description: 'Rendering 3D skeletal animation in Blender to generate pixel spritesheets',
  descriptionRu: 'Рендер 3D-скелетной анимации в Blender для генерации пиксельных спрайтшитов',


  content: `
  <h2>About this work</h2>
  <p>The goal is to use a 3D model with skeletal animation rendering to produce SpriteSheet pixel animations.</p>
  <p>The reason is to speed up the production of frame-by-frame pixel 2D character animation (Aseprite) while maintaining the possibility of manual refinement.</p>

  <h2>Spritesheets in different resolutions</h2>
  <div class="animation-grid">
    <div class="animation-item">
      <img src="${base}videos/Girl32.webp" alt="32x32 animation" class="pixel-art" width="128" height="128" />
      <span>32×32</span>
    </div>
    <div class="animation-item">
      <img src="${base}videos/Girl64.webp" alt="64x64 animation" class="pixel-art" width="128" height="128" />
      <span>64×64</span>
    </div>
    <div class="animation-item">
      <img src="${base}videos/Girl128.webp" alt="128x128 animation" class="pixel-art" width="128" height="128" />
      <span>128×128</span>
    </div>
  </div>

  <h2>Process</h2>
  <ul>
    <li>Creating a low-poly character model with rig and skeletal animation</li>
    <li>Setting up materials using Shader Graph in Blender</li>
    <li>Creating animation cycles</li>
    <li>Exporting render and manual refinement in Aseprite</li>
  </ul>

  <h2>Tools used</h2>
  <ul>
    <li>Blender (modeling, rigging, animation, rendering)</li>
    <li>Aseprite (final refinement and color correction)</li>
  </ul>
`,


  contentRu: `
    <h2>О работе</h2>
    <p>Цель - Использовать рендер 3D-модели со скелетной анимацией для получения SpriteSheet.</p>
    <p>Причина - ускорение производства покадровой пиксельной 2D анимации персонажа (Aseprite) с сохранением возможности ручной доработки</p>

    <h2>Спрайтшиты в разных разрешениях </h2>
	  <div class="animation-grid">
 	   <div class="animation-item">
 	     <img src="${base}videos/Girl32.webp" alt="32x32 animation" class="pixel-art" width="128" height="128" />
 	     <span>32×32</span>
	    </div>
	    <div class="animation-item">
 	     <img src="${base}videos/Girl64.webp" alt="64x64 animation" class="pixel-art" width="128" height="128" />
	      <span>64×64</span>
 	   </div>
 	   <div class="animation-item">
 	     <img src="${base}videos/Girl128.webp" alt="128x128 animation" class="pixel-art" width="128" height="128" />
	      <span>128×128</span>
	   </div>
      </div>
    <h2>Процесс</h2>
    <ul>
      <li>Создание low-poly модели персонажа с ригом и скелетной анимацией</li>
      <li>Настройка материалов через Shader Graph в Blender</li>
      <li>Создание анимационных циклов</li>
      <li>Экспорт рендера и учная доработка в Aseprite</li>
    </ul>

    
    <h2>Инструменты</h2>
    <ul>
      <li>Blender (моделинг, ригинг, анимация, рендер)</li>
      <li>Aseprite (финальная доработка и цветокоррекция)</li>
    </ul>
  `,


  image: `${base}videos/Girl2.webp`,
};