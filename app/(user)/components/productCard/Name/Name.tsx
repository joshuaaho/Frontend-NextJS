import React from 'react'

type NameProps = {
  name: string;
}

export default function Name({ name }: NameProps) {
  return <div>{name}</div>;
}