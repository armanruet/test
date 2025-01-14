import Parser from 'rss-parser';

interface MediumPost {
  title: string;
  content: string;
  pubDate: string;
  link: string;
  author: string;
  categories: string[];
}

export async function getMediumPost(username: string, articleSlug: string) {
  try {
    const parser = new Parser();
    console.log(`Fetching feed from: https://medium.com/feed/@${username}`);
    
    const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);
    console.log(`Found ${feed.items.length} articles in feed`);
    
    const article = feed.items.find(item => {
      const guid = item.guid || '';
      console.log('Checking guid:', guid);
      
      const slugMatch = guid.match(/medium\.com\/p\/([^?]+)/) || 
                       guid.match(/([^/]+)(?:\?|$)/);
                       
      const itemSlug = slugMatch ? slugMatch[1] : '';
      console.log(`Extracted slug: ${itemSlug}, looking for: ${articleSlug}`);
      
      return itemSlug === articleSlug;
    });

    if (!article) {
      throw new Error(`Article with slug "${articleSlug}" not found in feed`);
    }

    // Get the full content from the 'content:encoded' field or fall back to content
    let content = article['content:encoded'] || article.content || article.description || '';
    
    // Clean up the content
    content = content
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1') // Remove CDATA
      .replace(/<div class="medium-feed-item">[\s\S]*?<\/div>/g, '') // Remove feed wrapper
      .replace(/<p class="medium-feed-link">[\s\S]*?<\/p>/g, '') // Remove feed link
      .replace(/<img.*?>/g, '') // Remove images for now
      .replace(/<h3/g, '### <h3') // Convert h3 to markdown
      .replace(/<h2/g, '## <h2') // Convert h2 to markdown
      .replace(/<h1/g, '# <h1') // Convert h1 to markdown
      .replace(/<\/?[^>]+(>|$)/g, '') // Remove remaining HTML tags
      .replace(/&nbsp;/g, ' ') // Replace HTML spaces
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove extra newlines
      .trim();

    return {
      title: article.title?.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1') || '',
      content: content,
      pubDate: article.pubDate || '',
      link: article.link || '',
      author: article['dc:creator']?.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1') || '',
      categories: article.categories?.map(cat => 
        typeof cat === 'string' ? cat.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1') : ''
      ) || [],
    };
  } catch (error) {
    console.error('Error in getMediumPost:', error);
    throw error;
  }
}

export function convertMediumToMDX(mediumPost: MediumPost) {
  const frontMatter = `---
title: "${mediumPost.title}"
date: "${mediumPost.pubDate}"
publishedAt: "${mediumPost.pubDate}"
description: "${mediumPost.title}"
summary: "${mediumPost.title}"
tags: ${JSON.stringify(mediumPost.categories)}
draft: false
image: null
canonicalUrl: "${mediumPost.link}"
---

${mediumPost.content}

---

*This article was originally published on [Medium](${mediumPost.link})*
`;

  return frontMatter;
} 