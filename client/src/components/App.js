import React, { Component } from 'react';
import axios from 'axios';
import { isEqual } from 'lodash';
import '../styles/App.css';

import Loading from './Loading';
import Home from './Home';


class App extends Component {
  constructor() {
    super();

    this.state = {
      forecast: {
        city: '',
        state: '',
        forecastDays: []
      },
      error: {
        hasErrored: false,
        errorMessage: ''
      },
      isLoading: false,
      showZipForm: true,
    };

    this.handleZipSubmit = this.handleZipSubmit.bind(this);
    this.handleShowZipForm = this.handleShowZipForm.bind(this);
  }

  handleZipSubmit(zip) {
    this.setState({ isLoading: true });

    axios.get(`api/weather/${zip}`)
      .then(response => {

        if (isEqual(response.data, {})) {
          this.setState({
            forecast: {
              city: '',
              state: '',
              forecastDays: []
            },
            error: {
              hasErrored: true,
              errorMessage: 'An Error Occurred; Please Try Your Request Again.'
            },
            isLoading: false,
            showZipForm: true
          });

          throw response.data.error

        } else {
          let { city, state, forecasts } = response.data;

          this.setState({
            forecast: {
              city,
              state,
              forecastDays: forecasts
            },
            error: {
              hasErrored: false,
              errorMessage: ''
            },
            isLoading: false,
            showZipForm: false
          });
        }


      })
      .catch(err => {
        console.log(err)
      })
  }

  handleShowZipForm() {
    this.setState({ showZipForm: true });
  }

  render() {
    let { isLoading, showZipForm } = this.state;

      return (
        <div className="App">
          <div className="container">
            { isLoading ? <Loading /> : <Home handleZipSubmit={this.handleZipSubmit} forecast={this.state.forecast} error={this.state.error} showZipForm={showZipForm} handleShowZipForm={this.handleShowZipForm}/> }
          </div>
        </div>
      )
  }
}

export default App;
