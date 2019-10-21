import React, { useState } from 'react';
import '../../App.css';
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);

const LoginPage = (props) => {

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    error: null,
  });

  //Handles the input form data. 
  const handleLoginChange = (e) => setLoginState({
    ...loginState,
    [e.target.name]: e.target.value,
  });

  //Handles the login form data. 
  async function handleLogin(e) {
    e.preventDefault()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

      .then(function () {
        return firebase.auth().signInWithEmailAndPassword(loginState.email, loginState.password);
      })

      .catch(function (error) {
        setLoginState({ error: error })
      });
  }
localStorage.setItem("id",loginState.email);

  const { error } = loginState;
  return (
    <div className="App">
      <h1 >Sign-In</h1>

      {error ? (
        <p>{error.message}</p>
      ) : null}
      <form onSubmit={handleLogin} >
        <div className="widget-form">
          <div className="form-layout">
            <div className="bs-4">
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={loginState.email}
                onChange={handleLoginChange}
              />
            </div>
            <div className="bs-4 port">
              <label>Password</label>
              <input
                required
                type="password"
                name="password"
                placeholder="*********"
                onChange={handleLoginChange}
                value={loginState.password}
              />
            </div>
          </div>

          <button value="Submit" className="btn btn-dark">Login</button>

        </div>
      </form>
    </div>
  );
}
export default LoginPage;