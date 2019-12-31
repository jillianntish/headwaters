import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import moment from 'moment';

import '../../styles/event-form.css';

class NewEvent extends React.Component {
  constructor(props) {
    super(props);
    const { date } = props.date[0];
    this.state = {
      date,
    };
  }

  render() {
    const { date } = this.state;
    const dateFormat = moment(date).format('MM/DD/YY');
    console.log(dateFormat);

    return (
      <div className="new-event-form">
        <Form>
          <FormGroup>
            <Label for="new-event">New Event</Label>
          </FormGroup>
          <FormGroup>
            <Label for="event-name">Event Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Counseling Session"
            />
          </FormGroup>
          <FormGroup>
            <Label for="practitioner">Practicioner</Label>
            <Input
              type="text"
              name="practitioner"
              id="practitioner"
              placeholder="Dr. Crusher"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="text"
              name="date"
              id="date"
              placeholder={dateFormat}
              onFocus={(e) => e.target.type = 'date'}
              onBlur={(e) => e.target.type = 'text'}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="time"
              placeholder="time placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="appointment">Appointment Type</Label>
            <Input type="select" name="appointment" id="appointment">
              <option>mental well-being</option>
              <option>physical well-being</option>
              <option>personal</option>
              <option>other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="notes">Notes</Label>
            <Input type="textarea" name="notes" id="notes" />
          </FormGroup>
          <FormGroup>
            <Label for="address">Location</Label>
            <Input
              type="text"
              name="location"
              id="location"
              placeholder="221B Baker Street, London, England"
            />
          </FormGroup>
        </Form>
        <Button color="primary" size="sm">add event</Button>{' '}
      </div>
    );
  }
}

export default NewEvent;
