import { getBlogPosts } from './utils.server';
import BlogContent from '../components/blog/BlogContent';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const tagCounts: { [key: string]: number } = {};
  posts.forEach((post) => {
    post.metadata.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const tags = Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return <BlogContent initialPosts={posts} initialTags={tags} />;
}

export const metadata = {
  title: 'Blog',
  description: 'Technical articles and insights',
};
