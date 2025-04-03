import React from 'react';

import Navigation from '../navigation/Navigation';

// import styles from './Header.module.scss';

const menuItems = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about',
    submenu: [
      { link: '/about/team', title: 'Our Team' },
      { link: '/about/story', title: 'Our Story' },
    ],
    title: 'About',
  },
  {
    link: '/services',
    submenu: [
      { link: '/services/consulting', title: 'Consulting' },
      { link: '/services/development', title: 'Development' },
    ],
    title: 'Services',
  },
  {
    link: '/contact',
    title: 'Contact',
  },
];

const Header = () => {
  return (
    // <header className={styles.header}>
    <div>
      <Navigation menuItems={menuItems} />
    </div>
    // </header>
  );
};

export default Header;
