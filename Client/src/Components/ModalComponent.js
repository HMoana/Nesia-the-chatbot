import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../Styles/ModalComponent.module.css';
import { SiProbot } from 'react-icons/si';

const CustomStyles = {
  content: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%', 
    maxWidth: '900px', 
    height: '85%',
    padding: '0',
    overflow: 'auto',
    borderRadius: '4px',
    outline: 'none',
    backgroundColor: '#E8E8E8',
    zIndex: 10000,
  },
  overlay: {
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    zIndex: 9999,
  },
};

const mediaQuery = '@media (max-width: 600px)';
const mediaStyles = {
  width: '90%', 
};

CustomStyles.content = {
  ...CustomStyles.content,
  ...mediaStyles,
  [mediaQuery]: {
    ...CustomStyles.content[mediaQuery],
    ...mediaStyles,
  },
};


Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={CustomStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.modalComponent__modalHeader}>
        <div className={styles.modalComponent__titleContainer}>
          <SiProbot className={styles.modalComponent__robotIcon} />
          <h2 className={styles.modalComponent__modalTitle}>Nesia te kaiāwhina</h2>
        </div>
        <button className={styles.modalComponent__closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
      <div className={styles.modalComponent__modalBody}>
        {children}
      </div>
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ModalComponent;


