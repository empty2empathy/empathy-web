import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";
import AddLocationModal from 'pages/AddData/_components/AddLocationModal/AddLocationModal';
import DataList from "../_components/DataList/DataList";
import './AddLocation.scss';

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
      <div>
        <button onClick={() => setIsModalOpen(true)}>+Add</button>
        <AddLocationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </div>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="locationListContainer">
          {locations.map(({ id, name }, i) =>
            <DataList key={id} name={name} i={i}/>
          )}
        </div>
      )}
    </>
  );
}

export default withFirebase(AddLocation);
