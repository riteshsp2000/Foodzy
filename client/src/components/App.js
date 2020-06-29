import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Footer from './marginals/Footer';
import Navbar from './marginals/Navbar';

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
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <HomePage />
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
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
