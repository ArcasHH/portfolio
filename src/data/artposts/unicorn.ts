// src/data/artposts/unicorn.ts
import type { ArtPost } from './index';

const base = import.meta.env.BASE_URL;

export const unicornPost: ArtPost = {
  slug: 'unicorn',
  title: 'Unicorn - Character Design',
  titleRu: 'Единорог - Дизайн персонажа',
  description: 'Fantasy character illustration',
  descriptionRu: 'Иллюстрация фэнтези персонажа',
  content: `
    <h2>About this work</h2>
    <p>This character design was created for a fantasy project.</p>
    
    <h2>Process</h2>
    <p>The artwork focuses on ethereal and magical elements.</p>
    
    <h2>Tools used</h2>
    <ul>
      <li>Procreate</li>
      <li>Photoshop</li>
    </ul>
  `,
  contentRu: `
    <h2>О работе</h2>
    <p>Этот дизайн персонажа для фэнтези проекта.</p>
    
    <h2>Инструменты</h2>
    <ul>
      <li>Photoshop</li>
    </ul>
  `,
  image: `${base}images/concepts/Unicorn.webp`,
  date: '2021-03-10',
};