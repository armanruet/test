import { BlogPost } from './utils.server';

export type { BlogPost };

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/posts');
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}
