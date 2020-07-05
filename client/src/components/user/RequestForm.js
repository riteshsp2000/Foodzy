import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, FieldArray } from 'redux-form';
import _ from 'lodash';

import SurveyField from './SurveyField';

// ====================================================================================================
const USER_FIELDS = [
  { label: 'Name', type: 'text', name: 'name', className: 'user-name' },
  {
    label: 'Contact Number',
    type: 'number',
    name: 'contactNumber',
    className: 'contact-number',
  },
  {
    label: 'Delivery Location',
    type: 'text',
    name: 'deliveryLocation',
    className: 'delivery-location',
  },
];

// ====================================================================================================
const ITEM_FIELDS = [
  {
    label: 'Item Name',
    type: 'text',
    name: 'itemName',
    className: 'item-name',
  },
  {
    label: 'Restaurant Name',
    type: 'text',
    name: 'restaurant',
    className: 'restaurant',
  },
  {
    label: 'Item Quantity',
    type: 'number',
    name: 'itemQuantity',
    className: 'item-quantity',
  },
];

// ====================================================================================================
class RequestForm extends React.Component {
  renderUserFields = () => {
    return _.map(USER_FIELDS, ({ label, type, name, className }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type={type}
          label={label}
          className={className}
          name={name}
        />
      );
    });
  };

  renderItemFields = (item) => {
    return _.map(ITEM_FIELDS, ({ label, type, name, className }) => {
      return (
        <Field
          key={`${item}.${name}`}
          component={SurveyField}
          type={type}
          label={label}
          className={className}
          name={`${item}.${name}`}
        />
      );
    });
  };

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

  handleParentFormSubmit = () => {};

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

  if (isNaN(values.contactNumber)) {
    errors.contactNumber = 'Contact number must be a number.';
  } else {
    if (!values.contactNumber.toString().length === 10) {
      errors.contactNumber = 'Contact number must be 10 digits.';
    }
  }

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

  return errors;
};

// ====================================================================================================
export default reduxForm({
  validate,
  form: 'requestForm',
  destroyOnUnmount: false,
})(RequestForm);

// <form className='item-input-container'>
//           <div className='item-input-container input-div'>
//             {this.renderItemFields()}
//           </div>
//           <i className='fas fa-plus-circle'></i>
//         </form>
