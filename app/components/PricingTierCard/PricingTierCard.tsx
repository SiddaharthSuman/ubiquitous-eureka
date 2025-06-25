import { Box, Button, Typography } from '@mui/material';

import InfoIcon from '../InfoIcon/InfoIcon';

import styles from './PricingTierCard.module.scss';

interface PricingTierCardProps {
  data: {
    borderColor: string;
    color: string;
    ctaButton: {
      color: string;
      text: string;
      variant: string;
    };
    description: string;
    features: {
      hasInfoIcon: boolean;
      name: string;
      tooltip: string;
    }[];
    highlight: boolean;
    name: string;
    notes: string[];
    textColor: string;
  };
}

const PricingTierCard = ({ data }: PricingTierCardProps) => {
  return (
    <Box className={styles.cardContainer}>
      {data.highlight && <Typography className={styles.popularBadge}>- Most Popular -</Typography>}

      <Box className={data.highlight ? styles.cardHighlighted : styles.card}>
        <Box>
          <Box className={styles.cardHeader}>
            <Typography className={styles.tierName}>{data.name}</Typography>
            <Typography className={styles.tierDescription}>{data.description}</Typography>
          </Box>

          <Box className={styles.featuresList}>
            {data.features.map((feature, index) => (
              <Box key={index} className={styles.featureItem}>
                <Typography className={styles.featureName}>{feature.name}</Typography>
                {feature.hasInfoIcon && <InfoIcon tooltipText={feature.tooltip} />}
              </Box>
            ))}
          </Box>

          {data.notes.length > 0 && (
            <Box className={styles.notes}>
              {data.notes.map((note, index) => (
                <Typography key={index} className={styles.note}>
                  {note}
                </Typography>
              ))}
            </Box>
          )}
        </Box>

        <Button
          fullWidth
          className={styles.ctaButton}
          color={data.ctaButton.color as 'primary' | 'secondary'}
          variant={data.ctaButton.variant as 'outlined' | 'contained'}
        >
          {data.ctaButton.text}
        </Button>
      </Box>
    </Box>
  );
};

export default PricingTierCard;
