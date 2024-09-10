"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Search as SearchIcon,
  X as CloseIcon,
  Phone,
  ShoppingCart,
  Menu,
} from "lucide-react";
import { useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Produtos" },
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-background sticky top-0 z-20 w-full pb-6 px-4 pt-10">
      <div className="flex justify-center items-center mb-4 lg:hidden">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src={"/logo/logo.png"}
            alt="Logo da loja"
            width={50}
            height={50}
            className="h-10 w-10"
          />
          <span className="text-black font-catullBQ text-2xl">VANGUARD</span>
        </Link>
      </div>

      <div className="flex items-center justify-between w-full md:w-10/12 mx-auto">
        <Link
          href="/"
          className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 space-x-4"
        >
          <Image
            src={"/logo/logo.png"}
            alt="Logo da loja"
            width={50}
            height={50}
            className="h-10 w-10"
          />
          <span className="text-black font-catullBQ text-2xl">VANGUARD</span>
        </Link>

        <nav className="flex items-center space-x-4 lg:space-x-8 flex-grow">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <span className="text-lg text-black font-helveticaLight">
                {link.label}
              </span>
            </Link>
          ))}

          <div className="relative flex items-center">
            {isSearchOpen && (
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full max-w-xs  border-b font-helveticaLight bg-background border-black focus:outline-none text-lg"
                  placeholder="Pesquisar..."
                  style={{ marginLeft: "10px" }}
                />
                <button type="submit" className="ml-2">
                  <SearchIcon className="w-6 h-6 text-black cursor-pointer" />
                </button>
              </form>
            )}

            <button onClick={toggleSearch} className="ml-4">
              {isSearchOpen ? (
                <CloseIcon className="w-6 h-6 text-black cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl" />
              ) : (
                <SearchIcon className="w-6 h-6 text-black cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl" />
              )}
            </button>
          </div>
        </nav>

        <div
          className={`flex items-center space-x-6 font-helveticaLight ${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          <Link href="/login" className="text-black">
            Login
          </Link>
          <Link href="/contact" className="text-black">
            <Phone className="w-6 h-6 text-black cursor-pointer" />
          </Link >
          <Link href="/admin" className="text-black">
          <ShoppingCart className="w-6 h-6 text-black cursor-pointer" />
          </Link>
        </div>

        <button className="lg:hidden ml-4" onClick={toggleMenu}>
          <Menu className="w-6 h-6 text-black cursor-pointer" />
        </button>
      </div>
    </header>
  );
}
