import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Invoice from './Invoice';
import Home from './Home';
import Expense from './Expense';
import Bank from './Bank';
export default class Main extends Component {
  render() {
    return (
      <main className='main'> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/invoice' component={Invoice} />
          <Route  path='/expense' component={Expense} />
          <Route  path='/bank' component={Bank} />
        </Switch>
      </main>
    )
  }
}
