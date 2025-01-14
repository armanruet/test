import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        // @ts-expect-error - Types are not perfectly aligned
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 