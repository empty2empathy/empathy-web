import React from "react";
import Modal from 'react-modal';
import './AddBaseModal.scss';
import CloseIcon from "assets/svg/closeIcon"

Modal.setAppElement(document.getElementById('root'));

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    marginRight: '-50%',
    borderRadius: '8px',
    transform: 'translate(-50%, -50%)'
  }
};

const AddBaseModal = ({ title, children, isModalOpen, setIsModalOpen, handleSubmit }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      // isOpen={isModalOpen}
      isOpen={true}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Add Modal">
      <form className='AddBaseModal' onSubmit={handleSubmit}>
        <div className='header'>
          <h1 className='title'>{title}</h1>
          <CloseIcon width={16} height={16} color={'#999999'}
                     style={{
                       height: '24px',
                       width: '24px',
                       background: '#f5f5f5',
                       borderRadius: '18px',
                       boxSizing: 'border-box'
                     }}
                     onClick={closeModal}/>
        </div>
        <section className='children'>
          {children}
        </section>
        <div className='bottom'>
          <button className='cancel-btn'>Cancel</button>
          <button className='add-btn'>+Add</button>
        </div>
      </form>
    </Modal>
  )
};

export default AddBaseModal;
