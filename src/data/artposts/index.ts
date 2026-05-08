// src/data/artposts/index.ts
export interface ArtPost {
  slug: string;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  content: string;
  contentRu: string;
  image: string;
  date: string;
  category: string;
  categoryRu: string;
}

// Импорты постов будут здесь
import { girlPost } from './girl';
import { unicornPost } from './unicorn';

export const artPosts: ArtPost[] = [
  girlPost,
  unicornPost,
];