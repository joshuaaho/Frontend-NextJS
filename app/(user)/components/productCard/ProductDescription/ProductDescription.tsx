import React from 'react';
import { Typography } from '@mui/material';

type ProductDescriptionProps = {
  description: string;
};

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: 'grey.600',
        fontSize: '0.875rem',
        fontWeight: 300,
        lineHeight: 1.4,
        mt: 0.5,
        mb: 1,
      }}
    >
      {description}
    </Typography>
  );
} 