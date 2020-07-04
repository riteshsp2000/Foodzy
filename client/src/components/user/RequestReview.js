import React from 'react';

const RequestReview = ({ onCancel }) => {
  return (
    <div>
      <h4>Request Review</h4>
      <button onClick={() => onCancel()}>Back</button>
      button
    </div>
  );
};

export default RequestReview;
