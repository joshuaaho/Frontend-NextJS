import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { BubbleTeaService } from "@/app/(services)/bubbleTeaService";
import { createProductMap } from "@/app/(user)/utils/productMap";
import { createLabelMap } from "@/app/(user)/utils/labelMap";

interface ProductsContextType {
  products: any;
  labels: any;
  handleAddToCart: (productId: number) => Promise<void>;
  handleRemoveFromCart: (productId: number) => Promise<void>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<any>({});
  const [labels, setLabels] = useState<any>({});

  useEffect(() => {
    BubbleTeaService.getBubbleTeas().then((products) => {
      const labelMap = createLabelMap(products);
      const productMap = createProductMap(products);

      setLabels(labelMap);
      setProducts(productMap);
    });
  }, []);

  const handleAddToCart = useCallback(
    async (productId: number) => {
      await BubbleTeaService.addToCart(productId);
      setProducts((prevProducts: any) => ({
        ...prevProducts,
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

  const value: ProductsContextType = {
    products,
    labels,
    handleAddToCart,
    handleRemoveFromCart,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
