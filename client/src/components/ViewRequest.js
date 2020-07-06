import React from 'react';
import { connect } from 'react-redux';

import Layout from './user/Layout';

const ViewRequest = ({ details }) => {
  console.log(details);
  return (
    <Layout>
      <h2>View Requests</h2>
      <div className='request-view-container'></div>
    </Layout>
  );
};

const mapStateToProps = ({ viewRequest }) => {
  return { details: viewRequest };
};

export default connect(mapStateToProps)(ViewRequest);
