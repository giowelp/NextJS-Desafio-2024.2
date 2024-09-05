import Image from 'next/image';
import { ShoppingCart, Plus } from 'lucide-react';

export default function ProductCard() {
  return (
    <div className="bg-white rounded-[13%] shadow-lg p-4 flex flex-col items-center" style={{ width: '100%', maxWidth: '234px', height: '100%', maxHeight: '332px' }}>
      {/* Imagem do Produto */}
      <div className="relative w-full mb-2 mt-2" style={{ height: '162px' }}>
        <Image 
          src="/images/vagabondvol1.png" 
          alt="Vagabond Volume 1"
          fill
          className="rounded-lg object-contain"
        />
      </div>

      {/* Informações do Produto */}
      <div className="text-center flex-grow mb-2">
        <h2 className="text-base text-black mb-1 font-helveticaRounded">VAGABOND</h2>
        <p className="text-gray-500 text-xs mb-1 font-helvetica">Vol. 1</p>
        <p className="text-lg text-black font-helveticaRounded">R$ 37,90</p>
      </div>

      {/* Botões de Ação */}
      <div className="flex justify-center items-center w-full px-4 mt-2 space-x-4">
        {/* Botão de Adicionar ao Carrinho */}
        <button className="flex items-center justify-center bg-gray-900 text-white rounded-full w-28 h-10 hover:bg-gray-700 transition">
          <Plus className="w-4 h-4 mr-1" />
          <ShoppingCart className="w-4 h-4" />
        </button>
        
        {/* Botão de Comprar */}
        <button className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition text-xs w-28 h-10 font-helveticaRounded">
          COMPRAR
        </button>
      </div>
    </div>
  );
}
