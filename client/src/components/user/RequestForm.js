import React from 'react';
import { reduxForm, Field } from 'redux-form';

class RequestForm extends React.Component {
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          <Field type='text' name='surveyTitle' component='input' />
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'requestForm',
})(RequestForm);
