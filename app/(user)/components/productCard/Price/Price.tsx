import React from 'react'

type PriceProps = {
  price: string;
}

export default function Price({ price }: PriceProps) {
  return <div>{price}</div>;
}
