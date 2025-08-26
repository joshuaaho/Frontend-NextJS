'use client';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { BubbleTeaService } from '../(services)/bubbleTeaService';
import ProductList from './components/ProductList';
import { ProductsProvider } from './contexts/ProductsContext';
import ShoppingCartList from './components/ShoppingCartList';

export default function UserPage() {
  useEffect(() => {
    BubbleTeaService.insertIfEmpty();
  }, []);

  const [inShoppingCart, setInShoppingCart] = useState(false);
  return (
    <ProductsProvider>
      <Container>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bubble Teas
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ShoppingCartIcon />}
              sx={{ borderColor: 'white', color: 'white' }}
              onClick={() => setInShoppingCart(prev => !prev)}
            >
              Cart
            </Button>
          </Toolbar>
        </AppBar>
        {inShoppingCart ? <ShoppingCartList /> : <ProductList />}
      </Container>
    </ProductsProvider>
  );
}
