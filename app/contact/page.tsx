'use client';

import { Box, Container, Grid, Typography, TextField, Button, Paper } from '@mui/material';
import { Email, Phone, LocationOn, Schedule, Send, Business } from '@mui/icons-material';

import styles from './page.module.scss';

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.heroTitle} variant="h1">
            Get in <span className={styles.highlight}>Touch</span>
          </Typography>
          <Typography align="center" className={styles.heroSubtitle} variant="h2">
            Ready to transform your business with AI? Let&apos;s start the conversation.
          </Typography>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactForm}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper className={styles.formPaper}>
                <Typography className={styles.formTitle} variant="h3">
                  Send us a Message
                </Typography>
                <Typography className={styles.formSubtitle} variant="h4">
                  Tell us about your project and we&apos;ll get back to you within 24 hours.
                </Typography>

                <Box className={styles.form} component="form">
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        required
                        className={styles.formField}
                        label="First Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        required
                        className={styles.formField}
                        label="Last Name"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        className={styles.formField}
                        label="Email Address"
                        type="email"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        className={styles.formField}
                        label="Company"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        className={styles.formField}
                        label="Phone Number"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        select
                        className={styles.formField}
                        label="Project Type"
                        variant="outlined"
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <option value="">Select a project type</option>
                        <option value="ai-strategy">AI Strategy Consulting</option>
                        <option value="ml-development">Machine Learning Development</option>
                        <option value="data-analytics">Data Analytics & BI</option>
                        <option value="ai-infrastructure">AI Infrastructure</option>
                        <option value="custom-solution">Custom AI Solution</option>
                        <option value="other">Other</option>
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        select
                        className={styles.formField}
                        label="Project Budget"
                        variant="outlined"
                        SelectProps={{
                          native: true,
                        }}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-250k">$100,000 - $250,000</option>
                        <option value="250k-500k">$250,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                        <option value="undecided">Not sure yet</option>
                      </TextField>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        multiline
                        required
                        className={styles.formField}
                        label="Project Description"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        className={styles.submitButton}
                        size="large"
                        startIcon={<Send />}
                        type="submit"
                        variant="contained"
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box className={styles.contactInfo}>
                <Typography className={styles.infoTitle} variant="h3">
                  Contact Information
                </Typography>

                <Box className={styles.infoItem}>
                  <Email className={styles.infoIcon} />
                  <Box>
                    <Typography className={styles.infoLabel} variant="h5">
                      Email
                    </Typography>
                    <Typography className={styles.infoValue} variant="h4">
                      hello@aiconsulting.com
                    </Typography>
                  </Box>
                </Box>

                <Box className={styles.infoItem}>
                  <Phone className={styles.infoIcon} />
                  <Box>
                    <Typography className={styles.infoLabel} variant="h5">
                      Phone
                    </Typography>
                    <Typography className={styles.infoValue} variant="h4">
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Box>

                <Box className={styles.infoItem}>
                  <LocationOn className={styles.infoIcon} />
                  <Box>
                    <Typography className={styles.infoLabel} variant="h5">
                      Office
                    </Typography>
                    <Typography className={styles.infoValue} variant="h4">
                      123 AI Street
                      <br />
                      San Francisco, CA 94105
                    </Typography>
                  </Box>
                </Box>

                <Box className={styles.infoItem}>
                  <Schedule className={styles.infoIcon} />
                  <Box>
                    <Typography className={styles.infoLabel} variant="h5">
                      Business Hours
                    </Typography>
                    <Typography className={styles.infoValue} variant="h4">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat - Sun: Closed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Office Locations */}
      <section className={styles.offices}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Our Offices
          </Typography>
          <Typography align="center" className={styles.sectionSubtitle} variant="h3">
            Global presence, local expertise
          </Typography>

          <Grid container className={styles.officesGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.officeCard}>
                <Business className={styles.officeIcon} />
                <Typography className={styles.officeTitle} variant="h4">
                  San Francisco
                </Typography>
                <Typography className={styles.officeAddress} variant="h5">
                  123 AI Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </Typography>
                <Typography className={styles.officePhone} variant="h5">
                  +1 (555) 123-4567
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.officeCard}>
                <Business className={styles.officeIcon} />
                <Typography className={styles.officeTitle} variant="h4">
                  New York
                </Typography>
                <Typography className={styles.officeAddress} variant="h5">
                  456 Tech Avenue
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </Typography>
                <Typography className={styles.officePhone} variant="h5">
                  +1 (555) 987-6543
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box className={styles.officeCard}>
                <Business className={styles.officeIcon} />
                <Typography className={styles.officeTitle} variant="h4">
                  London
                </Typography>
                <Typography className={styles.officeAddress} variant="h5">
                  789 Innovation Lane
                  <br />
                  London, EC1A 1BB
                  <br />
                  United Kingdom
                </Typography>
                <Typography className={styles.officePhone} variant="h5">
                  +44 20 7123 4567
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <Container maxWidth="lg">
          <Typography align="center" className={styles.sectionTitle} variant="h2">
            Frequently Asked Questions
          </Typography>

          <Grid container className={styles.faqGrid} spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.faqItem}>
                <Typography className={styles.faqQuestion} variant="h4">
                  How quickly can you start a project?
                </Typography>
                <Typography className={styles.faqAnswer} variant="h5">
                  We typically begin projects within 2-4 weeks after the initial consultation and
                  contract signing. The exact timeline depends on project complexity and our current
                  capacity.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.faqItem}>
                <Typography className={styles.faqQuestion} variant="h4">
                  What industries do you specialize in?
                </Typography>
                <Typography className={styles.faqAnswer} variant="h5">
                  We work across various industries including finance, healthcare, manufacturing,
                  retail, and technology. Our expertise spans from startups to Fortune 500
                  companies.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.faqItem}>
                <Typography className={styles.faqQuestion} variant="h4">
                  Do you provide ongoing support?
                </Typography>
                <Typography className={styles.faqAnswer} variant="h5">
                  Yes, we offer comprehensive support packages including maintenance, monitoring,
                  updates, and continuous improvement of your AI solutions.
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box className={styles.faqItem}>
                <Typography className={styles.faqQuestion} variant="h4">
                  What is your typical project timeline?
                </Typography>
                <Typography className={styles.faqAnswer} variant="h5">
                  Project timelines vary from 3-12 months depending on complexity. Simple AI
                  implementations can be completed in 3-6 months, while complex enterprise solutions
                  may take 6-12 months.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
}
