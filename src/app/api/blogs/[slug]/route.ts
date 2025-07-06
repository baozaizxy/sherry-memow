import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const contentDir = path.join(process.cwd(), 'content');
    
    // 移除.md扩展名（如果存在）
    const cleanSlug = slug.replace(/\.md$/, '');
    const filePath = path.join(contentDir, `${cleanSlug}.md`);
    
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }
    
    // 读取文件内容
    const content = fs.readFileSync(filePath, 'utf-8');
    
    return NextResponse.json({
      slug: cleanSlug,
      content,
    });
  } catch (error) {
    console.error('Error reading blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 