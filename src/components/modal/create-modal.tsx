import React, { useState } from 'react';
import Image from 'next/image';
import { createProduct } from '@/actions/admin/actions'; 

interface Product {
  id: number;
  name: string;
  volume: number;
  price: string;
  description: string;
  imageUrl: string;
}

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (newProduct: Product) => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, onCreate }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    name: '',
    volume: 1,
    price: '',
    description: '',
    imageUrl: '',
  });

  const handleCreate = async () => {
    if (newProduct.name && newProduct.price && newProduct.description && newProduct.imageUrl) {
      try {
        
        const createdProduct = await createProduct(
          newProduct.name,
          newProduct.volume,
          parseFloat(newProduct.price.replace('R$', '').trim()), 
          newProduct.imageUrl
        );
        onCreate(createdProduct); 
        onClose(); 
      } catch (error) {
        console.error('Erro ao criar o produto:', error); 
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <form className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Criar Novo Produto</h2>
        <div className="mb-4">
          <label className="block mb-2">Nome</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Volume</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={newProduct.volume}
            onChange={(e) => setNewProduct({ ...newProduct, volume: Number(e.target.value) })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Preço</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Descrição</label>
          <textarea
            className="w-full p-2 border rounded"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Imagem</label>
          <input type="file" className="w-full p-2" onChange={handleImageUpload} />
        </div>
        {newProduct.imageUrl && (
          <div className="mb-4">
            <Image src={newProduct.imageUrl} alt="Imagem do produto" width={100} height={100} className="rounded" />
          </div>
        )}
        <button type="button" className="bg-green-500 text-white p-2 rounded mr-2" onClick={handleCreate}>
          Criar
        </button>
        <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default CreateModal;
