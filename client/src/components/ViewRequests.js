import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from './user/Layout';
import { fetchRequests } from '../actions/index';
import ViewRequestCard from './ViewRequestCard';

const ViewRequests = ({ requests, fetchRequests }) => {
  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const renderRequestCards = (requests) => {
    switch (requests.length) {
      case 0:
        return 'Loading...';
      default:
        return requests.map((request, index) => {
          return (
            <ViewRequestCard
              key={index}
              items={request.items}
              details={request}
            />
          );
        });
    }
  };

  const checkAvailableRequests = (requests) => {
    if (requests.length === 0) {
      return (
        <h4 style={{ textAlign: 'center', width: '100%' }}>
          No requests made yet...
        </h4>
      );
    }

    renderRequestCards(requests);
  };

  return (
    <Layout>
      <h2>View Requests</h2>
      <div className='requests-view-container'>
        {checkAvailableRequests(requests)}
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ requests }) => {
  return { requests };
};

export default connect(mapStateToProps, { fetchRequests })(ViewRequests);
