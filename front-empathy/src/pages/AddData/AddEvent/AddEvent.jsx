import React, { useEffect, useState } from 'react';
import { withFirebase } from "../../../redbricks-firebase";
import AddEventModal from 'pages/AddData/_components/AddEventModal/AddEventModal';

const AddEvent = ({ firebase }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      const events = await firebase.loadEvents();
      setEvents(events);
      setIsloading(false);
    }
    fetchData();
  }, [firebase]);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div>
        <button onClick={() => setIsModalOpen(true)}>+Add</button>
        <AddEventModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <tbody>
          {events.map(({ id, title }, i) => {
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{title}</td>
                <td>{id}</td>
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
