import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { getHistoricalData } from '../../config';
// import styles from './Chart.module.css';

const Chart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistoricalData();
      setChartData(data);
    };
    fetchData();
  }, []);

  /*eslint-disable no-unused-vars */
  function getValueData(obj = {}) {
    const arr = [];
    for (let [key, value] of Object.entries(obj)) {
      arr.push(value); // "first", "one"
    }
    let newArr = arr.map((item, index) => item - [arr[index - 1] || 0]);
    newArr[0] = 0;
    return newArr;
  }
  function getKeyData(obj = {}) {
    const arr = [];
    for (let [key, value] of Object.entries(obj)) {
      arr.push(key); // "first", "one"
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

  return <div>{LineChart}</div>;
};

export default Chart;
