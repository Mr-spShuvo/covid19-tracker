import React from 'react';

import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './CardItem.module.css';

const CardItem = ({ Icon, titleText, todayData, totalData, detailsText, cardStyle }) => {
  return (
    <Grid item xs={12} md={3} className={styles.cardBox} component={Card}>
      <CardContent className={`${styles.card}  ${styles[cardStyle]}`}>
        <Typography className={styles.cardTitle} color="textSecondary" gutterBottom>
          <Icon />
          {titleText}
        </Typography>
        <Typography variant="h5" gutterBottom>
          + <CountUp start={0} end={todayData} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{totalData.toLocaleString()}</Typography>
        <Typography variant="body2">{detailsText.toUpperCase()}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItem;
