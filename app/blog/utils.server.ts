// app/blog/utils.server.ts
import { type Options } from 'rehype-pretty-code';
import type { Pluggable } from 'unified';

// Import rehypePrettyCode using require since it's a CommonJS module
const rehypePrettyCode = require('rehype-pretty-code');

// Define options type
interface MdxOptions {
  mdxOptions: {
    rehypePlugins: Pluggable[];
    parseFrontmatter: boolean;
  };
}

// Define pretty code options
const prettyCodeConfig: Partial<Options> = {
  theme: 'github-dark',
  keepBackground: true,
};

// Create the options object
const mdxOptions: MdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeConfig]
    ],
    parseFrontmatter: true,
  },
};

export { mdxOptions };

// If you need to process MDX content
export async function processMDX(content: string) {
  // Your processing logic here
  return content;
}