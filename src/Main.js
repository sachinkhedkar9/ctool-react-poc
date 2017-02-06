import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './App';
import CreateAccount from './Account';
class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/create' component={CreateAccount} />
        <Route path='/address' component={Address} />
      </Router>
    )
  }
}
const Address = () => <h1>We are located at 555 Jackson St.</h1>
export default Routes;