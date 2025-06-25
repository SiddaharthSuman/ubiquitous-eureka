'use client';

import { Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { MouseEvent, useRef, useState } from 'react';

import ThemeToggle from '../ThemeToggle/ThemeToggle';

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
        <Container maxWidth="lg">
          <Toolbar disableGutters className={styles.toolbar}>
            <Typography
              className={styles.logo}
              component="div"
              variant="h6"
              sx={{
                fontFamily: 'var(--font-playfair), "Yanone Kaffeesatz", sans-serif !important',
                fontSize: '2.5rem !important',
                fontWeight: '600 !important',
                lineHeight: '1 !important',
                color: '#1e293b !important',
                letterSpacing: '-0.02em !important',
              }}
            >
              AI Consulting
            </Typography>
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
            <ThemeToggle />
            <Button className={styles.demoButton} variant="contained">
              Book a Demo
            </Button>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  );
};

export default Navigation;
