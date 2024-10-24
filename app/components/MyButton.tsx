// app/components/MyButton.tsx
'use client';

import React from 'react';
import Button from '@mui/material/Button';

interface MyButtonProps {
  label: string;
  onClick: () => void; // Accept onClick event handler
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {label}
    </Button>
  );
};

export default MyButton;
