'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import React, { MouseEventHandler } from 'react';

// import NavButton from '../NavButton/NavButton';
import SubmenuItem from '../SubmenuItem/SubmenuItem';

import styles from './Submenu.module.scss';

interface SubmenuProps {
  onMouseOut: MouseEventHandler;
  onMouseOver: MouseEventHandler;
  open: boolean;
  submenuItems: null | Array<{
    columnSize: number;
    items: Array<{
      description: string;
      hasImage: boolean;
      icon: string;
      imgUrl?: string;
      title: string;
    }>;
    title: string;
  }>;
}

const Submenu = ({ onMouseOut, onMouseOver, open, submenuItems }: SubmenuProps) => {
  if (!submenuItems) {
    return null;
  }

  return (
    <Box
      className={`${styles.submenuDiv} ${open ? styles.submenuOpen : ''}`}
      sx={{
        position: 'fixed !important',
        insetBlockStart: '80px !important',
        insetInline: '0 !important',
        zIndex: '999 !important',
        visibility: open ? 'visible !important' : 'hidden !important',
        opacity: open ? '1 !important' : '0 !important',
        transform: open ? 'translateY(0) !important' : 'translateY(-10px) !important',
        transition: 'opacity 0.3s ease, transform 0.3s ease !important',
      }}
    >
      <Container
        className={styles.submenuContainer}
        maxWidth="lg"
        sx={{
          display: 'flex !important',
          flexDirection: 'column !important',
          padding: '40px 24px !important',
          margin: '0 24px !important',
          color: '#1e293b !important',
          backgroundColor: 'rgba(255, 255, 255, 0.98) !important',
          border: '1px solid #e2e8f0 !important',
          borderRadius: '16px !important',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15) !important',
          backdropFilter: 'blur(20px) !important',
          '&.dark': {
            backgroundColor: 'rgba(30, 41, 59, 0.98) !important',
            color: '#f1f5f9 !important',
            borderColor: '#334155 !important',
          },
        }}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      >
        <Grid container spacing={3}>
          {submenuItems.map((submenuItem, index) => (
            <Grid key={index} size={submenuItem.columnSize}>
              <Typography
                className={styles.submenuTitle}
                variant="h6"
                sx={{
                  marginBlockEnd: '16px !important',
                  fontSize: '1.1rem !important',
                  fontWeight: '600 !important',
                  color: '#1e293b !important',
                }}
              >
                {submenuItem.title}
              </Typography>
              <Box
                className={styles.submenuGrid}
                sx={{
                  display: 'grid !important',
                  gap: '40px 28px !important',
                  gridTemplateColumns: `repeat(${submenuItem.columnSize / 4}, 1fr) !important`,
                }}
              >
                {submenuItem.items.map((item, index) => (
                  <SubmenuItem
                    key={index}
                    description={item.description}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Submenu;
