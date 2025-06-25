'use client';

import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { ArrowForward, TrendingUp, Lightbulb, Shield, FlashOn } from '@mui/icons-material';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography className={styles.heroTitle} variant="h1">
                Transform Your Business with <span className={styles.highlight}>AI Solutions</span>
              </Typography>
              <Typography className={styles.heroSubtitle} variant="h2">
                Expert AI consulting to help you harness the power of artificial intelligence and
                drive innovation across your organization.
              </Typography>
              <Box className={styles.heroButtons}>
                <Button
                  className={styles.primaryButton}
                  endIcon={<ArrowForward />}
                  size="large"
                  variant="contained"
                >
                  Get Started
                </Button>
                <Button className={styles.secondaryButton} size="large" variant="outlined">
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.heroImage}>
                <div className={styles.heroVisual}>
                  <div className={styles.floatingCard}>
                    <TrendingUp className={styles.cardIcon} />
                    <Typography variant="h6">AI Analytics</Typography>
                  </div>
                  <div className={styles.floatingCard}>
                    <Lightbulb className={styles.cardIcon} />
                    <Typography variant="h6">Smart Solutions</Typography>
                  </div>
                  <div className={styles.floatingCard}>
                    <Shield className={styles.cardIcon} />
                    <Typography variant="h6">Secure & Reliable</Typography>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Why Choose Our AI Consulting?
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            We combine deep technical expertise with business acumen to deliver results
          </Typography>

          <Grid container className={styles.featuresGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.featureCard}>
                <FlashOn className={styles.featureIcon} />
                <Typography className={styles.featureTitle} variant="h4">
                  Rapid Implementation
                </Typography>
                <Typography className={styles.featureDescription}>
                  Get your AI solutions up and running quickly with our proven implementation
                  methodology.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.featureCard}>
                <TrendingUp className={styles.featureIcon} />
                <Typography className={styles.featureTitle} variant="h4">
                  Measurable Results
                </Typography>
                <Typography className={styles.featureDescription}>
                  Track ROI and performance improvements with our comprehensive analytics and
                  reporting.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.featureCard}>
                <Shield className={styles.featureIcon} />
                <Typography className={styles.featureTitle} variant="h4">
                  Enterprise Security
                </Typography>
                <Typography className={styles.featureDescription}>
                  Built with enterprise-grade security and compliance standards for your peace of
                  mind.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Services Overview */}
      <section className={styles.services}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Our Services
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            Comprehensive AI solutions tailored to your business needs
          </Typography>

          <Grid container className={styles.servicesGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <Typography className={styles.serviceTitle} variant="h4">
                  AI Strategy
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Develop a comprehensive AI roadmap aligned with your business objectives.
                </Typography>
                <ul className={styles.serviceList}>
                  <li>Business Process Analysis</li>
                  <li>Use Case Identification</li>
                  <li>ROI Assessment</li>
                  <li>Technology Roadmap</li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <Typography className={styles.serviceTitle} variant="h4">
                  AI Development
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Custom AI solutions built specifically for your unique business challenges.
                </Typography>
                <ul className={styles.serviceList}>
                  <li>Machine Learning Models</li>
                  <li>Data Pipeline Setup</li>
                  <li>API Development</li>
                  <li>Integration Services</li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <Typography className={styles.serviceTitle} variant="h4">
                  AI Training
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Empower your team with AI knowledge and practical implementation skills.
                </Typography>
                <ul className={styles.serviceList}>
                  <li>Team Workshops</li>
                  <li>Technical Training</li>
                  <li>Best Practices</li>
                  <li>Ongoing Support</li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <Typography className={styles.serviceTitle} variant="h4">
                  AI Maintenance
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Continuous monitoring, updates, and optimization of your AI systems.
                </Typography>
                <ul className={styles.serviceList}>
                  <li>Performance Monitoring</li>
                  <li>Model Updates</li>
                  <li>System Optimization</li>
                  <li>24/7 Support</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <Container maxWidth="md">
          <Typography align="center" className={styles.ctaTitle} variant="h2">
            Ready to Transform Your Business?
          </Typography>
          <Typography align="center" className={styles.ctaSubtitle} variant="h3">
            Let&apos;s discuss how AI can drive innovation and growth for your organization.
          </Typography>
          <Box className={styles.ctaButtons}>
            <Button
              className={styles.primaryButton}
              endIcon={<ArrowForward />}
              size="large"
              variant="contained"
            >
              Book a Consultation
            </Button>
            <Button className={styles.secondaryButton} size="large" variant="outlined">
              View Pricing
            </Button>
          </Box>
        </Container>
      </section>
    </div>
  );
}
