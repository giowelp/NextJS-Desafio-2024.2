"use server";

import Image from "next/image";
import HeroSection from "@/components/hero-section/hero-section";
import MangaCard from "@/components/cards/mangaCard";
import MangaCarousel from "@/components/carousel/carousel";
import { EmblaOptionsType } from 'embla-carousel'
import { Manga } from "@prisma/client";
import { getMangaCard } from "@/actions/home/actions";
import { get } from "http";
import getApi from "@/api/get-sessao";
import Mission from "@/components/mission/mission";

type ApiProps = {
    id: number;
    title: string;
    text: string;
}

type ApiData = {
    identities: ApiProps[];
    status: number;
}

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



export default async function Home() {
  const mangas = await getMangaCard()
  return (
    <div className="bg-background space-y-2 w-full min-h-screen">
      <HeroSection />
      
      <MangaCarousel slides={SLIDES} options={OPTIONS} title="Lançamentos" mangas={mangas}/>
      <MangaCarousel slides={SLIDES} options={OPTIONS} title="Mais Vendidos" mangas={mangas}/>

      <Mission />

    </div>
  );
} 