import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  state = { active: null };

  renderUserNavs = () => {
    switch (this.props.auth) {
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

            <Link to='/newRequest/:id' className='navbar-left-navs'>
              Make a Request
            </Link>
          </div>
        </div>

        <div className='navbar-right'>{this.renderUserNavs()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Navbar);
