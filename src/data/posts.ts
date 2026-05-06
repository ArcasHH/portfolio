// src/data/posts.ts
const base = import.meta.env.BASE_URL;

export interface Post {
  slug: string;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  content: string;
  contentRu: string;
  image: string;
  screenshots: string[];
  date: string;
  projectSlug: string;
}

export const posts: Post[] = [
  {
    slug: 'aceage',
    title: 'AceAge - dev blog',
    titleRu: 'AceAge - dev blog',
    description: 'Student project on Godot Engine',
    descriptionRu: 'Студенческий проект на Godot Engine',
    content: `
      <h2>About the project</h2>
      <p>AceAge is a deck-building strategy game where you forge your deck and explore the generated hexagonal map.</p>
      
      <h2>Technical details</h2>
      <ul>
        <li>Godot Engine 4.2</li>
      </ul>
      
      <h2>My role</h2>
      <p>I was responsible for:</p>
      <ul>
        <li>Game design and balancing</li>
        <li>All visual assets (art, UI, animations)</li>
        <li>Sound design and music selection</li>
        <li>UI/UX implementation</li>
      </ul>
      
      <h2>Challenges</h2>
      <p>The biggest challenge was implementing the card system with dynamic effects. I solved this by creating a flexible effect system using signals and resources.</p>
      
      <h2>Key features</h2>
      <ul>
        <li>Turn-based combat system</li>
        <li>Deck building mechanics</li>
        <li>Procedural map generation</li>
      </ul>
      
      <blockquote>
        <p>This was my first complete project in Godot, and I learned a lot about game architecture.</p>
      </blockquote>
      
      <h2>Screenshots</h2>
      <img src="${base}images/AceAge.png" alt="Screenshot" class="rounded-xl my-4" />
      
      <h2>Conclusion</h2>
      <p>The project was successfully completed and published on itch.io.</p>
    `,

    contentRu: `
      <h2>О проекте</h2>
      <p>AceAge — это карточная стратегия на генерируемом гексагональном поле. Игрок открывает тайлы поля, получает новые карты в колоду и каждый ход разыгрывает карты с руки на этом поле.</p>
      
      <h2>Технические детали</h2>
      <ul>
        <li>Godot Engine 4.2</li>
      </ul>

      <h2>Ключевые особенности</h2>
      <ul>
        <li> - Пошаговая система</li>
        <li> - Механика сбора колоды</li>
        <li> - Процедурная генерация карты</li>
	<li> - Волны монстров через определенное кол-во ходов</li>
      </ul>
      
      <h2>Я отвечала за:</h2>
      <ul>
        <li> - Геймдизайн и баланс</li>
        <li> - Все визуальные ассеты (арт, UI)</li>
        <li> - Звуковой дизайн и подбор музыки</li>
        <li> - Реализацию UI/UX</li>
	<li> - Тестирование и исправление багов</li>
      </ul>
      
      <h2>Сложности:</h2>
      <p>Самой большой проблемой был баланс карт и сложности: Рандомная выдача карт + генерация мира + волны монстров. От этого слишком сильно зависел геймплей, тк сложность напрямую зависела от кол-ва ходов. При плохой выдаче руки игрок часто был вынужден пропускать ходы, что замедляло прогрессию при растущей сложности. А при слишком сильных картах и хорошей выдаче - испытывал скуку. Поэтому ввиду отсутствия опыта во время разработки первого проекта мы прибегли к методу итеративного баланса и тестирования как генерации карты, так и разных тактик.</p>
      
      <h2>Заключение</h2>
      <p>Проект был доведен до логического завершения и опубликован на itch.io. Однако, сама игра требует доработки.</p>
      <blockquote> 
        <p>Это был мой первый полноценный проект в Godot, и я многому научилась в плане планирования и взаимодействия с командой (кроме меня был еще один человек, который преимущественно занимался написанием кор-геймплея).</p>
      </blockquote>
    `,
    image: `${base}images/AceAge_banner.png`,
    screenshots: [
      `${base}images/aceage/screenshot1.png`,
      `${base}images/aceage/screenshot2.png`,
      //`${base}images/aceage/screenshot3.jpg`,
      //`${base}images/aceage/gameplay.gif`
    ],
    date: '2025-06-04',
    projectSlug: 'aceage'
  },
  {
    slug: 'gutsout',
    title: 'GutsOut - dev blog',
    titleRu: 'GutsOut - dev blog',
    description: 'GameJam project on Unitty',
    descriptionRu: 'Игра разработанная в рамках Геймджема',
    content: `
      <h2>About the project</h2>
      <p>AceAge is a deck-building strategy game where you forge your deck and explore the generated hexagonal map.</p>
      
      <h2>Technical details</h2>
      <ul>
        <li>Godot Engine 4.2</li>
      </ul>
      
      <h2>My role</h2>
      <p>I was responsible for:</p>
      <ul>
        <li>Game design and balancing</li>
        <li>All visual assets (art, UI, animations)</li>
        <li>Sound design and music selection</li>
        <li>UI/UX implementation</li>
      </ul>
      
      <h2>Challenges</h2>
      <p>The biggest challenge was implementing the card system with dynamic effects. I solved this by creating a flexible effect system using signals and resources.</p>
      
      <h2>Key features</h2>
      <ul>
        <li>Turn-based combat system</li>
        <li>Deck building mechanics</li>
        <li>Procedural map generation</li>
      </ul>
      
      <blockquote>
        <p>This was my first complete project in Godot, and I learned a lot about game architecture.</p>
      </blockquote>
      
      <h2>Screenshots</h2>
      <img src="${base}images/AceAge.png" alt="Screenshot" class="rounded-xl my-4" />
      
      <h2>Conclusion</h2>
      <p>The project was successfully completed and published on itch.io.</p>
    `,

    contentRu: `
      <h2>О проекте</h2>
      <p> Небольшая головоломка про балансировку параметров путем перемешивания органов. Цель - собрать уникальную коллекцию органов и провести 3 ритуала</p>
      
      <h2>Технические детали</h2>
      <ul>
        <li>Unity 6.3</li>
      </ul>

      <h2>Ключевые особенности</h2>
      <ul>
        <li> - Пошаговая система</li>
	<li> - Drag&Drop</li>
	<li> - Различные категории органов по-разному влияющие на параметры</li>
      </ul>
      
      <h2>Я отвечала за:</h2>
      <ul>
        <li> - Идея и геймдизайн</li>
	<li> - Полностью арт-пайплайн</li>
	<li> - UI/UX</li>
	<li> - Подбор сторонних ассетов (UI, sfx)</li>
      </ul>
      
      <h2>Заключение</h2>
      <p>Проект был .</p>
      <blockquote> 
        <p>Это </p>
      </blockquote>
    `,
    image: `${base}images/GutsOut_banner.png`,
    screenshots: [
      `${base}images/aceage/screenshot1.png`,

    ],
    date: '2025-06-04',
    projectSlug: 'gutsout'
  },
  {
    slug: 'gutsout',
    title: 'Gut - dev blog',
    titleRu: 'AceAge - dev blog',
    description: 'Student project on Godot Engine',
    descriptionRu: 'Студенческий проект на Godot Engine',
    content: `
      <h2>About the project</h2>
      <p>AceAge is a deck-building strategy game where you forge your deck and explore the generated hexagonal map.</p>
      
      <h2>Technical details</h2>
      <ul>
        <li>Godot Engine 4.2</li>
      </ul>
      
      <h2>My role</h2>
      <p>I was responsible for:</p>
      <ul>
        <li>Game design and balancing</li>
        <li>All visual assets (art, UI, animations)</li>
        <li>Sound design and music selection</li>
        <li>UI/UX implementation</li>
      </ul>
      
      <h2>Challenges</h2>
      <p>The biggest challenge was implementing the card system with dynamic effects. I solved this by creating a flexible effect system using signals and resources.</p>
      
      <h2>Key features</h2>
      <ul>
        <li>Turn-based combat system</li>
        <li>Deck building mechanics</li>
        <li>Procedural map generation</li>
      </ul>
      
      <blockquote>
        <p>This was my first complete project in Godot, and I learned a lot about game architecture.</p>
      </blockquote>
      
      <h2>Screenshots</h2>
      <img src="${base}images/AceAge.png" alt="Screenshot" class="rounded-xl my-4" />
      
      <h2>Conclusion</h2>
      <p>The project was successfully completed and published on itch.io.</p>
    `,

    contentRu: `
      <h2>О проекте</h2>
      <p>AceAge — это </p>
      
      <h2>Технические детали</h2>
      <ul>
        <li>Godot Engine 4.2</li>
      </ul>

      <h2>Ключевые особенности</h2>
      <ul>
        <li> - Пошаговая система</li>
      </ul>
      
      <h2>Я отвечала за:</h2>
      <ul>
        <li> - Геймдизайн и баланс</li>
      </ul>
      
      <h2>Сложности:</h2>
      <p>
	ntrcn
      </p>
      
      <h2>Заключение</h2>
      <p>Проект был .</p>
      <blockquote> 
        <p>Это </p>
      </blockquote>
    `,
    image: `${base}images/AceAge_banner.png`,
    screenshots: [
      `${base}images/aceage/screenshot1.png`,

    ],
    date: '2025-06-04',
    projectSlug: 'gutsout'
  },
   {
    slug: 'gutsout',
    title: 'Gut - dev blog',
    titleRu: 'AceAge - dev blog',
    description: 'Student project on Godot Engine',
    descriptionRu: 'Студенческий проект на Godot Engine',
    content: `
      <h2>About the project</h2>
      <p>AceAge is a deck-building strategy game where you forge your deck and explore the generated hexagonal map.</p>
      
      <h2>Technical details</h2>
      <ul>
        <li>Godot Engine 4.2</li>
      </ul>
      
      <h2>My role</h2>
      <p>I was responsible for:</p>
      <ul>
        <li>Game design and balancing</li>
        <li>All visual assets (art, UI, animations)</li>
        <li>Sound design and music selection</li>
        <li>UI/UX implementation</li>
      </ul>
      
      <h2>Challenges</h2>
      <p>The biggest challenge was implementing the card system with dynamic effects. I solved this by creating a flexible effect system using signals and resources.</p>
      
      <h2>Key features</h2>
      <ul>
        <li>Turn-based combat system</li>
        <li>Deck building mechanics</li>
        <li>Procedural map generation</li>
      </ul>
      
      <blockquote>
        <p>This was my first complete project in Godot, and I learned a lot about game architecture.</p>
      </blockquote>
      
      <h2>Screenshots</h2>
      <img src="${base}images/AceAge.png" alt="Screenshot" class="rounded-xl my-4" />
      
      <h2>Conclusion</h2>
      <p>The project was successfully completed and published on itch.io.</p>
    `,

    contentRu: `
      <h2>О проекте</h2>
      <p>AceAge — это </p>
      
      <h2>Технические детали</h2>
      <ul>
        <li>Godot Engine 4.2</li>
      </ul>

      <h2>Ключевые особенности</h2>
      <ul>
        <li> - Пошаговая система</li>
      </ul>
      
      <h2>Я отвечала за:</h2>
      <ul>
        <li> - Геймдизайн и баланс</li>
      </ul>
      
      <h2>Сложности:</h2>
      <p>
	ntrcn
      </p>
      
      <h2>Заключение</h2>
      <p>Проект был .</p>
      <blockquote> 
        <p>Это </p>
      </blockquote>
    `,
    image: `${base}images/AceAge_banner.png`,
    screenshots: [
      `${base}images/aceage/screenshot1.png`,

    ],
    date: '2025-06-04',
    projectSlug: 'gutsout'
  },


];