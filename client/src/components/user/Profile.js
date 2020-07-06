import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRequestsUser } from '../../actions/index';
import Layout from './Layout';
import Card from './Card';
import ProfileCard from './ProfileCard';

const Profile = ({ fetchRequestsUser, requestsUser, auth }) => {
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
        if (requestsUser.length === 0) {
          return 'No Orders Yet...';
        } else {
          return requestsUser.map(
            ({ accepted, dateAdded, _acceptedUser }, index) => {
              return (
                <div
                  className='profile-card'
                  id='profile-mobile-card'
                  key={index}
                >
                  <Card
                    status={accepted}
                    date={dateAdded}
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
        <div className='profile-own-requests-container'>
          {renderRequests(requestsUser)}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ requestsUser, auth }) => {
  return { requestsUser, auth };
};

export default connect(mapStateToProps, { fetchRequestsUser })(Profile);
