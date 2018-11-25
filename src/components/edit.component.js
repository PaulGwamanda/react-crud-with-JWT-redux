// edit.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeLesson = this.onChangeLesson.bind(this);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      lesson: '',
      language: '',
      description:''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/lesson/edit/'+this.props.match.params.id)
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

  onChangeLesson(e) {
    this.setState({
      lesson: e.target.value
    });
  }
  onChangeLanguage(e) {
    this.setState({
      language: e.target.value
    })  
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      lesson: this.state.lesson,
      language: this.state.language,
      description: this.state.description
    };
    axios.post('http://localhost:4000/lesson/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <main role="main" className="container">
            <div className="main">
                <div className="col-lg-8 ">
                <h3 align="center">Update Lesson</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Lesson:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.lesson}
                          onChange={this.onChangeLesson}
                          />
                    </div>
                    <div className="form-group">
                        <label>Language: </label>
                        <input type="text" 
                          className="form-control"
                          value={this.state.language}
                          onChange={this.onChangeLanguage}
                          />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea type="textarea"
                          rows="5" 
                          className="form-control"
                          value={this.state.description}
                          onChange={this.onChangeDescription}
                          ></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" 
                          value="Update Language" 
                          className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        </div>
    </main>
    )
  }
}