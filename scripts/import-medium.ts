import fs from 'fs/promises';
import path from 'path';
import { getMediumPost, convertMediumToMDX } from '../app/blog/medium-utils';

async function importMediumArticle(username: string, articleSlug: string) {
  try {
    const blogDir = path.join(process.cwd(), 'app/blog/posts');
    console.log('Creating directory:', blogDir);
    await fs.mkdir(blogDir, { recursive: true });
    
    console.log('Fetching Medium post...');
    const post = await getMediumPost(username, articleSlug);
    console.log('Post fetched:', post.title);
    
    const mdxContent = convertMediumToMDX(post);
    console.log('MDX content generated, length:', mdxContent.length);
    
    const filePath = path.join(blogDir, `${articleSlug}.mdx`);
    console.log('Writing to:', filePath);
    await fs.writeFile(filePath, mdxContent, 'utf-8');
    
    console.log('File written successfully');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  const [username, articleSlug] = process.argv.slice(2);
  if (!username || !articleSlug) {
    console.error('Please provide both username and article slug');
    process.exit(1);
  }
  console.log('Starting import with args:', { username, articleSlug });
  importMediumArticle(username, articleSlug);
} 