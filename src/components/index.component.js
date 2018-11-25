// index.component.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './tablerow';

export default class Index extends Component {

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
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <main role="main" className="container">
            <div className="main">
              <h3 align="left">Languages</h3>
              <table className="table table-striped table-dark" style={{ marginTop: 20 }}>
                <thead>
                  <tr>
                    <th>Lesson</th>
                    <th>Language</th>
                    <th colSpan="2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { this.tabRow() }
                </tbody>
              </table>
            </div>
        </main>
      );
    }
  }