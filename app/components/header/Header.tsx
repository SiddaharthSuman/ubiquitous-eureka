'use client';

import React from 'react';

import Navigation from '../navigation/Navigation';
import menuItems from '../../data/menu.json';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation menuItems={menuItems} />
    </header>
  );
};

export default Header;
