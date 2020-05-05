import React, { useState, useEffect } from 'react';
import './AddData.scss';
import { withFirebase } from "redbricks-firebase";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

const AddData = ({ firebase, route }) => {
  // artist state
  const [artistDocId, setArtistDocId] = useState('');
  const [artistBio, setArtistBio] = useState('');
  const [artistImg, setArtistImg] = useState('');
  const [artistInstaId, setArtistInstaId] = useState('');
  const [artistName, setArtistName] = useState('');
  const [artistProgramType, setArtistProgramType] = useState('');

  // location state
  const [locationDocId, setLocationDocId] = useState('');
  const [locationDescription, setLocationDescription] = useState('');
  const [locationImg, setLocationImg] = useState('');
  const [locationInstaId, setLocationInstaId] = useState('');
  const [locationMapLink, setLocationMapLink] = useState('');
  const [locationName, setLocationName] = useState('');
  const [locationProgramType, setLocationProgramType] = useState('');

  // event state
  const [eventArtists, setEventArtists] = useState('');
  const [eventTime, setEventTime] = useState({ start: '', end: '' });
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventProgramType, setEventProgramType] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [eventYoutubeVideoId, setEventYoutubeVideoId] = useState('');

  useEffect(() => {
    firebase.loadArtists();
    firebase.loadLocations();
    firebase.loadLocationWithPath('location/boogiewoogieseoul');
    firebase.loadEventsByLocation('soap_seoul');
  }, [firebase]);

  const handleEventSubmit = ev => {
    firebase.setEvent({
      eventArtists: eventArtists.split(','),
      eventTime,
      eventDescription,
      eventLocation,
      eventProgramType: eventProgramType.split(','),
      eventTitle,
      eventYoutubeVideoId,
    }).then(isSuccess => {
      if (isSuccess) {
        setEventArtists('');
        setEventTime({ start: '', end: '' });
        setEventDescription('');
        setEventLocation('');
        setEventProgramType('');
        setEventTitle('');
        setEventYoutubeVideoId('');
      }
    });
    ev.preventDefault();
  };

  return (
    <>
      <div className="navTabContainer">
        <NavLink className="navTab" activeClassName="active" to="/add-data/artist">Artist</NavLink>
        <NavLink className="navTab" activeClassName="active" to="/add-data/location">Location</NavLink>
        <NavLink className="navTab" activeClassName="active" to="/add-data/event">Event</NavLink>
      </div>
      {renderRoutes(route.routes)}
    </>
  );
};

export default withFirebase(AddData);
