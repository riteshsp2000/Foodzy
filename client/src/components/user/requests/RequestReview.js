import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { USER_FIELDS, ITEM_FIELDS } from './constants';

const RequestReview = ({ onCancel, formValues }) => {
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
        <ul>
          {_.map(ITEM_FIELDS, (field) => {
            return (
              <li key={index}>
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

  return (
    <div>
      <h4>Request Review</h4>

      <div className='review-container'>{renderUserDetails()}</div>
      <ul className='items-container'>{renderItemDetails()}</ul>
      <button onClick={() => onCancel()}>Back</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.requestForm.values };
};

export default connect(mapStateToProps)(RequestReview);
