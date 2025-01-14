import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { Transformer } from 'unified';
import type { VFile } from 'vfile';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

// Define a more specific type for the rehype plugin
type RehypePluginFunction = (options?: Options) => (tree: Root, file: VFile) => Root | Promise<Root>;

export async function getMDXContent(source: string) {
  // Cast rehypePrettyCode to the correct function type
  const typedRehypePrettyCode = rehypePrettyCode as unknown as RehypePluginFunction;

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: [
          // Apply the plugin with its options
          [typedRehypePrettyCode, prettyCodeOptions]
        ],
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 