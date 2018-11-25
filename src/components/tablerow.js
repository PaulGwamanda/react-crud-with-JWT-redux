// TableRow.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
      super(props);
      this.delete = this.delete.bind(this);
  }
  delete() {
      axios.get('http://localhost:4000/lesson/delete/'+this.props.obj._id)
          .then(console.log('Deleted'))
          .catch(err => console.log(err));
          this.props.history.push('/index');
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.lesson}
          </td>
          <td>
            {this.props.obj.language}
          </td>
          <td>
          <Link to={"/view/"+this.props.obj._id} className="btn btn-primary btn-sm">View</Link>
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary btn-sm">Edit</Link>
          </td>
          <td>
          <button onClick={this.delete} className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;