"use client";

import Image from "next/image";
import MangaCard from "@/components/cards/mangaCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { MangaCard2 } from "../../../types/home/home";

type MangaTodos = {
  mangas: MangaCard2[];
};

export default function Produtos2({ mangas }: MangaTodos) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 20;
  const totalItems = mangas.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const gridContainerRef = useRef<HTMLDivElement>(null);

  const changePage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      router.push(`/products?page=${pageNumber}`);
    }
  };

  useEffect(() => {
    if (gridContainerRef.current) {
      gridContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = mangas.slice(startIndex, endIndex);

  return (
    <div>
      <div className="w-full flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 h-auto lg:h-screen sticky top-0 flex flex-col justify-between overflow-hidden ">
          <div className="flex flex-col lg:flex-col space-y-4 mb-4">
            <div className="flex flex-col lg:flex-col items-center lg:items-start w-full lg:p-20 p-2">
              <h2 className="text-2xl font-bold font-helveticaBold mb-4 lg:mb-0">
                PRODUTOS
              </h2>
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

        <div
          ref={gridContainerRef}
          className="w-full lg:w-3/4 p-8 flex flex-col overflow-auto max-h-[calc(100vh-32px)]"
        >
          {mangas.length === 0 ? (
            <div className="flex h-full">
              <p className="text-xl font-helvetica text-gray-600">
                Infelizmente não possuímos esse mangá em estoque.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 mb-16">
                {currentItems.map((manga, index) => (
                  <MangaCard
                    key={index}
                    title={manga.title}
                    volume={manga.volume}
                    price={manga.price}
                    image={manga.image}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center mt-8 mb-8">
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => changePage(currentPage - 1)}
                    className={`px-4 py-2 ${
                      currentPage === 1 ? "text-gray-400" : "text-black"
                    } font-helveticaLight`}
                    disabled={currentPage === 1}
                  >
                    {"<"}
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => changePage(index + 1)}
                      className={`px-4 py-2 ${
                        currentPage === index + 1 ? "underline" : ""
                      } text-black font-helveticaLight`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => changePage(currentPage + 1)}
                    className={`px-4 py-2 ${
                      currentPage === totalPages
                        ? "text-gray-400"
                        : "text-black"
                    } font-helveticaLight`}
                    disabled={currentPage === totalPages}
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
