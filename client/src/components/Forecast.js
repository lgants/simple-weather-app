import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBlock } from 'reactstrap';
import Moment from 'react-moment';
import '../styles/Forecast.css';

class Forecast extends Component {
  render() {
    let forecasts = this.props.forecast.map(function(element, index) {

      let { icon_url, icon, conditions, high, low, avewind, avehumidity, date } = element;

      return (
        <Card key={index} className="forecast-card">
          <CardBlock>
            <CardTitle>
              <Moment format="ddd, MMM D">
                {new Date(parseInt(date.epoch, 10) * 1000)}
              </Moment>
            </CardTitle>
            <CardSubtitle>High: {high.fahrenheit}° F</CardSubtitle>
            <CardSubtitle>Low: {low.fahrenheit}° F</CardSubtitle>
            <CardImg src={icon_url} alt={icon}/>
            <CardText>{conditions}. Winds {avewind.dir} at {avewind.mph} mph. Humidity {avehumidity}%.</CardText>
          </CardBlock>
        </Card>
      );
    });

    return (
      <div>
        <CardDeck>
          {forecasts}
        </CardDeck>
      </div>
    )
  }
}

export default Forecast;
