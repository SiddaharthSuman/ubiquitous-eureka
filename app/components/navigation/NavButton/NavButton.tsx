'use client';

import { Button } from '@mui/material';
import React from 'react';

import styles from './NavButton.module.scss';

interface NavButtonProps {
  children: React.ReactNode;
  onMouseOut?: () => void;
  onMouseOver?: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavButton: React.FC<NavButtonProps> = ({ children, onMouseOut, onMouseOver }) => {
  return (
    <Button
      className={styles.navButton}
      sx={{
        padding: '8px 16px !important',
        fontSize: '1.1rem !important',
        fontWeight: '500 !important',
        color: '#64748b !important',
        textTransform: 'none !important',
        borderRadius: '6px !important',
        transition: 'transform 0.2s ease, opacity 0.2s ease !important',
        '&:hover': {
          color: '#ff8a4c !important',
          backgroundColor: '#f1f5f9 !important',
          opacity: '0.9 !important',
          transform: 'translateY(-1px) !important',
        },
      }}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      {children}
    </Button>
  );
};

export default NavButton;
