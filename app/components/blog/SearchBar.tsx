'use client';

import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative mb-8 w-full">
      <input
        type="text"
        placeholder="Search for anything..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full rounded-lg bg-[#F6F8FA] dark:bg-[#0B0F17] px-4 py-3 pl-12 text-gray-600 dark:text-gray-300 focus:outline-none"
      />
      <IoSearchOutline
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}
