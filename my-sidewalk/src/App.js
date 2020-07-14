import React, { Component } from 'react';
import ReactMapboxGL, { Source, Layer } from '@urbica/react-map-gl';
import './App.css';
// import * as kcNeighborhoodData from './kc-neighborhoods.json';
// import * as kcTractsData from './kc-tracts.json';

/*
This approach came from reading:
-Dallas Bille's "Intro to React Mapbox GL JS" 
-Reading @urbica/react-map-gl documentation
*/

class App extends Component {
  state = {
    viewport: {
      longitude: -94.4156972687773,
      latitude: 39.0144797821839,
      zoom: 10,
      width: '80vw',
      height: '80vh',
    },
  };

  render() {
    return (
      <div>
        <ReactMapboxGL
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
          //would like to use a .env variable, but token not getting read from .env file
          accessToken={
            'pk.eyJ1IjoiYXRjdWxwZXBwZXIiLCJhIjoiY2tja29vdmpkMXZwZDJ5bWtrcHVtdDM2ZyJ9.l2ScIWaplavcSym2LB1kTQ.MBiX1AqA8l3BYe89MUKdFw'
          }
          mapStyle='mapbox://styles/atculpepper/ckckpreey54hr1iqknn1jr5iv'
          style={{ width: '100%', height: '400px' }}
        >
          <Source
            id='kcNeighborhoods'
            type='geojson'
            data={
              'https://raw.githubusercontent.com/mysidewalk/interview/master/frontend-engineer/kc-neighborhoods.json'
            }
          >
            <Layer
              id='layer1'
              type='fill'
              source='kcNeighborhoods'
              paint={{
                'fill-color': '#228b22',
                'fill-opacity': 0.4,
              }}
            />
          </Source>

          <Source
            id='kcTracts'
            type='geojson'
            data={
              'https://raw.githubusercontent.com/mysidewalk/interview/master/frontend-engineer/kc-neighborhoods.json'
            }
          >
            <Layer
              id='layer2'
              type='fill'
              source='kcTracts'
              paint={{
                'fill-color': '#9900ff',
                'fill-opacity': 0.4,
              }}
            />
          </Source>
        </ReactMapboxGL>
        <div className='title'>KC Commuter Data </div>
      </div>
    );
  }
}

export default App;
