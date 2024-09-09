"use client";

import Image from "next/image";
import { Eye, Edit2, Trash2, Plus, Filter, SortAsc } from "lucide-react";
import { useState, useEffect } from "react";
import EditModal from "@/components/modal/edit-modal";
import DeleteModal from "@/components/modal/delete-modal";
import CreateModal from "@/components/modal/create-modal";
import ViewModal from "@/components/modal/visualize-modal";

type MangaCard3 = {
  id: number;
  title: string;
  volume: number;
  price: string;
  description: string;
  image: string;
};

interface Product {
  mangas: MangaCard3[];
}

export default function AdminPage({ mangas }: Product[]) {
  const itemsPerPage = 10;
  const totalItems = mangas.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<MangaCard3 | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<MangaCard3 | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<MangaCard3[]>(mangas); // Mantém a lista original

  const changePage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Função para abrir o modal de edição
  const openModal = (product: MangaCard3) => {
    console.log('Abrindo modal de edição para produto:', product); // Log para depuração
    setCurrentProduct(product); // Define o produto atual
    setIsModalOpen(true); // Abre o modal de edição
  };

  // Função para fechar o modal de edição
  const closeModal = () => {
    setCurrentProduct(null); // Reseta o produto atual
    setIsModalOpen(false); // Fecha o modal de edição
  };

  // Função para salvar o produto editado
  const handleSaveProduct = (updatedProduct: MangaCard3) => {
    console.log('Produto salvo:', updatedProduct);

    // Atualiza o produto na lista sem alterar a ordem
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p));
      return updatedProducts.sort((a, b) => a.id - b.id); // Ordena a lista por 'id' após a atualização
    });

    closeModal(); // Fecha o modal após salvar
  };

  const openDeleteModal = (product: MangaCard3) => {
    console.log('Abrindo modal de exclusão para produto:', product);
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setProductToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteProduct = async () => {
    if (productToDelete) {
      try {
        await deleteProduct(productToDelete.id); // Exclui o produto no banco de dados
        console.log('Produto excluído:', productToDelete);
  
        // Atualiza a lista de produtos e mantém a ordenação
        setProducts((prevProducts) => {
          const updatedProducts = prevProducts.filter((p) => p.id !== productToDelete.id);
          return updatedProducts.sort((a, b) => a.id - b.id);
        });
  
        closeDeleteModal(); // Fecha o modal de exclusão
      } catch (error) {
        console.error('Erro ao excluir produto na página Admin:', error); // Log de erro
      }
    }
  };
  
  // useEffect para manter a página atual se houver produtos suficientes
  useEffect(() => {
    // Recalcula o número total de páginas após a exclusão de um produto
    const updatedTotalPages = Math.ceil(products.length / itemsPerPage);
  
    // Ajusta a página atual somente se ela não for válida após a exclusão
    if (currentPage > updatedTotalPages && updatedTotalPages > 0) {
      setCurrentPage(updatedTotalPages); // Ajusta para a última página válida
    }
  }, [products]); // Executa sempre que 'products' mudar
  
  
  
  

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleCreateProduct = (newProduct: MangaCard3) => {
    console.log('Novo produto criado:', newProduct);
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      return updatedProducts.sort((a, b) => a.id - b.id); // Ordena a lista por 'id' após a criação
    });
    closeCreateModal();
  };

  const openViewModal = (product: MangaCard3) => {
    setCurrentProduct(product);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setCurrentProduct(null);
    setIsViewModalOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex); // Use 'products' para a lista atualizada

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-background p-8 relative">
      <div className="flex w-full max-w-[1600px]">
        <aside className="w-1/5 sticky top-0 flex flex-col justify-start p-6 space-y-4">
          <button className="text-lg flex items-center space-x-2" onClick={openCreateModal}>
            <Plus className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Adicionar</span>
          </button>
          <button className="text-lg flex items-center space-x-2">
            <SortAsc className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Ordenar</span>
          </button>
          <button className="text-lg flex items-center space-x-2">
            <Filter className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Filtrar</span>
          </button>
          <button className="text-lg flex items-center space-x-2">
            <Trash2 className="w-5 h-5 text-black" />
            <span className="font-helveticaLight">Excluir</span>
          </button>
        </aside>

        <div className="w-4/5 ml-4 relative overflow-hidden rounded-3xl shadow-lg bg-white p-6">
          <table className="min-w-full border-collapse">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  CAPA
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  NOME
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  VOLUME
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  PREÇO
                </th>
                <th scope="col" className="px-6 py-3 text-center text-lg font-helveticaBold text-black uppercase tracking-wider">
                  DESCRIÇÃO
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentItems.map((product) => (
                <tr key={product.id} className="border-b border-transparent">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button className="text-black mr-3" onClick={() => openModal(product)}>
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-black mr-3" onClick={() => openViewModal(product)}>
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-black mr-3" onClick={() => openDeleteModal(product)}>
                        <Trash2 className="w-4 h-4" />
                      </button>
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={`Capa ${product.title}`}
                          width={40}
                          height={60}
                          className="rounded"
                        />
                      )}
                    </div>
                  </td>
                  <td className="font-helvetica uppercase px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.title}
                  </td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">{product.volume}</td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">R$ {product.price}</td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">
                    {product.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-0">
        <Image
          src="/images/musashi5.png"
          alt="Imagem Musashi"
          width={350}
          height={490}
          className="object-contain"
        />
      </div>

      <div className="flex justify-center items-center mt-8 z-10">
        <button
          onClick={() => changePage(currentPage - 1)}
          className={`px-4 py-2 ${currentPage === 1 ? "text-gray-400" : "text-black"}`}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={`px-4 py-2 ${currentPage === index + 1 ? "underline" : ""} text-black`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          className={`px-4 py-2 ${currentPage === totalPages ? "text-gray-400" : "text-black"}`}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>

      {/* Modal de Edição */}
      <EditModal
        isOpen={isModalOpen}
        product={currentProduct}
        onClose={closeModal}
        onSave={handleSaveProduct}
      />

      {/* Modal de Exclusão */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        productName={productToDelete ? productToDelete.name : ''}
        onClose={closeDeleteModal}
        onDelete={handleDeleteProduct}
        id={productToDelete ? productToDelete.id : 0}
      />

      {/* Modal de Criação */}
      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onCreate={handleCreateProduct}
      />

      {/* Modal de Visualização */}
      <ViewModal
        isOpen={isViewModalOpen}
        product={currentProduct}
        onClose={closeViewModal}
      />
    </div>
  );
}
