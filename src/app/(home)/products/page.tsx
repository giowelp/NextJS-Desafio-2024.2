"use server";

import Image from "next/image";
import MangaCard from "@/components/cards/mangaCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Produtos2 from "@/components/products/products";
import { getMangaCard2 } from "@/actions/home/actions";



export default async function Produtos() {
 
    const mangas = await getMangaCard2();

  return (
    <div className="w-full flex flex-col bg-background min-h-screen">
      <Produtos2 mangas={mangas}/>
    </div>
  );
}
