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

const AddModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  // input data
  const [artistInfo, setArtistInfo] = React.useState({});
  const handleChange = ({ target: { value, name } }) => {
    setArtistInfo({ ...artistInfo, [name]: value });
  };
  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <>
      <button onClick={openModal}>modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Modal"
      >
        <h1>Artist Data</h1>
        <button onClick={closeModal}>close</button>
        <form onSubmit={handleSubmit}>
          <label>
            ID
            <input name='id' onChange={handleChange}/>
          </label>
          <label>
            Name
            <input name='name' onChange={handleChange}/>
          </label>
          <label>
            Image Url
            <input name='imgUrl' onChange={handleChange}/>
          </label>
          <label>
            Instagram ID
            <input name='instaId' onChange={handleChange}/>
          </label>
          <label>
            Program Type
            <input name='programType' onChange={handleChange}/>
          </label>
          <label>
            Biography
            <textarea name='biography' onChange={handleChange}/>
          </label>
          <button>Cancel</button>
          <button>+Add</button>
        </form>
      </Modal>
    </>
  )
};

export default AddModal;
