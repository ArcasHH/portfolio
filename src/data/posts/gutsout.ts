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
  <p>GutsOut is a simple puzzle game where you play as an occult doctor treating patients by substituting organs. The core gameplay focuses on balancing organ parameters.</p>
  <p>The game was developed during the 
    <a href="https://myindie.ru/jams/jam/myindie-game-jam-level-9" class="text-primary hover:text-primary/80 underline">MyIndie GameJam level9</a>
    and took 14th place overall and 20th in the "gameplay" category.
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
        <li>Programmer never opened game engines before → Unity (my experience) + vibe coding</li>
        <li>Theme "occultism"</li>
        <li>3 days</li>
      </ul>

      <h2>Plans:</h2>
      <ul>
        <li>Theme: Moved away from banal rituals, alchemy and cultists towards hidden connections/dependencies + organ replacement for the mentally ill</li>
        <li>Art: Black and white, messy → "as if the patient tortured a graphics tablet"</li>
        <li>Gameplay: Swap organs to treat patients. Organs have characteristics in certain emotions. The set of emotions determines the illness, visually reflected in the patient's appearance. An icon shows their satisfaction level (good or bad). Rearranging organs changes this state. You need to figure out which organs the patient needs based on what changes their satisfaction. (Spoiler: we didn't make it and ended up displaying mind, soul, body parameters). Sound on patient hover was supposed to help with diagnosis: for example, a patient giggles or wheezes and coughs.</li>
        <li>Sound design: Background music should be dark and mystical (without pathos) yet playful and flirtatious. It should be light and not distract too much from the game itself. Sounds - we planned to record wheezes, giggles, etc. Maybe individual phrases.</li>
        <li>Content: Different patients (art, behavior, etc.), different organs (whoopee cushion instead of lungs or straw instead of brains). Organs would have unique characteristics and different drop rates.</li>
      </ul>

      <h2>Day 1 - Sunshine, birds singing</h2>
      <ul>
        <li>Core mechanics: Drag & Drop (swap organs), container organization</li>
        <li>Decided to define mental illness through a set of emotions. Implemented a placeholder with 3 parameters - mind, soul, body</li>
        <li>Setting up managers, scenes</li>
      </ul>

      <h2>Day 2 - Building up</h2>
      <ul>
        <li>Organ types: normal, mechanical, insects (+ rarity)</li>
        <li>Music: dark + playful. Managed to generate what we wanted in Suno</li>
        <li>Goal placeholder: collect 3 collections (instead of rare organs). This controls playtime. (Also had the idea of searching for organs to help a terminally ill loved one)</li>
      </ul>

      <h2>Day 3 - Balance, panic and bugs</h2>
      <ul>
        <li>Soft-locks: added a knife for killing (costs karma) and a trash bin</li>
        <li>Progression: determined by the day (number of steps). Increasing needs and probability of rarer organs. Ability to adjust playtime</li>
        <li>More karma for releasing multiple patients at once</li>
        <li>Testing and building</li>
      </ul>

      <h2>Results:</h2>
      <ul>
        <li>Visually we achieved everything planned, but failed with the game interface and buttons - players often didn't notice them</li>
        <li>Lack of tutorial and explanation of what to do</li>
        <li>Didn't have time for voiceovers, but generated music in Suno with the intended mood and format</li>
        <li>There were bugs that we frantically fixed with workarounds an hour before the deadline. We managed to fix the most critical ones and upload a working build to 
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
      <p>From the very beginning, we decided the game would be black and white, with messy art → "as if the patient tortured a graphics tablet". Plus, it's easy to reuse in the engine.</p>

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
	  //<div style="font-size: 0.85rem; color: #000000; margin-top: 4px;">Cursed ← Bad ← Normal → Good → Rare → Epic → Legendary</div>
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
      <p>Knife cost: 5 + (3 * day)</p>
      <p>Patient needs increase over time</p>
      <p>Chance of rare organs tends toward even distribution</p>
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
      <p>Игра разрабатывалась в рамках геймджема 
      	<a href="https://myindie.ru/jams/jam/myindie-game-jam-level-9" class="text-primary hover:text-primary/80 underline">MyIndie GameJam level9</a>
 	и заняла 14 место в общей оценке и 20ое в категории "геймплей"
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
 	     <li>Программист никогда не открывал движки → Unity (у меня опыт) + вайбкодинг</li>
 	     <li>Тема «оккультизм»</li>
	     <li>3 дня</li>
	    </ul>

	    <h2>Планы:</h2>
	    <ul>
 	     <li>Тема: Ушли от банальных ритуалов, алхимии и культистов к идее скрытых связей/зависимости + замена органов у душевнобольных</li>
 	     <li>Арт: ч/б, неаккуратный → «будто пациент мучил графический планшет»</li>
 	     <li>Геймплей: менять органы местами чтобы лечить пациентов. Органы имеют характеристики в определенных эмоциях. Набор эмоции определяет болезнь, что отражено визуально во внешнем виде пациента. Иконкой отображено его довольство состоянием. Переставлением органов мы меняем это состояние. Нужно вычислить какие органы нужны пациенту по тому от чего меняется его довольство. (Спойлер: мы не успели и пришли к отображению параметров mind, soul, body). Звук при наведении на пациентов должен был помочь в диагностике.
		</li>
	      <li>Звуковое оформление: фоновая музыка должна быть мрачной и мистической (без пафоса) и при этом с веселым и заигрывающем настроением. Звуки - планировали озвучить хрипы, смешки и так далее </li>
	      <li>Контент: разные пациенты (арт, поведение и тд), разные органы (подушка-пердушка вместо легких или солома вместо мозгов). Органы бы имели уникальные характеристики и разный шанс выпадения»</li>
	    </ul>

 	   <h2>День 1 - Солнышко светит, птички поют</h2>
 	   <ul>
	      <li></li>
	      <li>Основные кор механики: Drag & Drop (меняем органы местами), организация контейнеров</li>
 	     <li>Душевнобольных решили определять через совокупность эмоций. Реализована заглушка в виде 3 параметров - mind, soul, body</li>
 	     <li>Настройка менеджеров, сцен</li>
 	   </ul>

 	   <h2>День 2 - Наращиваем</h2>
 	   <ul>
 	     <li>Типы органов: обычные, механические, насекомые (+ редкость)</li>
  	    <li>Музыка: мрачная + игривая. Смогли сгенерировать в Suno что хотели</li>
  	    <li>Цель-затычка: собрать 3 коллекции (вместо редких органов). Так контролируем время игры. (Была также идея поиска органов с целью помощи тяжело больному близкому человеку)</li>
 	   </ul>
    
	    <h2>День 3 - Баланс, паника и баги</h2>
 	   <ul>
 	     <li>Софт-локи: добавили нож для убийства за карму и мусорное ведро</li>
	     <li>Прогрессия: определяется днём (количество шагов). Рост потребностей и вероятностей более редких органов. Возможность корректировать время игры</li>
	     <li>Больше кармы за несколько отпущенных пациентов за раз</li>
 	     <li>Тестирование и сборка билда</li>
 	   </ul>

	   <h2>Результат:</h2>
	    <ul>
 	     <li>По визуалу сделали всё задуманное, но облажались с игровым интерфейсом и кнопками - игрок не всегда замечает</li>
 	     <li>Недостаток туториала и объяснения что нужно делать</li>
 	     <li>С озвучкой не успели, но музыку сгенерировали в suno под то настроение и формат, что и запланировали</li>
	     <li>Были баги, которые судорожно правили костылями за час до конца таймера. Самое критичное успели исправить и залить рабочий билд на 
		<a href="https://myindie.ru/games/game/gutsout" class="text-primary hover:text-primary/80 underline">MyIndie</a>.
	     </li>
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
	    <p>В самом начале решили, что игра будет черно-белая, арт неаккуратный → «будто пациент мучил графический планшет». К тому же это удобно переиспользовать в движке</p>
	     
	    <h2>Ассеты:</h2>
	    <p> Ниже приведен ассет органов</p>
	    <img src="/portfolio/images/gutsout/other/Organs.webp" alt="Ассеты игры" class="rounded-xl my-4" />

	  </div>
	</details>

	<details class="dev-details">
 	 <summary class="dev-summary">
	    Механики и баланс:
	    <span class="arrow">▼</span>
	  </summary>
	  <div class="dev-content">

	    <h2>Кор:</h2>
	    <ul>
 	     <li>Drag n Drop - простое перетаскивание органов между контейнерами. Каждый контейнер принимает только свой тип органа</li>
	     <li>Есть инвентарь-буффер для более удобного переставления органов. И можно откладывать органы для других пациентов</li>
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
 		  //<div style="font-size: 0.85rem; color: #000000; margin-top: 4px;">Проклятый ← Плохой ← Обычный → Хороший → Редкий → Эпический → Легендарный</div>
		</li>
	     <li>Есть 3 пациента и у каждого есть запрос параметров (mind, soul, body). Текущие значения вычисляются суммой по всем органам.</li>
 	     <li>Цель - переставлять органы так, чтобы как удовлетворить как можно больше запросов за раз.</li>
	     <li>При удовлетворении хотя бы одного запроса можно закончить день и все, у кого запросы удовлетворены, уходят. На их месте появляются новые пациенты с новыми органами.</li>
 	   </ul>

	    <h2>Мета и цели:</h2>
	    <ul>
 	     <li>Цель - "провести 3 ритуала" сводится к удовлетворению повышенных запросов трех особых пациентов</li>
	     <li>Кор как основной инструмент - при хорошей игре появляются хорошие лишние органы</li>
	    </ul>

	   <h2>Fix механики:</h2>
	    <ul>
 	     <li>Может возникнуть ситуация, когда как не переставляй органы - нельзя закончить день → Введен нож, который позволяет раз в день убрать одного пациента</li>
	     <li>Может возникнуть ситуация, когда игрок ножом убирает людей без некоторых органов и буфер-инвентарь заполнен. В таком случае становится невозможно пользоваться буфером, что приводит к софт-локу. → Введено мусорное ведро для органов</li>
	     <li>Для баланса ножа введена карма как валюта, чтобы ограничивать его использование. Карма получается с окончанием дня за отпущенных пациентов</li>
 	   </ul>

	   <h2>Баланс:</h2>
	    <p> Таблица органов: <a href="https://docs.google.com/spreadsheets/d/1dnj9-65VL32Ym2bmzhHRjcAtPVQC-wQu/edit?usp=sharing&ouid=106393117432479157531&rtpof=true&sd=true" class="text-primary hover:text-primary/80 underline">Organs balance table</a></p>
	    <p> Получаемая карма при окончании дня: +10 за одного пациента, +30 за двоих, +50 за троих</p>
	    <p> Цена ножа: 5 + (3 * day)</p>
	    <p> Рост потребностей пациентов: </p>
	    <p> Шанс выпадения редких органов стремится к равномерному</p>
	    
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