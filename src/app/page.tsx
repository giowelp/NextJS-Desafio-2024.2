import Image from "next/image";
import HeroSection from "@/components/hero-section/hero-section";
import MangaCard from "@/components/cards/mangaCard";
import MangaCarousel from "@/components/carousel/carousel";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div className="bg-background space-y-2 w-full min-h-screen">
      <HeroSection />
      
      <MangaCarousel slides={SLIDES} options={OPTIONS} title="Lançamentos"/>
      <MangaCarousel slides={SLIDES} options={OPTIONS} title="Mais Vendidos"/>
    </div>
  );
} 