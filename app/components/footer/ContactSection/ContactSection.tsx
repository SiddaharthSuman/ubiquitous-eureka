'use client';

import { Email, LocationOn } from '@mui/icons-material';
import React from 'react';

import { ContactItem, FooterSection } from '../../ui';

interface ContactInfo {
  email: string;
  location: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  return (
    <FooterSection title="Contact">
      <ContactItem icon={<Email fontSize="small" />} text={contactInfo.email} />
      <ContactItem icon={<LocationOn fontSize="small" />} text={contactInfo.location} />
    </FooterSection>
  );
};

export default ContactSection;
