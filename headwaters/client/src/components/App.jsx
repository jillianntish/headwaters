import React from 'react';
import Calendar from './Calendar.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import NavBar from './NavBar.jsx';
import Journal from './Journal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <Calendar />
        <Login />
        <Register />
        <Journal />
      </div>
    );
  }
}

export default App;
