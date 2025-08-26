import React from "react";
import { useProducts } from "@/app/(user)/contexts/ProductsContext";

import { Container, Box } from "@mui/material";
import Card from "./ProductCard/Card";

const ShoppingCartList = () => {
  const { products, handleAddToCart, handleRemoveFromCart } = useProducts();

  // Get all products with quantity > 0
  const cartProducts = Object.values(products).filter((product: any) => 
    product && product.quantity > 0
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        marginTop: 10,
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {cartProducts.map((product: any) => (
        <Box key={product.id}>
          <Card
            bubbleTea={product}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </Box>
      ))}
    </Container>
  );
};

export default ShoppingCartList;
