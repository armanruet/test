import { getPostFromSlug } from '../utils.server';
import { MDXClient } from '../../components/mdx-client';
import { Subscribe } from '../../components/blog/Subscribe';
import { Comments } from '../../components/blog/Comments';
import '../styles/code-theme.css';

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getPostFromSlug(params.slug);

  return (
    <article className="mx-auto max-w-[900px] px-4 py-12">
      <header className="mb-24">
        <h1
          className="text-[48px] font-black text-center leading-[1.1] mb-16 tracking-tight 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-gray-900 to-gray-600 
          dark:from-gray-100 dark:to-gray-400"
        >
          {metadata.title}
        </h1>
      </header>

      <div
        className="prose prose-lg mx-auto max-w-none
        dark:prose-invert
        prose-headings:font-bold prose-headings:text-[32px] prose-headings:leading-tight 
        prose-headings:mt-16 prose-headings:mb-8
        prose-headings:text-gray-900 dark:prose-headings:text-gray-100
        
        prose-p:text-justify prose-p:text-[20px] prose-p:leading-[1.8] prose-p:mb-8 
        prose-p:tracking-normal prose-p:text-gray-700 dark:prose-p:text-gray-300
        
        prose-strong:font-bold prose-strong:text-gray-900 dark:prose-strong:text-gray-50
        
        prose-a:text-blue-600 dark:prose-a:text-blue-400 
        prose-a:no-underline hover:prose-a:underline
        
        prose-ul:my-8 prose-li:text-[20px] prose-li:mb-2
        prose-li:text-gray-700 dark:prose-li:text-gray-300
        
        prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900/70
        prose-pre:my-8 prose-pre:p-4 
        prose-pre:rounded-xl
        prose-pre:border dark:prose-pre:border-gray-800
        prose-pre:shadow-md hover:prose-pre:shadow-lg
        prose-pre:transition-all prose-pre:duration-300
        prose-pre:backdrop-blur-sm
        prose-pre:overflow-x-auto
        
        prose-code:font-mono prose-code:text-[15px]
        prose-code:text-blue-600 dark:prose-code:text-blue-400
        prose-code:bg-blue-50/50 dark:prose-code:bg-blue-900/20
        prose-code:px-1.5 prose-code:py-0.5
        prose-code:rounded-md
        prose-code:border dark:prose-code:border-gray-800
        prose-code:before:content-[''] prose-code:after:content-['']
        
        [&_pre_code]:grid [&_pre_code]:gap-0
        [&_pre_code_.highlight]:bg-blue-500/10 dark:[&_pre_code_.highlight]:bg-blue-500/20
        [&_pre_code_.line-number]:border-r [&_pre_code_.line-number]:border-gray-200
        [&_pre_code_.line-number]:pr-4 [&_pre_code_.line-number]:text-gray-500
        [&_pre_code_.line]:px-4 [&_pre_code_.line]:py-0.5
        
        [&_pre]:relative
        [&_pre_.language-badge]:absolute
        [&_pre_.language-badge]:right-4 [&_pre_.language-badge]:top-4
        [&_pre_.language-badge]:text-xs [&_pre_.language-badge]:font-mono
        [&_pre_.language-badge]:px-2 [&_pre_.language-badge]:py-1
        [&_pre_.language-badge]:rounded-md
        [&_pre_.language-badge]:bg-blue-500/10 dark:[&_pre_.language-badge]:bg-blue-500/20
        [&_pre_.language-badge]:text-blue-700 dark:[&_pre_.language-badge]:text-blue-300
        
        prose-pre:relative prose-pre:group
        prose-pre:backdrop-blur-sm
        
        prose-code:font-mono prose-code:text-[15px]
        prose-code:before:content-[''] prose-code:after:content-['']
        
        [&_pre_code]:grid [&_pre_code]:gap-0
        [&_pre_code_.line]:relative [&_pre_code_.line]:px-4 [&_pre_code_.line]:py-0.5"
      >
        <MDXClient source={content} />
      </div>

      <div className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800">
        <Subscribe />
        <Comments />
      </div>
    </article>
  );
}
