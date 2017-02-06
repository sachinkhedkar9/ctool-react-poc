import React, { Component } from 'react';
import { Router, Link } from 'react-router';
import './App.css';

export default class App extends React.Component {
    constructor(props, context) {
      super(props, context);
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
            <input type="text" ref="username" className="form-control" 
              placeholder="User Name" required=""  />

            <label className="text-block top-margin">Password</label>
            <input type="password" ref="inputPassword"
              className="form-control" placeholder="Password" required="" />

            <button className="sap-btn sap-btn-primary btn-block" onClick={this.handleLogin.bind(this)}>Sign in</button>
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

  handleLogin(){
    this.context.router.push('create');
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};
