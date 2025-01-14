import { getBlogPosts } from '../../blog/utils.server';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = await getBlogPosts();
  return NextResponse.json(posts);
}
