import React, { Component } from 'react';
import './App.scss';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Sidebar from './components/sidebar.component';
import View from './components/view.component';
import Language from './components/language.component';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
  <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link to={'/'} className="navbar-brand">Mondia</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to={'/language'} className="nav-link">LESSONS</Link>
            </li>
            {/* <li className="nav-item">
            <Link to={'/language'} className="nav-link">JAVASCRIPT</Link>
            </li>
            <li className="nav-item">
            <Link to={'/language'} className="nav-link">CSS</Link>
            </li> */}
          </ul>
        </div>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            {/* <li className="nav-item">
            <Link to={'/index'} className="nav-link">Index</Link>
            </li> */}
        </ul>
    </div>
      </nav>
        <Switch>
          <div className="content">
            <div className="row">
              <div className="col-12 col-md-3 col-xl-2 sidebar">
                  <div className="list-group row">
                      <Route path='/' component={ Sidebar } />
                  </div>
                </div>
              <div className="col-12 col-md-9 col-xl-10 py-4 mt-5">
                <Route exact path='/create' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
                <Route path='/view/:id' component={ View } />
                <Route path='/language' component={ Language } />
                <Route path='/index' component={ Index } />
              </div>
            </div>
          </div>
      </Switch>
    </div>
    </Router>
    );
  }
}

export default App;