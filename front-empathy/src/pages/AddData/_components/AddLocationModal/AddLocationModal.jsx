import React from 'react';
import AddBaseModal from "pages/AddData/_components/AddBaseModal/AddBaseModal";
import './AddLocationModal.scss';
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/InputTextArea";
import { withFirebase } from "redbricks-firebase";

const LOCATION_INIT_STATE = {
  id: '',
  name: '',
  imgUrl: '',
  instaId: '',
  programType: '',
  mapLink: '',
  description: ''
};

const AddLocationModal = ({ firebase, isModalOpen, setIsModalOpen }) => {
  const [locationInfo, setLocationInfo] = React.useState(LOCATION_INIT_STATE);
  const handleChange = ({ target: { value, name } }) => {
    setLocationInfo({ ...locationInfo, [name]: value });
  };

  const handleSubmit = ev => {
    const { id, name, imgUrl, instaId, programType, mapLink, description } = locationInfo;
    firebase.setLocation({
      id, name, img: imgUrl, instaId,
      programType: programType.split(','), mapLink, description
    }).then(isSuccess => {
      if (isSuccess) {
        setLocationInfo(LOCATION_INIT_STATE);
        setIsModalOpen(false);
      }
    });
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

export default withFirebase(AddLocationModal);
