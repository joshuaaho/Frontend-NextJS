import React from 'react'

type ProductNameProps = {
  name: string;
}

export default function ProductName({ name }: ProductNameProps) {
  return <div>{name}</div>;
}