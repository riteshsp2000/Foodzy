import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='col-one'>
        <h3 style={{ textAlign: 'center' }}>Want to contribute?</h3>
        <p>
          The project is open sourched <br /> Check code at <br />{' '}
          <a href='https://github.com/riteshsp2000/Foodzy'>
            <i className='fab fa-github fa-2x' style={{ color: 'black' }}></i>
          </a>
        </p>
      </div>

      <div className='col-two'>
        <h3 style={{ textAlign: 'center' }}>Want to collaborate?</h3>
        <p>
          I am open to work on projects <br /> Say hello at <br />{' '}
          <a href='mailto:riteshp2000@gmail.com'>
            <i className='fas fa-envelope fa-2x' style={{ color: 'black' }}></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
