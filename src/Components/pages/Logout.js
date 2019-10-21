import React from 'react';
import firebase from 'firebase';

const logout = (props) => {

  const logOutUser = () => {
    firebase.auth().signOut();
  }

  return (
    <div>
      <button className="logout-btn" value="submit" onClick={logOutUser}>Log Out</button>
      <span className="user-name">{localStorage.getItem("id")}</span>
    </div>
  )
};
export default logout;