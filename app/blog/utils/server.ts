import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { Transformer } from 'unified';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

export async function getMDXContent(source: string) {
  // Create a properly typed transformer function
  const rehypePrettyCodeTransformer = (options: Options): Transformer<Root> => {
    return (tree) => {
      return rehypePrettyCode(options)(tree) as Root;
    };
  };

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        // Use the transformer function directly
        rehypePlugins: [
          [rehypePrettyCodeTransformer, prettyCodeOptions]
        ],
        development: process.env.NODE_ENV === 'development',
      },
      parseFrontmatter: true,
    },
  });

  return { content, frontmatter };
} 