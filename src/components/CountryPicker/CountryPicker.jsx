import React, { useState, useEffect } from 'react';
import { Avatar, FormControl, InputLabel, Select, MenuItem, ListItemAvatar, ListItemText, ListItemIcon } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { getCountryData } from '../../config';
import { MdPublic } from 'react-icons/md';

const CountryPicker = ({ handleCountryPicker }) => {
  const [countryData, setCountryData] = useState({ countries: [], flags: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountryData();
      setCountryData(data);
      setLoading(false);
    };
    fetchData();
  }, [setLoading]);

  let countries = null;
  if (countryData?.countries) {
    countries = countryData.countries.map((item, i) => (
      <MenuItem key={i} value={item}>
        <ListItemAvatar>
          <Avatar src={countryData.flags[i]} />
        </ListItemAvatar>
        <ListItemText primary={item} />
      </MenuItem>
    ));
  }

  return (
    <div className={styles.countryPicker}>
      <FormControl variant="filled" className={styles.formControl} disabled={!loading == 0 ? true : false}>
        <InputLabel htmlFor="countrySelect" className={styles.formLabel}>
          Select Country
        </InputLabel>
        <Select id="countrySelect" className={styles.formSelect} defaultValue={''} onChange={e => handleCountryPicker(e.target.value)}>
          <MenuItem default key={999} value="all">
            <ListItemIcon>
              <MdPublic size="2.8rem" color="#0000e6" />
            </ListItemIcon>
            <ListItemText primary="World Wide Updates" />
          </MenuItem>
          {countries}
        </Select>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
