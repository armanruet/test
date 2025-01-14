'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../blog/utils';

function CodePreview({ title }: { title: string }) {
  // Generate a simple visual based on the title
  const previewCode = `function ${title.toLowerCase().replace(/[^a-z0-9]/g, '')}() {
  // ${title}
  const data = await process();
  return analyze(data);
}`;

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
      <div className="p-6 font-mono text-sm text-gray-600 dark:text-gray-400 overflow-hidden">
        <pre>
          <code>{previewCode}</code>
        </pre>
      </div>
    </div>
  );
}

export function BlogPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-md hover:shadow-xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.slug}`} className="block aspect-[4/3] relative overflow-hidden">
            {post.metadata.image ? (
              <div className="relative w-full h-full bg-gray-100 dark:bg-gray-800">
                <Image
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index < 6}
                  onError={() => console.error(`Failed to load image for: ${post.metadata.title}`)}
                />
              </div>
            ) : (
              <CodePreview title={post.metadata.title} />
            )}
          </Link>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {post.metadata.readingTime && (
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.metadata.readingTime}m read
                </span>
              )}
            </div>

            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 mb-2">
                {post.metadata.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
                {post.metadata.description}
              </p>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
