import { deleteProduct } from '@/actions/admin/actions';
import React from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  productName: string;
  onClose: () => void;
  onDelete: () => void;
  id: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, productName, onClose, onDelete, id }) => {
  if (!isOpen) return null;

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();  // Impede o recarregamento da página
    try {
      await deleteProduct(id);  // Aguarda a exclusão do produto
      console.log('Produto deletado no modal com sucesso');  // Log para depuração
      onDelete();  // Atualiza a lista de produtos
      onClose();  // Fecha o modal após a exclusão

      // Coloque o reload fora do try...catch para garantir que sempre será chamado após a exclusão
      window.location.reload();  // Recarrega a página
    } catch (error) {
      console.error('Erro ao deletar produto no modal:', error);  // Log de erro
    }
  };

  return (
    <form className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Excluir Produto</h2>
        <p className="mb-6">Tem certeza de que deseja excluir o produto "{productName}"?</p>
        <div className="flex justify-end">
          <button className="bg-red-500 text-white p-2 rounded mr-2" onClick={handleDelete}>
            Excluir
          </button>
          <button className="bg-gray-500 text-white p-2 rounded" onClick={(e) => { e.preventDefault(); onClose(); }}>
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};

export default DeleteModal;
