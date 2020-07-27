import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import VerticallyCenteredModal from './VerticallyCenteredModal';

import { setViewRequest } from '../actions/index';

const ViewRequestCard = ({ items, setViewRequest, details, auth }) => {
  const [show, setShow] = useState(false);

  const renderAcceptRequest = (user) => {
    switch (user) {
      case null:
        return;
      case false:
        return (
          <Link to='#' onClick={() => setShow(true)}>
            Accept Request
          </Link>
        );
      default:
        return (
          <Link to='/viewRequest' onClick={() => setViewRequest(details)}>
            Accept Request
          </Link>
        );
    }
  };

  return (
    <div className='view-request-card'>
      <div className='card-item-container'>
        {items.map(({ itemName, itemQuantity, restaurantName }, index) => {
          return (
            <div
              className='item-row'
              key={`${index}-${itemName}-${itemQuantity}-${restaurantName}`}
            >
              <h3 className='card-item-name'>
                {itemName} <br />{' '}
                <span className='card-restaurant'>{restaurantName}</span>
              </h3>
              <h3 className='card-item-quantity'>{itemQuantity}</h3>
            </div>
          );
        })}
      </div>
      <div className='view-request-buttons'>
        {renderAcceptRequest(auth)}
        <VerticallyCenteredModal
          show={show}
          onHide={() => this.setState({ show: false })}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { setViewRequest })(ViewRequestCard);
