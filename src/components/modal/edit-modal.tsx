import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { updateProduct } from '@/actions/admin/actions';

interface Product {
  id: number;
  name: string;
  volume: number;
  price: string;
  description: string;
  image: string;
}

interface EditModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState<Product | null>(product);

  useEffect(() => {
    setEditedProduct(product); // Atualiza o estado quando o produto recebido mudar
  }, [product]);

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (editedProduct) {
      try {
        const updatedProduct = await updateProduct(
          editedProduct.id,
          editedProduct.title,
          editedProduct.volume,
          editedProduct.price,
          editedProduct.description,
          editedProduct.image
        );
        onSave(updatedProduct); 
        onClose();
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
        <h2 className="text-2xl mb-4 font-helveticaRounded">Editar Produto</h2>
        <div className="mb-4">
          <label className="block mb-2 font-helvetica">Nome</label>
          <input
            type="text"
            className="w-full p-2 border rounded font-helvetica"
            value={editedProduct.title}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-helvetica">Volume</label>
          <input
            type="number"
            className="w-full p-2 border rounded font-helvetica" 
            value={editedProduct.volume}
            onChange={(e) => setEditedProduct({ ...editedProduct, volume: Number(e.target.value) })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-helvetica">Preço</label>
          <input
            type="text"
            className="w-full p-2 border rounded font-helvetica"
            value={editedProduct.price}
            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-helvetica">Descrição</label>
          <textarea
            className="w-full p-2 border rounded font-helvetica"
            value={editedProduct.description}
            onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-helvetica">Imagem</label>
          <input type="file" className="w-full p-2" onChange={handleImageUpload} />
        </div>
        {editedProduct.image && (
          <div className="mb-4">
            <Image src={editedProduct.image} alt="Imagem do produto" width={100} height={100} className="rounded" />
          </div>
        )}
        <button className="bg-blue-500 text-white p-2 rounded-full mr-2 font-helvetica" onClick={handleSave}>
          Salvar
        </button>
        <button className="bg-red-500 text-white p-2 rounded-full font-helvetica" onClick={(e) => { e.preventDefault(); onClose(); }}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default EditModal;
