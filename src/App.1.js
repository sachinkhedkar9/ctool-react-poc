import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, browserHistory } from 'react-router';

class App extends Component {
  handleLogin(){
    // if(this.username == 'sachin' && this.inputPassword == 'sachin'){
    //   alert('user is sachin..');
    // }
    alert('Login Successful');
    router.get().transitionTo('home');
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-default navbar-static-top navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" 
                      data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              </button>
              <a className="navbar-brand" href="#/ctool">CTOOL</a>
            </div>
          </div>
        </nav>

        <div className="login-container sap-form">
          <form className="form-signin content" name="loginForm">
            <h2 className="form-signin-heading">Login</h2>
            <label className="text-block top-margin">User Name</label>
            <input type="text" ref="username" className="form-control" name="username"
              placeholder="User Name" required=""  />

            <label className="text-block top-margin">Password</label>
            <input type="password" ref="inputPassword"
              className="form-control" placeholder="Password" required="" name="password" />

            <button className="sap-btn sap-btn-primary btn-block" onClick={this.handleLogin}>Sign in</button>
          </form>
        </div>


        <footer className="footer">
          <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
          <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 ">
            <label>v6.6.6 &copy; CTOOL</label>
          </div>
          <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>

        </footer>

      </div>
    );
  }
}

export default App;
