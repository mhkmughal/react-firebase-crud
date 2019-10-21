import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';

class displayUser extends Component {

  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('test');
    this.unsubscribe = null;
    this.state = { test: [] }
  }

  onCollectionUpdate = querySnapshot => {
    const test = [];
    querySnapshot.forEach((doc) => {
      const { username, email, number, age, } = doc.data();
      test.push({
        key: doc.id,
        username,
        email,
        number,
        age,
      });
    });
    this.setState({ test });
  }

  componentDidMount = () => {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  handleRemove = id => {
    return firebase.firestore().collection('test').doc(id).delete().then(() => {
      this.props.history.push("/displayusers")
    }).catch((error) => {
      alert(error);
    });
  }

  render() {
    return (

        <div className="table-responsive">  
          <h1> Users List </h1>        
          <table className="table table-striped">     
          <thead>
            <tr>
              <th> User Name   </th>
              <th> User Email  </th>
              <th> Phone Number</th>
              <th> User Age    </th>
              <th> Actions:    </th>
            </tr>
          </thead>
          <tbody>
            {this.state.test.map(test =>
              <tr>
                <td>{test.username}</td>
                <td>{test.email}</td>
                <td>{test.number}</td>
                <td>{test.age}</td>
                <td>
                  <button
                   to={`/updateusers/${test.key}`} className="btn btn-primary">Edit
                  </button>
                  <button
                    onClick={() => this.handleRemove(test.key)}
                    className="btn btn-danger">Delete
                  </button></td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
    );
  }
}
export default displayUser;