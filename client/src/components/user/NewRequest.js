import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import Layout from './Layout';
import RequestForm from './requests/RequestForm';
import RequestReview from './requests/RequestReview';

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

// The redux form is used so as to indicate that when the NewRequest is unmounted the
// form values should not be persisted
// But either of RequestForm or RequestFormReview components are unmounted, the form
// should persist the values.
export default reduxForm({
  form: 'requestForm',
})(NewRequest);
