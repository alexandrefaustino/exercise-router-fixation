import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    const user = {
      name: 'joão',
      password: '1234',
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/strict-access" render={(props) => <StrictAccess {...props} user={user}/> } />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users/:id" render={(props) => <Users {...props}               greetingMessage="Hello!" />} />                
        </Switch>      
      </BrowserRouter>
    );
  }
}

export default App;