import { getPostFromSlug, getBlogPosts } from '../../blog/utils.server';
import { MDXClient } from '../../components/mdx-client';
import { Subscribe } from '../../components/blog/Subscribe';
import { Comments } from '../../components/blog/Comments';
import '../styles/code-theme.css';
import styles from './blog-post.module.css';

// Add this function to generate static paths
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { metadata } = await getPostFromSlug(params.slug);
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getPostFromSlug(params.slug);

  return (
    <article className={`${styles.root} mx-auto max-w-[900px] px-4 py-12`}>
      <header className="mb-24">
        <h1 className={styles.title}>
          {metadata.title}
        </h1>
      </header>

      <div className={styles.content}>
        <MDXClient source={content} />
      </div>

      <div className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800">
        <Subscribe />
        <Comments />
      </div>
    </article>
  );
}
