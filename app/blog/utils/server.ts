import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { Pluggable, Plugin } from 'unified';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

// Create a properly typed plugin
const prettyCodePlugin: Pluggable = [rehypePrettyCode, prettyCodeOptions] as Plugin;

export async function getMDXContent(source: string) {
  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [prettyCodePlugin],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 