import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../utils/history';
import Calendar from './Calendar/Calendar.jsx';
import Journal from './Journal.jsx';
import NavBar from './NavBar.jsx';
import { useAuth0 } from '../react-auth0-spa.jsx';

// eslint-disable-next-line no-unused-vars
const App = props => {
  const { user } = useAuth0();

  return (
    <div className="App">
      <Router history={history}>
        <header>
          <span className="logo">
            {' '}
            <h1>Headwaters</h1>
            <h1>
              {user && user.nickname}
              {user && user.id}
            </h1>
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
};

export default App;
