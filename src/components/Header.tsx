'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
    const router = useRouter();
    const links = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About'},
    ]
    
    return (
        <div className="fixed bg-black/50 text-white p-4 top-0 left-0 h-16 w-full shadow-lg z-50" style={{ willChange: "transform"}}>
            <div className="container mx-auto flex justify-between items-center h-full">
                <div className="flex items-center space-x-4" onClick={() => router.push('/')}>
                    <Image src="/logo.png" width={48} height={48} className="w-12 h-12" alt="Logo" />
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
                        className="pl-3 pr-10 py-2 rounded bg-gray-700 bg-opacity-60 text-white focus:outline-none"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
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