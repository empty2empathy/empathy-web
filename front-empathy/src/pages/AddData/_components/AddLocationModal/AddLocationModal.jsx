import React from 'react';
import AddBaseModal from "pages/AddData/_components/AddBaseModal/AddBaseModal";

const AddLocationModal = ({ isModalOpen, setIsModalOpen }) => {
  const [locationInfo, setLocationInfo] = React.useState({});
  const handleChange = ({ target: { value, name } }) => {
    setLocationInfo({ ...locationInfo, [name]: value });
  };
  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <AddBaseModal
      title={'Location Data'}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
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
          Naver Map Link
          <input name='mapLink' onChange={handleChange}/>
        </label>
        <label>
          Description
          <textarea name='description' onChange={handleChange}/>
        </label>
        <button>Cancel</button>
        <button>+Add</button>
      </form>
    </AddBaseModal>
  )
};

export default AddLocationModal;
