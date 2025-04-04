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
import { MouseEvent, useRef, useState } from 'react';

import NavButton from './NavButton/NavButton';
import StyledAppBar from './StyledAppBar/StyledAppBar';
import styles from './Navigation.module.scss';
import Submenu from './Submenu/Submenu';

interface NavigationProps {
  menuItems: Array<{
    link: string;
    submenu?: Array<{
      columnSize: number;
      items: Array<{
        description: string;
        hasImage: boolean;
        icon: string;
        imgUrl?: string;
        title: string;
      }>;
      title: string;
    }>;
    title: string;
  }>;
}

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
  const [selectedSubmenu, setSelectedSubmenu] = useState<Exclude<
    NavigationProps['menuItems'][number]['submenu'],
    undefined
  > | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const menuParent = useRef<HTMLElement>(null);

  const handleMouseOut = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 100);
  };

  const handleMouseHover = (event: MouseEvent<HTMLElement>) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    if (menuParent.current?.contains(event.target as Node)) {
      const buttonText = (event.target as HTMLElement).textContent;
      const menuItem = menuItems.find((item) => item.title == buttonText);

      if (menuItem?.submenu) {
        setSelectedSubmenu(menuItem?.submenu);
        setOpen(true);
      } else {
        // if no submenu, close the submenu
        handleMouseOut();
      }
    }
  };

  return (
    <>
      <Submenu
        open={open}
        submenuItems={selectedSubmenu}
        onMouseOut={handleMouseOut}
        onMouseOver={handleMouseHover}
      />
      <StyledAppBar position="fixed">
        <Container fixed>
          <Toolbar disableGutters className={styles.toolbar}>
            <StyledLogo component="div" variant="h6">
              Biogentic
            </StyledLogo>
            <Box ref={menuParent} className={styles.menuGroup}>
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
