'use client'
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
          const isActive = pathname === `/blogs/${cat}` || (cat === 'All Posts' && pathname === '/blogs');
          return (
            <a
              href={cat === 'All Posts' || `/blogs/${cat}`}
              key={cat}
              className={`px-4 py-2 rounded-full transition duration-200 cursor-pointer
                ${isActive ? 'active' : ''}`}
            >
              {cat}
            </a>
          );
        })}
      </div>
      {blogs.map((blog) => (
        <div key={blog.slug} className="p-4 border rounded bg-white/80">
          <h2 className="text-xl font-bold mb-2">{blog.slug}</h2>
          <p className="text-gray-700 text-sm">{blog.content.slice(0, 120)}{blog.content.length > 120 ? '...' : ''}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;