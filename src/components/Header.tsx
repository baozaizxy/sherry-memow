import Link from 'next/link';

const Header = () => {
    const links = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/projects', label: 'Projects' },
        { href: '/about', label: 'About'},
    ]
    
    return (
        <div className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">Sherry Blog</div>
                <ul className="flex items-center">
                    {links.map(({ href, label }) => (
                        <li key={href} className="px-4 text-2xl">
                        <Link href={href}>{label}</Link>
                        </li>
                    ))}
                </ul>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="pl-2 pr-8 py-1 rounded bg-gray-700 text-white focus:outline-none"
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