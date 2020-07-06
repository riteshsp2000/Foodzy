import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from './user/Layout';
import { fetchRequests } from '../actions/index';
import ViewRequestCard from './ViewRequestCard';

const ViewRequests = ({ requests, fetchRequests }) => {
  useEffect(() => {
    fetchRequests();
  }, []);

  const renderRequestCards = (requests) => {
    switch (requests.length) {
      case 0:
        return 'Loading...';
      default:
        return requests.map((request, index) => {
          return <ViewRequestCard key={index} items={request.items} />;
        });
    }
  };

  return (
    <Layout>
      <h2>View Requests</h2>
      <div className='requests-view-container'>
        {renderRequestCards(requests)}
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ requests }) => {
  return { requests };
};

export default connect(mapStateToProps, { fetchRequests })(ViewRequests);
