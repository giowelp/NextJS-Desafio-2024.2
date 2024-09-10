import { deleteProduct } from '@/actions/admin/actions';
import React from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
  id: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, productName, onClose, onDelete, id }) => {
  if (!isOpen) return null;

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();  
    try {
      await deleteProduct(id);  
      console.log('Produto deletado no modal com sucesso'); 
      onDelete();  
      onClose();  

      
      window.location.reload();  
    } catch (error) {
      console.error('Erro ao deletar produto no modal:', error); 
    }
  };

  return (
    <form className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl mb-4 font-helveticaRounded">Excluir Produto</h2>
        <p className="mb-6 font-helvetica">Tem certeza de que deseja excluir o produto?</p>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white p-2 rounded-full mr-2 font-helvetica" onClick={handleDelete}>
            Excluir
          </button>
          <button className="bg-gray-500 text-white p-2 rounded-full font-helvetica" onClick={(e) => { e.preventDefault(); onClose(); }}>
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default DeleteModal;
