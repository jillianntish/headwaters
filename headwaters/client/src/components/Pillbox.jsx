import React from 'react';
import axios from 'axios';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

import '../styles/event-form.css';
import '../styles/pillbox.css';
import sample from './exampleData';

class Pillbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      med: '',
      dosage: '',
      time: '',
      times: [],
      notes: '',
      pic: null,
      // fullMedsList: {}
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectFileHandler = this.selectFileHandler.bind(this);
    this.addTime = this.addTime.bind(this);
  }


  componentDidMount() {

    // axios.get('/api/pillbox/:userId')
    //   .then(response){
    //   console.log(response);
    // }
    // .catch((error) => {
    //     console.log(error);
    //   };
  }

  addTime() {
    // may need to change times to a string and concat string
    let { times, time } = this.state;
    console.log('getting time', times);
    times = times.push(time);
    // time = times.concat(time);
  }

  handleChange(event) {
    // event.preventDefault();
    const { value } = event.target;
    this.setState({

      [event.target.name]: value,
    });
    console.log("we're setting state", this.state.time);
  }

  selectFileHandler(e) {
    // let files = e.target.files;
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload = (e) => {

    this.setState({
      pic: URL.createObjectURL(e.target.files[0]),
    });
    console.log(e.target.files[0]);
  }

  handleClick(e) {
    const {
      med, dosage, times, notes, pic,
    } = this.state;
    e.preventDefault();
    // const { water } = this.state;
    console.log("we're clicking", this.state.pic);
    axios.post('/api/pillbox/:userId', {
      med,
      dosage,
      times,
      notes,
      pic,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const {
      med, dosage, times, time, notes, pic,
    } = this.state;

    return (
      <div>
        {/* {sample.map((med) => {
          return (
            <div>
              <p id="rcorners1">
                Medication: {med.medication}
                <br />
                Dosage: {med.dosage}
                <br />
                Times: {med.times}
                <br />
                Notes: {med.notes}
                <br />
              </p>
            </div>
          );
        })} */}

        <div>
          <p id="rcorners1">
            Medication: {med}
            <br />
            Dosage: {dosage}
            <br />
            Times: {times}
            {/* This needs to be fixed */}
            {times.map((time) => {
              return (
                <row> {time} </row>
              );
            })}
            <br />
            Notes: {notes}
            <br />
            Pic:
            <br />
            <img src={pic} height="95" width="95" />
          </p>
        </div>
        <div className="form-container">
          <h1>
            Pillbox <span className="text-primary" />
          </h1>
        </div>
        <div className="new-event-form">
          <form onSubmit={this.handleClick}>
            <FormGroup>
              <Label for="med">Medication</Label>
              <Input
                type="text"
                name="med"
                id="med"
                placeholder="medication"
                value={med}
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="dosage">Dosage</Label>
              <Input
                type="text"
                name="dosage"
                id="dosage"
                placeholder="dosage"
                value={dosage}
                onChange={this.handleChange}
              />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="time">Time</Label>
              <Input
                type="time"
                name="time"
                id="time"
                dateformat="HH:mm"
                placeholder="time placeholder"
                value={time}
                onChange={this.handleChange}
              />
              <br />
              <Button color="primary" size="sm" onClick={this.addTime}>Add Time</Button>{' '}
            </FormGroup>
            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                type="textarea"
                name="notes"
                id="notes"
                onChange={this.handleChange}
              />
            </FormGroup>
            <input type="file" name="pic" onChange={this.selectFileHandler} />
            <br />
            <br />
            <Button color="primary" size="sm">Submit</Button>{' '}

          </form>
        </div>
      </div>
    );
  }
}
export default Pillbox;
