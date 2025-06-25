'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

import styles from './FooterBottom.module.scss';

interface FooterBottomProps {
  companyName: string;
  links: Array<{ href: string; title: string }>;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ companyName, links }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Box className={styles.footerBottom}>
      <Typography className={styles.copyright} variant="body2">
        © {currentYear} {companyName}. All rights reserved.
      </Typography>
      <Box className={styles.bottomLinks}>
        {links.map((link) => (
          <a key={link.title} className={styles.bottomLink} href={link.href}>
            {link.title}
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default FooterBottom;
