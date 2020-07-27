import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  fetchRequestsUser,
  fetchAcceptedRequestsUser,
} from '../../actions/index';
import Layout from './Layout';
import Card from './Card';
import Card2 from './Card2';
import ProfileCard from './ProfileCard';
import { Divider } from '@material-ui/core';

const Profile = ({
  fetchRequestsUser,
  fetchAcceptedRequestsUser,
  requestsUser,
  auth,
  acceptedRequestsUser,
}) => {
  // =============
  useEffect(() => {
    fetchRequestsUser();
    fetchAcceptedRequestsUser();
  }, [fetchRequestsUser, fetchAcceptedRequestsUser]);

  const renderRequests = (requestsUser) => {
    switch (requestsUser) {
      case null:
        return 'Loading...';
      case undefined:
        return 'Loading...';
      default:
        if (requestsUser.length === 0) {
          return (
            <h4 style={{ textAlign: 'center', width: '100%' }}>
              No Orders Yet...
            </h4>
          );
        } else {
          return requestsUser.map(
            ({ accepted, dateAdded, _acceptedUser }, index) => {
              const date = new Date(dateAdded);
              return (
                <div
                  className='profile-card'
                  id='profile-mobile-card'
                  key={index}
                >
                  <Card
                    status={accepted}
                    date={date.toLocaleString()}
                    acceptedUser={
                      accepted
                        ? _acceptedUser
                        : { name: 'NA', contactNumber: 'NA' }
                    }
                  />
                </div>
              );
            }
          );
        }
    }
  };

  const renderAcceptedRequests = (acceptedRequestsUser) => {
    switch (acceptedRequestsUser) {
      case null:
        return 'Loading...';
      case undefined:
        return 'Loading...';
      default:
        if (acceptedRequestsUser.length === 0) {
          return (
            <h4 style={{ textAlign: 'center', width: '100%' }}>
              No Accepted Orders Yet...
            </h4>
          );
        } else {
          return acceptedRequestsUser.map(
            ({ contactNumber, dateAdded, name, deliveryLocation }, index) => {
              const date = new Date(dateAdded);
              return (
                <div
                  className='profile-card'
                  id='profile-mobile-card'
                  key={index}
                >
                  <Card2
                    date={date.toLocaleString()}
                    contactNumber={contactNumber}
                    name={name}
                    deliveryLocation={deliveryLocation}
                  />
                </div>
              );
            }
          );
        }
    }
  };

  const renderProfile = (auth) => {
    switch (auth) {
      case null:
        return 'Loading...';
      case undefined:
        return 'Loading...';
      default:
        return (
          <ProfileCard
            name={auth.displayName}
            image={auth.photos}
            email={auth.emails[0].value}
          />
        );
    }
  };

  return (
    <Layout>
      <h2>Profile</h2>
      <div className='profile-parent-div'>
        <div className='profile-info'>{renderProfile(auth)}</div>
        <div className='profile-requests'>
          <div>
            <h3
              style={{
                marginLeft: '1em',
                marginTop: '1em',
                marginBottom: '0.5em',
              }}
            >
              Own Requests
            </h3>
            <div className='profile-own-requests-container'>
              {renderRequests(requestsUser)}
            </div>
            <Divider />
          </div>
          <div>
            <h3
              style={{ marginLeft: '1em', marginTop: '1em', marginBottom: '0' }}
            >
              Accepted Requests
            </h3>
            <div className='profile-accepted-requests-container'>
              {renderAcceptedRequests(acceptedRequestsUser)}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ requestsUser, auth, acceptedRequestsUser }) => {
  return { requestsUser, auth, acceptedRequestsUser };
};

export default connect(mapStateToProps, {
  fetchRequestsUser,
  fetchAcceptedRequestsUser,
})(Profile);
