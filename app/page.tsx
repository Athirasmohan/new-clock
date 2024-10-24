// app/page.tsx
'use client';

import React, { useState } from 'react';
import MyButton from './components/MyButton';
import DigitalClock from './components/DigitalClock';
import { Box } from '@mui/material';

export default function HomePage() {
  const [showClock, setShowClock] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="black" // Set the background color to black
      flexDirection="column"
    >
      <MyButton
        label="Show Clock"
        onClick={() => setShowClock(!showClock)} // Toggle clock display
      />
      {showClock && <DigitalClock />}
    </Box>
  );
}
