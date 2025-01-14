'use client';

import { useScroll } from 'framer-motion';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { ScrollContext } from '../providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';

export default function Hero() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (canvas) {
      renderCanvas();
    }
  }, []);

  return (
    <div>
      <h1 className="sr-only">
        Hello I&apos;m Arman Hossen, I&apos;m a software developer, and I love building things for the web.
      </h1>
      <div className="relative z-10 flex h-screen items-center">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-4">
              <h1 className="text-5xl font-bold sm:text-7xl md:text-8xl xl:text-9xl">
                Arman Hossen
              </h1>
              <h2 className="text-3xl font-medium text-gray-700 dark:text-gray-300 sm:text-6xl md:text-6xl xl:text-7xl">
                I build things for the web.
              </h2>
              <Link
                href="/about"
                className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              >
                Read more about me →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <canvas
        id="canvas"
        className="pointer-events-none absolute inset-0 -z-10"
      />
    </div>
  );
}
