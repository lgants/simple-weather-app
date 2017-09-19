import React from 'react'
import Forecast from './Forecast';
import ZipForm from './ZipForm';

export default (props) => {
  return (
    <div>
      { props.showZipForm ? <ZipForm error={props.error} handleZipSubmit={props.handleZipSubmit}/> : <Forecast forecast={props.forecast} handleShowZipForm={props.handleShowZipForm}/> }
    </div>
  )
}
