// app/components/DigitalClock.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="h2" color="white">
      {time.toLocaleTimeString()}
    </Typography>
  );
};

export default DigitalClock;
