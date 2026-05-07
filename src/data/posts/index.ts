// src/data/posts/index.ts
import { aceagePost } from './aceage';
import { gutsoutPost } from './gutsout';

export interface Post {
  slug: string;
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  content: string;
  contentRu: string;
  image: string;
  screenshots: string[];
  date: string;
  projectSlug: string;
}

export const posts: Post[] = [
  aceagePost,
  gutsoutPost
];