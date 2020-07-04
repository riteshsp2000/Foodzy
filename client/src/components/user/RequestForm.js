import React from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import SurveyField from './SurveyField';

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

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderUserFields()}
          {this.renderItemFields()}
          <button type='submit'>Confirm the Request</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'requestForm',
})(RequestForm);
