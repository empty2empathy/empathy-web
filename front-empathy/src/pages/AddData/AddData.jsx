import React, { useEffect } from 'react';
import './AddData.scss';
import { withFirebase } from "redbricks-firebase";
import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

const AddData = ({ firebase, route }) => {
  useEffect(() => {
    firebase.loadArtists();
    firebase.loadLocations();
    firebase.loadLocationWithPath('location/boogiewoogieseoul');
    firebase.loadEventsByLocation('soap_seoul');
  }, [firebase]);

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
