import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Card, CardBlock } from 'reactstrap';
import '../styles/Loading.css';


export default () => {
  return (
    <div id="loading-component">
      <Card>
        <CardBlock>
          <h4>Loading <FontAwesome name='spinner' className="faa-spin animated"/></h4>
        </CardBlock>
      </Card>
    </div>
  )
}
