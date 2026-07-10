// src/data/posts/tanglejump.ts
import type { Post } from './index';

const base = import.meta.env.BASE_URL;
export const uhohPost: Post = {

  slug: 'uhoh',
  title: 'UH-OH - blog',
  titleRu: 'ОЙ-ЁЙ - блог',
  description: 'Jam project on "The enemy is you"',
  descriptionRu: 'Джемовый поект на тему "враг - это ты"',


  content: `
  <h2>About the project</h2>
  <p>My fngine.</p>

  <p>
  The game was developed as part of a local Russian game jam.
  </p>
  <p>
  The theme was sensory adaptation. I made a game about inverted controls. The jam theme was about sensory adaptation (even though I missed the mark — this is more about motor adaptation).
  </p>
  <p>
  But it's not about the terminology — it's about the brain's amazing ability to adapt to any twisted conditions.
  You know that feeling when after playing for a long time, it feels like your mouse is moving the wrong way? Your brain gets annoyed, but then — it adapts. That's what my project is about.
  </p>

  <details class="dev-details">
    <summary class="dev-summary">
      Development — jam experience
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <h2>Prelude:</h2>
      <p>
      For a long time, I was afraid to participate in game jams due to lack of proper experience with game engines and development in general. It was a vicious cycle: "I'll read this, study that, implement this, and so on."
      It seemed that such events were competitions for experienced developers. Then I saw a message in a student chat that someone was putting together a team for a jam. I joined as an artist.
      The team turned out to be large (6–7 people) — plenty of programmers and game designers.
      </p>

      <h2>Results:</h2>
      <ul>
        <li>
          Unfortunately, the team didn't manage to create a stable build on time (the good news is that the organizers still gave the game a chance to participate). But I finally understood the value of a working project, even a simple one.
          <a href="/portfolio/en/artblog/forester/" class="text-primary hover:text-primary/80 underline">Here</a>
          you can see some of the assets for the game I worked on as an artist.
        </li>

        <li>In my first jam, I somehow managed to participate twice! It might seem inappropriate to take part in the same jam on the side, but in this case, I could only draw on request anyway — and that's exactly what I did.</li>
        <p>
            At this jam, the game was judged by the judges, not the participants on the itch.io :
            <a href="https://docs.google.com/spreadsheets/d/1wWHvlZOHsSzmNPxJxplkIAtwgcPAVJeF6nG8p1WUGHQ/edit?gid=373065382#gid=373065382" class="text-primary hover:text-primary/80 underline"> results table</a>
            . The game is in the top 10!
        </p>
      </ul>
    </div>
  </details>
`,
    



    contentRu: `
      <h2>О проекте</h2>
      <p>Мой первый джем и мой первый проект на Godot Engine.</p>

      <p>
      Игра разрабатывалась в рамках локального российского джема. 
      </p>
      <p>
      Тема — сенсорная адаптация. Я сделала игру про инвертированное управление. Тема джема была про сенсорную адаптацию (хоть и промахнулась, это скорее моторная). 
      </p>
      <p>
      Но суть не в терминах, а в удивительной способности мозга подстраиваться под любые кривые условия. 
      Знаете это чувство, когда после долгой игры кажется, что мышь двигается не туда? Мозг бесится, а потом — привыкает. Вот об этом мой проект.
      </p>

      <details class="dev-details">
        <summary class="dev-summary">
          Разработка — опыт джема
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <h2>Прелюдия:</h2>
          <p>
          Я долго боялась участвовать в джемах из-за отсутствия нормального опыта работы с движками и в целом опыта разработки. Это было зацикленное: «Ну я ещё вот это почитаю, вот это изучу, вот это реализую и так далее». 
          Казалось, что подобные мероприятия — соревнования опытных разработчиков. И вот в одном студенческом чате увидела сообщение, что кто-то набирает команду на джем. Я присоединилась, но как художник. 
          Команда оказалась большой (6–7 человек) — и программистов, и геймдизайнеров там хватало.
          </p>

          <h2>Результат:</h2>
          <ul>
            <li>
              К сожалению, у команды не получился стабильный билд в срок (Из приятного - организаторы все же дали игре шанс поучаствовать). Но я окончательно поняла ценность рабочего, пусть и простого проекта.
              <a href="/portfolio/ru/artblog/forester/" class="text-primary hover:text-primary/80 underline">Здесь</a>
              можно посмотреть некоторые ассеты к игре, над которой работала в качестве художника.
            </li>
            <li>
            В своём первом джеме я умудрилась поучаствовать дважды! Может показаться, что было некрасиво с моей стороны участвовать в том же джеме параллельно, но в данном случае можно было только рисовать по запросу — что я и делала. 
            </li>
            <p>
                На этом джеме игру оценивали судьи, а не участники на itch.io :
                <a href="https://docs.google.com/spreadsheets/d/1wWHvlZOHsSzmNPxJxplkIAtwgcPAVJeF6nG8p1WUGHQ/edit?gid=373065382#gid=373065382" class="text-primary hover:text-primary/80 underline"> таблица с результатами</a>
                . Игра попала в топ 10!
            </p>
          </ul>
        </div>
      </details>
    `,


    image: `${base}images/uhoh/Uhoh.webp`,

    screenshots: [
        `${base}images/uhoh/screenshots/screenshot1.webp`,
        `${base}images/uhoh/screenshots/screenshot2.webp`,
        `${base}images/uhoh/screenshots/screenshot3.webp`,
        `${base}images/uhoh/screenshots/screenshot4.webp`,
    ],

    projectSlug: 'uhoh'
  };