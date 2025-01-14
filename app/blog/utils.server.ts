import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200; // Average reading speed
  const words = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);
  return Math.max(1, readingTime); // Minimum 1 minute reading time
}

export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    tags: string[];
    readingTime?: number;
    draft: boolean;
    image: string | null;
  };
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    if (!fs.existsSync(postsDirectory)) return [];

    const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.mdx'));
    
    const posts = files.map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(postsDirectory, file);
      const { data, content } = matter(fs.readFileSync(filePath, 'utf-8'));
      const readingTime = calculateReadingTime(content);

      const tags = Array.isArray(data.tags)
        ? data.tags.map((tag: string) => tag.toString().trim().toUpperCase())
        : data.tags?.split(',').map((tag: string) => tag.trim().toUpperCase()) || [];
      
      return {
        slug,
        metadata: {
          title: data.title || '',
          date: data.publishedAt || data.date || '',
          description: data.summary || data.description || '',
          tags,
          readingTime,
          draft: data.draft || false,
          image: data.image || null,
        },
      };
    });

    return posts
      .filter((post) => !post.metadata.draft)
      .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
  } catch (error) {
    console.error('Error in getBlogPosts:', error);
    return [];
  }
}

export function getTagsWithCount(posts: BlogPost[]): { name: string; count: number }[] {
  const tagCounts: { [key: string]: number } = {};

  posts.forEach((post) => {
    post.metadata.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

export async function getPostFromSlug(slug: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'app/blog/posts');
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Post file not found: ${filePath}`);
    }

    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);
    const readingTime = calculateReadingTime(content);

    const tags = Array.isArray(data.tags)
      ? data.tags.map((tag: string) => tag.toString().trim().toUpperCase())
      : data.tags?.split(',').map((tag: string) => tag.trim().toUpperCase()) || [];

    const mdxSource = await serialize(content);

    return {
      content: mdxSource,
      metadata: {
        title: data.title || '',
        date: data.publishedAt || data.date || '',
        description: data.summary || data.description || '',
        tags,
        readingTime,
        draft: data.draft || false,
        image: data.image || null,
      },
    };
  } catch (error) {
    console.error('Error in getPostFromSlug:', error);
    throw error;
  }
}
