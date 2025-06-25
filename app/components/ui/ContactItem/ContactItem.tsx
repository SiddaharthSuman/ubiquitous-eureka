'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

import styles from './ContactItem.module.scss';

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text }) => {
  return (
    <Box className={styles.contactItem}>
      {icon}
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default ContactItem;
