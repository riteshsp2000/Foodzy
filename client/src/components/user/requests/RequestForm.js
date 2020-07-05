import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, FieldArray } from 'redux-form';
import _ from 'lodash';

import RequestInputField from './RequestInputField';
import { USER_FIELDS, ITEM_FIELDS } from './constants';

// ====================================================================================================
class RequestForm extends React.Component {
  // Function to render the fields(inputs) of individual details of user.
  renderUserFields = () => {
    return _.map(USER_FIELDS, ({ label, type, name, className }) => {
      return (
        <Field
          key={name}
          component={RequestInputField}
          type={type}
          label={label}
          className={className}
          name={name}
        />
      );
    });
  };

  // Function to render the fields(inputs) of individual details of items.
  renderItemFields = (item) => {
    return _.map(ITEM_FIELDS, ({ label, type, name, className }) => {
      return (
        <Field
          key={`${item}.${name}`}
          component={RequestInputField}
          type={type}
          label={label}
          className={className}
          name={`${item}.${name}`}
        />
      );
    });
  };

  // Function to render all the items in the Array Fields (item-list)
  renderItems = ({ fields, meta: { error, submitFailed } }) => {
    return (
      <ul>
        <li>
          <button type='button' onClick={() => fields.push({})}>
            Add Item
          </button>
          {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((item, index) => (
          <li key={index}>
            <button
              type='button'
              title='Remove Item'
              onClick={() => fields.remove(index)}
            />
            <h4>Item #{index + 1}</h4>
            {this.renderItemFields(item)}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(() => this.props.onRequestSubmit())}
          className='form-container'
        >
          <div className='user-input-container input-div'>
            {this.renderUserFields()}
          </div>

          <FieldArray name='items' component={this.renderItems} />

          <Link to='/user'>Cancel</Link>
          <button type='submit'>Confirm the Request</button>
        </form>
      </div>
    );
  }
}

// ====================================================================================================
const validate = (values) => {
  // the values parameter is called with the validate form by redux-form
  // which containes an object of all the inputs as structured by use
  // ie. wrt to the name provided for each input
  const errors = {};

  // An error object is created which will be populated with the keys corresponding
  // to the name of input which indicates redux-form that the concerned input
  // has the mentioned sort of error. If no error(empty) no errors displayed
  _.each(USER_FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value.';
    }
  });

  // Validate the contact number to be a number and of length 10
  if (isNaN(values.contactNumber)) {
    errors.contactNumber = 'Contact number must be a number.';
  } else {
    if (!values.contactNumber.toString().length === 10) {
      errors.contactNumber = 'Contact number must be 10 digits.';
    }
  }

  // Error validation logic for the field array.
  if (!values.items || !values.items.length) {
    errors.items = { _error: 'At least one item must be added.' };
  } else {
    let itemsArrayErrors = [];

    values.items.forEach((item, index) => {
      const itemErrors = {};
      _.each(ITEM_FIELDS, ({ name }) => {
        if (!item || !item[name]) {
          itemErrors[name] = 'Field Required';
          itemsArrayErrors[index] = itemErrors;
        }
      });
    });

    if (itemsArrayErrors.length) {
      errors.items = itemsArrayErrors;
    }
  }

  // ..
  return errors;
};

// ====================================================================================================
export default reduxForm({
  validate,
  form: 'requestForm',
  destroyOnUnmount: false,
})(RequestForm);
