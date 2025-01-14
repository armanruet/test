'use client';

import { Command } from 'cmdk';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import usePaletteOptions from './usePaletteOptions';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { pageOptions, blogOptions, generalOptions } = usePaletteOptions();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog
          open={open}
          onOpenChange={setOpen}
          label="Global Command Menu"
          className="fixed top-[20vh] left-1/2 z-50 w-full max-w-[640px] -translate-x-1/2 transform rounded-xl 
            border bg-white p-4 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        >
          <Command.Input
            placeholder="Search for pages and posts..."
            className="w-full border-none bg-transparent text-lg outline-none 
              placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />

          <Command.List className="mt-4 max-h-[60vh] overflow-y-auto">
            <Command.Group heading="General">
              {generalOptions.map((option) => (
                <Command.Item 
                  key={option.id}
                  value={option.name}
                  onSelect={() => option.onSelect(option.id)}
                  className="flex items-center gap-2 p-2"
                >
                  {option.icon}
                  <span>{option.name}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Pages">
              {pageOptions.map((option) => (
                <Command.Item 
                  key={option.id}
                  value={option.name}
                  onSelect={() => option.onSelect(option.id)}
                  className="flex items-center gap-2 p-2"
                >
                  {option.icon}
                  <span>{option.name}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Blog Posts">
              {blogOptions.map((option) => (
                <Command.Item 
                  key={option.id}
                  value={option.name}
                  onSelect={() => option.onSelect(option.id)}
                  className="p-2"
                >
                  {option.name}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
