import React, { useState, useEffect, useCallback } from "react";
import { BubbleTeaService } from "@/app/(services)/bubbleTeaService";
import { sortLabels } from "@/app/(user)/utils/labelSorter";
import { formatLabel } from "@/app/(user)/utils/labelFormatter";

import { Button, Container, Box, Typography, Grid } from "@mui/material";
import Card from "./ProductCard/Card";

const ProductList = () => {
  const [products, setProducts] = useState<any>({});

  const [labels, setLabels] = useState<any>({});

  useEffect(() => {
    BubbleTeaService.getBubbleTeas().then((products) => {
      const labels: any = {};
      const productMap: any = {};
      for (const product of products) {
        productMap[product.id] = product;
        console.log(product);
        for (const label of product.labels) {
          labels[label] = [...(labels[label] || []), product.id];
        }
      }

      setLabels(labels);
      setProducts(productMap);
    });
  }, []);

  const handleAddToCart = async (productId: number) => {
    await BubbleTeaService.addToCart(productId);
    const updatedProducts = await BubbleTeaService.getBubbleTeas();
    setProducts(updatedProducts);
  };

  const handleRemoveFromCart = async (productId: number) => {
    await BubbleTeaService.removeFromCart(productId);
    const updatedProducts = await BubbleTeaService.getBubbleTeas();
    setProducts(updatedProducts);
  };


  return (
    <Container
      sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 10 }}
    >
      {sortLabels(Object.keys(labels))

        .map((label) => (
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
              {labels[label].map((productId: number) => (
                <Box key={productId}>
                  <Card
                    bubbleTea={products[productId]}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
    </Container>
  );
};

export default ProductList;
