'use client';

import { useState } from 'react';

interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: Date;
}

export function Comments() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    // TODO: Implement actual comment submission to backend
    const newComment: Comment = {
      id: Date.now().toString(),
      author: 'Anonymous', // TODO: Replace with actual user
      content: comment,
      createdAt: new Date(),
    };

    setComments((prev) => [newComment, ...prev]);
    setComment('');
  };

  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold mb-6 inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
        Comments
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Your comment here"
            className="w-full min-h-[150px] p-4 bg-white dark:bg-gray-800 rounded-lg
                     border border-gray-200 dark:border-gray-700
                     text-gray-900 dark:text-gray-100 
                     focus:outline-none focus:border-gray-300 dark:focus:border-gray-600
                     placeholder:text-gray-500 resize-none"
          />
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-2 text-gray-500">
              <button
                type="button"
                title="Bold"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <span className="font-bold">B</span>
              </button>
              <button
                type="button"
                title="Italic"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                <span className="italic">i</span>
              </button>
              <button
                type="button"
                title="Quote"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                &quot;&quot;
              </button>
              <button
                type="button"
                title="Code"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                {'</>'}
              </button>
              <button
                type="button"
                title="Link"
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
              >
                🔗
              </button>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black 
                       rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 
                       transition-colors duration-200"
            >
              Post
            </button>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-gray-900 dark:text-gray-100">{comment.author}</span>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
