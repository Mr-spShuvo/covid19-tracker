import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { getHistoricalData } from '../../config';
import { Typography } from '@material-ui/core';
import styles from './Chart.module.css';

const Chart = ({ country }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistoricalData(country);
      setChartData(data);
    };
    fetchData();
  }, [country]);

  /*eslint-disable no-unused-vars */
  function getValueData(obj = {}) {
    const arr = [];
    for (let [key, value] of Object.entries(obj)) {
      arr.push(value);
    }
    let newArr = arr.map((item, index) => item - [arr[index - 1] || 0]);
    newArr[0] = 0;
    return newArr;
  }
  function getKeyData(obj = {}) {
    const arr = [];
    for (let [key, value] of Object.entries(obj)) {
      arr.push(key);
    }
    arr[0] = 'DD-MM-YYYY';
    return arr;
  }

  const LineChart = chartData ? (
    <Line
      data={{
        labels: getKeyData(chartData.cases).map(item => item),
        datasets: [
          {
            data: getValueData(chartData.cases).map(item => item),
            label: 'Infected',
            borderColor: 'orange',
            fill: true
          },
          {
            data: getValueData(chartData.deaths).map(item => item),
            label: 'Death',
            borderColor: 'tomato',
            fill: true
          },
          {
            data: getValueData(chartData.recovered).map(item => item),
            label: 'Recovered',
            borderColor: 'mediumseagreen',
            fill: true
          }
        ]
      }}
    />
  ) : null;

  return (
    <div className={styles.chart}>
      <Typography color="textSecondary" variant="h5" className={styles.chartTitle}>
        Relative Data for Last 100 Days
      </Typography>
      <div>{LineChart}</div>
    </div>
  );
};

export default Chart;
