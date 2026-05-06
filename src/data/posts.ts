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
  title: 'AceAge - blog',
  titleRu: 'AceAge - блог',
  description: 'Student project on Godot Engine',
  descriptionRu: 'Студенческий проект на Godot Engine',
  content: `
    <h2>About the project</h2>
    <p>AceAge is a card strategy game on a generated hexagonal field. The player opens field tiles, gets new cards into the deck, and plays cards from hand on this field each turn.</p>
    
    <h2>Technical details</h2>
    <ul>
      <li>Godot Engine 4.2</li>
    </ul>

    <h2>Key features</h2>
    <ul>
      <li>Turn-based system</li>
      <li>Deck building mechanics</li>
      <li>Procedural map generation</li>
      <li>Monster waves after a certain number of turns</li>
    </ul>
    
    <h2>My role</h2>
    <p>I was responsible for:</p>
    <ul>
      <li>Game design and balancing</li>
      <li>All visual assets (art, UI)</li>
      <li>Sound design and music selection</li>
      <li>UI/UX implementation</li>
      <li>Testing and bug fixing</li>
    </ul>
    
    <h2>Challenges</h2>
    <p>The biggest challenge was balancing cards and difficulty: random card draw + world generation + monster waves. Gameplay depended heavily on this, as difficulty was directly tied to the number of turns. With bad card draws, players were often forced to skip turns, slowing progression while difficulty increased. With overly powerful cards and good draws, players got bored. Due to lack of experience during the development of my first project, we used iterative balancing and playtesting of both map generation and different tactics.</p>
    
    <h2>Conclusion</h2>
    <p>The project was completed and published on itch.io. However, the game itself needs some refinement.</p>
    <blockquote> 
      <p>This was my first full-fledged project in Godot, and I learned a lot about planning and team collaboration (besides me, there was one other person who mainly focused on core gameplay implementation).</p>
    </blockquote>
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
      <li>Пошаговая система</li>
      <li>Механика сбора колоды</li>
      <li>Процедурная генерация карты</li>
      <li>Волны монстров через определенное кол-во ходов</li>
    </ul>
    
    <h2>Я отвечала за:</h2>
    <ul>
      <li>Геймдизайн и баланс</li>
      <li>Все визуальные ассеты (арт, UI)</li>
      <li>Звуковой дизайн и подбор музыки</li>
      <li>Реализацию UI/UX</li>
      <li>Тестирование и исправление багов</li>
    </ul>
    
    <h2>Сложности</h2>
    <p>Самой большой проблемой был баланс карт и сложности: рандомная выдача карт + генерация мира + волны монстров. От этого слишком сильно зависел геймплей, так как сложность напрямую зависела от количества ходов. При плохой выдаче руки игрок часто был вынужден пропускать ходы, что замедляло прогрессию при растущей сложности. А при слишком сильных картах и хорошей выдаче — испытывал скуку. Поэтому ввиду отсутствия опыта во время разработки первого проекта мы прибегли к методу итеративного баланса и тестирования как генерации карты, так и разных тактик.</p>
    
    <h2>Заключение</h2>
    <p>Проект был доведен до логического завершения и опубликован на itch.io. Однако сама игра требует доработки.</p>
    <blockquote> 
      <p>Это был мой первый полноценный проект в Godot, и я многому научилась в плане планирования и взаимодействия с командой (кроме меня был еще один человек, который преимущественно занимался написанием кор-геймплея).</p>
    </blockquote>
  `,
  image: `${base}images/AceAge_banner.png`,
  screenshots: [
    `${base}images/aceage/screenshot1.png`,
    `${base}images/aceage/screenshot2.png`,
  ],
  date: '2025-06-04',
  projectSlug: 'aceage'
},
  {
  slug: 'gutsout',
  title: 'GutsOut - blog',
  titleRu: 'GutsOut - блог',
  description: 'What went right and wrong during the jam',
  descriptionRu: 'Что пошло правильно, а что нет во время джема',
  content: `
    <h2>About the project</h2>
    <p>GutsOut is a simple puzzle game where you play as an occult doctor treating patients by substituting organs. The main gameplay focuses on balancing various parameters.</p>
    
    <h2>Technical details</h2>
    <ul>
      <li>Godot Engine 4.2</li>
      <li>Created during a game jam</li>
    </ul>
    
    <h2>My role</h2>
    <p>I was responsible for:</p>
    <ul>
        <li>Game design and balancing</li>
        <li>All visual assets (art, UI)</li>
        <li>Sound design and music</li>
        <li>UI/UX implementation</li>
      </ul>
    
      <h2>Challenges</h2>
      <p>The biggest challenge was balancing the organ parameters. Each patient had different needs, and finding the right combination required careful tuning of the numbers.</p>
    
      <h2>Key features</h2>
      <ul>
        <li>Turn-based puzzle mechanics</li>
        <li>Parameter balancing system</li>
        <li>Multiple patient cases</li>
      </ul>
    
      <blockquote>
        <p>This was a great experience working within time constraints of a game jam.</p>
      </blockquote>
    
      <h2>Conclusion</h2>
      <p>The project was successfully completed and published on itch.io during the jam.</p>
    `,

    contentRu: `
      <h2>О проекте</h2>
      <p>GutsOut — это простенький пазл, где в роли оккультного доктора мы лечим недуги пациентов подменой органов. Основной геймплей сосредоточен на балансировке параметров.</p>
    
      <h2>Технические детали</h2>
      <ul>
        <li>Godot Engine 4.2</li>
        <li>Создано в рамках игрового джема</li>
      </ul>
    
      <h2>Моя роль</h2>
      <p>Я отвечала за:</p>
      <ul>
        <li>Геймдизайн и баланс</li>
        <li>Все визуальные ассеты (арт, UI)</li>
        <li>Звуковой дизайн и музыку</li>
        <li>Реализацию UI/UX</li>
      </ul>
    
      <h2>Сложности</h2>
      <p>Самой большой проблемой был баланс параметров органов. У каждого пациента были разные потребности, и поиск правильной комбинации требовал тщательной настройки чисел.</p>
    
      <h2>Ключевые особенности</h2>
      <ul>
        <li>Пошаговая головоломка</li>
        <li>Система балансировки параметров</li>
        <li>Несколько случаев пациентов</li>
      </ul>
    
      <blockquote>
        <p>Это был отличный опыт работы в условиях ограниченного времени джема.</p>
      </blockquote>
    
      <h2>Заключение</h2>
      <p>Проект был успешно завершён и опубликован на itch.io в рамках джема.</p>
    `,
    image: `${base}images/GutsOut.png`,
    screenshots: [
      // Добавьте скриншоты при наличии
      // `${base}images/gutsout/screenshot1.png`,
    ],
    date: '2025-06-04',
    projectSlug: 'gutsout'
  },
];