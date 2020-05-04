import React, { useState, useEffect } from 'react';
import { withFirebase } from "redbricks-firebase";
import AddArtistModal from 'pages/AddData/_components/AddArtistModal/AddArtistModal'
import DataList from "./DataList/DataList";
import Loading from "./Loading";
import { AddBtn, AddBtnWrapper, ListWrapper } from "./_StyledComponents";

const AddArtist = ({ firebase }) => {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const artists = await firebase.loadArtists();
      setArtists(artists);
      setIsLoading(false);
    };
    fetchData();
  }, [firebase]);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <AddBtnWrapper>
        <AddBtn onClick={() => setIsModalOpen(true)}>+Add</AddBtn>
        <AddArtistModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </AddBtnWrapper>
      {isLoading ? (
        <Loading/>
      ) : (
        <ListWrapper>
          {artists.map(({ id, name }, index) =>
            <DataList key={id} id={id} name={name} index={index}/>
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default withFirebase(AddArtist);
