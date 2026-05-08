// src/data/artposts/girl.ts
import type { ArtPost } from './index';

const base = import.meta.env.BASE_URL;

export const girlPost: ArtPost = {
  slug: 'girl',
  title: 'Try Blender animation',
  titleRu: 'Блендер анимация',
  description: 'The beginning of the journey in 3D',
  descriptionRu: 'Начало моего пути в 3D',
  content: `
    <h2>About this work</h2>
    <p>The goal is to use a skeletal animation renderer to produce SpriteSheet pixel animations.</p>
    <p>The reason is the acceleration of the production of frame-by-frame pixel 2D character animation (Aseprite) while maintaining the possibility of manual refinement</p>

    <h2>Animation preview 32×32, 64×64, 128×128</h2>
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
    <p>Creating a 3D low-poly character model with a skeleton. Creating the necessary animation cycles in Blender and then rendering in the right angles using SpriteSheetMaker</p>
    
    <h2>Tools used</h2>
    <ul>
      <li>Blender</li>
    </ul>
  `,
  contentRu: `
    <h2>О работе</h2>
    <p>Цель - Использовать рендер скелетной анимации для получения SpriteSheet пиксельных анимаций.</p>
    <p>Причина - ускорение производства покадровой пиксельной 2D анимации персонажа (Aseprite) с сохранением возможности ручной доработки</p>

    <h2>Полученные анимации в разрешениях 32×32, 64×64, 128×128 </h2>
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
    <p>Создание 3D low-poly модели персонажа со скелетом. Создание нужных циклов анимации в Блендер и последующий рендер в нужных ракурсах с помощью SpriteSheetMaker</p>
    
    <h2>Инструменты</h2>
    <ul>
      <li>Blender</li>
    </ul>
  `,
  image: `${base}videos/Girl2.webp`,
  date: '2026-01-15',
};