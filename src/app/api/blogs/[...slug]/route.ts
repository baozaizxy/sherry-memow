import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  try {
    // slug 现在是数组，比如 ['Frontend', 'xxx']
    const slugArr = params.slug;
    const contentDir = path.join(process.cwd(), 'content');
    const filePath = path.join(contentDir, ...slugArr) + '.md';

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    return NextResponse.json({
      slug: slugArr.join('/'),
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