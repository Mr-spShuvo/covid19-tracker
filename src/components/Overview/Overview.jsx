import React from 'react';

import { Typography, Grid } from '@material-ui/core';
import { RiEmotionUnhappyLine, RiEmotionSadLine, RiEmotionLine } from 'react-icons/ri';
import CardItem from '../CardItem/CardItem.jsx';
import styles from './Overview.module.css';
import OverviewSkeleton from './OverviewSkeleton.jsx';

const Overview = ({ data: { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered, updated } }) => {
  if (!cases) return <OverviewSkeleton></OverviewSkeleton>;
  return (
    <>
      <Grid container spacing={3} justify="center">
        <CardItem Icon={RiEmotionUnhappyLine} titleText={'Infected'} todayData={todayCases} totalData={cases} detailsText={'active cases'} cardStyle="cases" />
        <CardItem Icon={RiEmotionSadLine} titleText={'Death'} todayData={todayDeaths} totalData={deaths} detailsText={'total deaths'} cardStyle="deaths" />
        <CardItem Icon={RiEmotionLine} titleText={'Recovered'} todayData={todayRecovered} totalData={recovered} detailsText={'total recovered'} cardStyle="recovered" />
      </Grid>
      <Typography color="textSecondary" className={styles.lastUpdate}>
        Last updated on
        <br /> {new Date(updated).toDateString()}, {new Date(updated).toLocaleTimeString().split(' ')[0]}
      </Typography>
    </>
  );
};

export default Overview;
