import React from 'react';

type ProductQuantityProps = {
  quantity: number;
};

export default function ProductQuantity({ quantity }: ProductQuantityProps) {
  return <div>{`In cart: ${quantity}`}</div>;
}
