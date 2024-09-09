import { Search as SearchIcon, X as CloseIcon } from 'lucide-react';
import { useRouter } from 'next/navigation'; 
import { useState } from 'react';

export default function Search() {
  const router = useRouter(); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [isSearching, setIsSearching] = useState(false); 

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`); 
    }
  };

  const handleIconClick = () => {
    if (isSearching) {
      
      setSearchQuery('');
      setIsSearching(false);
    } else {
      
      setIsSearching(true);
    }
  };

  return (
    <form className="flex items-center" autoComplete="off" onSubmit={handleSearch}>
      <div className="relative flex w-full items-center">
        {isSearching ? (
          <CloseIcon
            className="w-7 h-7 absolute text-black/50 left-4 cursor-pointer"
            onClick={handleIconClick}
          />
        ) : (
          <SearchIcon
            className="w-7 h-7 absolute text-black/50 left-4 cursor-pointer"
            onClick={handleIconClick}
          />
        )}
        <input
          id="search"
          name="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full rounded-xl px-16 py-6 text-black bg-white border border-gray-300 transition-all duration-300 ${
            isSearching ? 'block' : 'hidden'
          }`}
          placeholder="Pesquisar..."
        />
        <button
          type="submit"
          className={`w-7 h-7 absolute right-4 text-black/50 transition-all duration-300 ${
            isSearching ? 'block' : 'hidden'
          }`}
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}
