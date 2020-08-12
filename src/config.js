/* eslint-disable no-console*/

import axios from 'axios';

const baseURL = 'https://disease.sh/v3/covid-19';
const axiosConfig = { baseURL };
axios.create(axiosConfig);

export const getGlobalData = async () => {
  try {
    const {
      data: { cases, active, recovered, deaths, todayCases, todayDeaths, todayRecovered, updated }
    } = await axios.get('/all', axiosConfig);
    return {
      cases,
      active,
      recovered,
      deaths,
      todayCases,
      todayDeaths,
      todayRecovered,
      updated
    };
  } catch (error) {
    console.log(error);
  }
};

export const getHistoricalData = async () => {
  try {
    const { data } = await axios.get('/historical/all?lastdays=100', axiosConfig);
    return data;
  } catch (error) {
    console.log();
  }
};
