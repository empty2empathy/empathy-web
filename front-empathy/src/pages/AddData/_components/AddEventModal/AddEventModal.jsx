import React from 'react';
import AddBaseModal from "pages/AddData/_components/AddBaseModal/AddBaseModal";

import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/InputTextArea";

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
      setIsModalOpen={setIsModalOpen}
      handleSubmit={handleSubmit}>
      <div className='AddEventModal'>
        <InputText handleChange={handleChange} labelName={'Title'} inputName={'title'}/>
        <InputText handleChange={handleChange} labelName={'Location ID'} inputName={'locationId'}
                   subText={'ex) location/evanslounge'}/>
        <InputText handleChange={handleChange} labelName={'YouTube Video ID'} inputName={'youtubeVideoId'}/>
        <label>
          Event Date
          <input type='date' name='start' onChange={handleDateChange}/>
          <input type='date' name='end' onChange={handleDateChange}/>
        </label>
        <InputText handleChange={handleChange} labelName={'Artist ID'} inputName={'artistId'}
                   subText={'쉼표(,)로 나누어서 넣어야 한다.'}/>
        <InputTextArea handleChange={handleChange} labelName={'Description'} inputName={'description'}/>
      </div>
    </AddBaseModal>
  )
};

export default AddEventModal;
