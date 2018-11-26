// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import LessonsList from './lessonsList';
import TableRow from './tablerow';

export default class Sidebar extends Component {

  constructor(props) {
      super(props);
      this.state = {lesson: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/lesson')
        .then(response => {
          this.setState({ lesson: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){
      return this.state.lesson.map(function(object, i){
          return <LessonsList obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div className="container">
            <div className="list-group row mt-5 pt-3">
                { this.tabRow() }
            </div>
        </div>
      );
    }
  }