'use client';

import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import DynamicIcon from '../../DynamicIcon/DynamicIcon';

import styles from './SubmenuItem.module.scss';

interface SubmenuItemProps {
  description: string;
  icon: string;
  title: string;
}

const SubmenuItem = ({ description, icon, title }: SubmenuItemProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseOut = () => {
    setIsActive(false);
  };

  return (
    /* Individual menu item container */
    <Box
      className={styles.submenuItem}
      sx={{
        display: 'flex !important',
        flexDirection: 'row !important',
        padding: '12px !important',
        cursor: 'pointer !important',
        borderRadius: '8px !important',
        transition:
          'transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease !important',
        '&:hover': {
          backgroundColor: '#e2e8f0 !important', // More visible light blue-gray
          transform: 'translateX(4px) !important',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1) !important', // Subtle shadow for depth
        },
      }}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      {/* Image */}
      <Box
        className={styles.iconContainer}
        sx={{
          display: 'flex !important',
          paddingInlineEnd: '12px !important',
          margin: '4px 0 !important',
        }}
      >
        <DynamicIcon active={isActive} iconName={icon} />
      </Box>
      {/* Title and desc */}
      <Box
        className={styles.contentContainer}
        sx={{
          flex: '1 !important',
        }}
      >
        <Typography
          className={styles.title}
          variant="h6"
          sx={{
            marginBlockEnd: '4px !important',
            fontSize: '1rem !important',
            fontWeight: '600 !important',
            lineHeight: '1.4 !important',
            color: '#1e293b !important', // Explicit dark text color
          }}
        >
          {title}
        </Typography>
        <Typography
          className={styles.description}
          variant="body2"
          sx={{
            fontSize: '0.875rem !important',
            fontWeight: '400 !important',
            lineHeight: '1.5 !important',
            color: '#64748b !important', // Explicit secondary text color
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubmenuItem;
