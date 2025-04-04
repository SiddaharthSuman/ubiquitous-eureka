'use client';

import { AppBar, styled } from '@mui/material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'white',
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
  color: 'black',
  padding: theme.spacing(1),
}));

export default StyledAppBar;
