import React from 'react';

import Layout from './Layout';
import Card from '../Card';

const Profile = () => {
  return (
    <Layout>
      <h2>Profile</h2>
      <Card
        status={true}
        date='12-12-12'
        acceptedUser={{ name: 'Ritesh', contactNumber: 1234567890 }}
      />
    </Layout>
  );
};

export default Profile;
