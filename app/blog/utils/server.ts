import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { CompileOptions } from '@mdx-js/mdx';
import type { Pluggable } from 'unified';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  // Create a properly typed rehype plugin configuration
  const rehypePlugins: Pluggable[] = [
    // Cast the plugin to Pluggable to match MDX's expected type
    [rehypePrettyCode, prettyCodeOptions] as Pluggable
  ];

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins,
        format: 'mdx',
        development: process.env.NODE_ENV === 'development',
        jsx: true,
      },
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter };
} 