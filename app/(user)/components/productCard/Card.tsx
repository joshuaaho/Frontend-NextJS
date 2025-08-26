import React, { memo } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import ProductName from "./ProductName/ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import { BubbleTea } from "../../../../dexie/db";
import { formatPrice } from "../../utils/priceFormatter";

const ALT_TEXT = "Coming soon";
type CardProps = {
  bubbleTea: BubbleTea;
  handleAddToCart: (productId: number) => void;
  handleRemoveFromCart: (productId: number) => void;
};

const Card = 
  memo(({
    bubbleTea,
    handleAddToCart,
    handleRemoveFromCart,
  }: CardProps) => {
    console.log("dskd");
    return (
      <Box
        key={bubbleTea.id}
        sx={{ border: 1, borderColor: "grey.300", p: 2, borderRadius: 1 }}
      >
        <Image
          src={`/${bubbleTea.assetPath}`}
          alt={ALT_TEXT}
          width={200}
          height={200}
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <ProductName name={bubbleTea.name} />
        <ProductPrice priceView={formatPrice(bubbleTea.price, bubbleTea.currency)} />
        {bubbleTea.quantity > 0 && <ProductQuantity quantity={bubbleTea.quantity} />}
      <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "primary.main",
                      width: "100%",
                      mt: 1,
                    }}
                    onClick={() => handleAddToCart(bubbleTea.id)}
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
                    onClick={() => handleRemoveFromCart(bubbleTea.id)}
                  >
                    Remove From Cart
                  </Button>
      </Box>
    );
  });

export default Card;
