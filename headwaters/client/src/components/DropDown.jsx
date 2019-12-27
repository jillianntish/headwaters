import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuShow: false,
    };
  }

  toggleMenu() {
    this.setState({
      menuShow: !this.state.menuShow
    })
  }

  render() {
    return (
      <div>

        <select>
          <option value="calender">Calender</option>
          <option value="journal">Journal</option>
          <option selected value="pillbox">Pill Box</option>
        </select>
      </div>
    )
  }
}




export default DropDown;
