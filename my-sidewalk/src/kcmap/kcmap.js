import React, { Component } from 'react';
import { render } from 'react-dom';
import MapGL, { Source, Layer } from 'react-map-gl';

export default class App extends Component {
    constructor (props) {
        super (props)
        this.state = {
            area: 2923431,
            drive_alone: 910.355008787346,
            drive_carpool: 71.6110134739309,
            public_transit: 0,
            walk: 0,
            hoveredFeature: null,
            longitude: -94.4156972687773,
            latitude: 39.0144797821839,
            zoom: 10,
            width: '100vw',
            height: '100vh',
        }
    }
}

componentDidMount() {
    fetch('../kc-neighborhoods.json').then((res) => {
        return res.json();
    }) .then ((result) => {
        this._loadData(result);
    })
}