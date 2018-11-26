import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Sidebar from './components/sidebar.component';
import View from './components/view.component';
import Language from './components/language.component';
import Register from './components/register.component';
import Login from './components/login.component';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// TODO: Check jwtToken storage
// if(localStorage.jwtToken) {
//   setAuthToken(localStorage.jwtToken);
//   const decoded = jwt_decode(localStorage.jwtToken);
//   store.dispatch(setCurrentUser(decoded));

//   const currentTime = Date.now() / 1000;
//   if(decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = '/login'
//   }
// }

class App extends Component {
  render() {
    return (
      <Router>
  <div className="container-fluid">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link to={'/'} className="navbar-brand">MyApp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <Link to={'/language'} className="nav-link">LESSONS</Link>
            </li>
            <li className="nav-item">
            <Link to={'/create'} className="nav-link">Create</Link>
            </li>
            {/* <li className="nav-item">
            <Link to={'/language'} className="nav-link">JAVASCRIPT</Link>
            </li>
            {/* <li className="nav-item">
            <Link to={'/language'} className="nav-link">PHP</Link>
            </li>
            <li className="nav-item">
            <Link to={'/language'} className="nav-link">CSS</Link>
            </li> */}
          </ul>
        </div>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link to={'/login'} className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
            <Link to={'/register'} className="nav-link">Register</Link>
            </li>
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
                <Route path='/register' component={ Register } />
                <Route path='/login' component={ Login } />
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

// TODO: check / change navbar based on user logged in or not
// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//   auth: state.auth
// })

// export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));

export default App;