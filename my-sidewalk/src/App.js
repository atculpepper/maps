import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';

function App() {
  const [viewport, setViewport] = useState({
    longitude: -94.4156972687773,
    latitude: 39.0144797821839,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        //would like to use a .env variable, but token not getting read from .env file
        mapboxApiAccessToken={
          'pk.eyJ1IjoiYXRjdWxwZXBwZXIiLCJhIjoiY2tja29vdmpkMXZwZDJ5bWtrcHVtdDM2ZyJ9.l2ScIWaplavcSym2LB1kTQ'
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
        mapStyle='mapbox://styles/atculpepper/ckckpreey54hr1iqknn1jr5iv'
      >
        markers here
      </ReactMapGL>
    </div>
  );
}

export default App;
