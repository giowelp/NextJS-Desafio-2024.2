'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Search as SearchIcon, X, Phone, ShoppingCart } from 'lucide-react';

const links = [
    {href: '/home', label: 'Home'},
    {href: '/products', label: 'Produtos'},
];

export default function Header(){
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return(
        <header className="bg-background sticky top-0 z-20 mx-auto w-full pb-6 px-4 pt-10">
            <div className="flex items-center justify-between w-full md:w-10/12 mx-auto">
                
                
                <nav className="flex items-center space-x-8">
                    {links.map((link, index) => (
                        <Link href={link.href} key={index}>
                            <span className="text-lg text-black font-helveticaLight">{link.label}</span>
                        </Link>
                    ))}
                    <button onClick={toggleSearch} className="flex items-center">
                        {isSearchOpen ? (
                            <X className="w-6 h-6 text-black cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl" />
                        ) : (
                            <SearchIcon className="w-6 h-6 text-black cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl" />
                        )}
                    </button>
                </nav>

                
                <div className="flex items-center space-x-6">
                    <Link href="/login" className="text-black">
                        Login
                    </Link>
                    <Phone className="w-6 h-6 text-black cursor-pointer" />
                    <ShoppingCart className="w-6 h-6 text-black cursor-pointer" />
                </div>

                
                <Link href='/' className="flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-4">
                    <Image 
                        src={'/logo/logo.png'} 
                        alt="Logo da loja" 
                        width={50} 
                        height={50}
                        className="h-10 w-10"
                    />
                    <span className="text-black font-catullBQ text-2xl ml-2">VANGUARD</span>
                </Link>
                
            </div>
        </header>
    );
}
