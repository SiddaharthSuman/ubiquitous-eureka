'use client';

import { AppBar } from '@mui/material';
import React from 'react';

import styles from './StyledAppBar.module.scss';

interface StyledAppBarProps {
  children: React.ReactNode;
  position?: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';
}

const StyledAppBar: React.FC<StyledAppBarProps> = ({ children, position = 'fixed' }) => {
  return (
    <AppBar
      className={styles.appBar}
      position={position}
      sx={{
        padding: '8px 0 !important',
        color: '#1e293b !important',
        backgroundColor: 'rgba(255, 255, 255, 0.95) !important',
        borderBlockEnd: '1px solid #e2e8f0 !important',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1) !important',
        backdropFilter: 'blur(20px) !important',
        '&.dark': {
          backgroundColor: 'rgba(30, 41, 59, 0.95) !important',
          color: '#f1f5f9 !important',
          borderBlockEndColor: '#334155 !important',
        },
      }}
    >
      {children}
    </AppBar>
  );
};

export default StyledAppBar;
