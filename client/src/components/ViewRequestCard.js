import React from 'react';
import { Link } from 'react-router-dom';

const ViewRequestCard = ({ items }) => {
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
        <Link to='/viewRequest'>Accept Request</Link>
      </div>
    </div>
  );
};

export default ViewRequestCard;
