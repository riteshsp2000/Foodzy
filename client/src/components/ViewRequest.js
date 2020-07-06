import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from './user/Layout';
import createBrowserHistory from '../history';

const ViewRequest = ({
  details: { name, contactNumber, deliveryLocation, items, _id },
}) => {
  const renderItems = (items) => {
    if (!items) {
      createBrowserHistory.push('/viewRequests');
      return 'Loading...';
    }

    return items.map(({ itemName, itemQuantity, restaurantName }, index) => {
      return (
        <div className='item-view-parent' key={`${index}-${index * index}`}>
          <h4 className='item-view-name'>{itemName}</h4>
          <span className='item-view-details'>
            <h4 className='item-view-quantity'>{itemQuantity}</h4>
            <h4 className='item-view-restaurant'>{restaurantName}</h4>
          </span>
        </div>
      );
    });
  };

  return (
    <Layout>
      <h2>View Requests</h2>

      <div className='request-view-container'>
        <div className='request-user-details'>
          <h2 className='user-name'>{name}</h2>
          <h4 className='user-contact'>
            <span className='number'>{contactNumber}</span> <br />
            <span className='location'>{deliveryLocation}</span>
          </h4>
        </div>

        <div className='items-list-view-request'>{renderItems(items)}</div>

        <div className='view-request-buttons'>
          <Link to='/viewRequests' className='view-request-cancel'>
            Cancel
          </Link>
          <button className='view-request-accept-request'>
            Accept Request
          </button>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ viewRequest }) => {
  return { details: viewRequest };
};

export default connect(mapStateToProps)(ViewRequest);
