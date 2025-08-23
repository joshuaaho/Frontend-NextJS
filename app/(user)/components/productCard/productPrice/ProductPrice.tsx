import React from 'react'

type ProductPriceProps = {
  price: string;
}

export default function ProductPrice({ price }: ProductPriceProps) {
  return <div>{price}</div>;
}
