'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import removeMarkdown from 'remove-markdown';
import { useSearchParams } from 'next/navigation';


const BlogList = () => {
  const [blogs, setBlogs] = useState<{ slug: string; content: string }[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All Posts';
  const category = ['All Posts', 'Frontend', 'Server', 'Database', 'Devops', 'AI', 'Other'];

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/blogs');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const filteredPosts = currentCategory === 'All Posts'
    ? blogs
    : blogs.filter(blog => blog.slug.includes(currentCategory));

  return (
    <div className="space-y-6 pt-20">
      <div className="flex flex-row gap-2" style={{ marginTop: '100px' }}>
        {category.map((cat) => {
          const isActive = currentCategory === cat;
          return (
            <a
              href={cat === 'All Posts' ? '/blogs' : `/blogs?category=${cat}`}
              key={cat}
              className={`px-4 py-2 rounded-full transition duration-200 cursor-pointer
                ${isActive ? 'active' : ''}`}
            >
              {cat}
            </a>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPosts.map((blog) => (
          <div
            key={blog.slug}
            className="p-4 border border-transparent rounded bg-[#3C3C3C] transition duration-200 hover:bg-[#BBBBBB] cursor-pointer"
            onClick={() => router.push(`/blogs/${blog.slug}`)}
          >
            <h2 className="text-xl font-bold mb-2">
              {blog.slug.split('/').pop()}
            </h2>
            <p className="text-700 text-sm">{removeMarkdown(blog.content).slice(0, 300)}{removeMarkdown(blog.content).length > 300 ? '...' : ''}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
