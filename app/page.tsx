import { Grid, Typography } from '@mui/material';

import styles from './page.module.scss';
import PricingTierCard from './components/PricingTierCard/PricingTierCard';
import pricingData from './data/pricing-tiers.json';

// Before saving
// interface TestProps {

// }

export default function Home() {
  return (
    // <Container >
    <Grid container className={styles.container} spacing={2}>
      <Grid size={12}>
        <Typography
          className={styles.heading}
          sx={{ fontWeight: '500', letterSpacing: -2 }}
          variant="h3"
        >
          Plans and Pricing
        </Typography>
      </Grid>
      <Grid container className={styles.pricingContainer} size={12} sx={{ alignItems: 'stretch' }}>
        {pricingData.pricingTiers.map((tier, index) => (
          <Grid key={index} size={12 / pricingData.pricingTiers.length} sx={{ display: 'flex' }}>
            <PricingTierCard data={tier}></PricingTierCard>
          </Grid>
        ))}
      </Grid>
    </Grid>
    // </Container>
  );
}
