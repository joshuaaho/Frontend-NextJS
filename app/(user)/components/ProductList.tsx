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

  const handleAddToCart = useCallback(
    async (productId: number) => {
      await BubbleTeaService.addToCart(productId);
      setProducts((prevProducts: any) => ({
        ...prevProducts ,
        [productId]: {
          ...prevProducts[productId],
          quantity: prevProducts[productId].quantity + 1,
        },
      }));
    },
    []
  );
  const handleRemoveFromCart = useCallback(
    async (productId: number) => {
      await BubbleTeaService.removeFromCart(productId);
      setProducts((prevProducts: any) => ({
        ...prevProducts,
        [productId]: {
          ...prevProducts[productId],
          quantity: prevProducts[productId].quantity - 1,
        },
      }));
    },
    []
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
