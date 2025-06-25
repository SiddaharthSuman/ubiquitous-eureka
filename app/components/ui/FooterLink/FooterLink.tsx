'use client';

import React from 'react';

import styles from './FooterLink.module.scss';

interface FooterLinkProps {
  children: React.ReactNode;
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href }) => {
  return (
    <a className={styles.footerLink} href={href}>
      {children}
    </a>
  );
};

export default FooterLink;
