import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  // meta parameter contains details regarding errors and interaction of the user with the input
  return (
    <div>
      <label>{label}</label>
      <input {...input} autoComplete='off' />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

export default SurveyField;
