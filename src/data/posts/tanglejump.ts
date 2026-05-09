// src/data/posts/tanglejump.ts
import type { Post } from './index';

const base = import.meta.env.BASE_URL;
export const tanglejumpPost: Post = {

  slug: 'tanglejump',
  title: 'TangleJump - blog',
  titleRu: 'TangleJump - блог',
  description: 'Jam project on "adaptation"',
  descriptionRu: 'Джемовый поект на тему "адаптация"',


  content: `
  <h2>About the project</h2>
  <p>My first game jam and my first project on Godot Engine.</p>

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

      <h2>Day 1 — Everyone fell apart</h2>
      <ul>
        <li>
        As soon as the theme was announced, everyone started discussing their ideas. Literally everyone! They suggested all sorts of things. I actively participated in the discussion too, but after a couple of hours I got exhausted and decided I'd just be an artist and draw whatever they told me.
        This went on for half a day, and by the end of the day, we sort of settled on a game.
        The programmers started working, and I was told I'd get my assignment later. By the evening, there were already small arguments in the chat, since half the people were game designers and half were programmers. Without a leader, no one could coordinate their work.
        </li>
      </ul>

      <h2>Day 2 — What to draw?</h2>
      <ul>
        <li>
        Finally, I was told to draw a side-view character. Then it turned out they needed a top-down view! Fine, I drew what they asked for in Photoshop, layer by layer, so someone else could animate it.
        But in the process, they kept discussing the game idea and changing everything drastically. Meanwhile, 1.5 out of 4 days had already passed.
        </li>
        <li>
        And so my first game as a solo developer began to take shape. I chose Godot because I had worked with it before (even if just a little). I also chose the platformer genre because I had already written platformers in C++.
        There was little time. No way I could implement fancy mechanics that fit the jam theme. And then it hit me! I'll go with "adaptation to controls."
        By the end of the second day, I had written a basic platformer with squares.
        </li>
      </ul>

      <h2>Day 3 — No sleep!</h2>
      <ul>
        <li>I kept helping the team with art (on their request), and in my free time I worked on my own game.</li>
        <li>I was slowly figuring out the engine. I implemented toggle buttons for controls and gravity.</li>
        <li>I found a ready-made rope implementation and hooked it into the game. At that point, I decided there would be a ball of yarn that unravels. And that was it — the game was ready!</li>
        <li>I started doing some drawing for my own game.</li>
      </ul>
      <p>
        What I ended up with was a platformer where you need to reach the finish line by controlling a ball of yarn. The yarn gradually unravels.
        If it runs out completely — you lose. The twist is that I added buttons that invert controls and change gravity.
      </p>

      <h2>Day 4 — I overslept everything!</h2>
      <ul>
        <li>I kept drawing, both for the team and for my own game. In the end, I didn't stress too much about my game's visuals — all my assets were just a couple of pictures and a background.</li>
        <li>I got some sleep.</li>
        <li>I fixed bugs in my game and managed to upload a working build. HURRAY!!!</li>
      </ul>

      <h2>Results:</h2>
      <ul>
        <li>Unfortunately, the team didn't manage to produce a stable build on time. This is where I finally understood the value of a working, even if simple, project.</li>

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

          <h2>День 1 — Все разругались</h2>
          <ul>
            <li>
            Как только объявили тему, все начали обсуждать свои идеи. Буквально все! Чего только не предлагали. Я тоже активно участвовала в обсуждении, но спустя пару часов сильно устала и решила, что просто буду художником и нарисую, что скажут.
            Всё это длилось полдня, и к концу дня вроде как определились с игрой.
            Программисты начали что-то делать, а мне сказали, что чуть позже дадут задание. Вечером в чате уже были небольшие ссоры, так как половина людей была геймдизайнерами и половина — программистами. Из-за отсутствия лидера люди не могли согласовать свою работу.
            </li>
          </ul>

          <h2>День 2 — Что рисовать?</h2>
          <ul>
            <li>
            Наконец-то мне сказали нарисовать персонажа с видом сбоку. Потом оказалось, что нужен top-down! Ладно, я нарисовала, что просили, в фотошопе по слоям, чтобы другой человек анимировал.
            Но в процессе они продолжали обсуждать идею игры и кардинально всё менять. А уже 1.5 из 4 дней прошло.
            </li>
            <li>
            В общем, так начала зарождаться моя первая игра как соло-разработчика. Выбрала Godot, так как работала с ним (хоть и немного). Также взяла жанр платформера, потому что уже писала платформеры на C++.
            Времени мало. Как реализовывать специфичные механики, которые подошли бы под тему джема, — не успела бы. И вот оно! Возьму якобы «адаптацию к управлению».
            Под конец второго дня написала базовый платформер с квадратиками.
            </li>
          </ul>

          <h2>День 3 — Никакого сна!</h2>
          <ul>
            <li>Я продолжила помогать команде с артами (по их запросам), а в свободное время делала свою игру</li>
            <li>Потихоньку разбиралась с движком. Реализовала кнопки-переключатели управления и гравитации.</li>
            <li>Нашла готовый ассет с реализацией верёвки и прикрутила к игре. На этом моменте решила, что у меня будет клубок, который разматывается. В общем, на этом игра всё!</li>
            <li>Начала немного рисовать для своей игры.</li>
            <p>
            У меня получился платформер, где нужно дойти до финиша, управляя клубком ниток. Клубок постепенно разматывается. 
            Если размотается полностью — проигрыш. А сложность в том, что я добавила кнопки, которые инвертируют управление и меняют гравитацию
            </p>
          </ul>

          <h2>День 4 — Всё проспала!</h2>
          <ul>
            <li>Продолжала рисовать как для команды, так и для своей игры. В итоге не особо парилась с визуалом своей игры — все мои ассеты: пара картинок и фон.</li>
            <li>Выспалась.</li>
            <li>Правила баги своей игры и успела залить рабочий билд! УРА!!!</li>
          </ul>

          <h2>Результат:</h2>
          <ul>
            <li>К сожалению, у команды не получился стабильный билд в срок (Из приятного - организаторы все же дали игре шанс поучаствовать). Но я окончательно поняла ценность рабочего, пусть и простого проекта.</li>
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


    image: `${base}images/tanglejump/TangleJump_banner.webp`,

    screenshots: [
        `${base}images/tanglejump/screenshots/screenshot1.webp`,
	`${base}images/tanglejump/screenshots/screenshot2.webp`,
    ],

    date: '29 . 04 . 2026',
    projectSlug: 'gutsout'
  };