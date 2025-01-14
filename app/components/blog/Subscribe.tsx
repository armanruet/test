'use client';

import { useState } from 'react';

export function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement subscription logic
    console.log('Subscribing:', email);
  };

  return (
    <div className="my-12">
      <div className="flex items-baseline gap-2 mb-4">
        <h3 className="text-2xl font-bold">Subscribe to</h3>
        <span className="text-2xl font-bold">Arman&apos;s</span>
        <h3 className="text-2xl font-bold">Blog updates</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full p-4 border border-gray-200 rounded-lg 
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:border-gray-300 dark:focus:border-gray-600
                   placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black 
                   rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 
                   transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
