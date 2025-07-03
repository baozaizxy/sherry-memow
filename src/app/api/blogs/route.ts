import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  const blogs = files.map((file) => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    return {
      slug: file.replace(/\\.md$/, ''),
      content,
    };
  });
  return NextResponse.json(blogs);
}
