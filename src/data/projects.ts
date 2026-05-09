// src/data/projects.ts
const base = import.meta.env.BASE_URL;

export const projects = [
  {
    title: 'AceAge',
    slug: 'aceage',
    tech: ['Deck Building', 'Strategy', 'Turn-Based', '2D'],
    descriptionEn: 'Forge your deck. Conquer the wilds',
    descriptionRu: 'Собери свою колоду. Покори дикие земли',
    aboutEn: 'An easy card game on a hexagonal board with deckbuilding. Build your kingdom, keep track of the loyalty of the inhabitants, and most importantly, find out why you are here',
    aboutRu: 'Небольшая карточная игра на гексагональном поле с декбилдингом. Стройте своё королевство, следите за лояльностью жителей и главное - узнайте зачем вы здесь',
    gifUrl: `${base}images/aceage/AceAge.webp`,
    //github: 'https://github.com/PureshkaGames/AceAge',
    itch: 'https://clinicallysleepy.itch.io/ace-age',
    myindie: ''
  },
  {
    title: 'GutsOut',
    slug: 'gutsout',
    tech: ['Puzzle', 'Management', 'Turn-Based', '2D', 'Jam'],
    descriptionEn: 'Juggle organs & Hope',
    descriptionRu: 'Каждой твари по органу',
    aboutEn: 'A simple puzzle where, in the role of an occult doctor, we will treat patients ailments with organ substitution. The main gameplay focuses on balancing the parameters',
    aboutRu: 'Простенький пазл, где в роли оккультного доктора будем лечить недуги пациентов подменой органов. Основной геймплей сосредоточен на балансировке параметров',
    gifUrl: `${base}images/gutsout/GutsOut.webp`,
    github: 'https://github.com/ArcasHH/GutsOut',
    itch: 'https://arcashh.itch.io/gutsout?secret=h0smEhHgy6gxjRCck94dfUcSI',
    myindie: 'https://myindie.ru/games/game/gutsout'
  },
  {
    title: 'RunPunzel',
    slug: 'runpunzel',
    tech: ['Puzzle', 'Top-Down', 'Turn-Based', '2D', 'Jam'],
    descriptionEn: 'She’s done waiting. The tower won’t let her go',
    descriptionRu: 'Она устала ждать... Повторяй, пока не сбежишь',
    aboutEn: 'A 2D spatial puzzle game with the mechanics of recording the players movement. Сontains several levels divided by difficulty',
    aboutRu: '2D пространственная головоломка с механикой записывания перемещения игрока. Игра содержит несколько уровней разбитые по сложности',
    gifUrl: `${base}images/runpunzel/RunPunzel.webp`,
    github: 'https://github.com/ArcasHH/RunPunzel',
    itch: 'https://arcashh.itch.io/runpunzel',
    myindie: ''
  },
  {
    title: 'TangleJump',
    slug: 'tanglejump',
    tech: ['Platformer', '2D','Jam'],
    descriptionEn: 'The controls keep changing! Can you adapt on the fly and beat all levels?',
    descriptionRu: 'Сможешь ли адаптироваться к вечно изменяющемуся управлению и пройти все уровни?',
    aboutEn: 'Short platformer with control substitution: inverted controls, negative gravity, mirroring locations',
    aboutRu: 'Короткий платформер с подменой управления: инвертированноле управление, отрицательная гравитация, зеркальное отражение локаций',
    gifUrl: `${base}images/tanglejump/TangleJump.webp`,
    github: '',
    itch: 'https://arcashh.itch.io/tangle-jump',
    myindie: ''
  },
];