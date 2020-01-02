import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

// import { useAuth0 } from '../../react-auth0-spa.jsx';
import '../styles/event-form.css';


const Journal = () => {
  // const { user } = useAuth0();
  const [JournalState] = useState([

    {
      journal: '',
      feelings: '',
      sleep: 0,
      water: 0,
      exercise: 0,
      nutrition: '',
    },
  ]);

  // class Journal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     journal: ' ',
  //     feelings: '',
  //     sleep: 0,
  //     water: 0,
  //     exercise: 0,
  //     nutrition: ' ',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }


  const handleChange = event => {
    // event.preventDefault();
    const { value } = event.target;
    this.setState({

      [event.target.name]: value,
    });
  }

  // const onSubmit = e => {
  //   e.preventDefault();
  //   console.log('Register submit');
  // };

  const handleClick = e => {
    const {
      water, sleep, exercise, nutrition, feelings, journal,
    } = this.state;
    e.preventDefault();
    // const { water } = this.state;
    axios.post('/journal', {
      water,
      sleep,
      exercise,
      nutrition,
      feelings,
      journal,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <div>
      <div className="new-event-form">
        <h3>
          Journal <span className="text-primary" />
        </h3>
        <Form onSubmit={handleClick}>
          <FormGroup>
            <Label for="journal">today&apos;s journal entry:</Label>
            <Input type="textarea" name="journal" id="journal" onChange={handleChange} rows="10" cols="50" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="feelings">what are you feeling?</Label>
            <Input name="feelings" type="select" bsSize="sm" onChange={handleChange}>
              <option value="happiness">happiness</option>
              <option value="anger">anger</option>
              <option value="sadness">sadness</option>
              <option value="love">love</option>
              <option value="fear">fear</option>
              <option value="depression">depression</option>
              <option value="disgust">disgust</option>
              <option value="surprise">surprise</option>
              <option value="neutral">neutral</option>
              <option value="anxiety">anxiety</option>
              <option value="contempt">contempt</option>
              <option value="pride">pride</option>
              <option value="shame">shame</option>
              <option value="envy">envy</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="water">water intake in ounces:</Label>
            <Input
              type="text"
              name="water"
              id="water"
              placeholder="ounces"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="sleep">prevous night&apos;s sleep in hours:</Label>
            <Input
              type="text"
              name="sleep"
              id="sleep"
              placeholder="hours"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exercise">exercise in minutes:</Label>
            <Input
              type="text"
              name="exercise"
              id="exercise"
              placeholder="exercise"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="nutrition">nutrition notes:</Label>
            <Input type="textarea" name="nutrition" id="nutrition" onChange={handleChange} />
          </FormGroup>
        </Form>
        <Button color="primary" size="sm">Submit</Button>{' '}
      </div>
    </div>
  );
};


export default Journal;
