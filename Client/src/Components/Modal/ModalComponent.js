import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import CustomStyles from './ModalStyles';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={CustomStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader closeModal={closeModal} />
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalComponent;

