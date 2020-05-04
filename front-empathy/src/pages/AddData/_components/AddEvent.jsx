import React, { useEffect, useState } from 'react';
import { withFirebase } from "../../../redbricks-firebase";
import DataList from "./DataList/DataList";
import Loading from "./Loading";
import AddEventModal from 'pages/AddData/_components/AddEventModal/AddEventModal';
import { AddBtn, AddBtnWrapper, ListWrapper } from "./_StyledComponents";

const AddEvent = ({ firebase }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
      <AddBtnWrapper>
        <AddBtn onClick={() => setIsModalOpen(true)}>+Add</AddBtn>
        <AddEventModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}/>
      </AddBtnWrapper>
      {isLoading ? (
        <Loading/>
      ) : (
        <ListWrapper>
          {events.map(({ id, title }, i) =>
            <DataList key={id} name={title} i={i}/>
          )}
        </ListWrapper>
      )}
    </>
  );
}

export default withFirebase(AddEvent);
