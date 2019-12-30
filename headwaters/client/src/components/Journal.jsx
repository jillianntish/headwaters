import React from 'react';
import axios from 'axios';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journal: "Today's journal entry...",
      feelings: '',
      sleep: 0,
      water: 0,
      exercise: 0,
      food: 'What did you eat?',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(event) {
    // event.preventDefault();
    const value = event.target.value;
    this.setState({

      [event.target.name]: value,
    });
    console.log("we're setting state", this.state.journal);
  }

  // const onSubmit = e => {
  //   e.preventDefault();
  //   console.log('Register submit');
  // };

  handleClick(e) {
    const { water, sleep, exercise, food, feelings, journal } = this.state;
    e.preventDefault();
    // const { water } = this.state;
    console.log("we're clicking", this.state.feelings);
    axios.post('/journal', {
      water: water,
      sleep: sleep,
      exercise: exercise,
      food: food,
      feelings: feelings,
      journal: journal
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const { water, sleep, exercise, food, feelings, journal } = this.state;
    return (
      <div>
        <div className="form-container">
          <h1>
            Journal <span className="text-primary"></span>
          </h1>
          <form onSubmit={this.handleClick}>
            <div>
              <textarea name="journal" value={journal}
                onChange={this.handleChange}
                rows="10" cols="50">

              </textarea>
            </div>
            <div>
              <label htmlFor="feelings">How are you feeling today?</label>
              <select name="feelings" onChange={this.handleChange}>
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
              </select>
              <div>
                <label htmlFor="water">How much water did you drink today?</label>
                <input
                  type="text"
                  name="water"
                  value={water}
                  onChange={this.handleChange}
                />
                {/* <input type="water" value={water} onChange={this.handleChange} /> */}
              </div>
              <div>
                <label htmlFor="sleep">How much sleep did you get?</label>
                <input
                  type="sleep"
                  name="sleep"
                  value={sleep}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="exercise">How much exercise did you get?</label>
                <input
                  type="exercise"
                  name="exercise"
                  value={exercise}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <textarea name="food" value={food}
                  onChange={this.handleChange}
                  rows="3" cols="50">
                </textarea>
              </div>
            </div>
            <input type="submit" value="submit" />
          </form>
        </div>
      </div >
    );
  }
}


export default Journal;
