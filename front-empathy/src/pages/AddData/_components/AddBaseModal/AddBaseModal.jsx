import React from "react";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const AddBaseModal = ({ title, children, isModalOpen, setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Modal">
      <h1>{title}</h1>
      <button onClick={closeModal}>close</button>
      {children}
    </Modal>
  )
};

export default AddBaseModal;
