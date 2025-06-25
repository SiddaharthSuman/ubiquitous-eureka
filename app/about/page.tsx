'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { Business, Group, Lightbulb, TrendingUp } from '@mui/icons-material';

import styles from './page.module.scss';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography className={styles.heroTitle} variant="h1">
                About <span className={styles.highlight}>AI Consulting</span>
              </Typography>
              <Typography className={styles.heroSubtitle} variant="h2">
                We&apos;re a team of AI experts passionate about helping businesses harness the
                power of artificial intelligence to drive innovation and growth.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.heroImage}>
                <div className={styles.heroVisual}>
                  <div className={styles.floatingCard}>
                    <Group className={styles.cardIcon} />
                    <Typography variant="h6">Expert Team</Typography>
                  </div>
                  <div className={styles.floatingCard}>
                    <Lightbulb className={styles.cardIcon} />
                    <Typography variant="h6">Innovation</Typography>
                  </div>
                  <div className={styles.floatingCard}>
                    <TrendingUp className={styles.cardIcon} />
                    <Typography variant="h6">Growth</Typography>
                  </div>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Story Section */}
      <section className={styles.story}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Our Story
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            From vision to reality: How we&apos;re shaping the future of AI consulting
          </Typography>

          <Grid container className={styles.storyGrid} spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography className={styles.storyText}>
                Founded in 2020, AI Consulting emerged from a simple belief: every business,
                regardless of size or industry, deserves access to cutting-edge AI solutions that
                can transform their operations and drive meaningful results.
              </Typography>
              <Typography className={styles.storyText}>
                Our journey began when our founders, seasoned AI researchers and business
                strategists, recognized a critical gap in the market. While AI technology was
                advancing rapidly, many organizations struggled to implement it effectively or
                understand its true potential for their specific needs.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography className={styles.storyText}>
                Today, we&apos;ve helped over 200+ companies across various industries implement AI
                solutions that have generated millions in additional revenue, improved operational
                efficiency, and created competitive advantages in their markets.
              </Typography>
              <Typography className={styles.storyText}>
                Our approach combines deep technical expertise with business acumen, ensuring that
                every AI solution we develop is not just technologically advanced, but also
                strategically aligned with our clients&apos; business objectives.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Values Section */}
      <section className={styles.values}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Our Values
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            The principles that guide everything we do
          </Typography>

          <Grid container className={styles.valuesGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.valueCard}>
                <Lightbulb className={styles.valueIcon} />
                <Typography className={styles.valueTitle} variant="h4">
                  Innovation
                </Typography>
                <Typography className={styles.valueDescription}>
                  We constantly push the boundaries of what&apos;s possible with AI, exploring new
                  technologies and methodologies to deliver cutting-edge solutions.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.valueCard}>
                <Business className={styles.valueIcon} />
                <Typography className={styles.valueTitle} variant="h4">
                  Excellence
                </Typography>
                <Typography className={styles.valueDescription}>
                  We maintain the highest standards in everything we do, from code quality to client
                  communication, ensuring exceptional results every time.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.valueCard}>
                <Group className={styles.valueIcon} />
                <Typography className={styles.valueTitle} variant="h4">
                  Partnership
                </Typography>
                <Typography className={styles.valueDescription}>
                  We believe in building long-term relationships with our clients, working as true
                  partners to achieve their goals and drive sustainable success.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Our Team
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            Meet the experts behind our AI solutions
          </Typography>

          <Grid container className={styles.teamGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.teamCard}>
                <Box className={styles.teamAvatar}>
                  <Typography variant="h3">JD</Typography>
                </Box>
                <Typography className={styles.teamName} variant="h4">
                  Dr. Jane Doe
                </Typography>
                <Typography className={styles.teamRole} variant="h5">
                  Chief AI Officer
                </Typography>
                <Typography className={styles.teamBio}>
                  Former research lead at Google AI with 15+ years in machine learning and neural
                  networks.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.teamCard}>
                <Box className={styles.teamAvatar}>
                  <Typography variant="h3">JS</Typography>
                </Box>
                <Typography className={styles.teamName} variant="h4">
                  John Smith
                </Typography>
                <Typography className={styles.teamRole} variant="h5">
                  Head of Engineering
                </Typography>
                <Typography className={styles.teamBio}>
                  Ex-Microsoft engineer specializing in scalable AI infrastructure and cloud
                  solutions.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.teamCard}>
                <Box className={styles.teamAvatar}>
                  <Typography variant="h3">MJ</Typography>
                </Box>
                <Typography className={styles.teamName} variant="h4">
                  Maria Johnson
                </Typography>
                <Typography className={styles.teamRole} variant="h5">
                  Lead Data Scientist
                </Typography>
                <Typography className={styles.teamBio}>
                  PhD in Statistics with expertise in predictive modeling and business intelligence.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <Box className={styles.teamCard}>
                <Box className={styles.teamAvatar}>
                  <Typography variant="h3">DW</Typography>
                </Box>
                <Typography className={styles.teamName} variant="h4">
                  David Wilson
                </Typography>
                <Typography className={styles.teamRole} variant="h5">
                  Business Strategy Director
                </Typography>
                <Typography className={styles.teamBio}>
                  Former McKinsey consultant with deep expertise in AI transformation strategies.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <Container maxWidth="lg">
          <Grid container className={styles.statsGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.statCard}>
                <Typography className={styles.statNumber} variant="h1">
                  200+
                </Typography>
                <Typography className={styles.statLabel} variant="h4">
                  Clients Served
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.statCard}>
                <Typography className={styles.statNumber} variant="h1">
                  500+
                </Typography>
                <Typography className={styles.statLabel} variant="h4">
                  AI Projects
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.statCard}>
                <Typography className={styles.statNumber} variant="h1">
                  $50M+
                </Typography>
                <Typography className={styles.statLabel} variant="h4">
                  Revenue Generated
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Box className={styles.statCard}>
                <Typography className={styles.statNumber} variant="h1">
                  98%
                </Typography>
                <Typography className={styles.statLabel} variant="h4">
                  Client Satisfaction
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
