import React, { useEffect, useState, useCallback } from 'react';
import { withFirebase } from 'redbricks-firebase';
import styled from 'styled-components';
import { mapEvents, shareLink } from '../../utils';
import { withRouter } from 'react-router-dom';
import Map from '../../components/Map';
import GroupPerDay from '../../components/GroupPerDay';
import ChevronLeft from '../../assets/svg/chevronLeft';
import CtaButton from '../../components/CtaButton';
import CircleItemSlider from '../../components/CircleItemSlider';
import Loading from '../AddData/_components/Loading';

const fetchData = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getLocationId = (locationId) => {
  return fetchData(`http://localhost:5000/locationDetail/${locationId}`);
};

const HeroSection = styled.div`
  background-color: #404040;
  position: relative;
  height: 320px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const LocationSlick = styled.div`
  padding: 60px 20px 0;
  background: black;
`;

const Header = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  top: 0;
  color: white;
  text-align: center;

  > p {
    flex: 1;
    color: #fcfcfc;
    font-size: 16px;
  }
`;

const Info = styled.div`
  position: absolute;
  left: 20px;
  bottom: 16px;
  color: white;
  text-align: center;

  p {
    &:nth-child(1) {
      padding: 4px 6px;
      margin-bottom: 8px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #000000;
      font-size: 14px;
      font-weight: 700;
      text-shadow: 1px -1px 0px #fcfcfc;
    }

    &:nth-child(2) {
      color: #fcfcfc;
      font-size: 36px;
      font-weight: 600;
      text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.75);
    }
  }
`;

const InfoSection = styled.div`
  padding: 30px 20px 0 20px;

  > div {
    padding-bottom: 8px;
    font-size: 14px;
    font-weight: 500;

    span:first-child {
      padding-right: 8px;
      color: rgba(252, 252, 252, 0.9);
    }

    span:nth-child(2) {
    }
    color: rgba(252, 252, 252, 0.45);
  }
`;

const CtaButtonContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  padding: 44px 20px 0 20px;
  background: black;
  align-items: center;
  z-index: 3;
`;

const DescriptionSection = styled.div`
  padding: 60px 20px 0 20px;

  > p {
    color: rgba(252, 252, 252, 0.6);
  }
`;

const MapSection = styled.div`
  padding: 30px 20px 0 20px;
`;

const EventGroup = styled.div`
  display: flex;

  .event-list-container {
    padding: 44px 10px 30px;
    background: black;
  }
`;

const LocationDetail = ({
  firebase,
  match: {
    params: { locationId }
  }
}) => {
  const [location, setLocation] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const setLocationDetail = useCallback(async () => {
    const response = await fetch(`http://localhost:5000/locationDetail/${locationId}`);
    const initialData = await response.json();
    setLocation(initialData);
    setLoading(false);
  }, [locationId]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await firebase.loadEvents();
      const parsedEvents$ = events.map(async (event) => {
        const location = await firebase.loadLocationWithPath(event.location.path);
        const artists$ = event.artists.map(({ path }) => firebase.loadArtistWithPath(path));
        const artists = await Promise.all(artists$);
        return { ...event, location, artists };
      });
      const parsedEvents = await Promise.all(parsedEvents$);
      setEvents(mapEvents(parsedEvents));
    };
    fetchData();
  }, [firebase]);

  useEffect(() => {
    setLocationDetail();
  }, [setLocationDetail]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection>
            <img alt="" src={location.image} />
            <Header>
              <ChevronLeft />
              <p>{location.name}</p>
            </Header>
            <Info>
              <p>{location.name}</p>
              <p>{location.name}</p>
            </Info>
          </HeroSection>

          <LocationSlick>
            <CircleItemSlider slickItems={location.artists} />
          </LocationSlick>

          <InfoSection>
            <div>
              <span>Address</span>
              <span>{location.address}</span>
            </div>
            <div>
              <span>ProgrammeType</span>
              <span>{location.programmeType}</span>
            </div>
            <div>
              <span>Location Fee</span>
              <span>{location.fee}</span>
            </div>
            <div>
              <span>Opening Hour</span>
              <span>{location.openHour}</span>
            </div>
            <div>
              <span>Istagram</span>
              <span>{location.instaId}</span>
            </div>
          </InfoSection>

          <CtaButtonContainer>
            <CtaButton label={`locationDetail`} onClick={() => shareLink(`locationDetail`, `locationDetail`)} />
          </CtaButtonContainer>

          <DescriptionSection>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </DescriptionSection>

          <MapSection>
            <Map width="100%" height="270px" latitude={37.7577} longitude={-122.4376} zoom={8} />
          </MapSection>

          <div>
            <EventGroup>
              <div className="event-list-container">
                {events.map((event) => (
                  <GroupPerDay key={event.date} {...event} />
                ))}
              </div>
            </EventGroup>
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(withFirebase(LocationDetail));
