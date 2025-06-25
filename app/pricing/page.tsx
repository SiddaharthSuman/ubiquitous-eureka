import { Grid, Typography } from '@mui/material';

import PricingTierCard from '../components/PricingTierCard/PricingTierCard';
import pricingData from '../data/pricing-tiers.json';

import styles from './page.module.scss';

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography className={styles.heading} variant="h1">
            AI Consulting Services
          </Typography>
          <Typography className={styles.subheading} variant="h2">
            Choose the right plan for your AI transformation journey
          </Typography>
        </Grid>
        <Grid container className={styles.pricingContainer} size={12}>
          {pricingData.pricingTiers.map((tier, index) => (
            <Grid key={index} size={12 / pricingData.pricingTiers.length} sx={{ display: 'flex' }}>
              <PricingTierCard data={tier} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
