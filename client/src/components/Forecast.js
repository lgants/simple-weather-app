import React, { Component } from 'react';
import { Card, CardBlock, CardDeck, Button } from 'reactstrap';
import '../styles/Forecast.css';

import ForecastTile from './ForecastTile'


class Forecast extends Component {
  handleClick() {
    this.props.handleShowZipForm()
  }

  render() {
    let { forecast } = this.props;

    return (
      <div id="forecast-component">
        <Card>
          <CardBlock>
            <h2>{forecast.city}, {forecast.state}</h2>
            <CardDeck>
              {
                forecast.forecastDays.map(function(forecastDay, index) {
                  return (
                    <ForecastTile key={index} forecastDay={forecastDay}/>
                  )
                })
              }
            </CardDeck>
            <Button className="btn-primary btn-block" onClick={() => this.handleClick()}>Change Location</Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default Forecast;
