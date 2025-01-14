import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { MDXRemoteProps } from 'next-mdx-remote';
import type { Options } from 'rehype-pretty-code';

// Define the pretty code options
const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

// Define the type for frontmatter
interface Frontmatter {
  title: string;
  description: string;
  date: string;
  [key: string]: any;
}

export async function getMDXContent(source: string) {
  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: {
      mdxOptions: {
        // @ts-expect-error - Types are mismatched but the runtime behavior is correct
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        development: process.env.NODE_ENV === 'development',
      },
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter };
} 