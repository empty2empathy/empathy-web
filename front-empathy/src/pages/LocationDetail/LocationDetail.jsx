import React, { useEffect, useState } from 'react';
import { withFirebase } from "redbricks-firebase";
import styled from "styled-components";
import CtaButton from "../../components/CtaButton";
import { shareLink } from "../../utils";
import { withRouter } from "react-router-dom";
import Map from "../../components/Map";

const HeroSection = styled.div`
  position: relative;
  height: 320px;
  overflow: hidden;
  
  img {
    width: 100%;
  }
`;

const Header = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  color: white;
  text-align: center;
`;

const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
    
  p {
    &:nth-child(1) {
      padding: 4px 6px;
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

const InfoSection = styled.ul`
  color: white;
  padding: 30px 20px 0 20px;
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

const LocationDetail = ({ firebase, match: { params: { locationId } } }) => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    firebase.loadLocationWithPath(`location/${locationId}`).then((res) => {
      setLocation(res);
    });
  }, [])

  return (
    <>
      <HeroSection>
        <img src={location.img}/>
        <Header>
          <button>back</button>
          <p>locaion.name</p>
        </Header>
        <Info>
          <p>{location.name}</p>
          <p>{location.name}</p>
        </Info>
      </HeroSection>

      <InfoSection>
        <li>
          <span>Adress</span>
          <span>location.adress</span>
        </li>
        <li>
          <span>ProgrammeType</span>
          <span>location.programmeType</span>
        </li>
        <li>
          <span>Location Fee</span>
          <span>location.fee</span>
        </li>
        <li>
          <span>Opening Hour</span>
          <span>location.openHour</span>
        </li>
        <li>
          <span>Istagram</span>
          <span>location.instaId</span>
        </li>
      </InfoSection>

      {/*<div className="cta-button">*/}
      {/*  <CtaButton label={`${title}`} onClick={() => shareLink(title, description)}/>*/}
      {/*</div>*/}

      <DescriptionSection>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make
          a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions
          of Lorem Ipsum.
        </p>
      </DescriptionSection>

      <MapSection>
        <Map width='540px' height='270px' latitude={37.7577} longitude={-122.4376} zoom={8}/>
      </MapSection>

      <div>
        EVENTS LIST
      </div>
    </>
  );
}

export default withRouter(withFirebase(LocationDetail));
