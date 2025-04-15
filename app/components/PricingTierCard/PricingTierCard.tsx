import { Box, Button, Grid, Typography } from '@mui/material';

import InfoIcon from '../InfoIcon/InfoIcon';

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
    }[];
    highlight: boolean;
    name: string;
    notes: string[];
    textColor: string;
  };
}

const PricingTierCard = ({ data }: PricingTierCardProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 500,
          py: 1,
          textAlign: 'center',
          visibility: data.highlight ? 'visible' : 'hidden',
        }}
      >
        - Most Popular -
      </Typography>

      <Box
        sx={{
          backgroundColor: data.color,
          borderColor: data.borderColor,
          borderRadius: 2,
          borderStyle: 'solid',
          borderWidth: 1,
          color: data.textColor,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          padding: 2,
        }}
      >
        <Box>
          <Box sx={{ pb: 2 }}>
            <Typography sx={{ fontSize: '38px' }}>{data.name}</Typography>
            <Typography sx={{ fontSize: '18px', pt: 1 }}>{data.description}</Typography>
          </Box>

          <Grid container gap={1} sx={{ my: '20px' }}>
            {data.features.map((feature, index) => (
              <Grid
                key={index}
                size={12}
                sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography sx={{ fontWeight: '500', fontSize: '18px', textWrap: 'pretty' }}>
                  {feature.name}
                </Typography>
                {feature.hasInfoIcon && <InfoIcon />}
              </Grid>
            ))}
          </Grid>

          {data.notes.map((note, index) => (
            <Typography key={index} variant="body1">
              {note}
            </Typography>
          ))}
        </Box>

        <Button
          sx={{ borderColor: data.textColor, color: data.textColor, textTransform: 'none' }}
          variant="outlined"
        >
          {data.ctaButton.text}
        </Button>
      </Box>
    </Box>
  );
};

export default PricingTierCard;
