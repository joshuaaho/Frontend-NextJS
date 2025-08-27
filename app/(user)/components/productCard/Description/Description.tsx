import React from 'react';
import { Typography } from '@mui/material';

type DescriptionProps = {
  description: string;
};

export default function Description({ description }: DescriptionProps) {
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