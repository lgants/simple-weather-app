import React, { Component } from 'react';
import { Card, CardBlock, Button, Form, FormGroup, Input } from 'reactstrap';
import '../styles/ZipForm.css';

class ZipForm extends Component {
  constructor(props) {
    super();

    this.state = { zip: '' };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let zip = event.target.value;
    this.setState({ zip });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleZipSubmit(this.state.zip)
  }

  render() {

    let { hasErrored, errorMessage } = this.props.error;

    const error = (
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    )

    return (
      <Card id="zipform-component">
        <CardBlock>
          { hasErrored ? error : null }
          <Form onSubmit={event => this.handleSubmit(event)}>
            <FormGroup>
              <Input type="text" name="zip" placeholder="Please Enter Zip Code" onChange={event => this.handleChange(event)}/>
            </FormGroup>
            <FormGroup>
              {' '}
              <Button className="btn-primary btn-block" type="submit">Submit</Button>
            </FormGroup>
          </Form>
        </CardBlock>
      </Card>
    )
  }
}

export default ZipForm;
