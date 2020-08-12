import React from 'react';
import { Grid } from '@material-ui/core';
import CardItemSkeleton from '../CardItem/CardItemSkeleton.jsx';

export default function OverviewSkeleton() {
  return (
    <>
      <Grid container spacing={3} justify="center">
        <CardItemSkeleton />
        <CardItemSkeleton />
        <CardItemSkeleton />
      </Grid>
    </>
  );
}
