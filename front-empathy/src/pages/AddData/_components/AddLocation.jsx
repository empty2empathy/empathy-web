import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";
import AddLocationModal from 'pages/AddData/_components/AddLocationModal/AddLocationModal';
import DataList from "./DataList/DataList";
import Loading from "./Loading";
import { AddBtn, AddBtnWrapper, ListWrapper } from "./_StyledComponents";

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
          {locations.map(({ id, name }, i) =>
            <DataList key={id} name={name} i={i}/>
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default withFirebase(AddLocation);
