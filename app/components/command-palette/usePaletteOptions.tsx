'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import {
  HiOutlineDocumentAdd,
  HiOutlineDocumentDuplicate,
  HiOutlineHome,
  HiOutlinePencil,
  HiOutlineUser,
} from 'react-icons/hi';
import { TbBolt, TbBoltOff } from 'react-icons/tb';
import { BlogPost } from '../../blog/utils.server';

type PaletteOption = {
  id: string;
  name: string;
  onSelect: (id: string) => void;
  icon?: ReactNode;
};

export default function usePaletteOptions() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    }
    fetchPosts();
  }, []);

  const generalOptions: PaletteOption[] = [
    {
      id: 'theme',
      name: 'Toggle Theme',
      icon: theme === 'dark' ? <TbBolt /> : <TbBoltOff />,
      onSelect: () => setTheme(theme === 'dark' ? 'light' : 'dark')
    },
    {
      id: 'copy',
      name: 'Copy URL',
      icon: <HiOutlineDocumentDuplicate />,
      onSelect: () => navigator.clipboard.writeText(window.location.href)
    }
  ];

  const pageOptions: PaletteOption[] = [
    {
      id: '/',
      name: 'Home',
      icon: <HiOutlineHome />,
      onSelect: (path: string) => router.push(path)
    },
    {
      id: '/blog',
      name: 'Blog',
      icon: <HiOutlinePencil />,
      onSelect: (path: string) => router.push(path)
    },
    {
      id: '/about',
      name: 'About',
      icon: <HiOutlineUser />,
      onSelect: (path: string) => router.push(path)
    }
  ];

  const blogOptions: PaletteOption[] = posts.map((post) => ({
    id: post.slug,
    name: post.metadata.title,
    onSelect: (slug: string) => router.push(`/blog/${slug}`)
  }));

  return { pageOptions, blogOptions, generalOptions };
}
