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
      <ReactMapGL {...viewport}>markers here</ReactMapGL>
    </div>
  );
}

export default App;
