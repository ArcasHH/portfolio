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
      </p>
      <p>
      The game features several levels, and the goal is to reach the exit. But it's not that simple! You'll have to do this multiple times, playing not only as the princess but also as ghosts whose goal is to stop the princess from getting through.
      Within a single level, each playthrough is recorded. And you need to take into account your previous actions to avoid being killed by your own moves! Can't do it? Restart the whole level from scratch! Muahahaha!!!
      </p>
      <p>
      Okay, I made the levels not too difficult :)
      </p>

      <details class="dev-details">
        <summary class="dev-summary">
          Development — jam experience
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">

          <ul>
            <li>Later there will be a story about how I assembled a team and ended up sitting desperately trying to understand someone else's code by the end of day two</li>
          </ul>

          <h2>Result:</h2>
          <ul>
            <li>2nd place!!</li>
            <li>Correction: There were only 42 games total. But still, it's a great achievement!</li>
            <img src="/portfolio/images/runpunzel/other/RunPunzel_results.webp" alt="Results screenshot" class="rounded-xl my-4" />
            <p>
              Here's the 
              <a href="https://itch.io/jam/myindie-lvl6/rate/3972031" class="text-primary hover:text-primary/80 underline">link</a>
              to the results.
            </p>
          </ul>

        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Art
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <h2>Animations</h2>
	      <div class="animation-grid">
 	       <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_death-Sheet.webp" alt="16x32 animation" class="pixel-art" width="64" height="128" />
 	         <span>death-appearance</span>
	        </div>
	        <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_fall.webp" alt="32x32 animation" class="pixel-art" width="128" height="128" />
	          <span>fall</span>
 	       </div>
 	       <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_idle-Sheet.webp" alt="16x32 animation" class="pixel-art" width="64" height="128" />
	          <span>idle</span>
	       </div>
           <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_run-Sheet.webp" alt="16x32 animation" class="pixel-art" width="64" height="128" />
	          <span>run</span>
	       </div>
          </div>
        </div>
      </details>
    `,


    contentRu: `
      <h2>О проекте</h2>
      <p>Эта игра - мое первое знакомство с Unity.</p>

      <p>
      Игра разрабатывалась в рамках локального российского джема. Тема — точка невозврата.
      </p>
      <p>
      В игре представлены несколько уровней и задача - пройти до выхода. Но не всё так просто! Придется проделать это несколько раз и играя не только за принцессу, но и за призраков, чья цель - не дать принцессе пройти.
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
            <p>
            Оставляю 
            <a href="https://itch.io/jam/myindie-lvl6/results" class="text-primary hover:text-primary/80 underline">ссылочку</a>
             на результаты.
            </p>
          </ul>

          

        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Арт
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <h2>Анимации</h2>
	      <div class="animation-grid">
 	       <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_death-Sheet.webp" alt="16x32 animation" class="pixel-art" width="64" height="128" />
 	         <span>смерть-появление</span>
	        </div>
	        <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_fall.webp" alt="32x32 animation" class="pixel-art" width="128" height="128" />
	          <span>падение</span>
 	       </div>
 	       <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_idle-Sheet.webp" alt="16x32 animation" class="pixel-art" width="64" height="128" />
	          <span>idle</span>
	       </div>
           <div class="animation-item">
 	         <img src="${base}images/runpunzel/other/princess_run-Sheet.webp" alt="16x32 animation" class="pixel-art" width="64" height="128" />
	          <span>бег</span>
	       </div>
          </div>
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