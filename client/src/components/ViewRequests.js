import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from './user/Layout';
import { fetchRequests } from '../actions/index';

const ViewRequests = ({ requests, fetchRequests }) => {
  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <Layout>
      <h2>View Requests</h2>
      <div className='requests-view-container'></div>
    </Layout>
  );
};

const mapStateToProps = ({ requests }) => {
  return requests;
};

export default connect(mapStateToProps, { fetchRequests })(ViewRequests);
