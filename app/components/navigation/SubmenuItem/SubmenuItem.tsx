import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface SubmenuItemProps {
  description: string;
  title: string;
}

const SubmenuItem = ({ description, title }: SubmenuItemProps) => {
  return (
    /* Individual menu item container */
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      {/* Image */}
      <Box display={'flex'} my={1} pr={1}>
        <Image alt="placeholder" height={20} src="https://via.placeholder.com/150" width={20} />
      </Box>
      {/* Title and desc */}
      <Box>
        <Typography fontSize={'1rem'} fontWeight={600} sx={{ color: 'black' }} variant="h6">
          {title}
        </Typography>
        <Typography fontWeight={400} sx={{ color: 'black' }} variant="body2">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SubmenuItem;
