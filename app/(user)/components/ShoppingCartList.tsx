import React, { useState } from "react";
import { useProducts } from "@/app/(user)/contexts/ProductsContext";
import { BubbleTeaService } from "@/app/(services)/bubbleTeaService";

import { Container, Box, Button, Alert, Snackbar } from "@mui/material";
import Card from "./ProductCard/Card";

type ShoppingCartListProps = {
  setOpenToast: (open: boolean) => void;
  setInShoppingCart: (inShoppingCart: boolean) => void;
};

const ShoppingCartList = ({
  setOpenToast,
  setInShoppingCart,
}: ShoppingCartListProps) => {
  const { products, handleAddToCart, handleRemoveFromCart, setProducts } =
    useProducts();

  // Get all products with quantity > 0
  const cartProducts = Object.values(products).filter(
    (product: any) => product && product.quantity > 0
  );

  const handleSubmitOrder = async () => {
    await BubbleTeaService.clearCart();

    // Set all product quantities to 0
    setProducts((prevProducts: any) => {
      Object.keys(prevProducts).forEach((productId) => {
        prevProducts[productId].quantity = 0;
      });
      return prevProducts;
    });

    setInShoppingCart(false);
    setOpenToast(true);
  };

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "flex-start",
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
      </Box>

      {/* {cartProducts.length > 0 && (
        <Box sx={{ width: "100%", marginTop: 3, textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmitOrder}
            sx={{
              padding: "12px 32px",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Submit Order
          </Button>
        </Box>
      )} */}
    </Container>
  );
};

export default ShoppingCartList;
