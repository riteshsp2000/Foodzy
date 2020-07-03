import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className='user-layout-container'
      style={{ marginTop: '5em', height: '70vh' }}
    >
      {children}
    </div>
  );
};

export default Layout;
