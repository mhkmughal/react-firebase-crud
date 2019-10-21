import React, { Component } from 'react';
import Navigation from './Components/pages/Navigation';
import firebase from 'firebase';
class App extends Component {
  state = {
    authenticated: false,
  };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
          authenticated: true,
        }))
        : this.setState(() => ({
          authenticated: false,
        }));
    });
  }
  render() {
    return (
      <div>
        <Navigation authenticated={this.state.authenticated}/>
      </div>
    )
  }
}
export default App;