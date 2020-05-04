import React, { useEffect, useState } from 'react';
import { withFirebase } from "../../../redbricks-firebase";
import Loading from "./Loading";
import AddEventModal from 'pages/AddData/_components/AddEventModal/AddEventModal';
import { AddBtn, AddBtnWrapper, ListWrapper } from "./_StyledComponents";
import styled from 'styled-components';
import XSquare from "../../../assets/svg/XSquare";

const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  margin: 0 0 16px;
  box-shadow: 0 1px 0 0 #1a1a1a;
  color: #424042;
  font-size: 15px;
  font-weight: 500;
  
  span {
    margin: 0 8px 0 0;

    &:nth-child(1) {
      flex: 0.2;
    }
    &:nth-child(2) {
      flex: 2;
    }
    &:nth-child(3) {
      flex: 1;
    }
    &:last-child {
      width: 42px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
  }
`;

const EventItem = ({ index, title, locationId }) => {
  return (
    <EventWrapper>
      <span>{index + 1}</span>
      <span>{title}</span>
      <span>{locationId}</span>
      <span>
        <XSquare/>
      </span>
    </EventWrapper>
  )
};

const AddEvent = ({ firebase }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const events = await firebase.loadEvents();
      setEvents(events);
      setIsLoading(false);
    };
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
          {events.map(({ id, title, location }, index) =>
            <EventItem key={id} index={index} title={title} locationId={location.id}/>
          )}
        </ListWrapper>
      )}
    </>
  );
};

export default withFirebase(AddEvent);
