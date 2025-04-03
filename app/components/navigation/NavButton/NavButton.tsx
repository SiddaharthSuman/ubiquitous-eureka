'use client';

import { Button, styled } from '@mui/material';

const NavButton = styled(Button)(({}) => ({
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#5e35b1',
  },
  color: 'black',
  fontSize: '1.25rem',
  fontWeight: 500,
  padding: '8px 16px',
  textTransform: 'none',
}));

export default NavButton;
