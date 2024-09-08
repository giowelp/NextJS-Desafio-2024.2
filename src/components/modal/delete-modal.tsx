import React from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  productName: string;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, productName, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Excluir Produto</h2>
        <p className="mb-6">Tem certeza de que deseja excluir o produto "{productName}"?</p>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white p-2 rounded mr-2" onClick={onDelete}>
            Excluir
          </button>
          <button className="bg-gray-500 text-white p-2 rounded" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
