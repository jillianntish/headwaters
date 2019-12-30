import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
// import Login from './auth/Login.jsx';
// import Register from './auth/Register.jsx';
import Calendar from './Calendar.jsx';
import Journal from './Journal.jsx';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { view } = this.state;

    return (
      <div className="App">
        <Router history={history}>
          <header>
            <span className="logo">
              {' '}
              <h1>Headwaters</h1>
            </span>
            <NavBar />
          </header>
          {/* <div className="nav">
            <span
              className={view === 'login' ? 'nav-selected' : 'nav-unselected'}
              onClick={() => this.changeView('login')}
            >
              <h3>Log In</h3>
            </span>
            <span
              className={
                view === 'register' ? 'nav-selected' : 'nav-unselected'
              }
              onClick={() => this.changeView('register')}
            >
              <h3>Register</h3>
            </span>
          </div>

          <div className="main">
            {view === 'login' ? <Login /> : <Register />}
          </div> */}
          <Switch>
            <Route path="/" exact />
            <Route path="/calendar" component={Calendar} />{' '}
            <Route path="/journal" component={Journal} />{' '}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
