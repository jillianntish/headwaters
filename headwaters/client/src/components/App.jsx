import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import Calendar from './Calendar.jsx';
import Journal from './Journal.jsx';
import NavBar from './NavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
