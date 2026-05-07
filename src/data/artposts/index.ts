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
}

import { girlPost } from './girl';
import { barrelPost } from './barrel'; 
import { unicornPost } from './unicorn';

export const artPosts: ArtPost[] = [
  girlPost,
  barrelPost,
  unicornPost,
];