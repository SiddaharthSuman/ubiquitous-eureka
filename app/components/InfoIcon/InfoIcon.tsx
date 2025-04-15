import { Box } from '@mui/material';
import React from 'react';

const InfoIcon = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        border: '1px solid #fff',
        borderRadius: '50%',
        color: '#fff',
        display: 'flex',
        flexShrink: 0,
        fontSize: 14,
        height: 20,
        justifyContent: 'center',
        width: 20,
      }}
    >
      <span>i</span>
    </Box>
  );
};

export default InfoIcon;
