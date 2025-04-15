'use client';

import { Box, styled, Tooltip, tooltipClasses, TooltipProps, Zoom } from '@mui/material';
import React from 'react';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    fontSize: 12,
    width: 200,
  },
}));

const InfoIcon = ({ tooltipText }: { tooltipText: string }) => {
  return (
    <BootstrapTooltip
      arrow
      disableInteractive
      placement="top"
      title={tooltipText}
      slots={{
        transition: Zoom,
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          border: '1px solid #fff',
          borderRadius: '50%',
          color: '#fff',
          display: 'flex',
          flexShrink: 0,
          fontSize: 14,
          height: 20,
          justifyContent: 'center',
          width: 20,
        }}
      >
        <span>i</span>
      </Box>
    </BootstrapTooltip>
  );
};

export default InfoIcon;
