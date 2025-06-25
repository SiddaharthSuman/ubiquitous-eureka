'use client';

import { IconButton, Link } from '@mui/material';
import React from 'react';

import styles from './SocialIconButton.module.scss';

interface SocialIconButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const SocialIconButton: React.FC<SocialIconButtonProps> = ({ children, href, onClick }) => {
  const button = (
    <IconButton className={styles.socialIconButton} size="small" onClick={onClick}>
      {children}
    </IconButton>
  );

  if (href) {
    return (
      <Link href={href} rel="noopener noreferrer" sx={{ textDecoration: 'none' }} target="_blank">
        {button}
      </Link>
    );
  }

  return button;
};

export default SocialIconButton;
