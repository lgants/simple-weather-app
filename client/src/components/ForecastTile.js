import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardSubtitle, CardBlock } from 'reactstrap';
import Moment from 'react-moment';
import '../styles/ForecastTile.css';


export default (props) => {
  let { avehumidity, avewind_dir, avewind_mph, conditions, epoch, low, high, icon, icon_url } = props.forecastDay;

  return (
      <Card className="forecast-card">
        <CardBlock>
          <CardTitle>
            <Moment format="ddd, MMM D">
            {new Date(parseInt(epoch, 10) * 1000)}
            </Moment>
          </CardTitle>
          <CardSubtitle>High: {high}° F</CardSubtitle>
          <CardSubtitle>Low: {low}° F</CardSubtitle>
          <CardImg src={icon_url} alt={icon}/>
          <CardText>{conditions}. Winds {avewind_dir} at {avewind_mph} mph. Humidity {avehumidity}%.</CardText>
        </CardBlock>
      </Card>
  )
}
