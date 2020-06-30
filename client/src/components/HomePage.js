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
      <h1>dfajsdlkfjlk</h1>
      <h1>dfajsdlkfjlk</h1>
      <h1>dfajsdlkfjlk</h1>
    </header>
  );
};

export default HomePage;
