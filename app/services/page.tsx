'use client';

import { Box, Container, Grid, Typography, Button } from '@mui/material';
import {
  Analytics,
  AutoAwesome,
  Business,
  Cloud,
  DataObject,
  Psychology,
  Security,
  Speed,
} from '@mui/icons-material';

import styles from './page.module.scss';

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.heroTitle} variant="h1">
            Our <span className={styles.highlight}>AI Services</span>
          </Typography>
          <Typography align="center" className={styles.heroSubtitle} variant="h2">
            Comprehensive AI solutions tailored to transform your business operations and drive
            growth
          </Typography>
        </Container>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesOverview}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <AutoAwesome className={styles.serviceIcon} />
                <Typography className={styles.serviceTitle} variant="h4">
                  AI Strategy Consulting
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Develop a comprehensive AI roadmap aligned with your business objectives and
                  market opportunities.
                </Typography>
                <ul className={styles.serviceFeatures}>
                  <li>AI readiness assessment</li>
                  <li>Technology stack recommendations</li>
                  <li>ROI analysis and projections</li>
                  <li>Implementation roadmap</li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <DataObject className={styles.serviceIcon} />
                <Typography className={styles.serviceTitle} variant="h4">
                  Machine Learning Development
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Custom ML models and algorithms designed to solve your specific business
                  challenges.
                </Typography>
                <ul className={styles.serviceFeatures}>
                  <li>Predictive modeling</li>
                  <li>Natural language processing</li>
                  <li>Computer vision solutions</li>
                  <li>Recommendation systems</li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <Analytics className={styles.serviceIcon} />
                <Typography className={styles.serviceTitle} variant="h4">
                  Data Analytics & BI
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Transform raw data into actionable insights with advanced analytics and
                  visualization.
                </Typography>
                <ul className={styles.serviceFeatures}>
                  <li>Data pipeline development</li>
                  <li>Real-time dashboards</li>
                  <li>Advanced reporting</li>
                  <li>Performance optimization</li>
                </ul>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.serviceCard}>
                <Cloud className={styles.serviceIcon} />
                <Typography className={styles.serviceTitle} variant="h4">
                  AI Infrastructure
                </Typography>
                <Typography className={styles.serviceDescription}>
                  Scalable cloud infrastructure and deployment solutions for AI applications.
                </Typography>
                <ul className={styles.serviceFeatures}>
                  <li>Cloud architecture design</li>
                  <li>Model deployment & scaling</li>
                  <li>Monitoring & maintenance</li>
                  <li>Security implementation</li>
                </ul>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Specialized Services */}
      <section className={styles.specializedServices}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Specialized Solutions
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            Industry-specific AI applications that deliver measurable results
          </Typography>

          <Grid container className={styles.specializedGrid} spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.specializedCard}>
                <Business className={styles.specializedIcon} />
                <Typography className={styles.specializedTitle} variant="h3">
                  Financial Services AI
                </Typography>
                <Typography className={styles.specializedDescription}>
                  Risk assessment, fraud detection, algorithmic trading, and customer behavior
                  analysis for financial institutions.
                </Typography>
                <Box className={styles.specializedFeatures}>
                  <span className={styles.featureTag}>Fraud Detection</span>
                  <span className={styles.featureTag}>Credit Scoring</span>
                  <span className={styles.featureTag}>Trading Algorithms</span>
                  <span className={styles.featureTag}>Compliance</span>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.specializedCard}>
                <Psychology className={styles.specializedIcon} />
                <Typography className={styles.specializedTitle} variant="h3">
                  Healthcare AI
                </Typography>
                <Typography className={styles.specializedDescription}>
                  Medical image analysis, patient data insights, drug discovery, and predictive
                  diagnostics for healthcare providers.
                </Typography>
                <Box className={styles.specializedFeatures}>
                  <span className={styles.featureTag}>Medical Imaging</span>
                  <span className={styles.featureTag}>Patient Analytics</span>
                  <span className={styles.featureTag}>Drug Discovery</span>
                  <span className={styles.featureTag}>Diagnostics</span>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.specializedCard}>
                <Speed className={styles.specializedIcon} />
                <Typography className={styles.specializedTitle} variant="h3">
                  Manufacturing AI
                </Typography>
                <Typography className={styles.specializedDescription}>
                  Predictive maintenance, quality control, supply chain optimization, and production
                  efficiency for manufacturers.
                </Typography>
                <Box className={styles.specializedFeatures}>
                  <span className={styles.featureTag}>Predictive Maintenance</span>
                  <span className={styles.featureTag}>Quality Control</span>
                  <span className={styles.featureTag}>Supply Chain</span>
                  <span className={styles.featureTag}>Automation</span>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.specializedCard}>
                <Security className={styles.specializedIcon} />
                <Typography className={styles.specializedTitle} variant="h3">
                  Cybersecurity AI
                </Typography>
                <Typography className={styles.specializedDescription}>
                  Threat detection, anomaly identification, automated response, and security
                  analytics for enterprise protection.
                </Typography>
                <Box className={styles.specializedFeatures}>
                  <span className={styles.featureTag}>Threat Detection</span>
                  <span className={styles.featureTag}>Anomaly Detection</span>
                  <span className={styles.featureTag}>Automated Response</span>
                  <span className={styles.featureTag}>Security Analytics</span>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Our Process
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            A proven methodology for successful AI implementation
          </Typography>

          <Grid container className={styles.processGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.processStep}>
                <Box className={styles.stepNumber}>01</Box>
                <Typography className={styles.stepTitle} variant="h4">
                  Discovery & Analysis
                </Typography>
                <Typography className={styles.stepDescription}>
                  We analyze your business needs, data infrastructure, and objectives to create a
                  tailored AI strategy.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.processStep}>
                <Box className={styles.stepNumber}>02</Box>
                <Typography className={styles.stepTitle} variant="h4">
                  Solution Design
                </Typography>
                <Typography className={styles.stepDescription}>
                  Our experts design custom AI solutions, select appropriate technologies, and plan
                  the implementation.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.processStep}>
                <Box className={styles.stepNumber}>03</Box>
                <Typography className={styles.stepTitle} variant="h4">
                  Development & Testing
                </Typography>
                <Typography className={styles.stepDescription}>
                  We build, test, and refine your AI solution with rigorous quality assurance and
                  performance optimization.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.processStep}>
                <Box className={styles.stepNumber}>04</Box>
                <Typography className={styles.stepTitle} variant="h4">
                  Deployment & Support
                </Typography>
                <Typography className={styles.stepDescription}>
                  Smooth deployment with ongoing support, monitoring, and continuous improvement of
                  your AI solution.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <Container maxWidth="lg">
          <Box className={styles.ctaContent}>
            <Typography align="center" className={styles.ctaTitle} variant="h2">
              Ready to Transform Your Business with AI?
            </Typography>
            <Typography align="center" className={styles.ctaSubtitle} variant="h3">
              Let&apos;s discuss how our AI solutions can drive innovation and growth for your
              organization.
            </Typography>
            <Box className={styles.ctaButtons}>
              <Button
                className={styles.primaryButton}
                href="/contact"
                size="large"
                variant="contained"
              >
                Get Started
              </Button>
              <Button
                className={styles.secondaryButton}
                href="/pricing"
                size="large"
                variant="outlined"
              >
                View Pricing
              </Button>
            </Box>
          </Box>
        </Container>
      </section>
    </div>
  );
}
