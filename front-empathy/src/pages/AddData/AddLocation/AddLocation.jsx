import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";
import DataList from "../_components/DataList/DataList";
import './AddLocation.scss';

const AddLocation = ({ firebase }) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const locations = await firebase.loadLocations();
      setLocations(locations);
      setIsLoading(false);
    }
    fetchData();
  }, [firebase]);

  return (
    <>
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
