'use client';
import { Paper, styled } from '@mui/material';

const PopoverPaper = styled(Paper)(({}) => ({
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  padding: '32px',
  width: '1000px',
}));

export default PopoverPaper;
