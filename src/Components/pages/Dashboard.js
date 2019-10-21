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
        <Redirect to="/addnewuser"/>
        <NavLink style={btnStyles} className="btn btn-dark" to="/addnewuser"  >   Add New User</NavLink>
        <NavLink style={btnStyles} className="btn btn-dark" to="/displayusers">   Display User</NavLink>
      </div>
      <Switch>
        <Route path="/addnewuser" component={AddNewUser} />
        <Route path="/displayusers" component={DisplayUsers} />
      </Switch>
    </Router>
  );
};
export default Dashboard;