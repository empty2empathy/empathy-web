import React, { useEffect, useState } from 'react';
import { withFirebase } from "../../../redbricks-firebase";
import DataList from "../_components/DataList/DataList";

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
        <h1>Loading...</h1>
      ) : (
        <>
          {events.map(({ id, title }, i) =>
            <DataList id={id} name={title} i={i}/>
          )}
        </>
      )}
    </>
  );
}

export default withFirebase(AddEvent);
