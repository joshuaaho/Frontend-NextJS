import React, { useState, useEffect } from "react";
import { BubbleTeaService } from "@/app/(services)/bubbleTeaService";
import ProductName from "./ProductCard/ProductName/ProductName";
import { Container, Box, Button } from "@mui/material";
import ProductPrice from "./ProductCard/ProductPrice/ProductPrice";
import ProductQuantity from "./ProductCard/ProductQuantity/ProductQuantity";
import Image from "next/image";
import { formatPrice } from "../utils/priceFormatter";
import { BubbleTea } from "../../../dexie/db";


const ALT_TEXT = "Coming soon";
const ProductList = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    BubbleTeaService.getBubbleTeas().then((products) => {
      setProducts(products);
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
      {products.map((product: BubbleTea) => (
        <Box key={product.id} sx={{ border: 1, borderColor: 'grey.300', p: 2, borderRadius: 1 }}>
          <Image src={`/${product.assetPath}`} alt={ALT_TEXT} width={200} height={200} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          <ProductName name={product.name} />
          <ProductPrice priceView={formatPrice(product.price, product.currency)} />
          {product.quantity > 0 && <ProductQuantity quantity={product.quantity} />}
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: 'primary.main',
              width: '100%',
              mt: 1
            }}
            onClick={() => handleAddToCart(product.id)}
          >
            Add To Cart
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              width: "100%",
              mt: 1,
            }}
            onClick={() => handleRemoveFromCart(product.id)}
          >
            Remove From Cart
          </Button>
        </Box>
      ))}
    </Container>
  );
};

export default ProductList;
