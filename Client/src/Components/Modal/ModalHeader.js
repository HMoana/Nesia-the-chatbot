import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../Styles/ModalComponent.module.css';
import { SiProbot } from 'react-icons/si';

const ModalHeader = ({ closeModal }) => {
  return (
    <div className={styles.modalComponent__modalHeader}>
      <div className={styles.modalComponent__titleContainer}>
        <SiProbot className={styles.modalComponent__robotIcon} />
        <h2 className={styles.modalComponent__modalTitle}>NESIA TE KAIAAWHINA</h2>
      </div>
      <button className={styles.modalComponent__closeBtn} onClick={closeModal}>
        X
      </button>
    </div>
  );
};

ModalHeader.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalHeader;
