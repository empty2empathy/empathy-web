import React from 'react';
import AddBaseModal from "pages/AddData/_components/AddBaseModal/AddBaseModal";
import './AddArtistModal.scss';
import InputText from "../InputText/InputText";
import InputTextArea from "../InputTextArea/InputTextArea";
import { withFirebase } from "redbricks-firebase";

const ARTIST_INIT_STATE = {
  id: "",
  name: "",
  imgUrl: "",
  instaId: "",
  programType: "",
  biography: "",
};

const AddArtistModal = ({ firebase, isModalOpen, setIsModalOpen }) => {
  const [artistInfo, setArtistInfo] = React.useState(ARTIST_INIT_STATE);
  const handleChange = ({ target: { value, name } }) => {
    setArtistInfo({ ...artistInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    const { id, name, imgUrl, instaId, programType, biography } = artistInfo;
    firebase.setArtist({
      id, name, artistBio: biography, img: imgUrl, instaId,
      programType: programType.split(',')
    }).then(isSuccess => {
      if (isSuccess) {
        setArtistInfo(ARTIST_INIT_STATE);
        setIsModalOpen(false);
      }
    });
    event.preventDefault();
  };

  return (
    <AddBaseModal
      title={'Artist Data'}
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      handleSubmit={handleSubmit}>
      <div className='AddArtistModal'>
        <InputText handleChange={handleChange} labelName={'ID'} inputName={'id'}
                   subText={'고유한 아티스트의 id이여야 한다.(ex. abel_ko)'}/>
        <InputText handleChange={handleChange} labelName={'Name'} inputName={'name'}/>
        <InputText handleChange={handleChange} labelName={'Image Url'} inputName={'imgUrl'}/>
        <InputText handleChange={handleChange} labelName={'Instagram ID'} inputName={'instaId'}/>
        <InputText handleChange={handleChange} labelName={'Program Type'} inputName={'programType'}/>
        <InputTextArea handleChange={handleChange} labelName={'Biography'} inputName={'biography'}/>
      </div>
    </AddBaseModal>
  )
};

export default withFirebase(AddArtistModal);
