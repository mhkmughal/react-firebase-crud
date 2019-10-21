import React, {Component} from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom'

class UpdateUsers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('test').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Users List</Link></h4>
            <h3 class="panel-title">
              {this.state.test.username}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.board.email}</dd>
              <dt>Author:</dt>
              <dd>{this.state.board.number}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUsers;