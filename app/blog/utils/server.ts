import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { Pluggable, Plugin, Transformer } from 'unified';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  type MDXOptions = NonNullable<MDXRemoteProps['options']>;
  
  const rehypePlugins: Array<[Plugin<[Options?], Root, Root>, Options?]> = [
    [rehypePrettyCode, prettyCodeOptions]
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