"use client";

import Image from "next/image";
import { Eye, Edit2, Trash2, Plus, Filter, SortAsc } from "lucide-react";
import { useState, useEffect } from "react";
import EditModal from "@/components/modal/edit-modal";
import DeleteModal from "@/components/modal/delete-modal";
import CreateModal from "@/components/modal/create-modal";
import ViewModal from "@/components/modal/visualize-modal";

interface Product {
  id: number;
  name: string;
  volume: number;
  price: string;
  description: string;
  imageUrl: string;
}

export default function AdminPage() {
  const itemsPerPage = 10;
  const totalItems = 30; 
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([
    { 
      id: 1, 
      name: "VAGABOND", 
      volume: 1, 
      price: "R$ 37,90", 
      description: "Em 1600 d.C., o Japão passa por um dos períodos mais...", 
      imageUrl: "/images/vagabondvol1.png"
    },
    // Outros produtos...
  ]);

  const changePage = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Função para abrir o modal de edição
  const openModal = (product: Product) => {
    console.log('Abrindo modal de edição para produto:', product); // Log para depuração
    setCurrentProduct(product); // Define o produto atual
    setIsModalOpen(true); // Abre o modal de edição
  };

  // Função para fechar o modal de edição
  const closeModal = () => {
    setCurrentProduct(null); // Reseta o produto atual
    setIsModalOpen(false); // Fecha o modal de edição
  };

  const handleSaveProduct = (updatedProduct: Product) => {
    console.log('Produto salvo:', updatedProduct);
    setProducts(products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)));
    closeModal(); // Fecha o modal após salvar
  };

  const openDeleteModal = (product: Product) => {
    console.log('Abrindo modal de exclusão para produto:', product);
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setProductToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteProduct = () => {
    if (productToDelete) {
      console.log('Produto excluído:', productToDelete);
      setProducts(products.filter((p) => p.id !== productToDelete.id));
      closeDeleteModal();
    }
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleCreateProduct = (newProduct: Product) => {
    console.log('Novo produto criado:', newProduct);
    setProducts([...products, newProduct]);
    closeCreateModal();
  };

  const openViewModal = (product: Product) => {
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
  const currentItems = products.slice(startIndex, endIndex);

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
                      {product.imageUrl && (
                        <Image
                          src={product.imageUrl}
                          alt={`Capa ${product.name}`}
                          width={40}
                          height={60}
                          className="rounded"
                        />
                      )}
                    </div>
                  </td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">{product.volume}</td>
                  <td className="font-helvetica px-6 py-4 whitespace-nowrap text-center text-sm text-black">{product.price}</td>
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
