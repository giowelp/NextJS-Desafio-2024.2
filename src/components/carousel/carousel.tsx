"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import MangaCard from "@/components/cards/mangaCard";
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './arrow-buttons'
import { MangaCard2 } from '../../../types/home/home';



type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  title: string
  mangas: MangaCard2[]
}

const MangaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, title, mangas } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="font-helveticaBold ml-14 text-2xl uppercase">{title}</h1>
      <section className="flex items-center">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        {/* Contêiner do Carrossel com Máscara de Fade Inline */}
        <div
          className="overflow-hidden relative"
          ref={emblaRef}
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <div className="flex">
            {mangas.map((manga, index) => (
              <div className="min-w-0 shrink-0 grow-0 basis-1/6 py-6 flex justify-center" key={index}>
                <MangaCard image={manga.image} title={manga.title} price={manga.price} volume={manga.volume} />
              </div>
            ))}
          </div>
        </div>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </section>
    </div>
  )
}

export default MangaCarousel
