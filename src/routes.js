import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import AddCard from './components/AddCard/AddCard'
import Card from './components/Card/Card'

export default (
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/home" component={Home}/>
        <Route path="/addcard" component={AddCard} />
        <Route path="/card" component={Card}/>
    </Switch>
);