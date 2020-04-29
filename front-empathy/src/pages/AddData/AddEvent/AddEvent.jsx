import React, { useEffect, useState } from 'react';
import { withFirebase } from "../../../redbricks-firebase";

const AddEvent = ({firebase}) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      const event = await firebase.loadEvents();
      setEvents(event);
      setIsloading(false);
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
          {events.map(({ id, name }, i) => {
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

export default withFirebase(AddEvent);
