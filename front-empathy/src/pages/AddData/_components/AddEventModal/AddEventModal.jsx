import React from 'react';
import AddBaseModal from "pages/AddData/_components/AddBaseModal/AddBaseModal";

import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/InputTextArea";
import DateInputs from '../DateInputs';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  width: 60%;
  > div {
    margin: 0 0 24px;
  }
`;

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
      <ModalWrapper>
        <InputText labelName={'Title'} inputName={'title'} handleChange={handleChange}/>
        <InputText labelName={'Location ID'} inputName={'locationId'}
                   subText={'ex) location/evanslounge'} handleChange={handleChange}/>
        <InputText labelName={'YouTube Video ID'} inputName={'youtubeVideoId'} handleChange={handleChange}/>
        <DateInputs labelName={'Event Date'} inputNames={['start', 'end']} handleDateChange={handleDateChange}/>
        <InputText labelName={'Artist ID'} inputName={'artistId'} handleChange={handleChange}
                   subText={'쉼표(,)로 나누어서 넣어야 한다.'}/>
        <InputTextArea labelName={'Description'} inputName={'description'} handleChange={handleChange}/>
      </ModalWrapper>
    </AddBaseModal>
  )
};

export default AddEventModal;
