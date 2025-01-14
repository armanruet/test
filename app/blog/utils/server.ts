import { compileMDX } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import type { Options } from 'rehype-pretty-code';
import type { Plugin, Processor } from 'unified';
import type { Root } from 'hast';

const prettyCodeOptions: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

// Define the plugin type that matches MDX's expectations
type UnifiedPlugin = Plugin<Array<Options | undefined>, Root>;
type RehypePlugin = UnifiedPlugin | [UnifiedPlugin, Options];

export async function getMDXContent(source: string) {
  // Create a properly typed plugin configuration
  const plugins: RehypePlugin[] = [
    // @ts-expect-error - rehype-pretty-code types don't match exactly but work at runtime
    [rehypePrettyCode, prettyCodeOptions]
  ];

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        rehypePlugins: plugins,
        parseFrontmatter: true,
      },
    },
  });

  return { content, frontmatter };
} 