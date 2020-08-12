import React from 'react';

import styles from './App.module.css';
import { getGlobalData } from './config';
import { Overview, Chart, CountryPicker } from './components';

export class App extends React.Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    const data = await getGlobalData();
    this.setState({ data });
  }
  render() {
    const data = this.state.data;
    return (
      <div className={styles.container}>
        <Overview data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}
