import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './ModalComponent.module.scss';

Modal.setAppElement('#root'); // Assurez-vous que #root est l'élément principal dans index.html

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className={styles.openButton}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <h2>Hello from Modal</h2>
        <button onClick={closeModal} className={styles.closeButton}>Close</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;
