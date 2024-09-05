"use client"

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import MangaCard from "@/components/cards/mangaCard";

import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './arrow-buttons'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  title: string
}

const MangaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, title } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="w-10/12 mx-auto">
        <h1 className="font-helveticaRounded ml-14 text-2xl">{title}</h1>
        <section className="flex items-center">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
            {slides.map((index) => (
                <div className="min-w-0 shrink-0 grow-0 basis-1/5 py-6 flex justify-center" key={index}>
                    <MangaCard image="/images/vagabondvol1.png" title="VAGABOND" price="R$ 37.90" volume="Vol. 1" />
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
