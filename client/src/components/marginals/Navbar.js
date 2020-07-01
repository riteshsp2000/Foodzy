import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import VerticallyCenteredModal from '../VerticallyCenteredModal';

class Navbar extends React.Component {
  state = { show: false, burgerNav: false };

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
            onClick={() => this.setState({ show: true })}
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

  handleBurgerNavClick = () => {
    this.setState({ burgerNav: !this.state.burgerNav });
  };

  render() {
    return (
      <div className='navbar-container'>
        <div className='navbar-left'>
          <div className='navbar-branding'>
            <Link to='/' className=''>
              Foodzy
            </Link>
            <div
              className={`hamburger-menu-button`}
              onClick={() => this.handleBurgerNavClick()}
            >
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </div>
          </div>

          <div
            className={`navbar-navs ${
              this.state.burgerNav ? 'burger-nav-active-left' : ''
            }`}
          >
            <Link to='/viewRequests' className='navbar-left-navs'>
              Accept a Request
            </Link>

            {this.renderMakeRequest(this.props.auth)}
            <VerticallyCenteredModal
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
            />
          </div>
        </div>

        <div
          className={`navbar-right ${
            this.state.burgerNav ? 'burger-nav-active-right' : ''
          }`}
        >
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
