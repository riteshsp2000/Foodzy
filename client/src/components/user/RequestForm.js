import React from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

class RequestForm extends React.Component {
  renderFields = () => {
    return (
      <div>
        <Field label='Name' type='text' name='name' component={SurveyField} />
        <Field
          label='Contact Number'
          type='number'
          name='contactNumber'
          component={SurveyField}
        />
        <Field
          label='Location'
          type='text'
          name='location'
          component={SurveyField}
        />
        <Field
          label='Item Name'
          type='text'
          name='itemName'
          component={SurveyField}
        />
        <Field
          label='Restaurant Name'
          type='text'
          name='restaurant'
          component={SurveyField}
        />
        <Field
          label='Quantity'
          type='text'
          name='quantity'
          component={SurveyField}
        />
      </div>
    );
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderFields()}
          <button type='submit'>Confirm the Request</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'requestForm',
})(RequestForm);
