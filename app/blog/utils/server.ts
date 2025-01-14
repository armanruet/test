import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { CompileOptions } from '@mdx-js/mdx';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions] as unknown as CompileOptions['rehypePlugins'][number],
        ],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 