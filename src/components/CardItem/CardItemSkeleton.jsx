import React from 'react';

import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import styles from './CardItem.module.css';

const CardItemSkeleton = () => {
  return (
    <Grid className={styles.cardBox} item component={Card}>
      <CardContent className={styles.card}>
        <Typography variant="body1" gutterBottom>
          <Skeleton />
        </Typography>
        <Typography variant="h3" color="textSecondary">
          <Skeleton />
        </Typography>
        <Typography variant="caption">
          <Skeleton />
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItemSkeleton;
