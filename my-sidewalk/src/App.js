import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { StaticMap } from 'react-map-gl';
import './App.css';
// import * as kcNeighborhoodData from './kc-neighborhoods.json';
// import * as kcTractsData from './kc-tracts.json';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';

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
      ></ReactMapGL>
    </div>
  );
}

export default App;
