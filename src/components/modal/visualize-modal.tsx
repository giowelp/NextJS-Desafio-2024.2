import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  volume: number;
  price: string;
  description: string;
  image: string; // Incluindo o campo de  da imagem
}

interface ViewModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

const ViewModal: React.FC<ViewModalProps> = ({ isOpen, product, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <div className="flex items-center mb-4">
          {product.image && ( // Verifica se há uma imagem disponível
            <Image
              src={product.image} // Utiliza a  da imagem do produto
              alt={`Capa de ${product.title}`}
              width={100}
              height={150}
              className="rounded mr-4"
            />
          )}
          <div>
            <p><strong>Volume:</strong> {product.volume}</p>
            <p><strong>Preço:</strong> {product.price}</p>
            <p><strong>Descrição:</strong> {product.description}</p>
          </div>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ViewModal;
