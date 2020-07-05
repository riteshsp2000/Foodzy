import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import SurveyField from './SurveyField';
import RequestItemList from './RequestItemList';

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

  renderItemFields = () => {
    return _.map(ITEM_FIELDS, ({ label, type, name, className }) => {
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

  handleParentFormSubmit = () => {
    this.props.onRequestSubmit();
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(() => this.handleParentFormSubmit)}
          className='form-container'
        >
          <div className='user-input-container input-div'>
            {this.renderUserFields()}
          </div>
          <Link to='/user'>Cancel</Link>
          <button type='submit'>Confirm the Request</button>
        </form>

        <form className='item-input-container'>
          <div className='item-input-container input-div'>
            {this.renderItemFields()}
          </div>
          <i className='fas fa-plus-circle'></i>
        </form>

        <div className='item-list'>
          <RequestItemList />
        </div>
      </div>
    );
  }
}

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

  _.each(ITEM_FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value.';
    }
  });

  if (isNaN(values.contactNumber)) {
    errors.contactNumber = 'Contact number must be a number.';
  }

  if (isNaN(values.itemQuantity)) {
    errors.itemQuantity = 'Item quantity must be a number.';
  }

  return errors;
};

export default reduxForm({
  validate,
  form: 'requestForm',
  destroyOnUnmount: false,
})(RequestForm);
