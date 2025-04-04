import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

import DynamicIcon from '../../DynamicIcon/DynamicIcon';

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
      sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
    >
      {/* Image */}
      <Box display={'flex'} my={1} pr={1}>
        <DynamicIcon active={isActive} iconName={icon} />
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
