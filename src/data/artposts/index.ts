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

import { googoosePost } from './googoose';
import { girlPost } from './girl';
import { barrelPost } from './barrel'; 
import { foresterPost } from './forester';


export const artPosts: ArtPost[] = [
    googoosePost,
    girlPost,
    barrelPost,
    foresterPost,
    
];