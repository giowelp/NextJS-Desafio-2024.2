import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { updateProduct } from '@/actions/admin/actions';

interface Product {
  id: number;
  name: string;
  volume: number;
  price: string;
  description: string;
  imageUrl: string;
}

interface EditModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (editedProduct) {
      try {
        const updatedProduct = await updateProduct(
          editedProduct.id,
          editedProduct.name,
          editedProduct.volume,
          editedProduct.price,
          editedProduct.description,
          editedProduct.imageUrl
        );
        onSave(updatedProduct); // Atualiza o estado no componente pai
        onClose(); // Fecha o modal após a atualização
        window.location.reload(); // Recarrega a página para refletir a atualização
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
      }
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        if (editedProduct) {
          setEditedProduct({ ...editedProduct, imageUrl: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen || !editedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-4">Editar Produto</h2>
        <div className="mb-4">
          <label className="block mb-2">Nome</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={editedProduct.name}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Volume</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={editedProduct.volume}
            onChange={(e) => setEditedProduct({ ...editedProduct, volume: Number(e.target.value) })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Preço</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Descrição</label>
          <textarea
            className="w-full p-2 border rounded"
            value={editedProduct.description}
            onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Imagem</label>
          <input type="file" className="w-full p-2" onChange={handleImageUpload} />
        </div>
        {editedProduct.imageUrl && (
          <div className="mb-4">
            <Image src={editedProduct.imageUrl} alt="Imagem do produto" width={100} height={100} className="rounded" />
          </div>
        )}
        <button className="bg-blue-500 text-white p-2 rounded mr-2" onClick={handleSave}>
          Salvar
        </button>
        <button className="bg-red-500 text-white p-2 rounded" onClick={(e) => { e.preventDefault(); onClose(); }}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditModal;
