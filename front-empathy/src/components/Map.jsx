import React, { useState } from "react";
import ReactMapGL from 'react-map-gl';

const Map = ({ width, height, latitude, longitude, zoom }) => {
  const [viewport, setViewport] = useState({
    latitude,
    longitude,
    width,
    height,
    zoom,
  })
  const MAP_TOKEN = 'pk.eyJ1IjoianVjaGFuaHdhbmciLCJhIjoiY2thODZ3MnU2MGNmbjJ6bXJwa3JvOG8zZCJ9.punFe1JEdyO88zHmKXyjjg'

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
      mapboxApiAccessToken={MAP_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    />
  )
}

export default Map;
