import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, GeoJSONLayer, Source, Layer } from 'react-map-gl';
// import { StaticMap } from 'react-map-gl';
import './App.css';
import * as kcNeighborhoodData from './kc-neighborhoods.json';
import * as kcTractsData from './kc-tracts.json';
// import DeckGL from '@deck.gl/react';
// import { GeoJsonLayer } from '@deck.gl/layers';

function App() {
  const [viewport, setViewport] = useState({
    longitude: -94.4156972687773,
    latitude: 39.0144797821839,
    zoom: 10,
    width: '100vw',
    height: '100vh',
  });

  // map.addSource('neighborhoodData', {
  //   type: 'geojson',
  //   data: './kc-neighborhoods.json',
  // });

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
        {kcNeighborhoodData.features.map((feature) => (
          <Source
            key={feature.id}
            id={feature.id}
            type='geojson'
            data={feature.data}
          >
            <Layer
              key={feature.id}
              id={feature.id}
              type='fill'
              paint={feature.paint}
            />
          </Source>
        ))}
      </ReactMapGL>
      <div>KC Commuter Data </div>
    </div>
  );
}

export default App;
