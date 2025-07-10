'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const links = [
    { href: '/', label: 'Home' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/profile', label: 'Profile' },
  ];

  return (
    <div
      className="fixed left-0 top-0 z-50 h-16 w-full bg-black p-4 text-white shadow-lg"
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto flex h-full items-center justify-between">
        <div className="flex items-center space-x-4" onClick={() => router.push('/')}>
          <Image src="/logo.png" width={48} height={48} className="h-12 w-12" alt="Logo" />
        </div>
        <ul className="flex items-center space-x-6">
          {links.map(({ href, label }) => (
            <li key={href} className="text-lg text-gray-300 hover:text-white">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded bg-gray-700 bg-opacity-60 py-2 pl-3 pr-10 text-white focus:outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 transform">
            <svg
              className="h-4 w-4 fill-current text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 111.41-1.41l5.38 5.38-1.41 1.41-5.38-5.38zM8 14a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
