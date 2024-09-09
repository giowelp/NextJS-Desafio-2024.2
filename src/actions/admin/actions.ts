"use server"

import prisma from "@/lib/db"

export async function deleteProduct(id:number){

    const product = await prisma.manga.delete({
        where: {id}
        
    })

    

}

export async function updateProduct(id: number, name: string, volume: number, price: string, description: string, imageUrl: string) {
    try {
      const updatedProduct = await prisma.manga.update({
        where: { id },
        data: { 
          title: name, 
          volume, 
          price, 
          description, 
          image: imageUrl,
        },
      });
      console.log('Produto atualizado no servidor:', updatedProduct); // Log para depuração
      return updatedProduct;
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      throw error;
    }
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