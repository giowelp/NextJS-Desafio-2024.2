// pages/contact.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Contato() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-background px-4 lg:px-16">
      {/* Texto de Contato */}
      <div className="max-w-md text-center lg:text-left mb-8 lg:mb-0 lg:mr-16">
        <h2 className="text-2xl font-bold font-helveticaBold mb-4">CONTATO</h2>
        <p className="font-helvetica mb-4">
          Você pode solucionar dúvidas, efetuar compras, enviar um feedback ou agendar trocas via SAC da Vanguard.
        </p>
        <p className="font-helvetica mb-6">
          Clique nos links abaixo e converse conosco!
        </p>

        {/* Links de Contato */}
        <div className="flex justify-center lg:justify-start space-x-6">
          <Link href="" target="_blank" rel="noopener noreferrer">
            <Phone className="w-8 h-8 text-black hover:text-gray-600 transition" />
          </Link>
          <Link href="mailto:contato@vanguard.com" target="_blank" rel="noopener noreferrer">
            <Mail className="w-8 h-8 text-black hover:text-gray-600 transition" />
          </Link>
        </div>
      </div>

      {/* Imagem Musashi */}
      <div className="flex justify-center lg:block">
        <Image 
          src="/images/musashi4.png" 
          alt="Imagem Musashi" 
          width={564} 
          height={906} 
          className="object-contain"
        />
      </div>
    </div>
  );
}
