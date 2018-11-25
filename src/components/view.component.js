// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lesson: '',
      language: '',
      description:''
    }
  }
  
  componentDidMount() {
      axios.get('http://localhost:4000/lesson/view/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                lesson: response.data.lesson, 
                language: response.data.language,
                description: response.data.description });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  render() {
    return (
        <main role="main" className="container">
            <div className="main">
                <div className="col-lg-12 ">
                <h3>{this.state.lesson}</h3>
                <div id="editor"> {this.state.description}</div>
            </div>
        </div>
    </main>
    )
  }
}