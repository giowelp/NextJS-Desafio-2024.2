import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  volume: number;
  price: string;
  description: string;
  imageUrl: string; // Adicionando o campo de URL da imagem
}

interface EditModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);

  // Atualiza o estado interno quando o produto muda
  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  const handleSave = () => {
    if (editedProduct && editedProduct.name && editedProduct.price && editedProduct.description && editedProduct.imageUrl) {
      console.log('Produto atualizado:', editedProduct); // Log de depuração
      onSave(editedProduct);
      onClose();
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
        <button className="bg-red-500 text-white p-2 rounded" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditModal;
