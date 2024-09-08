"use client";

import Image from "next/image";
import MangaCard from "@/components/cards/mangaCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { MangaCard2 } from "../../../types/home/home";

type MangaTodos = {
    mangas: MangaCard2[]
}

export default function Produtos2({ mangas }: MangaTodos) {




    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1; // Obter a página atual a partir dos parâmetros da URL
    const itemsPerPage = 20; // Número de itens por página
    const totalItems = mangas.length; // Total de itens (exemplo, ajuste conforme necessário)
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Total de páginas

    const gridContainerRef = useRef<HTMLDivElement>(null); // Referência ao contêiner da grade

    // Função para mudar de página e atualizar a URL
    const changePage = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            router.push(`/products?page=${pageNumber}`); // Atualiza a URL e recarrega a página
        }
    };

    // Efeito para rolar a grade de produtos para o topo ao mudar de página
    useEffect(() => {
        if (gridContainerRef.current) {
            gridContainerRef.current.scrollTo({ top: 0, behavior: "smooth" }); // Rolar para o topo suavemente
        }
    }, [currentPage]); // Dependência de página atual

    // Calcular os itens que serão exibidos na página atual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = mangas
        .map((manga, index) => (
            <MangaCard
                key={index}
                title={manga.title}
                volume={manga.volume}
                price={manga.price}
                image={manga.image}
            />
        ))
        .slice(startIndex, endIndex);

    return (
        <div>
            {/* Contêiner Flexível para o Menu Lateral e Grid */}
            <div className="w-full flex flex-col lg:flex-row">
                {/* Menu Lateral Fixo */}
                <aside className="w-full lg:w-1/4 h-auto lg:h-screen sticky top-0 flex flex-col justify-between overflow-hidden ">
                    {/* Contêiner fixo com o título "PRODUTOS" e Botões */}
                    <div className="flex flex-col lg:flex-col space-y-4 mb-4">
                        <div className="flex flex-col lg:flex-col items-center lg:items-start w-full lg:p-20 p-2">
                            <h2 className="text-2xl font-bold font-helveticaBold mb-4 lg:mb-0">PRODUTOS</h2>
                            <div className="flex lg:flex-col flex-row lg:space-x-0 space-x-4">
                                <button className="text-lg flex items-center space-x-2">
                                    <span className="text-gray-600">≣</span>
                                    <span className="font-helveticaLight">Filtrar</span>
                                </button>
                                <button className="text-lg flex items-center space-x-2">
                                    <span className="text-gray-600">⇅</span>
                                    <span className="font-helveticaLight">Ordenar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Imagem no canto inferior esquerdo espelhada */}
                    <div className="hidden lg:flex justify-start items-end py-20">
                        <Image
                            src="/images/musashi2.png"
                            alt="Imagem Musashi"
                            width={350}
                            height={350}
                            className="object-contain transform scale-x-[-1]"
                        />
                    </div>
                </aside>

                {/* Contêiner Principal para Grid */}
                <div ref={gridContainerRef} className="w-full lg:w-3/4 p-8 flex flex-col overflow-auto max-h-[calc(100vh-32px)]">
                    {/* Grid de Produtos */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 mb-16">
                        {currentItems}
                    </div>
                </div>
            </div>

            {/* Contêiner da Barra de Paginação Centralizada na Parte Inferior */}
            <div className="flex justify-center items-center mt-8 mb-8">
                <div className="flex justify-center items-center space-x-4">
                    <button
                        onClick={() => changePage(currentPage - 1)}
                        className={`px-4 py-2 ${currentPage === 1 ? "text-gray-400" : "text-black"} font-helveticaLight`}
                        disabled={currentPage === 1}
                    >
                        {"<"}
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => changePage(index + 1)}
                            className={`px-4 py-2 ${currentPage === index + 1 ? "underline" : ""} text-black font-helveticaLight`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => changePage(currentPage + 1)}
                        className={`px-4 py-2 ${currentPage === totalPages ? "text-gray-400" : "text-black"} font-helveticaLight`}
                        disabled={currentPage === totalPages}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
}
