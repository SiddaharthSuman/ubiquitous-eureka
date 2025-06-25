'use client';

import { Box, Container, Divider, Grid } from '@mui/material';
import React from 'react';

import footerData from '../../data/footer.json';

import CompanyInfo from './CompanyInfo/CompanyInfo';
import CompanySection from './CompanySection/CompanySection';
import ContactSection from './ContactSection/ContactSection';
import FooterBottom from './FooterBottom/FooterBottom';
import ServicesSection from './ServicesSection/ServicesSection';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <Box className={styles.footer} component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <CompanyInfo
              companyName={footerData.company.name}
              description={footerData.company.description}
            />
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <ServicesSection services={footerData.services} />
          </Grid>

          {/* Company */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <CompanySection links={footerData.companyLinks} />
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 2 }}>
            <ContactSection contactInfo={footerData.contactInfo} />
          </Grid>
        </Grid>

        <Divider className={styles.divider} />

        {/* Bottom Section */}
        <FooterBottom companyName={footerData.company.name} links={footerData.bottomLinks} />
      </Container>
    </Box>
  );
};

export default Footer;
