import { Grid } from '@mui/material';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import { useEffect, useState } from 'react';

const Home = () => {
  const URI = 'http://localhost:3000';
  const [products, setProducts] = useState([]);

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

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <>
      <NavBar />
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};


export default Home;