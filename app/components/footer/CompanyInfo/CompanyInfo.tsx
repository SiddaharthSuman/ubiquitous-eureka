'use client';

import { Stack, Typography } from '@mui/material';
import { Email, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react';

import { SocialIconButton } from '../../ui';

import styles from './CompanyInfo.module.scss';

interface CompanyInfoProps {
  companyName: string;
  description: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyName, description }) => {
  return (
    <>
      <Typography className={styles.companyName} variant="h5">
        {companyName}
      </Typography>
      <Typography className={styles.companyDescription} variant="body2">
        {description}
      </Typography>
      <Stack direction="row" spacing={1}>
        <SocialIconButton href="https://linkedin.com/company/aiconsulting">
          <LinkedIn fontSize="small" />
        </SocialIconButton>
        <SocialIconButton href="https://twitter.com/aiconsulting">
          <Twitter fontSize="small" />
        </SocialIconButton>
        <SocialIconButton href="mailto:hello@aiconsulting.com">
          <Email fontSize="small" />
        </SocialIconButton>
      </Stack>
    </>
  );
};

export default CompanyInfo;
