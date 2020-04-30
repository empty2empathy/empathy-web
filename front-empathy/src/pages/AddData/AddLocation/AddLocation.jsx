import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";
import DataList from "../_components/DataList/DataList";

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
        <h1>Loading...</h1>
      ) : (
        <>
          {locations.map(({ id, name }, i) =>
            <DataList id={id} name={name} i={i}/>
          )}
        </>
      )}
    </>
  );
}

export default withFirebase(AddLocation);
