import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

const Header = () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About'},
    ]
    
    return (
        <div className="fixed bg-black/50 text-white p-4 top-0 left-0 w-full h-80 shadow-md z-50" style={{ willChange: "transform" }}>
            <div className="container mx-auto flex justify-between items-center">
                <Image src={logo} className='h-4/5 transform ' alt="Logo" />
                <ul className="flex items-center ml-auto">
                    {links.map(({ href, label }) => (
                        <li key={href} className="px-4 text-2xl text-gray-500 hover:text-gray-700">
                            <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-2 pr-8 py-1 rounded bg-gray-600 bg-opacity-40 text-white focus:outline-none"
                    />
                    <button className="absolute right-0 top-0 mt-1 mr-2">
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