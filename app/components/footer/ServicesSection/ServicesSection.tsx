'use client';

import React from 'react';

import { FooterSection, FooterLink } from '../../ui';

interface Service {
  href: string;
  title: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <FooterSection title="Services">
      {services.map((service) => (
        <FooterLink key={service.title} href={service.href}>
          {service.title}
        </FooterLink>
      ))}
    </FooterSection>
  );
};

export default ServicesSection;
