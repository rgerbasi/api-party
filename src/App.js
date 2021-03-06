import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import Github from './Github'
import Nasa from './Nasa'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Ain't no party like an</h3>
          <h1>API Party</h1>
        </div>

        <ul className="navLinks">
          <li>
            <NavLink to="/github">GitHub API</NavLink>
          </li>
          <li>
            <NavLink to="/nasa">NASA API</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/github" component={Github}/>
          <Route path="/nasa" component = {Nasa}/>
          <Route render={() => <p>to get started click one</p> } />
        </Switch>

      </div>
    );
  }
}

export default App;
