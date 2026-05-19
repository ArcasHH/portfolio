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
    — это уникальный гусиный 2D-платформер с мягкой физикой!
    </p>
    <p>
    Вы отправляетесь в захватывающее приключение по различным мирам, в которых вам предстоит cразиться со злом и спасти своих друзей. Собирайте цветы, чтобы Гу-Гусь увеличивался и преодолевал сложные препятствия. Распадайтесь на маленьких Гу-Гусят, чтобы решать головоломки!
    </p>

    <h2>Особенности:</h2>
    <ul>
      <li>Мягкая физика персонажа</li>
      <li>Кастомизация гусиков</li>
      <li>Система способностей и разные миры</li>
      <li>Боссы</li>
    </ul>
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
    Основная моя работа - создавать визуальное оформление для разных уровней (миров - локаций). Я отвечаю в первую очередь за все ассеты связанные с визуалом уровней.
    </p>
    <ul>
      <li>Поиск референсов по заданному описанию,настроению и желаемых ощущений от уровня</li>
      <li>Поиск цветовых решений - палитры уровня</li>
      <li>Определение необходимых текстур, спрайтов для оформления уровня.</li>
      <li>Определение нужных разрешений для изображений и непосредственно рисование всех ассетов</li>
      <li>Импорт подготовленных файлов в Unity. Настройки импорта, расположение файлов в проекте</li>
      <li>Настройка спрайт-атласов</li>
      <li>Создание префабов, настройка компонент (коллизии, эффекты и тд) и размещение объектов в сцене уровня (сам уровень не создаю)</li>
      <li>Настройка слоев сортировки и дебаг рендеринга (draw calls, batching, ...)</li>
      <li>Тестирование визуала во время игры (в игре камера может менять zoom)</li>
      <li>Если всё хорошо или нужно обсудить с командой - заливаю на GitHub</li>
    </ul>
     <p>
    В общем, превращаю уровни в приятные глазу локации
    </p>

    <div class="max-w-4xl mx-auto mt-4">

        <h1>Сравнение работы</h1>

        <img-comparison-slider>
          <img slot="first" src="${base}images/gutsout/screenshots/screenshot1.webp" />
          <img slot="second" src="${base}images/gutsout/screenshots/screenshot2.webp" />
        </img-comparison-slider>

      </div>



   <details class="dev-details">
    <summary class="dev-summary">
      Туториал - уровень 0 
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">

       <details class="dev-details">
        <summary class="dev-summary">
          Референсы:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">

          <p>Основной референс - пейзажи Хаяо Миядзаки</p>
           <img src="/portfolio/images/googoose/tutorial_ref.webp" alt="Основной референс на Туториал" class="rounded-xl my-4" />
           <p>Домики на холмах вдохновлены Чжанцзяцзе - национальный парк в Китае</p>
        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Ассеты:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Текстуры, спрайты и так далее</p>
        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Оформление:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Как выглядит уровень и как несколько раскрашенных спрайтов меняют восприятие</p>
        </div>
      </details>


      <details class="dev-details">
        <summary class="dev-summary">
          Результат:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Гиф ито8гового уровня. Отзывы и впечатления</p>
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

       <details class="dev-details">
        <summary class="dev-summary">
          Референсы и палитра:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
             <h2>Референсы:</h2>
                <p>Ну с референсами тут всё понятно</p>
                <img src="/portfolio/images/googoose/tutorial_ref.webp" alt="Основной референс на Туториал" class="rounded-xl my-4" />
             <h2>Подбор палитры:</h2>
                <p>Останговились на более холодных оттенках</p>
                <img src="/portfolio/images/googoose/tutorial_ref.webp" alt="Основной референс на Туториал" class="rounded-xl my-4" />
         
        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Ассеты:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Текстуры, спрайты и так далее</p>
        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Оформление:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Как выглядит уровень и как несколько раскрашенных спрайтов меняют восприятие</p>
        </div>
      </details>


      <details class="dev-details">
        <summary class="dev-summary">
          Результат:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Гиф ито8гового уровня. Отзывы и впечатления</p>
        </div>
      </details>

    </div>
  </details>



    <details class="dev-details">
    <summary class="dev-summary">
      Дикий запад - уровень 2 (шахты)
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">

       <details class="dev-details">
        <summary class="dev-summary">
          Референсы и палитра:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
             <h2>Референсы:</h2>
                <p>Ну с референсами тут всё понятно</p>
                <img src="/portfolio/images/googoose/tutorial_ref.webp" alt="Основной референс на Туториал" class="rounded-xl my-4" />
             <h2>Подбор палитры:</h2>
                <p>Останговились на более холодных оттенках</p>
                <img src="/portfolio/images/googoose/tutorial_ref.webp" alt="Основной референс на Туториал" class="rounded-xl my-4" />

        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Ассеты:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Текстуры, спрайты и так далее</p>
        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Оформление:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Как выглядит уровень и как несколько раскрашенных спрайтов меняют восприятие</p>
        </div>
      </details>


      <details class="dev-details">
        <summary class="dev-summary">
          Результат:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Гиф ито8гового уровня. Отзывы и впечатления</p>
        </div>
      </details>

    </div>
  </details>


    </details>

    <details class="dev-details">
    <summary class="dev-summary">
      Другое
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">

       <details class="dev-details">
        <summary class="dev-summary">
          NPC:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
             <h2>Дикий запад:</h2>
        </div>
      </details>

      <details class="dev-details">
        <summary class="dev-summary">
          Иконки способностей:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
             
        </div>
      </details>

    </div>
  </details>
  `,
  image: `${base}images/googoose/GooGoose_banner.webp`,
};