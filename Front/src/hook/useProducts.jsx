import { useCallback, useState } from 'react';

export const useProducts = () => {
  const URI = 'http://localhost:3000'; // Rota URI

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`${URI}/products`);
      const productsData = await response.json();

      setProducts(productsData.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleDeleteProduct = async (id) => {
    try {
      await fetch(`${URI}/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveProduct = async () => {
    const method = editMode ? 'PUT' : 'POST';
    const path = editMode ? `/products/${selectedProduct.id}` : '/products';

    try {
      await fetch(`${URI}${path}`, { // URI + path
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedProduct)
      });
      fetchProducts();
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = (product = null, editMode = false) => {
    setSelectedProduct(product || { name: '', email: '', produto: '', preco: '' });
    setIsModalOpen(true);
    setEditMode(editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({ ...selectedProduct, [name]: value });
  };

  return {
    products,
    isModalOpen,
    editMode,
    selectedProduct,
    fetchProducts,
    handleDeleteProduct,
    handleSaveProduct,
    handleOpenModal,
    handleInputChange,
    handleCloseModal
  }
}