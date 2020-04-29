import React from 'react';
import AddModal from "pages/AddData/_components/AddModal/AddModal";

const AddArtistModal = () => {
  const [artistInfo, setArtistInfo] = React.useState({});
  const handleChange = ({ target: { value, name } }) => {
    setArtistInfo({ ...artistInfo, [name]: value });
  };
  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <AddModal title={'Artist Data'}>
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
    </AddModal>
  )
};

export default AddArtistModal;
