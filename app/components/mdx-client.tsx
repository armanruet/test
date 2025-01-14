'use client';

import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold py-4 text-center" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold py-3 text-center" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-bold py-3 text-center" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="py-2 text-center text-lg" {...props} />
  ),
};

interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}

interface MDXProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  components?: Record<string, React.ComponentType<unknown>>;
}

export function MDXClient({ source }: MDXProps) {
  if (!source) return null;

  return (
    <div className="mdx-content prose prose-lg dark:prose-invert mx-auto max-w-4xl">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
