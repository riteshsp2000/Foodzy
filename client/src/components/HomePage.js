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
          <h2>afjadlksf</h2>
        </div>

        <div className='card card-two'>
          <h2>afjadlksf</h2>
        </div>

        <div className='card card-three'>
          <h2>afjadlksf</h2>
        </div>
      </div>
      <h4>aflsdjflkajdsflkjlaslk</h4>
      <h4>aflsdjflkajdsflkjlaslk</h4>
      <h4>aflsdjflkajdsflkjlaslk</h4>
      <h4>aflsdjflkajdsflkjlaslk</h4>
    </header>
  );
};

export default HomePage;
