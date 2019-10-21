import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      username: '',
      email: '',
      number: '',
      age:''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('test').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const test = doc.data();
        this.setState({
          key: doc.id,
          username: test.username,
          email: test.email,
          number: test.number,
          age: test.age
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({test:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, email, number, age } = this.state;

    const updateRef = firebase.firestore().collection('boards').doc(this.state.key);
    updateRef.set({
      username,
      email,
      number,
      age
    }).then((docRef) => {
      this.setState({
        key: '',
        username: '',
        email: '',
        number: '',
        age:''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit User
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/updateusers/${this.state.key}`} class="btn btn-primary">User List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Name:</label>
                <input type="text" class="form-control" name="title" value={this.state.username} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Email:</label>
                <input type="text" class="form-control" name="description" value={this.state.email} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="author">Phone Number:</label>
                <input type="text" class="form-control" name="author" value={this.state.number} onChange={this.onChange} placeholder="Author" />
              </div>
              <div class="form-group">
                <label for="author">Age:</label>
                <input type="text" class="form-control" name="author" value={this.state.age} onChange={this.onChange} placeholder="Author" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;