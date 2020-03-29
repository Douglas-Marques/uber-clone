import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyD4DXEXt1WFlKmqWIcTJC1b90_Uv0Ww3Ts"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
