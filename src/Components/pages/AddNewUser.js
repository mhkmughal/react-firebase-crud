import React, { useState } from 'react';
import '../../App.css';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddNewUser = (props) => {

  const [loginState, setLoginState] = useState({
    ref: firebase.firestore().collection('test'),
    username: '',
    email: '',
    number: '',
    age: '',
    error: null,
  });

  const handleLoginChange = (e) => setLoginState({
    ...loginState,
    [e.target.name]: e.target.value,
  });

  localStorage.getItem("email",loginState.email);
  console.log(localStorage.getItem("email"));
  

  const addUser = e => {
    e.preventDefault();
    loginState.ref.add({
      username: loginState.username,
      email: loginState.email,
      number: loginState.number,
      age: loginState.age

    }).then((docRef) => {
      setLoginState({
        username: '',
        email: '',
        number: '',
        age: '',
      });
      props.history.push("/displayusers")
   })
      .catch(function (error) {
        setLoginState({ error: error })
      });
  }

  return (
    <div className="App">
      <h1 >Add New User</h1>

      <form onSubmit={addUser}>
        <div className="widget-form">
          <div className="form-layout">
            <div className="bs-4">
              <label>Full_Name</label>
              <input
                required
                type="text"
                name="username"
                placeholder="dev"
                onChange={handleLoginChange}
                value={loginState.usernname}
              />
            </div>

            <div className="bs-4 port">
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                placeholder="someone@example.com"
                onChange={handleLoginChange}
                value={loginState.email}
              />
            </div>
            <div className="bs-4 port">
              <label>Mobile_Number</label>
              <input
                required
                type="number"
                name="number"
                placeholder="0333-7860123"
                onChange={handleLoginChange}
                value={loginState.password}

              />
            </div>
            <div className="bs-4 port">
              <label>Age</label>
              <input
                required
                type="date"
                name="age"
                onChange={handleLoginChange}
                value={loginState.c_password}

              />
            </div>
          </div>
          <button value="Submit" className="btn btn-dark" >Add User</button>
        </div>
      </form>
    </div>
  );
}
export default AddNewUser;