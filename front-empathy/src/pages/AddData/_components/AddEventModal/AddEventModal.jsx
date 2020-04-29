import React from 'react';
import AddBaseModal from "pages/AddData/_components/AddBaseModal/AddBaseModal";

const AddEventModal = ({ isModalOpen, setIsModalOpen }) => {
  const [eventInfo, setEventInfo] = React.useState({
    title: '', locationId: '', youtubeVideoId: '',
    eventDate: { start: '', end: '' }, artistId: '', description: ''
  });
  const handleChange = ({ target: { value, name } }) => {
    setEventInfo({ ...eventInfo, [name]: value });
  };
  const handleDateChange = ({ target: { value, name } }) => {
    setEventInfo({
      ...eventInfo, eventDate: {
        ...eventInfo.eventDate, [name]: value
      }
    });
  };
  const handleSubmit = ev => {
    ev.preventDefault();
  };

  return (
    <AddBaseModal
      title={'Event Data'}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input name='title' onChange={handleChange}/>
        </label>
        <label>
          Location ID
          <input name='locationId' onChange={handleChange}/>
        </label>
        <label>
          YouTube Video ID
          <input name='youtubeVideoId' onChange={handleChange}/>
        </label>
        <label>
          Event Date
          <input type='date' name='start' onChange={handleDateChange}/>
          <input type='date' name='end' onChange={handleDateChange}/>
        </label>
        <label>
          Artist ID
          <input name='artistId' onChange={handleChange}/>
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

export default AddEventModal;
