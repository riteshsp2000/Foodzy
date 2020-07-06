import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRequestsUser } from '../../actions/index';
import Layout from './Layout';
import Card from '../Card';

const Profile = ({ fetchRequestsUser, requestsUser }) => {
  useEffect(() => {
    fetchRequestsUser();
  }, []);

  const renderRequests = (requestsUser) => {
    switch (requestsUser) {
      case null:
        return 'Loading...';
      case undefined:
        return 'Loading...';
      default:
        return requestsUser.map(({ accepted, dateAdded, _acceptedUser }) => {
          return (
            <div className='profile-card'>
              <Card
                status={accepted}
                date={dateAdded}
                acceptedUser={
                  accepted ? _acceptedUser : { name: 'NA', contactNumber: 'NA' }
                }
              />
            </div>
          );
        });
    }
  };

  console.log(requestsUser);
  return (
    <Layout>
      <h2>Profile</h2>
      <div className='profile-own-requests-container'>
        {renderRequests(requestsUser)}
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ requestsUser }) => {
  return { requestsUser };
};

export default connect(mapStateToProps, { fetchRequestsUser })(Profile);
