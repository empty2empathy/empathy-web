import React from 'react';
import AddBaseModal from "pages/AddData/_components/AddBaseModal/AddBaseModal";
import './AddLocationModal.scss';
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/InputTextArea";

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
      setIsModalOpen={setIsModalOpen}
      handleSubmit={handleSubmit}>
      <div className='AddLocationModal'>
        <InputText handleChange={handleChange} labelName={'ID'} inputName={'id'}
                   subText={'고유한 장소의 id이여야 한다.(ex. club_ff)'}/>
        <InputText handleChange={handleChange} labelName={'Name'} inputName={'name'}/>
        <InputText handleChange={handleChange} labelName={'Image Url'} inputName={'imgUrl'}/>
        <InputText handleChange={handleChange} labelName={'Instagram ID'} inputName={'instaId'}/>
        <InputText handleChange={handleChange} labelName={'Program Type'} inputName={'programType'}/>
        <InputText handleChange={handleChange} labelName={'Naver Map Link'} inputName={'mapLink'}/>
        <InputTextArea handleChange={handleChange} labelName={'Description'} inputName={'description'}/>
      </div>
    </AddBaseModal>
  )
};

export default AddLocationModal;
