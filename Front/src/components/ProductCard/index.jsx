/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid
} from '@mui/material';

export default function ProductCard({ product }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={product.url}
        alt={product.name}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography component="div" variant="h6">
           {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product.email}
          </Typography>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Typography variant="body1" color="text.primary">
                Produto: {product.produto}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="text.primary">
                Preço: R$ {product.preco}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
    </Card>
  );
}
