import React from 'react';
import Typed from 'react-typed';

const HomePage = () => {
  return (
    <header className='heading-container'>
      <div className='heading-image'>
        <Typed
          strings={[
            'Hungry? Feeling Lazy?',
            "Don't want to leave the bed?",
            'In the middle of a film?',
            'No worries! Make a request!',
            'And get your food at your place!',
          ]}
          typeSpeed={40}
          loop={true}
          className='typed-intro'
        />
      </div>
      <div className='card-container'>
        <div className='card card-one'>
          <i className='far fa-file-alt fa-2x fa-custom'></i>
          <h2>Make Request</h2>
          <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>

        <div className='card card-two'>
          <i className='fas fa-phone fa-2x fa-custom'></i>
          <h2>Confirm Request</h2>
          <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>

        <div className='card card-three'>
          <i className='fas fa-hamburger fa-2x fa-custom'></i>
          <h2>Enjoy the food</h2>
          <p>Lorem, ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
