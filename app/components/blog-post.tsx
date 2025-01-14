'use client';

import { CustomMDX } from './mdx';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogPostProps {
  metadata: {
    title: string;
    description: string;
    date: string;
    [key: string]: string;
  };
  content: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export function BlogPost({ content }: BlogPostProps) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <CustomMDX {...content} />
    </article>
  );
}
