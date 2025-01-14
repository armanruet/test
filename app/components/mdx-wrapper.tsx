'use client';

import { MDXRemote } from 'next-mdx-remote';
import { components } from './mdx-components';

interface MDXWrapperProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export function MDXWrapper({ source }: MDXWrapperProps) {
  return <MDXRemote {...source} components={components} />;
}
