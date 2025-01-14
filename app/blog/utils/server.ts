import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { Transformer, Plugin } from 'unified';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

type RehypePlugin = Plugin<[Options?], Root>;

export async function getMDXContent(source: string) {
  // Create a function that returns the transformer
  const createPrettyCodePlugin = (): RehypePlugin => {
    return function prettyCode(options?: Options): Transformer<Root> {
      return rehypePrettyCode(options || {});
    };
  };

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        // @ts-ignore - Types are correct at runtime
        rehypePlugins: [
          [createPrettyCodePlugin(), prettyCodeOptions]
        ],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 