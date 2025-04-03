import React from 'react';

import Navigation from '../navigation/Navigation';
import menuItems from '../../data/menu.json';

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
