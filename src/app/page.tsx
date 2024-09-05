import Image from "next/image";
import HeroSection from "@/components/hero-section/hero-section";
import MangaCard from "@/components/cards/mangaCard";

export default function Home() {
  return (
    <div className="bg-background space-y-2 w-full min-h-screen">
      <HeroSection />
      <MangaCard />
    </div>
  );
} 