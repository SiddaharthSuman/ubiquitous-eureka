'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

import styles from './FooterSection.module.scss';

interface FooterSectionProps {
  children: React.ReactNode;
  title: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ children, title }) => {
  return (
    <Box className={styles.footerSection}>
      <Typography className={styles.footerTitle} variant="h6">
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default FooterSection;
