import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { USER_FIELDS, ITEM_FIELDS } from './constants';
import { submitRequest } from '../../../actions/index';

const RequestReview = ({ onCancel, formValues, submitRequest }) => {
  const renderUserDetails = () => {
    return _.map(USER_FIELDS, (field, index) => {
      return (
        <div key={index}>
          <h4>
            {field.label}: {formValues[field.name]}
          </h4>
        </div>
      );
    });
  };

  const renderItemDetails = () => {
    return formValues.items.map((item, index) => {
      return (
        <ul key={index}>
          {_.map(ITEM_FIELDS, (field, index) => {
            return (
              <li key={`${index}-${field.label}`}>
                <h4>
                  {field.label} : {item[field.name]}
                </h4>
              </li>
            );
          })}
        </ul>
      );
    });
  };

  const handleRequestSubmit = (values) => {
    submitRequest(values);
  };

  return (
    <div className='request-review'>
      <h3>Request Review</h3>

      <div className='review-container'>{renderUserDetails()}</div>
      <div className='items-container'>{renderItemDetails()}</div>

      <div className='request-review-buttons form-handle-buttons'>
        <button className='cancel-button' onClick={() => onCancel()}>
          Back
        </button>
        <button
          className='confirm-button'
          onClick={() => handleRequestSubmit(formValues)}
        >
          Make a Request
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.requestForm.values };
};

export default connect(mapStateToProps, { submitRequest })(RequestReview);
