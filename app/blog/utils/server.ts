import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { Plugin, Transformer } from 'unified';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  // Cast the rehype plugin to the correct type
  const rehypePrettyCodePlugin = rehypePrettyCode as unknown as Plugin<[Partial<Options>], Root>;

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCodePlugin, prettyCodeOptions]
        ],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 