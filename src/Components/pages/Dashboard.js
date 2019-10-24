import React from 'react';
import AddNewUser from './AddNewUser';
import DisplayUsers from './DisplayUsers';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

const Dashboard = () => {
  const btnStyles = {
    marginLeft: '5px',
    position: 'relative',
  }

  return (
    <Router >
      <div className="menu-bar">
        <Redirect exact to="/addnewuser"/>
        <NavLink exact style={btnStyles} className="btn btn-dark" to="/addnewuser"  >   Add New User</NavLink>
        <NavLink exact style={btnStyles} className="btn btn-dark" to="/displayusers">   Display User</NavLink>
      </div>
      <Switch>
        <Route exact path="/addnewuser" component={AddNewUser} />
        <Route exact path="/displayusers" component={DisplayUsers} />
      </Switch>
    </Router>
  );
};
export default Dashboard;