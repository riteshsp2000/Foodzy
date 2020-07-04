import React, { Component } from 'react';

import Layout from './Layout';
import RequestForm from './RequestForm';
import RequestReview from './RequestReview';

class NewRequest extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <RequestReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <RequestForm
        onRequestSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <Layout>
        <h2>New Request</h2>
        {this.renderContent()}
      </Layout>
    );
  }
}

export default NewRequest;
