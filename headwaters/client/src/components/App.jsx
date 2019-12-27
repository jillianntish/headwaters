import React from 'react';
import Calendar from './Calendar.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Calendar />
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;
