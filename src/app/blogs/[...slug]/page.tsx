'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

const Blog = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const cleanSlug = Array.isArray(slug) ? slug.join('/') : slug.replace(/\.md$/, '');
        const res = await fetch(`/api/blogs/${cleanSlug}`);
        if (res.ok) {
          const data = await res.json();
          setContent(data.content);
        } else {
          setContent('未找到该文章');
        }
      } catch {
        setContent('加载失败');
      }
    })();
  }, [slug]);

  return (
    <div className="prose prose-invert mx-auto py-10" style={{ marginTop: '100px' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Blog;