import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  state = { active: null };

  handleNoUserMakeRequest = () => {
    console.log('Show Modal');
  };

  renderUserNavs = (user) => {
    switch (user) {
      case null:
        return 'Loading...';
      case false:
        return (
          <a href='/auth/google' className='navbar-right-navs'>
            Sign In with<i className='fab fa-google fa-google-custom'></i>
          </a>
        );
      default:
        return (
          <React.Fragment>
            <Link to='/profile/:id' className='navbar-right-navs'>
              Profile
            </Link>
            <a href='/api/logout' className='navbar-right-navs'>
              Logout
            </a>
          </React.Fragment>
        );
    }
  };

  renderMakeRequest = (user) => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <Link
            to='#'
            className='navbar-left-navs'
            onClick={() => this.handleNoUserMakeRequest()}
          >
            Make a Request
          </Link>
        );
      default:
        return (
          <Link to='/newRequest/:id' className='navbar-left-navs'>
            Make a Request
          </Link>
        );
    }
  };

  render() {
    return (
      <div className='navbar-container'>
        <div className='navbar-left'>
          <div className='navbar-branding'>
            <Link to='/' className=''>
              Foodzy
            </Link>
          </div>

          <div className='navbar-navs'>
            <Link to='/viewRequests' className='navbar-left-navs'>
              Accept a Request
            </Link>

            {this.renderMakeRequest(this.props.auth)}
          </div>
        </div>

        <div className='navbar-right'>
          {this.renderUserNavs(this.props.auth)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Navbar);
