import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { Transformer } from 'unified';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  // Define the transformer type for rehype plugins
  type RehypePlugin = (options?: any) => Transformer<Root>;

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        // Cast the rehype plugin to the correct transformer type
        rehypePlugins: [
          [rehypePrettyCode as RehypePlugin, prettyCodeOptions]
        ],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 