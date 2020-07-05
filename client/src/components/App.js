import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/main.scss';

import createBrowserHistory from '../history';

import Footer from './marginals/Footer';
import Navbar from './marginals/Navbar';

import UserHomePage from './user/UserHomePage';
import NewRequest from './user/NewRequest';
import YourRequests from './user/YourRequests';
import Profile from './user/Profile';
import ViewRequests from './ViewRequests';
import HomePage from './HomePage';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Router history={createBrowserHistory}>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/user' exact>
              <UserHomePage />
            </Route>
            <Route path='/newRequest/:id' exact>
              <NewRequest />
            </Route>
            <Route path='/yourRequests/:id' exact>
              <YourRequests />
            </Route>
            <Route path='/profile/:id' exact>
              <Profile />
            </Route>
            <Route path='/viewRequests' exact>
              <ViewRequests />
            </Route>
            <Redirect to='/' />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
