import React, { Component } from 'react';
import Forecast from './Forecast';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { forecast: [] };
  }

  componentDidMount() {
    let forecast = require('../data/forecast.js');

    this.setState({ forecast: forecast.default.forecast.simpleforecast.forecastday.slice(0, 3) });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Forecast forecast={this.state.forecast}/>
        </div>
      </div>
    );
  }
}

export default App;
