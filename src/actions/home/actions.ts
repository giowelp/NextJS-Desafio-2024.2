"use server"

import prisma from "@/lib/db"



// model Manga {
//     id          Int       @id @default(autoincrement())
//     title        String
//     description String?
//     price       Float
//     image       String     
//     volume      Int
//     createdAt   DateTime  @default(now())
//   }
  


export async function getMangaCard() {

    const mangas = await prisma.manga.findMany({
        select: {
            title: true,
            volume: true,
            image: true,
            price: true,
        },
        take: 20

    }) 

    return mangas;

}



export async function getMangaCard2() {

    const mangas = await prisma.manga.findMany({
        select: {
            title: true,
            volume: true,
            image: true,
            price: true,
        },
        

    }) 
    

    return mangas;

}