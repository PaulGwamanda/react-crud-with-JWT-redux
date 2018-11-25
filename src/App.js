import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import View from './components/view.component';
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
            <Link to={'/create'} className="nav-link">PHP</Link>
            </li>
            <li className="nav-item">
            <Link to={'/index'} className="nav-link">JAVASCRIPT</Link>
            </li>
            <li className="nav-item">
            <Link to={'/index'} className="nav-link">CSS</Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            <li className="nav-item">
            <Link to={'/index'} className="nav-link">Index</Link>
            </li>
        </ul>
    </div>
      </nav>
        <Switch>
          <div className="content">
            <div className="row">
              <div className="col-12 col-md-3 col-xl-2 sidebar">
                  <div className="list-group row">
                        <Link to={'/create'} className="list-group-item list-group-item-action active">Cras justo odio</Link>
                        <Link to={'/create'} className="list-group-item list-group-item-action">Dapibus ac facilisis in</Link>
                        <Link to={'/create'} className="list-group-item list-group-item-action">Morbi leo risus</Link>
                        <Link to={'/create'} className="list-group-item list-group-item-action">Porta ac consectetur ac</Link>
                        <Link to={'/create'} className="list-group-item list-group-item-action disabled">Vestibulum at eros</Link>
                      </div>
                </div>
              <div className="col-12 col-md-8 col-xl-8 py-md-3 bd-content">
                <Route exact path='/create' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
                <Route path='/view/:id' component={ View } />
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