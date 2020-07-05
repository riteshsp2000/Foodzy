import React from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';

const RequestReview = ({ onCancel, formValues }) => {
  // console.log(formValues);
  return (
    <div>
      <h4>Request Review</h4>
      <button onClick={() => onCancel()}>Back</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.requestForm };
};

export default connect(mapStateToProps)(RequestReview);
