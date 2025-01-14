'use client';

interface TagsListProps {
  tags: { name: string; count: number }[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export default function TagsList({ tags, selectedTag, onTagSelect }: TagsListProps) {
  const totalPosts = tags.reduce((sum, tag) => sum + tag.count, 0);

  const handleTagClick = (tagName: string) => {
    // If clicking the currently selected tag, clear selection (set to null/"All")
    if (selectedTag === tagName) {
      onTagSelect(null);
    } else {
      onTagSelect(tagName);
    }
  };

  return (
    <div className="mb-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTagSelect(null)}
          className={`px-3 py-1.5 rounded-full text-sm transition-colors duration-200 ${
            selectedTag === null
              ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400'
              : 'bg-gray-200 text-gray-600 hover:text-pink-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-pink-400'
          }`}
        >
          All ({totalPosts})
        </button>

        {tags.map((tag) => (
          <button
            key={tag.name}
            onClick={() => handleTagClick(tag.name)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors duration-200 ${
              selectedTag === tag.name
                ? 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400'
                : 'bg-gray-200 text-gray-600 hover:text-pink-500 dark:bg-gray-700 dark:text-gray-400 dark:hover:text-pink-400'
            }`}
          >
            {tag.name} ({tag.count})
          </button>
        ))}
      </div>
    </div>
  );
}
