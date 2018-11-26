// lessonsList.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LessonsList extends Component {
    constructor(props) {
      super(props);
      this.delete = this.delete.bind(this);
  }
  delete() {
      axios.get('http://localhost:4000/lesson/delete/'+this.props.obj._id)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
  }
  render() {
    return (
        <Link to={"/view/"+this.props.obj._id} className="list-group-item list-group-item-action">{this.props.obj.lesson}</Link>
    );
  }
}

export default LessonsList;