// src/data/posts/index.ts
import { aceagePost } from './aceage';
import { gutsoutPost } from './gutsout';
import { tanglejumpPost } from './tanglejump';
import { runpunzelPost } from './runpunzel';
import { uhohPost } from './uhoh';

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
  projectSlug: string;
}

export const posts: Post[] = [
  uhohPost,
  aceagePost,
  gutsoutPost,
  tanglejumpPost,
  runpunzelPost,
];