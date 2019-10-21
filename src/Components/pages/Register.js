import React, { useState } from 'react';
import '../../App.css';
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from '../../firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const RegisterPage = (props) => {

  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    error: null,
  });

  const handleLoginChange = (e) => setLoginState({
    ...loginState,
    [e.target.name]: e.target.value,
  });

  async function handleLogin(e) {
    try {
      e.preventDefault()
      const resp = await firebase.auth().createUserWithEmailAndPassword(loginState.email, loginState.password);
      if (resp)
        localStorage.setItem("id", loginState)
    } catch (error) {
      setLoginState({ error: error })
    }
  }
  const { error } = loginState;

  return (
    <div className="App">
      <h1>Sign-Up</h1>

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

          <button value="Submit" className="btn btn-dark">Register</button>

        </div>
      </form>
    </div>
  );
}
export default RegisterPage;