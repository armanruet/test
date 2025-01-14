'use client';

import { useState } from 'react';
import { BlogPost } from '../../blog/utils';
import SearchBar from './SearchBar';
import TagsList from './TagsList';
import { BlogPosts } from '../posts';

interface BlogContentProps {
  initialPosts: BlogPost[];
  initialTags: { name: string; count: number }[];
}

export default function BlogContent({ initialPosts, initialTags }: BlogContentProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = initialPosts.filter((post) => {
    const matchesTag = selectedTag ? post.metadata.tags.includes(selectedTag) : true;
    const matchesSearch = post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl p-6 mb-8 shadow-sm">
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 lg:flex-shrink-0">
          <TagsList tags={initialTags} selectedTag={selectedTag} onTagSelect={setSelectedTag} />
        </aside>
        <main className="flex-1">
          {filteredPosts.length > 0 ? (
            <BlogPosts posts={filteredPosts} />
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              No posts found matching your criteria
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
