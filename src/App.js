import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route, Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" render={() => <Users greetingMessage="Good Morning" />} />
        
      </BrowserRouter>      
    );
  }
}

export default App;