import React, { useEffect, useState } from 'react';
import { withFirebase } from "../../../redbricks-firebase";
import DataList from "../_components/DataList/DataList";
import './AddEvent.scss';

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


  return (
    <>
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="eventListContainer">
          {events.map(({ id, title }, i) =>
            <DataList key={id} name={title} i={i}/>
          )}
        </div>
      )}
    </>
  );
}

export default withFirebase(AddEvent);
