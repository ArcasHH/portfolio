// src/data/posts/runpunzel.ts
import type { Post } from './index';

const base = import.meta.env.BASE_URL;
export const runpunzelPost: Post = {

  slug: 'runpunzel',
  title: 'RunPunzel - blog',
  titleRu: 'RunPunzel - блог',
  description: 'Jam project on "The point of no return"',
  descriptionRu: 'Джемовый поект на тему "Точка невозврата"',


  content: `
  <h2>About the project</h2>
  <p>This game is my first introduction to Unity.</p>

  <p>
  The game was developed as part of a local Russian game jam. The theme was "point of no return".
  The game features several levels, and your goal is simply to reach the exit. But it's not that simple! You'll have to do this multiple times, playing not only as the princess but also as the ghosts, whose goal is to stop the princess from escaping.
  Within a single level, each run is recorded. You have to consider your previous actions to avoid being killed by your own past moves! Can't figure it out? Restart the entire level from scratch! Mwahahaha!!!
  </p>
  <p>
  Okay, okay — I made the levels not too hard 😊
  </p>

  <details class="dev-details">
    <summary class="dev-summary">
      Development — jam experience
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">

      <ul>
        <li>Coming soon: the story of how I assembled a team and ended up sitting alone at the end of day two, desperately trying to understand someone else's code.</li>
      </ul>

      <h2>Result:</h2>
      <ul>
        <li>2nd place!!</li>
        <li>Correction: There were only 42 games in total. But that's still a great result!</li>
        <img src="/portfolio/images/runpunzel/other/RunPunzel_results.webp" alt="Game results" class="rounded-xl my-4" />
      </ul>

    </div>
  </details>
`,


    contentRu: `
      <h2>О проекте</h2>
      <p>Эта игра - мое первое знакомство с Unity.</p>

      <p>
      Игра разрабатывалась в рамках локального российского джема. Тема — точка невозврата.
      игре представлены несколько уровней и твоя задача просто пройти до выхода. Но не всё так просто! Тебе придется проделать это несколько раз и играя не только за принцессу, но и за призраков, чья цель - не дать принцессе пройти.
      В рамках одного уровня каждый проход записывается. И нужно учитывать свои предыдущие действия, чтобы не погибнуть от своих же действий! Не получается? Переигрывай весь уровень сначала! Вуахахах!!!
      </p>
      <p>
      Ладно, я сделала не сложные уровни)
      </p>

      <details class="dev-details">
        <summary class="dev-summary">
          Разработка — опыт джема
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">

          <ul>
            <li>Позже здесь будет история о том, как собрала команду и в итоге под конец второго дня сидела и отчаянно пыталась разобраться в чужом коде</li>
          </ul>

          <h2>Результат:</h2>
          <ul>
            <li>2ое место!!</li>
            <li>Поправка: Было всего 42 игры. Но это всё равно результат!</li>
            <img src="/portfolio/images/runpunzel/other/RunPunzel_results.webp" alt="Developer's notes" class="rounded-xl my-4" />
          </ul>

        </div>
      </details>
    `,


    image: `${base}images/runpunzel/RunPunzel_banner.webp`,

    screenshots: [
        `${base}images/runpunzel/screenshots/screenshot1.webp`,
	`${base}images/runpunzel/screenshots/screenshot2.webp`,

    ],

    date: '29 . 04 . 2026',
    projectSlug: 'gutsout'
  };