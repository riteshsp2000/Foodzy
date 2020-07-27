import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import Layout from './user/Layout';
import createBrowserHistory from '../history';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
    width: '100%',
  },

  input: {
    fontSize: '1.6rem',
    padding: '0.8em !important',
    width: '100%',
  },

  label: {
    fontSize: '5.6rem',
    padding: '8px !important',
  },
}));

const ViewRequest = ({
  details: { name, contactNumber, deliveryLocation, items, _id },
}) => {
  const [acceptedUser, setAcceptedUser] = useState({
    name: '',
    contactNumber: 0,
    _id,
  });

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

  const handleAcceptRequest = async (event) => {
    event.preventDefault();
    console.log(acceptedUser);
    await axios.patch(`/api/acceptRequest`, acceptedUser);
    createBrowserHistory.push('/profile/:id');
  };

  const handleOnChangeName = (event) => {
    setAcceptedUser({ ...acceptedUser, name: event.target.value });
  };

  const handleOnChangeContact = (event) => {
    setAcceptedUser({
      ...acceptedUser,
      contactNumber: event.target.value,
    });
  };

  const classes = useStyles();

  return (
    <Layout>
      <h2>Accept Request</h2>

      <form autoComplete='off' onSubmit={(event) => handleAcceptRequest(event)}>
        <div className='accepting-user-div'>
          <div>
            <TextField
              id='outlined-basic'
              required
              label='Name'
              variant='outlined'
              className={classes.root}
              onChange={handleOnChangeName}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
            />
          </div>

          <div>
            <TextField
              id='outlined-basic'
              required
              label='Contact Number'
              variant='outlined'
              className={classes.root}
              onChange={handleOnChangeContact}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
            />
          </div>
        </div>

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
            <button
              className='view-request-accept-request'
              type='submit'
              value='Submit'
            >
              Accept Request
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

const mapStateToProps = ({ viewRequest }) => {
  return { details: viewRequest };
};

export default connect(mapStateToProps)(ViewRequest);
