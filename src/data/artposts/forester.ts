// src/data/artposts/forester.ts
import type { ArtPost } from './index';

const base = import.meta.env.BASE_URL;

export const foresterPost: ArtPost = {
  slug: 'forester',
  title: 'Forester assets',
  titleRu: 'Ассеты для игры Forester',
  description: 'Character, game objects, icons',
  descriptionRu: 'Персонаж, игровые объекты, иконки',

  content: `
  <h2>About the work:</h2>
  <p>
    Game assets for the game 
    <a href="https://itch.io/jam/evening-jam/rate/3635829" class="text-primary hover:text-primary/80 underline">Forester</a>.
  </p>

  <h2>Tools</h2>
  <ul>
    <li>Photoshop</li>
  </ul>

  <details class="dev-details">
    <summary class="dev-summary">
      Character:
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <p>A mysterious forester who doesn't need a lantern in the dark forest — he is the lantern!</p>
      <img src="/portfolio/images/forester/forester_game.webp" alt="Forester" class="rounded-xl my-4" />
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Game objects:
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <ul>
        <li>Trees - can be cut down → Splits into 2 parts. The top part falls, leaving a stump behind.</li>
        <li>Three types of trees: regular, golden, and diamond</li>
        <li>A couple of bushes with berries and mushrooms</li>
        <li>Wall sprite</li>
        <li>Gate - the only way to escape the mysterious forest</li>
      </ul>
      <img src="/portfolio/images/forester/forester_atlas.webp" alt="Game assets" class="rounded-xl my-4" />
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Game location:
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <p>The application of assets. But not all of them - after that, I just drew a sprite of the wall.</p>
      <img src="/portfolio/images/forester/forester_map.webp" alt="Game location" class="rounded-xl my-4" />
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Inventory icons:
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <ul>
        <li>Composite axe: Golden wood for the handle, diamond wood for the blade</li>
        <li>A compass that points to the nearest golden or diamond tree</li>
        <li>Berries, which are used to craft potions</li>
        <li>Gate key</li>
      </ul>
      <img src="/portfolio/images/forester/forester_icons.webp" alt="Inventory icons" class="rounded-xl my-4" />
    </div>
  </details>
`,



  contentRu: `

   <h2>О работе:</h2>
    <p>
        Игровые ассеты к игре
        <a href="https://itch.io/jam/evening-jam/rate/3635829" class="text-primary hover:text-primary/80 underline">Forester</a>.
    </p>

   <h2>Инструменты</h2>
    <ul>
      <li>Photoshop</li>
    </ul>

   <details class="dev-details">
    <summary class="dev-summary">
      Персонаж:
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <p>Таинственный лесник, которому не нужен фонарь в мрачном лесу - он и есть фонарь!</p>
      <img src="/portfolio/images/forester/forester_game.webp" alt="Forester" class="rounded-xl my-4" />
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Игровые объекты:
      <span class="arrow">▼</span>
    </summary>
    <ul>
      <li>Деревья - их можно срубить -> Разделяется на 2 части. Верхняя часть падает, а пенек остается.<li>
      <li>Деревья трех типов: обычные, золотые и алмазные<li>
      <li>Пару кустов с ягодами и грибы<li>
      <li>Спрайт стены<li>
      <li>Ворота - единственный способ сбежать из таинственного леса<li>
    </ul>
      <img src="/portfolio/images/forester/forester_atlas.webp" alt="Ассеты игры" class="rounded-xl my-4" />
    
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Игровая локация:
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <p>Приминение ассетов. Но не всех - после отого как раз и нарисовала спрайт стены</p>
      <img src="/portfolio/images/forester/forester_map.webp" alt="Ассеты игры" class="rounded-xl my-4" />
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Иконки - предметы инвентаря:
      <span class="arrow">▼</span>
    </summary>
    <ul>
      <li>Топор составной: Для рукояти добываем золотую древесину, а для головки - алмазную.<li>
      <li>Есть компас, который указывает на ближайшее золотое или алмазное дерево<li>
      <li>Ягоды, из которпых крафтятся зелья<li>
      <li>Ключ от ворот<li>
    </ul>
      <img src="/portfolio/images/forester/forester_icons.webp" alt="Ассеты игры" class="rounded-xl my-4" />
    
  </details>


  `,
  image: `${base}images/forester/Forester.webp`,
  date: '2025-07-10',
};