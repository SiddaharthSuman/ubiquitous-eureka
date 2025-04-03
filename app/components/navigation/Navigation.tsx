'use client';

import {
  Box,
  Button,
  ButtonProps,
  Container,
  Popper,
  styled,
  Toolbar,
  Typography,
  TypographyProps,
} from '@mui/material';
import { MouseEvent } from 'react';
import { useRef } from 'react';

import NavButton from './NavButton/NavButton';
import StyledAppBar from './StyledAppBar/StyledAppBar';
import styles from './Navigation.module.scss';

interface NavigationProps {
  menuItems: Array<{
    link: string;
    submenu?: Array<{ link: string; title: string }>;
    title: string;
  }>;
}

const StyledLogo = styled(Typography)<TypographyProps>(({}) => ({
  fontFamily: 'var(--font-playfair)',
  fontSize: '3rem',
  paddingInline: '1rem',
}));

const DemoButton = styled(Button)<ButtonProps>(({}) => ({
  '&:hover': {
    backgroundColor: '#0d1752',
  },
  backgroundColor: '#1a237e',
  borderRadius: '4px',
  color: 'white',
  fontWeight: 500,
  marginInlineStart: 'auto',
  padding: '8px 20px',
  textTransform: 'none',
}));

const handleProductsClick = (event: MouseEvent) => {
  console.log('clicked on ', event.target);
};

const handleOtherClick = (event: MouseEvent) => {
  console.log('clicked on other ', event.target);
};

const Navigation = ({ menuItems }: NavigationProps) => {
  const logoRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters className={styles.toolbar}>
          <StyledLogo ref={logoRef} component="div" variant="h6">
            Biogentic
          </StyledLogo>
          <Box className={styles.menuGroup}>
            {menuItems.map((item) => (
              <NavButton
                key={item.title}
                onClick={
                  item.title === 'Products'
                    ? handleProductsClick
                    : handleOtherClick
                }
              >
                {item.title}
              </NavButton>
            ))}
          </Box>
          <DemoButton variant="contained">Book a Demo</DemoButton>
        </Toolbar>
      </Container>
      {logoRef.current && (
        <Popper anchorEl={logoRef.current} id={'id'} open={true}>
          <Box sx={{ bgcolor: 'background.paper', border: 1, p: 1 }}>
            The content of the Popper.
          </Box>
        </Popper>
      )}
    </StyledAppBar>
  );
};

export default Navigation;
