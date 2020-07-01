import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const VerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Login Required
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          To make it easy to contact the user for confirmation of order, login
          is require. Please login using google.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button>
          <a
            href='/auth/google'
            className='navbar-right-navs'
            style={{ color: '#fff' }}
          >
            Sign In with
            <i
              className='fab fa-google fa-google-custom'
              style={{ color: '#fff' }}
            ></i>
          </a>
        </Button>

        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VerticallyCenteredModal;
