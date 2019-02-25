import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import Login from './Login'
import Home from './Home'
import AddCard from "./AddCard";
import Card from './Card'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/addCard' component={AddCard}/>
          <Route path='/card' component={Card}/>
        </Switch>
      </div>
    );
  }
}

export default App;