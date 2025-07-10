import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function getAllMarkdownFiles(dir, parent = '') {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath, path.join(parent, file)));
    } else if (file.endsWith('.md')) {
      results.push(path.join(parent, file));
    }
  });
  return results;
}

export async function GET() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = getAllMarkdownFiles(contentDir);
  const blogs = files.map((file) => {
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    return {
      slug: file.replace(/\.md$/, ''), // 这里的 slug 会带上目录名，比如 Frontend/xxx
      content,
    };
  });
  return NextResponse.json(blogs);
}
