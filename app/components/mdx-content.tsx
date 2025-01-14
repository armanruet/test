'use client';

import { MDXRemote } from 'next-mdx-remote';
import { components } from './mdx';

interface MDXContentProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export function MDXContent({ source }: MDXContentProps) {
  if (!source) return null;

  return (
    <div className="mdx-content prose dark:prose-invert">
      <MDXRemote {...source} components={components} />
    </div>
  );
}
