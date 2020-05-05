import React, { useState, useEffect } from 'react';
import { withFirebase } from "redbricks-firebase";
import AddArtistModal from 'pages/AddData/_components/AddArtistModal/AddArtistModal'
import Loading from "./Loading";
import { AddBtn, AddBtnWrapper, ListWrapper } from "./_StyledComponents";
import styled from "styled-components";
import XSquare from "../../../assets/svg/XSquare";

const ArtistWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  margin: 0 0 16px;
  box-shadow: 0 1px 0 0 #1a1a1a;
  color: #424042;
  font-size: 15px;
  font-weight: 500;
  
  span {
    margin: 0 8px 0 0;

    &:nth-child(1) {
      flex: 0.2;
    }
    &:nth-child(2) {
      flex: 1;
    }
    &:nth-child(3) {
      flex: 2;
    }
    &:last-child {
      width: 42px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
  }
`;

const ArtistItem = ({ index, id, name }) => (
  <ArtistWrapper>
    <span>{index + 1}</span>
    <span>{id}</span>
    <span>{name}</span>
    <span>
      <XSquare/>
    </span>
  </ArtistWrapper>
);

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
            <ArtistItem key={id} index={index} id={id} name={name}/>
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default withFirebase(AddArtist);
