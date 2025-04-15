import { Box, Container, styled, ContainerProps, Grid, Typography } from '@mui/material';
import React, { MouseEventHandler } from 'react';

// import NavButton from '../NavButton/NavButton';
import SubmenuItem from '../SubmenuItem/SubmenuItem';

import styles from './Submenu.module.scss';

const StyledContainer = styled(Container)<ContainerProps>(({}) => ({
  backgroundColor: 'white',
  borderRadius: '20px',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  paddingBlock: '40px',
}));

interface SubmenuProps {
  onMouseOut: MouseEventHandler;
  onMouseOver: MouseEventHandler;
  open: boolean;
  submenuItems: null | Array<{
    columnSize: number;
    items: Array<{
      description: string;
      hasImage: boolean;
      icon: string;
      imgUrl?: string;
      title: string;
    }>;
    title: string;
  }>;
}

const Submenu = ({ onMouseOut, onMouseOver, open, submenuItems }: SubmenuProps) => {
  // if (!submenuItems) {
  //   return null;
  // }

  return (
    <Box className={`${styles.submenuDiv} ${open && `${styles.submenuOpen}`}`}>
      <StyledContainer
        fixed
        className={styles.submenuContainer}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
      >
        <Grid container sx={{ px: 2 }}>
          {submenuItems?.map((submenuItem, index) => (
            <Grid key={index} size={submenuItem.columnSize}>
              <Typography mb={2} sx={{ color: 'black' }} variant="h6">
                {submenuItem.title}
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gap: '40px 28px',
                  gridTemplateColumns: `repeat(${submenuItem.columnSize / 4}, 1fr)`,
                }}
              >
                {submenuItem.items.map((item, index) => (
                  <SubmenuItem
                    key={index}
                    description={item.description}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default Submenu;
