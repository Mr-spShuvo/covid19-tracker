/* eslint-disable no-console*/

import axios from 'axios';

const baseURL = 'https://disease.sh/v3/covid-19';
const axiosConfig = { baseURL };
axios.create(axiosConfig);

export const getOverviewData = async (country = 'all') => {
  let url = `/countries/${country}`;
  if (country === 'all') {
    url = '/all';
  }
  try {
    const {
      data: { cases, active, recovered, deaths, todayCases, todayDeaths, todayRecovered, updated }
    } = await axios.get(url, axiosConfig);
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
    return error;
  }
};

export const getHistoricalData = async (country = 'all') => {
  const url = country ? `/historical/${country}?lastdays=100` : `/historical/all?lastdays=100`;
  try {
    const { data } = await axios.get(url, axiosConfig);
    const newData = country === 'all' || !country ? data : data.timeline;
    console.log(newData);
    return newData;
  } catch (error) {
    return error;
  }
};

export const getCountryData = async () => {
  try {
    const { data } = await axios.get('/countries', axiosConfig);
    const countries = data.map(item => item.country);
    const flags = data.map(item => item.countryInfo.flag);
    return { countries, flags };
  } catch (error) {
    return error;
  }
};
