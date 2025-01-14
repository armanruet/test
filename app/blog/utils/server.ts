import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { MDXRemoteProps } from 'next-mdx-remote';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  type MDXOptions = NonNullable<MDXRemoteProps['options']>;

  const options: MDXOptions = {
    mdxOptions: {
      development: process.env.NODE_ENV === 'development',
      format: 'mdx',
      // Explicitly type the rehype plugins array
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] as MDXOptions['mdxOptions']['rehypePlugins'],
      parseFrontmatter: true,
    }
  };

  const { content, frontmatter } = await compileMDX({
    source,
    options,
  });

  return { content, frontmatter };
} 