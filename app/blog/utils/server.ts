import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { RehypePlugin } from 'next-mdx-remote/rsc';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  const { content, frontmatter } = await compileMDX<any>({
    source,
    options: {
      mdxOptions: {
        // Type assertion here is safe because we know the plugin structure
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] as RehypePlugin[],
        development: process.env.NODE_ENV === 'development',
      },
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter };
} 