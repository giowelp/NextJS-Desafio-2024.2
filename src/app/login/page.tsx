'use client'

import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center relative justify-center">
      {/* Logo e Título */}
      <div className="flex flex-row items-center space-x-4">
        <Image 
          src="/logo/logo.png"
          alt="Logo da loja"
          width={100}
          height={100}
          className="h-20 w-20"
        />
        <Link href="/" className="text-5xl font-catullBQ text-black">
          VANGUARD
        </Link>
      </div>
      
      {/* Formulário de Login */}
      <div className="rounded-lg px-8 py-6 w-96">
        <h2 className="text-center text-lg font-helveticaBold text-gray-700 mb-6">Login</h2>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="font-helvetica border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500 bg-background"
          />
          <input
            type="password"
            placeholder="Senha"
            className="font-helvetica border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none focus:border-blue-500 bg-background"
          />
          <button className="bg-blue-500 text-white rounded-2xl px-4 py-2 hover:bg-blue-600 transition font-helvetica">
            Entrar
          </button>
        </form>
        {/* Link para Criar Conta */}
        <p className="text-center text-sm text-gray-600 mt-4 font-helvetica">
          Não possui uma conta?{' '}
          <Link href="/signup" className="text-blue-500">
            Crie uma agora. ↗
          </Link>
        </p>
      </div>

      {/* Imagem Musashi no Canto Inferior Esquerdo para Desktop e Centralizada em Mobile */}
      <div className="hidden md:block absolute bottom-0 left-0">
        {/* Imagem visível em desktops no canto inferior esquerdo */}
        <Image
          src="/images/musashi3.png"
          alt="Musashi"
          width={563}
          height={450}
          className="object-contain"
        />
      </div>

      <div className="block md:hidden mt-8 flex justify-center w-full">
        {/* Imagem visível em mobile no final */}
        <Image
          src="/images/musashi3.png"
          alt="Musashi"
          width={563}
          height={450}
          className="object-contain"
        />
      </div>
    </div>
  );
}
