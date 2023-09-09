import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Styles/ModalComponent.module.css';

const ModalBody = ({ children }) => {
  return (
    <div className={styles.modalComponent__modalBody}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalBody;
