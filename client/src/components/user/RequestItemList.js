import React from 'react';
import { connect } from 'react-redux';

const RequestItemList = ({ formValues }) => {
  // console.log(formValues);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { formValues: state.form.requestForm };
};

export default connect(mapStateToProps)(RequestItemList);
