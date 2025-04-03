import React from 'react';

import Navigation from '../navigation/Navigation';

// import styles from './Header.module.scss';

const menuItems = [
  {
    link: '/',
    submenu: [
      {
        columnSize: 4,
        items: [
          {
            description: 'Transform quality into your brightest asset',
            hasImage: false,
            icon: '',
            title: 'Smart QMS',
          },
          {
            title: 'Smart QMS for Medical Devices',
            icon: '',
            description: 'Accelerate from idea to market for medical devices',
            hasImage: false,
          },
          {
            title: 'Controlled Printing & Reconciliation',
            icon: '',
            description: '21 CFR 11 compliant controlled printing',
            hasImage: false,
          },
          {
            title: 'Self-guided tours >>',
            icon: '',
            description:
              'Take an interactive, self-guided tour to see how Biogentic helps you manage quality',
            hasImage: true,
            imgUrl: '',
          },
        ],
      },
    ],
    title: 'Products',
  },
  {
    link: '/about',
    submenu: [
      { link: '/about/team', title: 'Our Team' },
      { link: '/about/story', title: 'Our Story' },
    ],
    title: 'Solutions',
  },
  {
    link: '/services',
    submenu: [
      { link: '/services/consulting', title: 'Consulting' },
      { link: '/services/development', title: 'Development' },
    ],
    title: 'Resources',
  },
  {
    link: '/contact',
    title: 'Customers',
  },
  {
    link: '/contact',
    title: 'Company',
  },
  {
    link: '/contact',
    title: 'Pricing',
  },
  {
    link: '/contact',
    title: 'Contact us',
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
