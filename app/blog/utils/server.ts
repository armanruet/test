import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { Pluggable } from 'unified';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  type MDXOptions = NonNullable<MDXRemoteProps['options']>;
  
  const rehypePlugins: MDXOptions['mdxOptions']['rehypePlugins'] = [
    [rehypePrettyCode, prettyCodeOptions] as Pluggable
  ];

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins,
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 