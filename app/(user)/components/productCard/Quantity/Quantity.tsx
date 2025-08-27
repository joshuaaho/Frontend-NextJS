import React from 'react';
import { Box } from '@mui/material';

type QuantityProps = {
  quantity: number;
};

export default function Quantity({ quantity }: QuantityProps) {

  if (quantity === 0) {
    return null;
  }

  return (
    <Box sx={{ 
      minHeight: '24px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-end',
      width: '100%'
    }}>

      {`In cart: ${quantity}`}
      
    </Box>
  );
}
