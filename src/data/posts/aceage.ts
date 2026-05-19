// src/data/posts/aceage.ts
import type { Post } from './index';

const base = import.meta.env.BASE_URL;

export const aceagePost: Post = {

  slug: 'aceage',
  title: 'AceAge - blog',
  titleRu: 'AceAge - блог',
  description: 'Student project',
  descriptionRu: 'Студенческий курсовой проект',



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
      <li>Monster waves</li>
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
    <p>Учебное задание ограничивалось тем, что это должна быть карточная игра. Итог - разработанная игра + питчинг</p>
    
    <h2>Движок</h2>
    <ul>
      <li>Godot Engine 4.2</li>
    </ul>

    <h2>Ключевые особенности</h2>
    <ul>
      <li>Механика сбора колоды</li>
      <li>Карты играются на поле</li>
      <li>Процедурная генерация карты</li>
      <li>Волны монстров</li>
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
    <p>Самой большой проблемой был баланс карт и сложности: рандомная выдача карт + генерация мира + волны монстров. При плохой выдаче руки игрок часто был вынужден пропускать ходы, что замедляло прогрессию. А при слишком сильных картах и хорошей выдаче — нет сложности = нет интереса. Поэтому ввиду отсутствия опыта во время разработки первого проекта мы прибегли к методу итеративного баланса и тестирования как генерации карты, так и разных тактик.</p>
    
    <h2>Заключение</h2>
    <p>Проект был доведен до логического завершения и опубликован на itch.io. Однако сама игра требует доработки.</p>
    <blockquote> 
      <p>Это был мой первый полноценный проект в Godot, и я многому научилась в плане планирования и взаимодействия с командой (кроме меня был еще один человек, который преимущественно занимался написанием кор-геймплея).</p>
    </blockquote>
  `,



  image: `${base}images/aceage/AceAge_banner.webp`,
  screenshots: [
    `${base}images/aceage/screenshots/screenshot1.webp`,
    `${base}images/aceage/screenshots/screenshot2.webp`,
  ],
  projectSlug: 'aceage'
};