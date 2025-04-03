import { Box, Container, styled, ContainerProps } from '@mui/material';
import React, { MouseEventHandler } from 'react';

import NavButton from '../NavButton/NavButton';

import styles from './Submenu.module.scss';

const StyledContainer = styled(Container)<ContainerProps>(({}) => ({
  backgroundColor: 'white',
  borderRadius: '20px',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  paddingBlock: '40px',
}));

interface SubmenuProps {
  onMouseOut: MouseEventHandler;
  onMouseOver: MouseEventHandler;
  open: boolean;
}

const Submenu = ({ onMouseOut, onMouseOver, open }: SubmenuProps) => {
  return (
    <Box className={`${styles.submenuDiv} ${open && `${styles.submenuOpen}`}`}>
      <StyledContainer
        fixed
        className={styles.submenuContainer}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      >
        <NavButton>Submenu Item 1</NavButton>
        <NavButton>Submenu Item 2</NavButton>
        <NavButton>Submenu Item 3</NavButton>
        <NavButton>Submenu Item 4</NavButton>
      </StyledContainer>
    </Box>
  );
};

export default Submenu;
