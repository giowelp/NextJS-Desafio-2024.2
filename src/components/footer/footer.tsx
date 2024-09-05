// components/Footer.tsx
import Image from 'next/image';
import { Instagram, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background w-full py-4 mt-24 flex flex-col items-center">
      {/* Container*/}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-10/12 mx-auto md:px-0 px-4 md:space-x-6 h-auto ">
        
        {/* Logo*/}
        <div className="flex items-center flex-1 mb-4 md:mb-0 justify-center md:justify-start">
          <Image 
            src="/logo/logo.png" 
            alt="Logo Vanguard" 
            width={150} 
            height={150} 
            className="h-40 w-40"
          />
        </div>
        
        {/* Redes Sociais */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center flex-1 md:space-x-20">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-black font-helveticaBold text-2xl mb-2 whitespace-nowrap">Contato</h2>
            <p className="text-gray-500 text-sm font-helveticaLight">Juiz de Fora, MG</p>
            <p className="text-gray-500 text-sm font-helveticaLight">(32) 99999-9999</p>
            <p className="text-gray-500 text-sm font-helveticaLight">contato@vanguard.com.br</p>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-black font-helveticaBold text-2xl mb-2 w-full whitespace-nowrap">Redes Sociais</h2>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-black cursor-pointer" />
              <X className="w-6 h-6 text-black cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Musashi */}
        <div className="flex items-center flex-1 h-full justify-center md:justify-end">
          <Image 
            src="/images/musashi.png" 
            alt="Musashi Image" 
            width={150} 
            height={150} 
            className="h-full w-auto"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-3">
        <p className="text-black text-sm font-helveticaLight">© VANGUARD, 2024, CODEJR</p>
      </div>
    </footer>
  );
}
