import React from 'react';

//eslint-disable-next-line no-unused-vars
import styles from './App.css';

import { getOverviewData } from './config';
import { Overview, Chart, CountryPicker } from './components';

export class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  handleCountryPicker = async country => {
    const data = await getOverviewData(country);
    this.setState({ data, country });
  };

  async componentDidMount() {
    const data = await getOverviewData();
    this.setState({ data });
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <Overview data={data} />
        <CountryPicker handleCountryPicker={this.handleCountryPicker} />
        <Chart country={country} />
      </div>
    );
  }
}
