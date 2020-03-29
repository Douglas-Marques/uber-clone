import React from 'react';
import Map from './components/Map';

import { StatusBar } from 'react-native';

const src = () => (
  <>
    <StatusBar
      translucent
      barStyle="dark-content"
      backgroundColor="transparent"
    />
    <Map />
  </>
);

export default src;
