import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { CompileOptions } from '@mdx-js/mdx';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  // Define rehype plugins with proper MDX types
  const rehypePlugins: CompileOptions['rehypePlugins'] = [
    // @ts-expect-error - Types are mismatched but runtime behavior is correct
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