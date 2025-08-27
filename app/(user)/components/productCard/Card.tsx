import React, { memo } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import ProductName from "./ProductName/ProductName";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import { BubbleTea } from "../../../../dexie/db";
import { formatPrice } from "../../utils/priceFormatter";
import ImageWithFallback from "./ImageWithFallback";
import ProductDescription from "./ProductDescription/ProductDescription";

const ALT_TEXT = "Coming soon";
type CardProps = {
  bubbleTea: BubbleTea;
  handleAddToCart: (productId: number) => void;
  handleRemoveFromCart: (productId: number) => void;
};

const Card = memo(
  ({ bubbleTea, handleAddToCart, handleRemoveFromCart }: CardProps) => {
    return (
      <Box
        key={bubbleTea.id}
        sx={{ 
          border: 1, 
          borderColor: "grey.300", 
          p: 2, 
          borderRadius: 1,
          maxWidth: "300px",
          width: "300px",
          height: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <ImageWithFallback
          src={`/${bubbleTea.assetPath}`}
          alt={ALT_TEXT}
          width={200}
          height={200}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          fallbackSrc="/No_Image_Available.webp"
        />
        <ProductName name={bubbleTea.name} />
        <ProductDescription description={bubbleTea.description} />
        <ProductPrice
          price={formatPrice(bubbleTea.price, bubbleTea.currency)}
        />
        <ProductQuantity quantity={bubbleTea.quantity} />
        <Box sx={{ flexGrow: 1 }} />
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
          disabled={bubbleTea.quantity === 0}
          sx={
            bubbleTea.quantity > 0
              ? {
                  backgroundColor: "white",
                  width: "100%",
                  color: "secondary.main",
                  border: "1px solid",
                  mt: 1,
                }
              : {
                  backgroundColor: "white",
                  width: "100%",
                  color: "grey.500",
                  border: "1px solid",
                  mt: 1,
                }
          }
          onClick={() => handleRemoveFromCart(bubbleTea.id)}
        >
          Remove From Cart
        </Button>
      </Box>
    );
  }
);

export default Card;
