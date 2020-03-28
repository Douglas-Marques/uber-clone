import React, { Component } from 'react';
import MapView from 'react-native-maps';

import Search from '../Search'

import { View, PermissionsAndroid } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

export default class Map extends Component {
  state = {
    region: null
  }

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({ region: { latitude, longitude, latitudeDelta: 0.0143, longitudeDelta: 0.0134 } })
      },
      () => { }
    )
  }

  render() {
    const { region } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          onMapReady={() => {
            if (!PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
              PermissionsAndroid.request();
            }
          }}
          style={{ flex: 1 }}
          region={region}
          showsUserLocation
          loadingEnabled
        />
        <Search />
      </View>
    );
  }
};
