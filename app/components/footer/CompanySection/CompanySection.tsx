'use client';

import React from 'react';

import { FooterSection, FooterLink } from '../../ui';

interface CompanyLink {
  href: string;
  title: string;
}

interface CompanySectionProps {
  links: CompanyLink[];
}

const CompanySection: React.FC<CompanySectionProps> = ({ links }) => {
  return (
    <FooterSection title="Company">
      {links.map((link) => (
        <FooterLink key={link.title} href={link.href}>
          {link.title}
        </FooterLink>
      ))}
    </FooterSection>
  );
};

export default CompanySection;
