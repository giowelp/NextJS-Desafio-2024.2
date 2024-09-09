import Image from 'next/image';
import { ShoppingCart, Plus } from 'lucide-react';

type ProductCardProps = {
  title: string;
  volume: string;
  price: string;
  image: string;
};

export default function ProductCard({ title, volume, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[13%] shadow-lg p-4 flex flex-col items-center w-full max-w-[234px] h-full max-h-[332px] mb-10">
      {/* Imagem do Produto */}
      <div className="relative w-full mb-2 mt-2 h-[162px]">
        <Image 
          src={image}
          alt={title}
          fill
          className="rounded-lg object-contain"
        />
      </div>

      {/* Informações do Produto */}
      <div className="text-center flex-grow mb-2">
        <h2 className="text-base text-black uppercase mb-1 font-helveticaRounded">{title}</h2>
        <p className="text-gray-500 text-xs mb-1 font-helvetica">Vol. {volume}</p>
        <p className="text-lg text-black font-helveticaRounded">R$ {price}</p>
      </div>

      {/* Botões de Ação */}
      <div className="flex justify-center items-center w-full px-2 sm:px-4 mt-2 space-x-2 sm:space-x-4">
        {/* Botão de Adicionar ao Carrinho */}
        <button className="flex items-center justify-center bg-gray-900 text-white rounded-full w-20 sm:w-24 md:w-28 h-8 sm:h-9 md:h-10 hover:bg-gray-700 transition">
          <Plus className="w-4 h-4 mr-1" />
          <ShoppingCart className="w-4 h-4" />
        </button>
        
        {/* Botão de Comprar */}
        <button className="bg-blue-500 text-white px-2 sm:px-4 py-1 rounded-full hover:bg-blue-600 transition text-xs w-20 sm:w-24 md:w-28 h-8 sm:h-9 md:h-10 font-helveticaRounded">
          COMPRAR
        </button>
      </div>
    </div>
  );
}
