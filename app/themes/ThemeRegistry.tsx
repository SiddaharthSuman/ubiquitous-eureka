'use client';

import { createTheme, ThemeProvider } from '@mui/material';
import { Geist, Geist_Mono } from 'next/font/google';
import React, { ReactNode } from 'react';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#0070f3',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: `${geistSans.style.fontFamily}, ${geistMono.style.fontFamily}`,
  },
});

const ThemeRegistry = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
