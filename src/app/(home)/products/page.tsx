"use server";

import Produtos2 from "@/components/products/products";
import { getMangaCard2 } from "@/actions/home/actions";

export default async function Produtos({ searchParams }: { searchParams: { search?: string } }) {
  const mangas = await getMangaCard2();
  const searchQuery = searchParams.search?.toLowerCase() || ''; // Obtenha o termo de pesquisa dos parâmetros da URL

  // Filtra os mangas com base no termo de pesquisa
  const filteredMangas = mangas.filter((manga) =>
    manga.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="w-full flex flex-col bg-background min-h-screen">
      <Produtos2 mangas={filteredMangas} />
    </div>
  );
}
