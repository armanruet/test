import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { Options } from 'rehype-pretty-code';

const prettyCodeOptions: Partial<Options> = {
  // Specify your rehype-pretty-code options here
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          [rehypePrettyCode, prettyCodeOptions] as const,
        ],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 