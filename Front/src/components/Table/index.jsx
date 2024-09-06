import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button
} from '@mui/material';
import { useState, useEffect } from 'react';
import BasicModal from '../Modal';


export default function BasicTable() {
  const URI = 'http://localhost:3000';
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${URI}/products`);
      const productsData = await response.json();
      console.log('productsData', productsData);
      setProducts(productsData.data);
    } catch (error) {
      console.error(error);
    }
  };

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
    const url = editMode ? `/products/${selectedProduct.id}` : '/products'

    try {
      await fetch(`${URI}${url}`, {
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

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <BasicModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
        isEditMode={editMode}
        onInputChange={handleInputChange}
        onSaveProduct={handleSaveProduct}
      />
      <Box sx={{ mb: 2, mt: 2, ml: 2 }}>
        <Button variant="contained" color="primary" onClick={() => handleOpenModal(null, false)}>Cadastrar</Button>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Produto</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell>Url</TableCell>
            <TableCell align='center'>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.email}</TableCell>
              <TableCell>{product.produto}</TableCell>
              <TableCell>{product.preco}</TableCell>
              <TableCell><img src={product.url} style={{ width: 40, height: 40, objectFit: 'cover' }}/></TableCell>
              <TableCell>
                <Box component="section" sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  <Button variant="contained" color="secondary" onClick={() => handleOpenModal(product, true)}>Editar</Button>
                  <Button variant="contained" color="error" onClick={() => handleDeleteProduct(product.id)}>Excluir</Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
