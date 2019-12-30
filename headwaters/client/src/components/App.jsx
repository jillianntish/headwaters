import React from 'react';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Calendar from './Calendar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
    };

    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  render() {
    const { view } = this.state;

    return (
      <div>
        <div className="nav">
          <span className="logo">
            {' '}
            <h1>Headwaters</h1>
          </span>

          <span
            className={view === 'login' ? 'nav-selected' : 'nav-unselected'}
            onClick={() => this.changeView('login')}
          >
            <h3>Log In</h3>
          </span>
          <span
            className={view === 'register' ? 'nav-selected' : 'nav-unselected'}
            onClick={() => this.changeView('register')}
          >
            <h3>Register</h3>
          </span>
        </div>

        <div className="main">
          {view === 'login' ? <Login /> : <Register />}
        </div>
        <Calendar />
      </div>
    );
  }
}

export default App;