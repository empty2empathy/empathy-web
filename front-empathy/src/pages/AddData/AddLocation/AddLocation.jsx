import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";
import AddLocationModal from 'pages/AddData/_components/AddLocationModal/AddLocationModal';

const AddLocation = ({ firebase }) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const locations = await firebase.loadLocations();
      setLocations(locations);
      setIsLoading(false);
    };
    fetchData();
  }, [firebase]);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div>
        <button onClick={() => setIsModalOpen(true)}>+Add</button>
        <AddLocationModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </div>
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
