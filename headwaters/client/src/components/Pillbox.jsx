import React from 'react';
import axios from 'axios';

class Pillbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      med: '',
      dosage: '',
      times: '',
      notes: 'Notes',
      pic: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.selectFileHandler = this.selectFileHandler.bind(this)
  }


  handleChange(event) {
    // event.preventDefault();
    const value = event.target.value;
    this.setState({

      [event.target.name]: value,
    });
    console.log("we're setting state", this.state.med);
  }

  selectFileHandler(e) {
    console.log(e.target.file[0]);
    // this.setState({
    //   pic: e.target.file[0],
    // });
  }

  // uploadFileHandler() {

  // }


  handleClick(e) {
    const { med, dosage, times, notes, pic } = this.state;
    e.preventDefault();
    // const { water } = this.state;
    console.log("we're clicking", this.state.times);
    axios.post('/journal', {
      med: med,
      dosage: dosage,
      times: times,
      notes: notes,
      pic: pic,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {
    const { med, dosage, times, notes, pic } = this.state
    return (
      <div>
        <div className="form-container">
          <h1>
            Pillbox <span className="text-primary"></span>
          </h1>
        </div>
        <form onSubmit={this.handleClick}>

          <div>
            <label htmlFor="med">Medication</label>
            <input
              type="text"
              name="med"
              value={med}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="dosage">dosage</label>
            <input
              type="text"
              name="dosage"
              value={dosage}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="times">times</label>
            <input
              type="text"
              name="times"
              value={times}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <textarea name="notes" value={notes}
              onChange={this.handleChange}
              rows="3" cols="50">
            </textarea>
          </div>
          <input type="file" onChange={this.selectFileHandler}></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default Pillbox;
