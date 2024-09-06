"use client";

import Image from "next/image";
import { Eye, Edit2, Trash2, Plus, Filter, SortAsc } from "lucide-react";
import { useState, useEffect } from "react";

export default function AdminPage() {
  const itemsPerPage = 10; // Número de itens por página
  const totalItems = 30; // Total de itens (exemplo, ajuste conforme necessário)
  const totalPages = Math.ceil(totalItems / itemsPerPage); // Total de páginas

  // Estado da página atual
  const [currentPage, setCurrentPage] = useState(1);

  // Função para mudar de página
  const changePage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber); // Atualiza o estado da página
    }
  };

  // Efeito para rolar a página para o topo ao mudar de página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Rola suavemente para o topo da página
  }, [currentPage]);

  // Dados de exemplo para os produtos
  const products = [
    { id: 1, name: "VAGABOND", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 2, name: "BLACK CLOVER", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 3, name: "BERSERK", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 4, name: "THE CLIMBER", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 5, name: "MONSTER", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 6, name: "VAGABOND", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 7, name: "BLACK CLOVER", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 8, name: "BERSERK", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 9, name: "THE CLIMBER", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 10, name: "MONSTER", volume: 1, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 11, name: "VAGABOND", volume: 2, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 12, name: "BLACK CLOVER", volume: 2, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 13, name: "BERSERK", volume: 2, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 14, name: "THE CLIMBER", volume: 2, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 15, name: "MONSTER", volume: 2, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 16, name: "VAGABOND", volume: 3, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 17, name: "BLACK CLOVER", volume: 3, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 18, name: "BERSERK", volume: 3, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 19, name: "THE CLIMBER", volume: 3, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
    { id: 20, name: "MONSTER", volume: 3, price: "R$ 37,90", description: "Em 1600 d.C., o Japão passa por um dos períodos mais..." },
  ];

  // Calcular os itens que serão exibidos na página atual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex); // Filtra os itens da página atual

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-background p-8 relative">
      {/* Contêiner flexível para barra lateral e tabela */}
      <div className="flex w-full max-w-[1600px]">
        {/* Barra lateral */}
        <aside className="w-1/5 sticky top-0 flex flex-col justify-start p-6 space-y-4">
          <button className="text-lg flex items-center space-x-2">
            <Plus className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Adicionar</span>
          </button>
          <button className="text-lg flex items-center space-x-2">
            <SortAsc className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Ordenar</span>
          </button>
          <button className="text-lg flex items-center space-x-2">
            <Filter className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Filtrar</span>
          </button>
          <button className="text-lg flex items-center space-x-2">
            <Trash2 className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Excluir</span>
          </button>
        </aside>

        {/* Tabela de produtos */}
        <div className="w-4/5 ml-4 relative overflow-hidden rounded-3xl shadow-lg bg-white p-6">
          <table className="min-w-full border-collapse">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  CAPA
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  NOME
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  VOLUME
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  PREÇO
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  DESCRIÇÃO
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* Linha de produto */}
              {currentItems.map((product, index) => (
                <tr key={index} className="border-b border-transparent">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button className="text-black mr-3">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-black mr-3">
                        <Eye className="w-4 h-4" />
                      </button>
                      <Image
                        src="/images/vagabondvol1.png"
                        alt={`Capa ${product.name}`}
                        width={40}
                        height={60}
                        className="rounded"
                      />
                    </div>
                  </td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">{product.volume}</td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">{product.price}</td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">
                    {product.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Imagem do Musashi no fundo */}
      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src="/images/musashi5.png"
          alt="Imagem Musashi"
          width={350}
          height={490}
          className="object-contain"
        />
      </div>

      {/* Paginação */}
      <div className="flex justify-center items-center mt-8 z-10">
        <button
          onClick={() => changePage(currentPage - 1)}
          className={`px-4 py-2 ${currentPage === 1 ? "text-gray-400" : "text-black"}`}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={`px-4 py-2 ${currentPage === index + 1 ? "underline" : ""} text-black`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          className={`px-4 py-2 ${currentPage === totalPages ? "text-gray-400" : "text-black"}`}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
