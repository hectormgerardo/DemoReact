import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const styles = {
    wrapper: {
        height: 400,
        width: '80%',
        margin: '0 auto',
        display: 'flex'
    },
    map: {
        flex: 1
    }
};

const Moves = props => {
    return ( <
        div style = { styles.wrapper } >
        <
        Map style = { styles.map }
        center = { props.center }
        zoom = { props.zoom } >
        <
        TileLayer url = { props.url }
        /> <
        /Map> <
        /div>
    );
}

Moves.defaultProps = {
    center: [30.523872138888887, -109.62057794444443],
    zoom: 10,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
};

export default Moves;