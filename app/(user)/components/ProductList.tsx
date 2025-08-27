import React from "react";
import { sortLabels } from "@/app/(user)/utils/labelSorter";
import { formatLabel } from "@/app/(user)/utils/labelFormatter";
import { useProducts } from "@/app/(user)/contexts/ProductsContext";

import { Container, Box, Typography } from "@mui/material";
import Card from "./ProductCard/Card";

const ProductList = () => {
  const { products, labels, handleAddToCart, handleRemoveFromCart } =
    useProducts();

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
      {sortLabels(Object.keys(labels)).map((label) => (
        <Box key={label} sx={{ width: "100%", marginBottom: 2 }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: 1,
              color: "#333",
            }}
          >
            {formatLabel(label)}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "flex-start",
            }}
          >
            {labels[label].map(
              (productId: number) =>
                products[productId].isListed && (
                  <Box key={productId}>
                    <Card
                      bubbleTea={products[productId]}
                      handleAddToCart={handleAddToCart}
                      handleRemoveFromCart={handleRemoveFromCart}
                    />
                  </Box>
                )
            )}
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default ProductList;
