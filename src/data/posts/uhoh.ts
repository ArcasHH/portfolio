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
        <p>A puzzle with roguelike elements, where you have to play for unfortunate Kate, who decided to taste a watermelon at night while looking... And for imaginary monsters!</p>

        <p>
            You can read more about the development on the MyIndie (in Russian only!) :
            <a href="https://myindie.ru/games/game/ne-ssy_6v1" class="text-primary hover:text-primary/80 underline"> Game Page </a>
        </p>
    `,
    


    contentRu: `
      <h2>О проекте</h2>
      <p>Головоломка с элементами рогалика, где предстоит играть за бедную Катюшу, которая решила вкусить арбузика на ночь глядя... и за воображаемых монстров!</p>

      <p>
            Подробнее о разработке можно почитать на сайте MyIndie :
            <a href="https://myindie.ru/games/game/ne-ssy_6v1" class="text-primary hover:text-primary/80 underline"> Страница игры </a>
      </p>
     
    `,


    image: `${base}images/uhoh/Uhoh_banner.webp`,

    screenshots: [
        `${base}images/uhoh/screenshots/screenshot1.webp`,
        `${base}images/uhoh/screenshots/screenshot2.webp`,
        `${base}images/uhoh/screenshots/screenshot3.webp`,
        `${base}images/uhoh/screenshots/screenshot4.webp`,
    ],

    projectSlug: 'uhoh'
  };