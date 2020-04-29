import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";

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
        <table>
          <tbody>
          {locations.map(({ id, name }, i) => {
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{id}</td>
                <td>{name}</td>
                <td>X</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      )}
    </>
  );
}

export default withFirebase(AddLocation);
