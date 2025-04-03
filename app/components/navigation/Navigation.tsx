'use client';

import {
  Box,
  Button,
  ButtonProps,
  Container,
  styled,
  Toolbar,
  Typography,
  TypographyProps,
} from '@mui/material';
import { useRef, useState } from 'react';

import NavButton from './NavButton/NavButton';
import StyledAppBar from './StyledAppBar/StyledAppBar';
import styles from './Navigation.module.scss';
import Submenu from './Submenu/Submenu';

interface NavigationProps {
  menuItems: Array<{
    link: string;
    submenu?: Array<
      | { link: string; title: string }
      | {
          columnSize: number;
          items: Array<{
            description: string;
            hasImage: boolean;
            icon: string;
            imgUrl?: string;
            title: string;
          }>;
        }
    >;
    title: string;
  }>;
}

// interface NavigationProps {
//   menuItems: unknown;
// }

const StyledLogo = styled(Typography)<TypographyProps>(({}) => ({
  fontFamily: 'var(--font-playfair)',
  fontSize: '2.5rem',
  lineHeight: 1,
  paddingInline: '1rem',
}));

const DemoButton = styled(Button)<ButtonProps>(({}) => ({
  '&:hover': {
    backgroundColor: '#0d1752',
  },
  backgroundColor: '#1a237e',
  color: 'white',
  fontWeight: 500,
  marginInlineStart: 'auto',
  padding: '8px 20px',
  textTransform: 'none',
}));

const Navigation = ({ menuItems }: NavigationProps) => {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseOut = () => {
    // console.log('mouse is out');
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 100);
  };
  const handleMouseHover = () => {
    // console.log('mouse is in');
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  return (
    <>
      <Submenu
        open={open}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseHover}
      />
      <StyledAppBar position="fixed">
        <Container fixed>
          <Toolbar disableGutters className={styles.toolbar}>
            <StyledLogo component="div" variant="h6">
              Biogentic
            </StyledLogo>
            <Box className={styles.menuGroup}>
              {menuItems.map((item) => (
                <NavButton
                  key={item.title}
                  onMouseOut={handleMouseOut}
                  onMouseOver={handleMouseHover}
                >
                  {item.title}
                </NavButton>
              ))}
            </Box>
            <DemoButton variant="contained">Book a Demo</DemoButton>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  );
};

export default Navigation;
