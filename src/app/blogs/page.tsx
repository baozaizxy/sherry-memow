'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const category = ['All Posts', 'Frontend', 'Server', 'Database', 'Devops', 'AI', 'Other'];

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const pathname = usePathname();

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

  return (
    <div className="space-y-6 pt-20">
      <div className="flex flex-row gap-2">
        {category.map((cat) => {
          const isActive =
            pathname === `/blogs/${cat}` || (cat === 'All Posts' && pathname === '/blogs');
          return (
            <a
              href={cat === 'All Posts' || `/blogs/${cat}`}
              key={cat}
              className={`cursor-pointer rounded-full px-4 py-2 transition duration-200 ${isActive ? 'active' : ''}`}
            >
              {cat}
            </a>
          );
        })}
      </div>
      {blogs.map((blog) => (
        <div key={blog.slug} className="rounded border bg-white/80 p-4">
          <h2 className="mb-2 text-xl font-bold">{blog.slug}</h2>
          <p className="text-sm text-gray-700">
            {blog.content.slice(0, 120)}
            {blog.content.length > 120 ? '...' : ''}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
