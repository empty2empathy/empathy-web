import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";
import AddLocationModal from 'pages/AddData/_components/AddLocationModal/AddLocationModal';
import Loading from "./Loading";
import { AddBtn, AddBtnWrapper, ListWrapper } from "./_StyledComponents";
import XSquare from "../../../assets/svg/XSquare";
import styled from 'styled-components';

const LocationWrapper = styled.div`
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

const LocationItem = ({ index, id, name }) => (
  <LocationWrapper>
    <span>{index + 1}</span>
    <span>{id}</span>
    <span>{name}</span>
    <span>
      <XSquare/>
    </span>
  </LocationWrapper>
);

const AddLocation = ({ firebase }) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const locations = await firebase.loadLocations();
      setLocations(locations);
      setIsLoading(false);
    };
    fetchData();
  }, [firebase]);

  return (
    <>
      <AddBtnWrapper>
        <AddBtn onClick={() => setIsModalOpen(true)}>+Add</AddBtn>
        <AddLocationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </AddBtnWrapper>
      {isLoading ? (
        <Loading/>
      ) : (
        <ListWrapper>
          {locations.map(({ id, name }, index) =>
            <LocationItem key={id} index={index} id={id} name={name}/>
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default withFirebase(AddLocation);
