'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const links = [
    {href: '/products', label: 'Produtos'},
    {href: '/admin', label: 'admin'},
];

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleNav = () => setIsNavOpen(!isNavOpen)
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    const toggleNavSearch = () => {
        if(isNavOpen){
            toggleSearch()
        } else {
            toggleNav()
        }
    }


    return(
        <header className=" bg-background sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' className="flex gap-4 items-center">
                    <Image 
                    src={'/logo.png'} 
                    alt="Logo da loja" 
                    width={904} 
                    height={904}
                    className="h-20 w-20 rounded-xl"
                    />
                    <span className="text-black font-helvetica hidden md:block text-3xl">|</span>
                    <span className="text-black font-helvetica hidden md:block text-3xl">VANGUARD</span>
                </Link>
            </div>


        </header>
    )
}