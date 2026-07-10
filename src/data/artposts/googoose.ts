// src/data/artposts/googoose.ts
import type { ArtPost } from './index';
import 'img-comparison-slider';

const base = import.meta.env.BASE_URL;

export const googoosePost: ArtPost = {
  slug: 'googoose',
  title: 'Goo Goose',
  titleRu: 'Goo Goose',
  description: 'Working as an artist on a project',
  descriptionRu: 'Работа художником на проекте',
  content: `

  `,
  contentRu: `
    
    <h2>Об игре</h2>
    <p>
    <a href="https://www.rustore.ru/catalog/app/com.IvaMarin.GooGoose" class="text-primary hover:text-primary/80 underline">Goo-Goose</a>.
    — это гусиный 2D-платформер с мягкой физикой!
    </p>
    <p>
    Вы отправляетесь в захватывающее приключение по различным мирам, в которых вам предстоит cразиться со злом и спасти своих друзей. Собирайте цветы, чтобы Гу-Гусь увеличивался и преодолевал сложные препятствия. Распадайтесь на маленьких Гу-Гусят, чтобы решать головоломки!
    </p>

    <p>
    За развитием проекта можно следить в тг-канале: 
    <a href="https://t.me/googoosegame" class="text-primary hover:text-primary/80 underline">Goo-Goose</a>
    </p>
    <p>
    YouTube канал:
    <a href="https://youtube.com/@googoosegame?si=fYJCgJyK4-PFOGQc" class="text-primary hover:text-primary/80 underline">Goo-Goose - YouTube</a>
    </p>

    <h2>Моя роль на проекте:</h2>
    <p>
    Основная моя работа - создавать визуальное оформление для разных уровней (миров - локаций). Если кратко, то мои задачи покрывают полный пайплайн оформления локаций (от поисков референсов и рисования. И до оформления сцен и оптимизации рендеринга)
    В общем, превращаю уровни в приятные глазу локации. Ниже результат моей работы по уровням :)
    </p>

    <p>
    Также подготавливаю концепты и оформлдение для других аспектов игры (магазин, оформление меню).
    </p>



   <details class="dev-details">
    <summary class="dev-summary">
      Туториал - уровень 0 
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">

        <p>
        Туториал - первое знакомство игрока с игрой.
        Это должно быть утреннее доброе настроение и предвкушение приключений.
        Высокая трава должна давать ощущение маленькости - мы только появились в этом мире.
        Цвета яркие, теплые, природные и мягкие.
        </p>

        <div class="max-w-4xl mx-auto mt-4">

        <h1>Сравнение до/после</h1>

        <img-comparison-slider>
          <img slot="first" src="${base}images/googoose/beforeafter/beforeafter100.webp" />
          <img slot="second" src="${base}images/googoose/beforeafter/beforeafter101.webp" />
        </img-comparison-slider>
        <p>Основной референс - пейзажи Хаяо Миядзаки</p>
        <p></p>
        <img-comparison-slider>
          <img slot="first" src="${base}images/googoose/beforeafter/beforeafter110.webp" />
          <img slot="second" src="${base}images/googoose/beforeafter/beforeafter111.webp" />
        </img-comparison-slider>
        <p>По локации разбросаны руины лаборатории</p>
        <p></p>
        <img-comparison-slider>
          <img slot="first" src="${base}images/googoose/beforeafter/beforeafter120.webp" />
          <img slot="second" src="${base}images/googoose/beforeafter/beforeafter121.webp" />
        </img-comparison-slider>
        <p>В конце уровня приходим в гусиную деревню</p>
        <p>Домики на холмах вдохновлены Чжанцзяцзе - национальный парк в Китае</p>

      </div>
           
        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Ассеты:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>
          Большая чать ассетов на новых оформленных уровнях - ч/б спрайты и текстуры. 
          В ходе своей работы старалась минимизировать кол-во ассетов и максимально переиспользовать существующие. 
          Поэтому многие элементы - составные и цвет задается через менеджер палитр.
          </p>

        </div>
      </details>

    </div>
  </details>


  <details class="dev-details">
    <summary class="dev-summary">
      Дикий запад - уровень 1
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">

     <div class="dev-content">

        <p>
        Дикий запад - первый полноценный уровень.
        Сам уровень делится на подзоны: поверхность, пещеры и древние руины.
        </p>

        <div class="max-w-4xl mx-auto mt-4">

        <h1>Сравнение до/после</h1>
        <p>
        Конфигурацию уровня полностью переработали - поэтому изображения до/после не соответствуют.
        </p>

        <div class="flex flex-wrap gap-4 my-4">
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter200.webp" class="rounded-xl w-full" />
          </div>
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter201.webp" class="rounded-xl w-full" />
          </div>
        </div>
        <p>Место подбора первой способности - лассо. Сделано более выразительным и уникальным. Игрок подбирает лассо в древних руинах дикого запада</p>
        <p></p>

        <div class="flex flex-wrap gap-4 my-4">
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter210.webp" class="rounded-xl w-full" />
          </div>
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter211.webp" class="rounded-xl w-full" />
          </div>
        </div>
        <p>Пещеры</p>
        <p></p>

        <div class="flex flex-wrap gap-4 my-4">
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter220.webp" class="rounded-xl w-full" />
          </div>
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter221.webp" class="rounded-xl w-full" />
          </div>
        </div>
        <p>Окончание уровня. Вместо финиша теперь гусиный идол с порталом</p>

      </div>

    </div>
  </details>



    <details class="dev-details">
      <summary class="dev-summary">
        Дикий запад - уровень 2 (шахты)
        <span class="arrow">▼</span>
      </summary>
      <div class="dev-content">
        <p>
          Шахты дикого запада. На этом уровне появятся первые враги и новые механики
        </p>

        <h2>Ассеты к шахтам</h2>

        <div class="flex flex-wrap gap-4 my-4">
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter31.webp" alt="Общая сцена" class="rounded-xl w-full" />
          </div>
          <div class="flex-1 min-w-[200px]">
            <img src="${base}images/googoose/beforeafter/beforeafter32.webp" alt="Динамиты и декор" class="rounded-xl w-full" />
          </div>
        </div>

        <p>Превью сцены с разрабатываемыми ассетами для нового уровня.</p>
      </div>
    </details>


    </details>

    </div>
  </details>
  `,
  image: `${base}images/googoose/GooGoose_banner.webp`,
};