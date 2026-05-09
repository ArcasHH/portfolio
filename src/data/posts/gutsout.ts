// src/data/posts/gutsout.ts
import type { Post } from './index';

const base = import.meta.env.BASE_URL;
export const gutsoutPost: Post = {

  slug: 'gutsout',
  title: 'GutsOut - blog',
  titleRu: 'GutsOut - блог',
  description: 'What went right and wrong during the jam',
  descriptionRu: 'Джемовый поект на тему "оккультизм"',


  content: `
  <h2>About the project</h2>
  <p>GutsOut is a simple puzzle where you play as an occult doctor treating patients' ailments through organ substitution. The core gameplay focuses on balancing organ parameters.</p>
  <p>The game was developed during the 
    <a href="https://myindie.ru/jams/jam/myindie-game-jam-level-9" class="text-primary hover:text-primary/80 underline">MyIndie GameJam level9</a>
  </p>

  <details class="dev-details">
    <summary class="dev-summary">
      Development - jam experience
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <h2>Given:</h2>
      <ul>
        <li>Two of us. Me (art, game design) + programmer</li>
        <li>Programmer had never opened game engines before → vibe coding</li>
        <li>Theme "occultism"</li>
        <li>3 days</li>
      </ul>

      <h2>Plans:</h2>
      <ul>
        <li>Theme: We decided to move away from banal rituals, alchemy and cultists towards the idea of hidden connections/dependencies + organ replacement for the mentally ill</li>
        <li>We moved away from banal alchemy, rituals and cultists towards the idea that body and soul are mystically connected. By rearranging organs, the player performs a ritual of soul reconfiguration. The very idea of "healing by replacing insides" sounds unscientific, and working with organs has always been part of dark practices (autopsies, divination by entrails, body alchemy).</li>
        <li>Art: black and white, messy → "as if the patient tortured a graphics tablet". Also patient poses like in Egyptian art: profile head and legs, frontal torso. Will it evoke associations with the ancient underworld?</li>
        <li>Gameplay: swap organs to treat patients. Organs have characteristics in certain emotions. The set of emotions determines the illness, visually reflected in the patient's appearance. By rearranging organs we change emotions and, consequently, the patient's illness state. You need to figure out which organs the patient needs based on how their appearance and sounds change. (Spoiler: we didn't make it and ended up displaying numerical parameters mind, soul, body. But maybe it's for the best - without explicit display of how organs affect, the game would become guesswork).</li>
        <li>Sound design: background music should be dark and mystical (without pathos) yet playful and flirtatous. Sounds - we planned to record wheezes, giggles and so on.</li>
        <li>Content: different patients (art, behavior, etc.), different organs (and a bit of humor: a whoopee cushion instead of lungs or straw instead of brains). Organs would have unique characteristics and different drop rates.</li>
        <li>Story: We are an occult doctor who manipulates people's souls by selecting the right combinations of organs. But it's not that simple! We have a terminally ill daughter who constantly needs new organs to survive. The situation is complicated by the fact that over time she needs higher quality organs to preserve her soul. And there's only one way - to find ideal donors.</li>
        <li>Progression: determined by the day (number of steps). Increasing needs (both daughter and patients) and probabilities of rarer organs. Ability to adjust playtime.</li>
      </ul>

      <details class="dev-details">
        <summary class="dev-summary">
          Developer notes:
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>How the ideation and development process looked</p>
          <img src="/portfolio/images/gutsout/other/GutsOut_notes.webp" alt="Developer's notes" class="rounded-xl my-4" />
        </div>
      </details>

      <h2>Day 1 - Sunshine, birds singing</h2>
      <ul>
        <li>Core mechanics + setting up managers, scenes</li>
        <li>We decided to define mental illness through a set of emotions. Implemented a placeholder with 3 parameters - mind, soul, body</li>
        <li>First sketches -> 1 set of organs and a human patient</li>
      </ul>

      <h2>Day 2 - Building up</h2>
      <ul>
        <li>Organ types: normal, mechanical, insects (+ rarity)</li>
        <li>Music: dark + playful. Managed to generate what we wanted in Suno</li>
        <li>Goal placeholder: collect 3 collections (instead of rare organs for daughter) and supposedly perform a "ritual". Whatever we have time for</li>
      </ul>

      <h2>Day 3 - Balance, panic and bugs</h2>
      <ul>
        <li>Soft-locks: added a knife for killing patients and a trash bin for removing bad organs</li>
        <li>Introduced karma for the knife. Now patients give "currency" that can be used to kill patients. The price depends on the number of kills</li>
        <li>More karma for releasing multiple patients at once -> motivation to balance</li>
        <li>Happily uploaded the build 2-3 hours before deadline. Started testing for the first time and discovered a bug with rare organ drops, making the game unbeatable. Started frantically fixing with workarounds) We made it 10 minutes before the timer ended!!! There were a couple more small bugs. Fixed some, others - not. Room for improvement.</li>
      </ul>

      <h2>Results:</h2>
      <ul>
        <li>Visually we achieved everything planned, but failed with the game interface and buttons - players often didn't notice them</li>
        <li>Little experience with the engine resulted in wasting a lot of time fixing code and hunting bugs</li>
        <li>Lack of tutorial and explanation of what to do - players didn't immediately understand how and what works. To do this, you had to click on the question mark, which many ignored</li>
        <li>Didn't have time for voiceovers, but used various assets from itch.io.</li>
        <li>There were bugs that we frantically fixed. Managed to fix the most critical ones (or not all?) and upload a working build to 
          <a href="https://myindie.ru/games/game/gutsout" class="text-primary hover:text-primary/80 underline">MyIndie</a>.
        </li>
      </ul>
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Art
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <h2>Description:</h2>
      <p>From the very beginning, we decided the game would be black and white, with messy art → "as if the patient tortured a graphics tablet". The plus side - speed of drawing, since the artist (me) was also handling code and other things.</p>

      <h2>Assets:</h2>
      <p>Below are the organ assets</p>
      <img src="/portfolio/images/gutsout/other/Organs.webp" alt="Game assets" class="rounded-xl my-4" />
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Mechanics and Balance
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <h2>Core:</h2>
      <ul>
        <li>Drag n Drop - simple organ swapping between containers. Each container only accepts its own organ type</li>
        <li>There is an inventory buffer for easier organ rearrangement. You can also set aside organs for other patients</li>
        <li>Each organ has values for three parameters: mind, soul, body. Values can be negative. An organ's rarity determines its value expressed in these parameters</li>
        <li>Each organ has a rarity type: cursed, bad, normal, good, rare, epic, legendary. Rarity is displayed in the game by color</li>
        <li>
          <div style="display: flex; align-items: center; gap: 8px; margin: 12px 0;">
            <span style="width: 20px; height: 20px; background-color: #800000; border-radius: 50%;"></span>
            <span>←</span>
            <span style="width: 20px; height: 20px; background-color: #F08080; border-radius: 50%;"></span>
            <span>←</span>
            <span style="width: 20px; height: 20px; background-color: #FFFFFF; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #90EE90; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #6495ED; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #BA55D3; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #FFA500; border-radius: 50%;"></span>
          </div>
        </li>
        <li>There are 3 patients, each has parameter requirements (mind, soul, body). Current values are calculated as the sum of all organs.</li>
        <li>The goal is to rearrange organs to satisfy as many requirements as possible at once.</li>
        <li>When at least one requirement is satisfied, you can end the day and all those with satisfied requirements leave. New patients appear in their place with new organs.</li>
      </ul>

      <h2>Meta and goals:</h2>
      <ul>
        <li>The goal "perform 3 rituals" essentially means satisfying the increased requirements of three special patients</li>
        <li>The core as the main tool - good play yields good spare organs</li>
      </ul>

      <h2>Mechanic fixes:</h2>
      <ul>
        <li>A situation may arise where no matter how you rearrange organs, you can't end the day → Introduced a knife that allows you to remove one patient per day</li>
        <li>A situation may arise where the player uses the knife to remove patients with missing organs and the buffer inventory becomes full. In this case, the buffer becomes unusable, leading to a soft-lock. → Introduced a trash bin for organs</li>
        <li>To balance the knife, karma was introduced as currency to limit its use. Karma is earned at the end of the day for released patients</li>
      </ul>

      <h2>Balance:</h2>
      <p>Organs table: <a href="https://docs.google.com/spreadsheets/d/1dnj9-65VL32Ym2bmzhHRjcAtPVQC-wQu/edit?usp=sharing&ouid=106393117432479157531&rtpof=true&sd=true" class="text-primary hover:text-primary/80 underline">Organs balance table</a></p>
      <p>Karma earned at day end: +10 for one patient, +30 for two, +50 for three</p>
      <p>Knife cost: 5 + (3 * number of uses)</p>
      <p>Patient needs growth: average growth as a power function</p>
      <p>Chance of rare organs tends toward even distribution. Initially normal distribution</p>
    </div>
  </details>

  <h2>Key features</h2>
  <ul>
    <li>Turn-based puzzle</li>
    <li>Parameter balancing system through rearranging</li>
    <li>Stylish visuals + pleasant sound design</li>
  </ul>
`,
    



    contentRu: `
  <h2>О проекте</h2>
  <p>GutsOut — это простенький пазл, где в роли оккультного доктора мы лечим недуги пациентов подменой органов. Основной геймплей сосредоточен на балансировке параметров органов.</p>
  <p>Игра разрабатывалась в рамках джема 
    <a href="https://myindie.ru/jams/jam/myindie-game-jam-level-9" class="text-primary hover:text-primary/80 underline">MyIndie GameJam level9</a>
  </p>

  <details class="dev-details">
    <summary class="dev-summary">
      Разработка - опыт джема
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <h2>Дано:</h2>
      <ul>
        <li>Нас двое. Я (арт, геймдизайн) + программист</li>
        <li>Программист никогда не открывал движки → вайбкодинг</li>
        <li>Тема «оккультизм»</li>
        <li>3 дня</li>
      </ul>

      <h2>Планы:</h2>
      <ul>
        <li>Тема: Решили уйти от банальных ритуалов, алхимии и культистов к идее скрытых связей/зависимости + замена органов у душевнобольных</li>
        <li>Мы ушли от банальных алхимии, ритуалов и культистов в сторону идеи, что тело и душа связаны мистически. Перекладывая органы игрок проводит ритуал перенастройки души. Сама идея «лечить заменой внутренностей» звучит антинаучно, а работа с органами всегда была частью тёмных практик (вскрытия, гадания на внутренностях, алхимия тела).</li>
        <li>Арт: ч/б, неаккуратный → «будто пациент мучил графический планшет». Также позы пациентов как в египетском искусстве: профиль головы и ног, фас корпуса. Будет ли вызывать ассоциации древнего загробного мира?</li>
        <li>Геймплей: менять органы местами чтобы лечить пациентов. Органы имеют характеристики в определенных эмоциях. Набор эмоции определяет болезнь, что отражено визуально во внешнем виде пациента. Переставлением органов мы меняем эмоции и, как следствие, состояние болезни пациента. Нужно вычислить какие органы нужны пациенту по тому от чего меняется его внешний вид, издаваемые звуки. (Спойлер: мы не успели и пришли к отображению численных параметров mind, soul, body. Но может оно и к лучшему - без явного отображения как влияют те или иные органы игра бы превратилась в угадайку).</li>
        <li>Звуковое оформление: фоновая музыка должна быть мрачной и мистической (без пафоса) и при этом с веселым и заигрывающем настроением. Звуки - планировали озвучить хрипы, смешки и так далее</li>
        <li>Контент: разные пациенты (арт, поведение и тд), разные органы (и немного юмора: подушка-пердушка вместо легких или солома вместо мозгов). Органы бы имели уникальные характеристики и разный шанс выпадения</li>
        <li>Сюжет: Мы оккультный доктор, который манипулирует душой людей через подбор нужных комбинаций органов. Но не всё так просто! У нас есть тяжело больная дочь, которой постоянно нужны новые органы чтобы выжить. Ситуацию усложняет то, что со временем ей нужны всё более качественные органы для сохранения её души. И способ только один - найти идеальных доноров.</li>
        <li>Прогрессия: определяется днём (количество шагов). Рост потребностей (как дочери так и пациентов) и вероятностей более редких органов. Возможность корректировать время игры</li>
      </ul>

      <details class="dev-details">
        <summary class="dev-summary">
          Заметки разработчика
          <span class="arrow">▼</span>
        </summary>
        <div class="dev-content">
          <p>Как выглядел процессинг идеи</p>
          <img src="/portfolio/images/gutsout/other/GutsOut_notes.webp" alt="Записи разработчиков" class="rounded-xl my-4" />
        </div>
      </details>

      <h2>День 1 - Солнышко светит, птички поют</h2>
      <ul>
        <li>Основные кор механики + настройка менеджеров, сцен</li>
        <li>Душевнобольных решили определять через совокупность эмоций. Реализована заглушка в виде 3 параметров - mind, soul, body</li>
        <li>Первые эскизы -> 1 сет органов и человек-пациент</li>
      </ul>

      <h2>День 2 - Наращиваем</h2>
      <ul>
        <li>Типы органов: обычные, механические, насекомые (+ редкость)</li>
        <li>Музыка: мрачная + игривая. Смогли сгенерировать в Suno что хотели</li>
        <li>Цель-затычка: собрать 3 коллекции (вместо редких органов для дочери) и якобы провести "ритуал". Ну что уж успеваем</li>
      </ul>

      <h2>День 3 - Баланс, паника и баги</h2>
      <ul>
        <li>Софт-локи: добавили нож для убийства пациента и мусорное ведро для удаления плохих органов</li>
        <li>Введена карма для фикса ножа. Теперь пациенты дают "валюту", за которую можно убивать пациентов. От количества убийств зависит цена</li>
        <li>Больше кармы за несколько отпущенных пациентов за раз -> мотивация балансить</li>
        <li>Радостные залили билд за 2-3 часа до дедлайна. Начали впервые тестить и обнаружили баг с выпадением редких органов, из-за чего игра была непроходима. Начали судорожно фиксить костылями) Успели за 10 минут до окончания таймера!!! Были еще пару небольших багов. Что-то успели пофиксить, а что-то - нет. Есть над чем работать.</li>
      </ul>

      <h2>Результат:</h2>
      <ul>
        <li>По визуалу сделали всё задуманное, но облажались с игровым интерфейсом и кнопками - игрок не всегда замечает</li>
        <li>Малый опыт с движком вылился в трату кучи времени на исправление кода и поиск багов</li>
        <li>Недостаток туториала и объяснения что нужно делать - игроки не сразу понимали как и что работает. Для этого нужно было кликнуть на знак вопроса, который многие игнорировали</li>
        <li>С озвучкой не успели, но использовали разные ассеты с itch.io</li>
        <li>Были баги, которые судорожно правили. Самое критичное успели исправить (или не всё?) и залить рабочий билд на <a href="https://myindie.ru/games/game/gutsout" class="text-primary hover:text-primary/80 underline">MyIndie</a></li>
      </ul>
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Арт
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <h2>Описание:</h2>
      <p>В самом начале решили, что игра будет черно-белая, арт неаккуратный → «будто пациент мучил графический планшет». Из плюсов - скорость рисования, т.к. художник (я) занимался также и кодом, и другими вещами</p>
     
      <h2>Ассеты:</h2>
      <p>Ниже приведен ассет органов</p>
      <img src="/portfolio/images/gutsout/other/Organs.webp" alt="Ассеты игры" class="rounded-xl my-4" />
    </div>
  </details>

  <details class="dev-details">
    <summary class="dev-summary">
      Механики и баланс
      <span class="arrow">▼</span>
    </summary>
    <div class="dev-content">
      <h2>Кор:</h2>
      <ul>
        <li>Drag n Drop - простое перетаскивание органов между контейнерами. Каждый контейнер принимает только свой тип органа</li>
        <li>Есть инвентарь-буфер для более удобного переставления органов. И можно откладывать органы для других пациентов</li>
        <li>Каждый орган имеет значения трех параметров: mind, soul, body. Значения могут быть и отрицательными. Редкость органа определяет его ценность, выраженную в значениях этого параметра</li>
        <li>Каждый орган имеет редкость-тип: проклятый, плохой, обычный, хороший, редкий, эпический, легендарный. Редкость отображена в игре цветом</li>
        <li>
          <div style="display: flex; align-items: center; gap: 8px; margin: 12px 0;">
            <span style="width: 20px; height: 20px; background-color: #800000; border-radius: 50%;"></span>
            <span>←</span>
            <span style="width: 20px; height: 20px; background-color: #F08080; border-radius: 50%;"></span>
            <span>←</span>
            <span style="width: 20px; height: 20px; background-color: #FFFFFF; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #90EE90; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #6495ED; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #BA55D3; border-radius: 50%;"></span>
            <span>→</span>
            <span style="width: 20px; height: 20px; background-color: #FFA500; border-radius: 50%;"></span>
          </div>
        </li>
        <li>Есть 3 пациента и у каждого есть запрос параметров (mind, soul, body). Текущие значения вычисляются суммой по всем органам</li>
        <li>Цель - переставлять органы так, чтобы удовлетворить как можно больше запросов за раз</li>
        <li>При удовлетворении хотя бы одного запроса можно закончить день, и все, у кого запросы удовлетворены, уходят. На их месте появляются новые пациенты с новыми органами</li>
      </ul>

      <h2>Мета и цели:</h2>
      <ul>
        <li>Цель - "провести 3 ритуала" сводится к удовлетворению повышенных запросов трех особых пациентов</li>
        <li>Кор как основной инструмент - при хорошей игре появляются хорошие лишние органы</li>
      </ul>

      <h2>Fix механики:</h2>
      <ul>
        <li>Может возникнуть ситуация, когда как ни переставляй органы - нельзя закончить день → Введен нож, который позволяет раз в день убрать одного пациента</li>
        <li>Может возникнуть ситуация, когда игрок ножом убирает людей без некоторых органов, и буфер-инвентарь заполнен. В таком случае становится невозможно пользоваться буфером, что приводит к софт-локу → Введено мусорное ведро для органов</li>
        <li>Для баланса ножа введена карма как валюта, чтобы ограничивать его использование. Карма получается с окончанием дня за отпущенных пациентов</li>
      </ul>

      <h2>Баланс:</h2>
      <p>Таблица органов: <a href="https://docs.google.com/spreadsheets/d/1dnj9-65VL32Ym2bmzhHRjcAtPVQC-wQu/edit?usp=sharing&ouid=106393117432479157531&rtpof=true&sd=true" class="text-primary hover:text-primary/80 underline">Organs balance table</a></p>
      <p>Получаемая карма при окончании дня: +10 за одного пациента, +30 за двоих, +50 за троих</p>
      <p>Цена ножа: 5 + (3 × количество использований)</p>
      <p>Рост потребностей пациентов: средний рост как степенная функция</p>
      <p>Шанс выпадения редких органов стремится к равномерному. Изначально распределение нормальное</p>
    </div>
  </details>

  <h2>Ключевые особенности</h2>
  <ul>
    <li>Пошаговая головоломка</li>
    <li>Система балансировки параметров путем перестановок</li>
    <li>Стильный визуал + приятное звуковое оформление</li>
  </ul>
`,


    image: `${base}images/gutsout/GutsOut_banner.webp`,

    screenshots: [
        `${base}images/gutsout/screenshots/screenshot1.webp`,
	`${base}images/gutsout/screenshots/screenshot2.webp`,
	`${base}images/gutsout/screenshots/screenshot3.webp`,
    ],

    date: '29 . 04 . 2026',
    projectSlug: 'gutsout'
  };