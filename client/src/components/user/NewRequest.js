import React, { Component } from 'react';

import Layout from './Layout';
import RequestForm from './RequestForm';

class NewRequest extends Component {
  render() {
    return (
      <Layout>
        <h2>New Request</h2>
        <RequestForm />
      </Layout>
    );
  }
}

export default NewRequest;
