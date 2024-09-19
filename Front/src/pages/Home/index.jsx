import { Grid } from '@mui/material';
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hook/useProducts';
import { useEffect } from 'react';

const Home = () => {
  const { fetchProducts, products } = useProducts();

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

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