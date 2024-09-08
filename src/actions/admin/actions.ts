"use server"

import prisma from "@/lib/db"

export async function deleteProduct(id:number){

    const product = await prisma.manga.delete({
        where: {
            id: id
        }
    })

    return product;

}

export async function updateProduct(id:number, title:string, volume:number, price:number, image:string){

    const product = await prisma.manga.update({
        where: {
            id: id
        },
        data: {
            title: title,
            volume: volume,
            price: price,
            image: image
        }
    })

    return product;

}


export async function createProduct(title:string, volume:number, price:number, image:string){

    const product = await prisma.manga.create({
        data: {
            title: title,
            volume: volume,
            price: price,
            image: image
        }
    })

    return product;

}

export async function visualizeProduct(id:number){

    const product = await prisma.manga.findUnique({
        where: {
            id: id
        }
    })

    return product;

}