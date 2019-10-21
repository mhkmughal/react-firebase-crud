import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';

class Navigation extends Component {
  render() {
    return (
      <Router >
        <div className="App-header">
          {this.props.authenticated ? (
            <span>
              <Redirect to="/Dashboard" />
              <Logout />
            </span>
          ) : (
              <span>
                <Redirect to="/login"/>
                <NavLink className="navbar" to="/register">Register</NavLink>
                <NavLink className="navbar" to="/login">Login</NavLink>

              </span>
            )}
        </div>
        <Switch>
          <Route authenticated={this.props.authenticated} path="/login" component={Login} />
          <Route authenticated={this.props.authenticated} path="/register" component={Register} />
          <ProtectedRoute authenticated={this.props.authenticated} path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}
export default Navigation;